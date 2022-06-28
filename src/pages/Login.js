import React from "react"
import styled from "styled-components";
import { colors } from "../constants/colors";
import { SectionContainer } from "../features/SectionContainer";
import { FiArrowLeft } from "react-icons/fi"
import { BsArrowLeft } from "react-icons/bs"

const Login = () => {
    return(
        <SectionContainer size={100} bg_color={colors.primary}>
            <div className="top_bar">
                <BsArrowLeft color="#fff" size={30} />
            </div>
        </SectionContainer>
    )
}

export default Login;