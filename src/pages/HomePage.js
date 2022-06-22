import React from "react"
import styled from "styled-components";
import HomeMenu from "../components/HomeMenu";
import { SectionContainer } from "../features/SectionContainer";

const HomePage = () => {
    return(
        <SectionContainer>
            <HomeMenu />
            <div>HOME PAGE</div>
        </SectionContainer>
    )
}

export default HomePage;