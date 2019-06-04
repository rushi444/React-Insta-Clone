import React from 'react';
import './SearchBar.css';
import { IoLogoInstagram, IoIosHeartEmpty } from 'react-icons/io';
import { FiCompass, FiUser } from 'react-icons/fi';

const SearchBar = ({ handleSearch, search }) => {
    return (
        <header className="header">
            <nav>
                <div className="logoContainer">
                    <div className="logoIcon">
                        <IoLogoInstagram />
                    </div>
                    <h3 className="logoText">
                        instagram
                </h3>
                </div>
                <input 
                className="search" 
                placeholder="Search" 
                value={search} 
                onChange={handleSearch} />
                <div className="iconContainer">
                    <div><FiCompass /></div>
                    <div><IoIosHeartEmpty /></div>
                    <div><FiUser /></div>
                </div>
            </nav>

        </header>
    )
}

export default SearchBar;