import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { 
    CurrentInvestmentContainer,
    CurrentInvestmentLeftSect,
    CurrentInvestmentPlan,
    CurrentInvestmentTitle,
    CurrentInvestmentRightBtn
 } from "../features/DividentsStyledComponents";
 import { CgArrowLongRight } from "react-icons/cg"

const Affiliates = () => {
    return(
        <AffiliatesContainer>
            <CurrentInvestmentContainer>
                <CurrentInvestmentLeftSect>
                    <CurrentInvestmentPlan>USD$ 20 000</CurrentInvestmentPlan>
                    <CurrentInvestmentTitle>Total affiliates earning</CurrentInvestmentTitle>
                </CurrentInvestmentLeftSect>

                <CurrentInvestmentRightBtn>
                    <p>Withdraw</p>
                    <CgArrowLongRight size={30} />
                </CurrentInvestmentRightBtn>
            </CurrentInvestmentContainer>

            <AffiliateLinkContainer>
                <AffiliateLinkTitle>Your affiliate link</AffiliateLinkTitle>
                <AffiliateLinkBox>  kmvs-saaw- aen-asnee-sbeas</AffiliateLinkBox>
                <AffiliateLinkBtn>COPY</AffiliateLinkBtn>
            </AffiliateLinkContainer>
        </AffiliatesContainer>
    )
}

export const AffiliateLinkTitle = styled.h3`
    margin: 0;
    background-color: #fff;
    padding: 8px 12px;
    font-family: Inter;
    font-size: 14px;
    min-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px 0 0 6px;
`;
export const AffiliateLinkBox = styled.p`
    margin: 0;
    background-color: #fff;
    flex: 1;
    padding: 8px 12px;
    min-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const AffiliateLinkBtn = styled.div`
    background-color: ${colors.accent};
    color: #fff;
    padding: 8px 15px;
    min-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 0 6px 6px 0;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    :hover {
        opacity: .7;
    }
`;
export const AffiliateLinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;
export const AffiliatesContainer = styled.div`
    /* background-color: red; */
    min-height: 100vh;
`;

export default Affiliates;