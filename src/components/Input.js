import React from 'react';
import styled from 'styled-components';

// import COLOR_PALETTE from '../constants/colors';

function Input({ type, placeHolder, onChange, width = 50, ...otherProps }) {
    return (
        <InputElement type={type} placeholder={placeHolder} style={{ width: `${width}%` }} onChange={onChange} {...otherProps}/>
    );
}

const InputElement = styled.input`
padding: 0.9em;
width: 40em;
border: 1px solid #DFE0EB;
margin-top: 6px;
background-color: #FCFDFE;
border-radius: 5px;
color: #adadb3;
margin-left: 10px;
`
export default Input;