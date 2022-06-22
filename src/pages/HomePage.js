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
        </div>
    )
}

export default HomePage;