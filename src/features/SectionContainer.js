import React from "react"
import styled from "styled-components";
import { colors } from "../constants/colors";

const MainContainer = styled.div`
    padding: 30px 100px;
    background-color: ${colors.primary};
    min-height: 100vh;
`;

export const SectionContainer = ({children}) => {
    return(
        <MainContainer>
            {children}
        </MainContainer>
    )
}