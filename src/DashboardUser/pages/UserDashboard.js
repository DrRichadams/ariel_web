import React from "react";
import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";

import { colors } from "../../constants/colors";
import { AiFillGold } from "react-icons/ai"
import { AiFillAppstore } from "react-icons/ai"
import { FaUserFriends } from "react-icons/fa"
import { MdHistory } from "react-icons/md"

import { 
    LeftMenu,
    RightContainer,
    LeftContainer,
    MainContainer
 } from "../features/UserDashStyledComponents";

const UserDashboard = () => {
    return(
        <MainContainer className="main_container">
            <LeftContainer className="left_container">
                <LeftMenu className="left_menu">
                    <UserProfileContainer className="user_profile_container">
                        <UserPicContainer className="left_user_profile_box">
                            <UserPic src={process.env.PUBLIC_URL + "images/user1.jpg"} alt="" />
                        </UserPicContainer>
                        <UserDetailsContainer className="right_user_profile_box">
                            <UserTitle>Alice Alexus</UserTitle>
                            <UserPlan>Premium member</UserPlan>
                        </UserDetailsContainer>
                    </UserProfileContainer>
                    <div className="left_menu_links_container">
                        <h3 className="menu_links_title">DASHBOARD</h3>
                        <div className="menu_boxes">
                            <NavLink to={"/"}>
                                <AiFillAppstore color="black" size={30} />
                                <p>INVESTMENT PLANS</p>
                            </NavLink>
                            <NavLink to={"/"}>
                                <MdHistory color="black" size={30} />
                                <p>WITHDRAWAL HISTORY</p>
                            </NavLink>
                            <NavLink to={"/"}>
                                <AiFillGold color="black" size={30} />
                                <p>EARNINGS</p>
                            </NavLink>
                            <NavLink to={"/"}>
                                <FaUserFriends color="black" size={30} />
                                <p>AFFILIATES</p>
                            </NavLink>
                        </div>
                    </div>
                </LeftMenu>
            </LeftContainer>
            <RightContainer className="right_container">
                <Outlet />
            </RightContainer>
        </MainContainer>
    )
}

export const MenuLink = styled(NavLink)`
    text-decoration: none;
`;

export const UserProfileContainer = styled.div`
    display: flex;
    align-items: center;
`;
export const UserDetailsContainer = styled.div`
    /* display: flex; */
`;
export const UserPlan = styled.p`
    margin: 0;
    color: #01050f;
    font-size: 15px;
`;
export const UserTitle = styled.h3`
    margin: 0;
    color: ${colors.primary};
    font-size: 17px;
`;
export const UserPicContainer = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;
`;
export const UserPic = styled.img`
    width: 100%;
`;

export default UserDashboard;