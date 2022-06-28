import React from "react"
import styled from "styled-components";
import { Link } from "react-router-dom";

import { BsArrowLeft } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { BiLock } from "react-icons/bi";

import { colors } from "../constants/colors";
import { SectionContainer } from "../features/SectionContainer";

const Login = () => {
    return(
        <SectionContainer size={100} bg_color={colors.primary}>
            <TopBar className="top_bar">
                <BackLink to={"/"}> <BsArrowLeft size={25} /> </BackLink>
                <BackTitle>Ariel Crypto.</BackTitle>
            </TopBar>
            <AuthDetailsContainer>
                <AuthTitle>LOGIN</AuthTitle>
                <AuthDetailsBox>
                    <AuthInputBox className="usernameBox">
                        <BiUserCircle color={colors.accent} size={30} />
                        <AuthInput placeholder="Email" type={"text"} />
                    </AuthInputBox>
                    <AuthInputBox className="usernameBox">
                        <BiLock color={colors.accent} size={30} />
                        <AuthInput placeholder="Password" type={"password"} />
                    </AuthInputBox>
                </AuthDetailsBox>
            </AuthDetailsContainer>
        </SectionContainer>
    )
}

export const AuthInputBox = styled.div`
    background-color: #d9d9d9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding: 8px;
    width: 300px;
    border-radius: 6px;
    box-sizing: border-box;
`;

export const AuthInput = styled.input`
    /* width: 100%; */
    flex: 1;
    padding: 8px;
    border: none;
    outline: none;
    background-color: transparent;
    color: #01050f;
    font-family: Poppins, sans-serif;
    font-weight: 500;
`;

export const AuthDetailsBox = styled.div`
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AuthTitle = styled.h3`
    /* background-color: red; */
    padding: 25px;
    text-align: center;
    font-size: 30px;
    font-weight: 400;
    pointer-events: none;
`;

export const AuthDetailsContainer = styled.div`
    background-color: #fff;
    width: 450px;
    min-height: 70vh;
    margin: 30px auto;
    border-radius: 8px;
`;

export const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const BackLink = styled(Link)`
    color: #fff;
    transition: all 200ms ease-in-out;
    :hover {
        color: ${colors.accent}
    };
`;

export const BackTitle = styled.p`
    color: ${colors.accent};
    font-family: Inter, sans-serif;
    font-size: 25px;
    font-weight: 500;
    letter-spacing: 2px;
    /* background-color: red; */
    flex: 1;
    text-align: center;
    text-transform: uppercase;
    pointer-events: none;
`;

export default Login;