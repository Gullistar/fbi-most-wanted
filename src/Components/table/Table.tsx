import React, { useState, useEffect } from "react";
import "./Table.css";
import { getWanted } from "../../api/endpoints/wanted/functions";
import {
  WantedResultSet,
  WantedPerson,
} from "../../api/endpoints/wanted/types";
import SearchBar from "../search-bar/SearchBar";
import Details from "../details/Details";
import placeholderImage from "../../thief-icon.jpg";

const Table: React.FC = () => {
  const [wantedData, setWantedData] = useState<WantedResultSet>();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [selectedItem, setSeletcedItem] = useState<WantedPerson | null>(null);
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

  const handelSelect = (item: WantedPerson) => {
    setSeletcedItem(item);
    console.log(item);
  };

  const onClose = () => {
    setSeletcedItem(null);
  };

  return (
    <>
      {selectedItem && <Details item={selectedItem} onClose={onClose} />}

      <div className="table-container">
        <div className="search-container">
          <SearchBar
            value={searchBarValue}
            placeholder="Search by name..."
            onChange={(e) => setSearchBarValue(e.target.value)}
          />
          <button
            className="search-button"
            onClick={handleSearch}
            aria-label="Search"
            tabIndex={0}
          >
            Search
          </button>
        </div>
        <table className="table-content">
          <thead>
            <tr className="top-table-item">
              <th scope="col" className="name-container">
                Name
              </th>
              <th scope="col" className="image-container">
                Image
              </th>
              <th scope="col" className="description-container">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {wantedData?.items.map((item) => (
              <tr
                key={item.uid}
                className="table-item"
                onClick={() => handelSelect(item)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handelSelect(item);
                  }
                }}
                role="button"
                aria-label={`View details for ${item.title}`}
              >
                <td className="name-container">{item.title}</td>
                <td className="image-container">
                  {item.images &&
                    item.images
                      .slice(0, 1)
                      .map((image, index) => (
                        <img
                          key={index}
                          src={image.thumb ?? placeholderImage}
                          alt={image.caption || "Wanted individual"}
                        />
                      ))}
                </td>
                <td className="description-container">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <nav className="pagination-container" aria-label="Pagination">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            tabIndex={0}
          >
            Previous
          </button>
          <span aria-live="polite">
            Page {currentPage} /{" "}
            {Math.ceil((wantedData?.total ?? 0) / pageSize)}
          </span>
          <button
            onClick={handleNextPage}
            disabled={!wantedData || wantedData.items.length < 2}
            tabIndex={0}
          >
            Next
          </button>
        </nav>
      </div>
    </>
  );
};

export default Table;
