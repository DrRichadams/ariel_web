import React from "react"
import styled from "styled-components";
import HomeMenu from "../components/HomeMenu";
import { SectionContainer } from "../features/SectionContainer";
import { colors } from "../constants/colors";

const HomePage = () => {
    return(
        <div className="home_page_">
            <SectionContainer bg_color={colors.primary}>
                <HomeMenu />
                <div className="home_banner">
                    <div className="left_sect">
                        <h1>Ariel Crypto Management</h1>
                        <h2>Your #1 investment platform</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        tempor incididunt ut labore et dolore magna aliqua 
                        Ut enim ad minim veniam,
                        </p>
                    </div>
                    <div className="right_sect">
                        <img src={process.env.PUBLIC_URL + "/images/banner_pic.png"} alt="" />
                    </div>
                </div>
            </SectionContainer>
            <SectionContainer bg_color={colors.secondary}>
                <h3>KNOW MORE ABOUT US</h3>
                <h3>WE ARE AN AMAZING TEAM WITH YOUR INTERESTS AT HEART</h3>
                <div className="about_box">
                    <div className="left_about">
                        <h3>About <span>Us</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className="right_about">
                        <img src={process.env.PUBLIC_URL + "/images/right_about.png"} alt="" />
                    </div>
                </div>
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
        </div>
    )
}

const BoxContainer = styled.div`
    box-shadow: 12px 12px 30px rgba(255, 138, 0, 0.4),
                -12px -12px 30px rgba(255, 138, 0, 0.4);
    /* background-color: ${colors.bg_color}; */
    padding: 20px;
`;

export default HomePage;