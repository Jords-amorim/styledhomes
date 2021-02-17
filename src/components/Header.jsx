import React from 'react';
import styled from 'styled-components'

const Nav = styled.header`
display: flex;
justify-content: flex-end;
align-items: center;
position: relative;
background-color: #9f9ee2;
width: 100%;
height: 80px;
`

const NavItem = styled.h1`
padding: 10px;
font-size: 1.8em;
`
const SubTitle = styled.p`
font-size: 1.2rem;
`


export default props => {
    return(
        <Nav className="d-none d-sm-flex">
            <NavItem><i className={`fa fa-${ props.icon}`}></i> {props.title}</NavItem>
            <NavItem>Sobre</NavItem>
            <NavItem>Contato</NavItem>
        </Nav>
    );
}
