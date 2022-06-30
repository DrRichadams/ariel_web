import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { BG_DOTS } from "../../constants/DATA";

export const RightContainer = styled.div`
    /* background-color: red; */
    width: 100%;
    padding: 20px 100px;
    position: relative;
`;

export const Dot = styled.div`
    /* width: 15px;
    height: 15px; */
    width: ${props=> props.bit}px;
    height: ${props=> props.bit}px;
    background-color: ${colors.accent};
    /* border-radius: 50%; */
    transform: rotate(45deg);
    opacity: .1;
`;

export const DotsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    /* background-color: blue; */
`;

export const DotsShell = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
`;
export const ChildrenContainer = styled.div`
    position: relative;
    z-index: 1000;
`;
export const DotsCollection = styled.div`
    min-width: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    padding: 30px;
    box-sizing: border-box;
    overflow: hidden;
    @media (max-width: 880px) {
        grid-template-columns: 1fr;
        gap: 30px;
    }
`;

const SingleDotBatch = () => (
    <DotsContainer>
        {
            BG_DOTS.map(item => (
                <DotsShell key={item.id}>
                    {
                        item.row_dots.map((sin, index) => (
                            <Dot key={index} bit={ 20 * sin} />
                        ))
                    }
                </DotsShell>
            ))
        }
    </DotsContainer>
)

const RightContainerComponent = ({children}) => {
    return(
        <RightContainer>
            <ChildrenContainer>{children}</ChildrenContainer>
            {/* <DotsCollection>
                <SingleDotBatch />
                <SingleDotBatch />
                <SingleDotBatch />
            </DotsCollection> */}
        </RightContainer>
    )
}

export default RightContainerComponent;