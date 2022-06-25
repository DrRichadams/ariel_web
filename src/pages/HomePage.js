import React, { useState } from "react"
import styled from "styled-components";
import HomeMenu from "../components/HomeMenu";
import { SectionContainer } from "../features/SectionContainer";
import { colors } from "../constants/colors";
import { Title1, Title2, Text1 } from "../utils/Titles";
import { Img1 } from "../utils/Images";
import { 
    investment_strategies, 
    investment_packages, 
    qualities
} from "../constants/DATA";

const HomePage = () => {
    return(
        <div className="home_page_">
            <SectionContainer bg_color={colors.primary}>
                <HomeMenu />
                {/* <div className="home_banner"> */}
                <HomeBanner>
                    <div className="left_sect">
                        <Title2 color={colors.secondary}>Ariel Crypto Management</Title2>
                        <Title1 color={colors.accent}>Your #1 investment platform</Title1>
                        <Text1 color={colors.secondary}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        tempor incididunt ut labore et dolore magna aliqua 
                        Ut enim ad minim veniam,
                        </Text1>
                    </div>
                    <div className="right_sect">
                        <Img1 src={process.env.PUBLIC_URL + "/images/banner_pic.png"} alt="" />
                    </div>
                </HomeBanner>
            </SectionContainer>
            <SectionContainer bg_color={colors.secondary}>
                <h3>KNOW MORE ABOUT US</h3>
                <h3>WE ARE AN AMAZING TEAM WITH YOUR INTERESTS AT HEART</h3>
                <About_sect className="about_box">
                    <div className="left_about">
                        <h3>About <span>Us</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className="right_about">
                        <Img1 src={process.env.PUBLIC_URL + "/images/right_about.png"} alt="" />
                    </div>
                </About_sect>
            </SectionContainer>
            <SectionContainer bg_color={colors.secondary}>
                <h3>WHAT WE STAND FOR.</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, animi autem voluptatum impedit eos explicabo corrupti dolorum molestias blanditiis qui ipsa aut unde fugit nihil, accusamus molestiae, fuga porro alias?</p>
                <div className="future_box_container">
                    <BoxContainer>
                        <h3>MISION</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, iusto! Ab saepe sunt nobis aliquam harum, ad, possimus, dolorum amet cupiditate quas at et laboriosam perspiciatis nostrum consectetur animi velit ipsam! Velit voluptates quis ipsum.</p>
                    </BoxContainer>
                    <BoxContainer>
                        <h3>VISION</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, iusto! Ab saepe sunt nobis aliquam harum, ad, possimus, dolorum amet cupiditate quas at et laboriosam perspiciatis nostrum consectetur animi velit ipsam! Velit voluptates quis ipsum.</p>
                    </BoxContainer>
                    <BoxContainer>
                        <h3>VALUES</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, iusto! Ab saepe sunt nobis aliquam harum, ad, possimus, dolorum amet cupiditate quas at et laboriosam perspiciatis nostrum consectetur animi velit ipsam! Velit voluptates quis ipsum.</p>
                    </BoxContainer>
                </div>
            </SectionContainer>
            <SectionContainer bg_color={colors.bg_color}>
                <CustomeTitle color={colors.accent} b_color="black">OUR SERVICES</CustomeTitle>
                <InnerServiceContainer>
                    <Img1 src={process.env.PUBLIC_URL + "/images/affiliates_pic.png"} alt="" className="left_service service_pic" />
                    <div className="right_service service_box">
                        <h1 className="service_title">Affiliate Marketing</h1>
                        <p className="service_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className="service_btn">Get Started</button>
                    </div>
                </InnerServiceContainer>
                <InnerServiceContainer>
                    <div className="left_service service_box">
                        <h1 className="service_title">Investment Management</h1>
                        <p className="service_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className="service_btn">Get Started</button>
                    </div>
                    <Img1 src={process.env.PUBLIC_URL + "/images/investment_img.png"} alt="" className="right_service service_pic" />
                </InnerServiceContainer>
            </SectionContainer>
            <SectionContainer bg_color={colors.primary}>
                <CustomeTitle color={colors.accent} b_color="#fff">Investment Strategy</CustomeTitle>
                <div className="investment_strategies">
                    { investment_strategies.map((item, index) => ( <StrategyBox pos={index + 5} key={item.id}> <StrategyTitle>{item.name}</StrategyTitle> </StrategyBox> )) }
                </div>
            </SectionContainer>
        </div>
    )
}

const StrategyBox = styled.div`
    position: relative;
    z-index: 100;
    padding-bottom: 15px;
    margin-bottom: 10px;
    ::after {
        content: '';
        position: absolute;
        z-index: -1;
        bottom: 0;
        left: 0;
        height: calc(${props => props.pos} * 3px);
        width: 100%;
        background-color: ${colors.accent};
    }
`

const StrategyTitle = styled.p`
    color: ${colors.secondary};
    font-family: roboto, sans-serif;
    text-transform: uppercase;
    /* text-align: right; */
`

const CustomeTitle = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-family: oswald;
    font-size: 60px;
    color: ${props => props.color};
    position: relative;
    padding-bottom: 20px;
    text-transform: uppercase;
    ::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: ${props => props.b_color};
    }

`;
const InnerServiceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HomeBanner = styled.div`
    display: flex;
    align-items: center;
    height: 80vh;
    /* background-color: red; */
    @media (max-width: 780px) {
        flex-direction: column;
    }
`;

const About_sect = styled.div`
    display: flex;
    align-items: flex-start;
    min-height: 80vh;
    /* background-color: red; */
    gap: 20px;
    @media (max-width: 780px) {
        flex-direction: column;
        align-items: flex-end;
    }
`;

const BoxContainer = styled.div`
    box-shadow: 12px 12px 30px rgba(255, 138, 0, 0.4),
                -12px -12px 30px rgba(255, 138, 0, 0.4);
    /* background-color: ${colors.bg_color}; */
    padding: 20px;
    max-width: 300px;
    /* min-width: 250px; */
    @media (max-width: 750px) {
        min-width: 250px;
        max-width: 150px;
    }
    @media (max-width: 700px) {
        max-width: 100%;
    }
`;

export default HomePage;