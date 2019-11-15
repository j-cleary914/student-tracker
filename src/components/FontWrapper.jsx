import React from 'react';
import styled from 'styled-components';

const FontWrapper = ({font, children}) => {
    
    const Wrapper = styled.div`
        font-family: ${font}
    `
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default FontWrapper;