import React, { useEffect } from "react";
import styled from 'styled-components';

const Button = styled.button`
    color: ${props => console.log(props.theme)};
`;

const Home = props => {

    return (
        <Button>Click</Button>
    );
}

export default Home;