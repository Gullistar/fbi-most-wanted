import { SearchBarProps } from "./types";
import "./SearchBar.css";
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
