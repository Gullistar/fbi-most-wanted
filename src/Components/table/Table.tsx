import React, { useState, useEffect } from "react";
import "./Table.css";
import { getWanted } from "../../api/endpoints/wanted/functions";
import { WantedResultSet } from "../../api/endpoints/wanted/types";
import SearchBar from "../search-bar/SearchBar";

const Table: React.FC = () => {
  const [wantedData, setWantedData] = useState<WantedResultSet>();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchBarValue, setSearchBarValue] = useState("");
  const pageSize = 10;

  const fetchData = async () => {
    try {
      const retrievedData = await getWanted({
        page: currentPage,
        pageSize,
        title: searchBarValue,
      });
      setWantedData(retrievedData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleSearch = () => {
    setCurrentPage(1);
    fetchData();
  };

  return (
    <div className="table-container">
      <div className="search-container">
        <SearchBar
          value={searchBarValue}
          placeholder="Search by name..."
          onChange={(e) => setSearchBarValue(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <table className="table-content">
        <thead>
          <tr className="top-table-item">
            <th className="name-container">Name</th>
            <th className="image-container">Image</th>
            <th className="description-container">Description</th>
          </tr>
        </thead>
        <tbody>
          {wantedData?.items.map((item) => (
            <tr key={item.uid} className="table-item">
              <td className="name-container">{item.title}</td>
              <td className="image-container">
                {item.images &&
                  item.images.map((image, index) => (
                    <img
                      key={index}
                      src={image.thumb ?? ""}
                      alt={image.caption || "Wanted individual"}
                    />
                  ))}
              </td>
              <td className="description-container">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-container">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage}/{wantedData?.total ?? 0 / pageSize}
        </span>
        <button
          onClick={handleNextPage}
          disabled={!wantedData || wantedData.items.length < 2}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
