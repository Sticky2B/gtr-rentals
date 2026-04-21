import React, { useState, type FormEvent } from 'react';
// import { useNavigate, useSearchParams } from 'react-router';
import { SearchNormal1, Setting4 } from 'iconsax-reactjs';

interface SearchProps {
  placeholder?: string;
}

const Search: React.FC<SearchProps> = ({ placeholder = 'Search for cars' }) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const navigate = useNavigate();
  // const [searchQuery, setSearchQuery] = useState<string>(searchParams.get("q") || "");

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // setSearchParams({ q: searchQuery });
    // navigate(`/rezultati-pretrage?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="ml-16 w-123 max-w-1/2">
      <form className="relative flex items-center" onSubmit={handleFormSubmit}>
        <button className="group absolute top-0 left-2.5 p-2.5" type="submit">
          <SearchNormal1
            className="transition-all group-hover:brightness-50"
            color="var(--color-secondary-400)"
            size={24}
          />
        </button>
        <input
          className="text-secondary-400 placeholder:text-secondary-400 hover:border-secondary-400 focus:border-secondary-400 h-11 w-full rounded-4xl border border-[#c3d4e9] pr-12 pl-16 text-sm transition-all outline-none hover:shadow-sm focus:shadow-sm"
          type="text"
          name="search"
          // value={searchQuery}
          // onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          placeholder={placeholder}
        />
        <button className="group absolute top-0 right-2.5 p-2.5" type="button">
          <Setting4 className="transition-all group-hover:brightness-50" color="var(--color-secondary-400)" size={24} />
        </button>
      </form>
    </div>
  );
};

export default Search;
