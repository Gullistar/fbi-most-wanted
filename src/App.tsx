import React, { useState, useEffect } from "react";
import "./App.css";

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

  return (
    <div className="home-page">
      <h1 className="header">FBI Most Wanted List</h1>
      <table className="table-container">
        <thead>
          <tr className="top-table-item">
            <th className="name-container">Name</th>
            <th className="image-container">Image</th>
            <th className="description-container">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.uid} className="table-item">
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
