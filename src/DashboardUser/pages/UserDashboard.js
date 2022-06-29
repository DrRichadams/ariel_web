import React from "react";
import styled from "styled-components";

const UserDashboard = () => {
    return(
        <MainContainer className="main_container">
            <LeftContainer className="left_container">
                <LeftMenu className="left_menu">
                    LEFT MENU
                </LeftMenu>
            </LeftContainer>
            <RightContainer className="right_container">
                RIGHT CONTENT
            </RightContainer>
        </MainContainer>
    )
}

export const LeftMenu = styled.div`
    background-color: #d9d9d9;
    width: 300px;
    min-height: 100vh;
`;
export const RightContainer = styled.div`
    /* background-color: red; */
    width: 100%;
`;
export const LeftContainer = styled.div`

`;
export const MainContainer = styled.div`
    display: flex;
`;

export default UserDashboard;