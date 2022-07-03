import React from "react";
import styled from "styled-components";
import {colors} from "../../constants/colors"

const WithdrawalHistoryPage = () => {
    return(
        <HistoryContainer>
            <HistoryMainTitle>Your withdrawal history</HistoryMainTitle>
            <HistoryBtns>
                <HistoryBtn>Approved</HistoryBtn>
                <HistoryBtn>Pending</HistoryBtn>
                <HistoryBtn>Failed</HistoryBtn>
            </HistoryBtns>
        </HistoryContainer>
    )
}

export const HistoryContainer = styled.div`

`;
export const HistoryMainTitle = styled.h3`
    font-family: Oswald, sans-serif;
    text-transform: uppercase;
    font-size: 30px;
    /* color: #01050f90; */
    color: ${colors.accent};
    opacity: .7;
    text-align: center;
    margin: 20px 0 50px 0;
`;
export const HistoryBtns = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
`;
export const HistoryBtn = styled.button`
    text-decoration: none;
    border: 2px solid ${colors.accent};
    outline: none;
    padding: 8px 12px;
    width: 100%;
    font-family: Inter, sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    background-color: ${colors.accent};
    color: #f5f5f5;
`;

export default WithdrawalHistoryPage