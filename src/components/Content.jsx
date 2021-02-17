import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Content = styled.main`
`

export default props => {
    return(
        <React.Fragment>
            <Header {...props}></Header>
            <Content>Conteúdo </Content>
        </React.Fragment>
    )

}
