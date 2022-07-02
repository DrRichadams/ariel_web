import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { BG_DOTS } from "../../constants/DATA";

export const RightContainer = styled.div`
    /* background-color: red; */
    background: linear-gradient(60deg, rgba(255, 138, 0, 0.3), rgba(255,0,0,0.2));
    width: 100%;
    padding: 20px 100px;
    position: relative;
    overflow: hidden;
`;


export const ChildrenContainer = styled.div`
    position: relative;
    z-index: 1000;
`;
export const CircleOutlineContainer = styled.div`
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    gap: 5px;
`;

export const CircleOutline = styled.div`
    width: 1px;
    height: 100%;
    /* border: 2px solid ${colors.accent}; */
    background-color: ${colors.accent};
    opacity: .1;
`;

export const LinesContainer = styled.div`
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 1500px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    gap: 5px;
    transform: rotate(${props=>props.sign}45deg) translateY(-300px);
`;

let BG_ARRAY = new Array(180).fill(0)


const RightContainerComponent = ({children}) => {
    return(
        <RightContainer>
            <ChildrenContainer>{children}</ChildrenContainer>
            <CircleOutlineContainer>
                <LinesContainer sign="+">
                    {
                        BG_ARRAY.map((item, index) => (
                            <CircleOutline />
                        ))
                    }
                </LinesContainer>
                <LinesContainer sign="-">
                    {
                        BG_ARRAY.map((item, index) => (
                            <CircleOutline />
                        ))
                    }
                </LinesContainer>
            </CircleOutlineContainer>
        </RightContainer>
    )
}

export default RightContainerComponent;