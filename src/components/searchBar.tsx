'use client';
import React, { useState } from 'react'
import SearchManufacturer from './searchManufacturer';

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const handleSearch = () => { }
    return (
        <form onSubmit={handleSearch} className='' >
            <div className="searchbar-item flex-1 max-sm:w-full flex justify-start items-center relative">
                <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
                <input type="submit" value="Search" />
                <input type="reset" value="Reset" />
                <input type="button" value="Clear" />
                <input type="text" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
            </div>
        </form>
    )
}

export default SearchBar