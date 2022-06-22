import React from "react"
import styled from "styled-components";
import { colors } from "../constants/colors";

const MainContainer = styled.div`
    padding: 30px 150px;
    /* background-color: ${colors.primary}; */
    background-color: ${props => props.color};
    min-height: 100vh;
`;

export const SectionContainer = ({children, bg_color}) => {
    return(
        <MainContainer color={bg_color}>
            {children}
        </MainContainer>
    )
}