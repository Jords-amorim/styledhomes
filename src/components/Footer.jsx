import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
bottom:0;
background-color: #e9e9f5;
width: 100%;
height: 80px;
`
const FooterItems = styled.span`
font-size: 1.2em;
color: #191857;
`

export default props =>{
    return(
        <Footer>
            <FooterItems>Desenvolvido com <i className="fa fa-heart"></i> Jords Amorim</FooterItems>
           {/* adicionando cor ao coração */}
            {/* <FooterItems>Desenvolvido com <i className="fa fa-heart text-danger"></i> Jords Amorim</FooterItems> */}
        </Footer>

    )
}

