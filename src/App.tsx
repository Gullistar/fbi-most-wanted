import React, { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import SearchBar from "./Components/search-bar/SearchBar";
import Details from "./Components/details/Details";
import Table from "./Components/table/Table";

export interface ApiItem {
  uid: string;
  title: string;
  description: string;
  ailiases: string;
  dates_of_birth_used: Array<{
    date: string;
    year: string;
  }>;
  nationality: string;
  reward_text: string;
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="home-page">
      <h1 className="header">FBI Most Wanted List</h1>

      {isModalOpen && selectedItem && (
        <Details
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          item={selectedItem}
        />
      )}
      <Table />
    </div>
  );
};

export default App;
