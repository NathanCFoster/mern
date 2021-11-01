import React from "react";
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations'

const bouncy = keyframes`${bounce}`;

const theBounce = styled.div`animation: 1s ${bouncy};`;

const tab = props => {
    const bounceThat = (e) => {
        e.style={theBounce};
    }

    return(
        <li className="nav-item">
            <a onClick={ bounceThat } className="nav-link">{props.content}</a>
        </li>
    );
}

export default tab;