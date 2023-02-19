import { useState } from "react";
import { SearchBarProps } from "./interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSpinner,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState<any[]>([]); // Change the type of this state as needed
  const [isLoading, setIsLoading] = useState(false);

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && value.length > 3) {
      setIsLoading(true);
      const searchResults = await search(value);
      setIsLoading(false);
    }
  };

  const search = async (value: string) => {};

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4">
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
        {isLoading ? (
          <FontAwesomeIcon icon={faSpinner} spin />
        ) : (
          <FontAwesomeIcon icon={faFilter} />
        )}
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Digital Marketing Intern"
        className="w-full px-10 py-2 rounded-3xl border border-gray-300 focus:outline-none"
      />
      {results.length > 0 && (
        <div className="absolute w-full mt-1 bg-white rounded-md shadow-lg z-10"></div>
      )}
    </div>
  );
};

export default SearchBar;
