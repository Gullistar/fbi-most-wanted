import { ChangeEvent } from "react";

interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchBar = ({ value, onChange, placeholder }: SearchBarProps) => {
  return (
    <input
      className="search-bar"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    ></input>
  );
};

export default SearchBar;
