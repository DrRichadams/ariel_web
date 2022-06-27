import React from "react"
import styled from "styled-components";
import { colors } from "../constants/colors";

const MainContainer = styled.div`
    padding: 30px 200px;
    /* background-color: ${colors.primary}; */
    background-color: ${props => props.color};
    min-height: 100vh;
    position: relative;
    @media (max-width: 1050px) {
        padding: 30px 100px;
    }
    @media (max-width: 930px) {
        padding: 30px 50px;
    }
`;

export const SectionContainer = ({children, bg_color}) => {
    return(
        <MainContainer color={bg_color}>
            {children}
        </MainContainer>
    )
}