import React, { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";

interface ApiItem {
  uid: string;
  title: string;
  description: string;
  images: Array<{
    original: string;
    large: string;
    caption: string | null;
    thumb: string;
  }>;
}

interface ApiResponse {
  total: number;
  items: ApiItem[];
  page: number;
}

const App: React.FC = () => {
  const [data, setData] = useState<ApiItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<"none" | "asc" | "desc">("none");
  const [selectedItem, setSelectedItem] = useState<ApiItem | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.fbi.gov/wanted/list");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result: ApiResponse = await response.json();
        setData(result.items);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const toggleFilter = () => {
    setFilter((prev) =>
      prev === "none" ? "asc" : prev === "asc" ? "desc" : "none"
    );
  };

  const filteredData = [...data]
    .filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (filter === "asc") return a.title.localeCompare(b.title);
      if (filter === "desc") return b.title.localeCompare(a.title);
      return 0;
    });

  return (
    <div className="home-page">
      <h1 className="header">FBI Most Wanted List</h1>
      <div className="search-container">
        <h3>Search</h3>
        <SearchBar
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          placeholder="Search..."
        ></SearchBar>
      </div>
      <table className="table-container">
        <thead>
          <tr className="top-table-item">
            <th className="name-container">
              Name{" "}
              <button onClick={toggleFilter} className="filter-button">
                {filter === "none"
                  ? "Sort"
                  : filter === "asc"
                  ? "A → Z"
                  : "Z → A"}
                <label htmlFor="filter button"></label>
              </button>
            </th>
            <th className="image-container">Image</th>
            <th className="description-container">Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr
              key={item.uid}
              className="table-item"
              onClick={() => setSelectedItem(item)}
            >
              <td className="name-container">{item.title}</td>
              <td className="image-container">
                {item.images.map((image, index) => (
                  <img
                    key={index}
                    src={image.thumb}
                    alt={image.caption || "Wanted individual"}
                  />
                ))}
              </td>
              <td className="description-container">
                {item.description.length > 300
                  ? item.description
                  : item.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
