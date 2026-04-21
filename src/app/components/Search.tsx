import React, { useState, type FormEvent } from 'react'
// import { useNavigate, useSearchParams } from 'react-router';
import { SearchNormal1, Setting4 } from "iconsax-reactjs";

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
		<div className="w-123 max-w-1/2 ml-16">
			<form className="flex items-center relative" onSubmit={handleFormSubmit}>
				<button className="absolute top-0 left-2.5 p-2.5 group" type="submit">
					<SearchNormal1 className="transition-all group-hover:brightness-50" color="var(--color-secondary-400)" size={24} />
				</button>
				<input
					className="w-full border border-[#c3d4e9] transition-all rounded-4xl pl-16 pr-12 h-11 text-sm text-secondary-400 placeholder:text-secondary-400 outline-none hover:border-secondary-400 hover:shadow-sm focus:border-secondary-400 focus:shadow-sm"
					type="text"
					name="search"
					// value={searchQuery}
					// onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
					placeholder={placeholder}
				/>
				<button className="absolute top-0 right-2.5 p-2.5 group" type="button">
					<Setting4 className="transition-all group-hover:brightness-50" color="var(--color-secondary-400)" size={24} />
				</button>
			</form>
		</div>
	)
};

export default Search;
