import React, { useEffect, useState } from "react";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-5 flex items-center bg-boxBrown rounded-md">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-md bg-boxBrown w-full focus:outline-none"
          value={searchTerm}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-textRed text-white rounded-r-md focus:outline-none"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
