import React from 'react';
import styled from 'styled-components';
import './SearchBar.css';
import { IoLogoInstagram, IoIosHeartEmpty } from 'react-icons/io';
import { FiCompass, FiUser } from 'react-icons/fi';



const Header = styled.header`
height: 5rem;
    border-bottom: 1px solid lightgray;
`;

const Nav = styled.nav `
display: flex;
    justify-content: space-between;
    align-items: center;
    vertical-align: middle;
    margin: 0 auto;
    width: 80%;
`; 

const LogoContainer = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    height: 3rem;
    padding: 1rem;
`; 

const LogoIcon = styled.div`
font-family: 'Lobster', cursive;
font-size: 2rem;
border-left: 1px solid black;
padding: 0 0 0 1rem;
`; 

const LogoText = styled.h3`
font-family: 'Lobster', cursive;
    font-size: 2rem;
    border-left: 1px solid black;
    padding: 0 0 0 1rem;
`
const Input = styled.input`
height: 1.5rem;
    width: 12rem;
    margin: 0 auto;
`; 
const IconContainer = styled.div`
display: flex;
    justify-content: space-around;
    align-items: center;
    vertical-align: middle;
    height: 5rem;
    align-items: center;
    padding: 0 5rem 0 0;
    width: 2rem;
    font-size: 1.5rem;
`; 
const SearchBar = ({ handleSearch, search }) => {
    return (
        <Header>
            <Nav>
                <LogoContainer>
                    <LogoIcon>
                        <IoLogoInstagram />
                    </LogoIcon>
                    <LogoText>
                        instagram
                </LogoText>
                </LogoContainer>
                <Input
                    placeholder="Search"
                    value={search}
                    onChange={handleSearch} />
                <IconContainer>
                    <div><FiCompass /></div>
                    <div><IoIosHeartEmpty /></div>
                    <div><FiUser /></div>
                </IconContainer>
            </Nav>

        </Header>
    )
}

export default SearchBar;