import React from 'react';
import styled from 'styled-components';

import COLOR_PALETTE from '../constants/colors';

function Button({ onClick, text, width = 50, background = COLOR_PALETTE.PRIMARY, border = 'none', ...otherProps }) {
    return (
        <ButtonElement onClick={onClick} style={{ width: `${width}%`, background, border }} {...otherProps}>{text}</ButtonElement>
    );
}
const ButtonElement = styled.button`
color: ${COLOR_PALETTE.WHITE};
background-color: #F7941D;
padding: 1.3em 0.9em;
width: 41.8em;
border: none;
margin-top: 2em;
border-radius: 5px;
font-weight:bold;
cursor: pointer;
`;

export default Button;
