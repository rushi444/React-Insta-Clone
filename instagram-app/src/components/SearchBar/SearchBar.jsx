import React from 'react';
import './SearchBar.css';
import { IoLogoInstagram, IoIosHeartEmpty } from 'react-icons/io';
import { FiCompass, FiUser } from 'react-icons/fi';

const SearchBar = (props) => {
    return (
        <header classname='header'>
            <nav>
                <div classname='logoContainer'>
                    <div className='logo'>
                        <IoLogoInstagram />
                    </div>
                    <h3 className='logotext'>instagram</h3>
                </div>
                <input className='search' placeholder='search' />
                <div className='iconContainer'>
                    <div><FiCompass /></div>
                    <div><IoIosHeartEmpty /></div>
                    <div><FiUser /></div>
                </div>
            </nav>
        </header>
    )
}

export default SearchBar; 