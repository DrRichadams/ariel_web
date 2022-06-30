import React from "react";
import styled from "styled-components";

import { colors } from "../../constants/colors";
import { investment_packages } from "../../constants/DATA";

const InvestmentPlansPage = () => {
    return(
        <div>
            <CurrentPlan>
                <TitleBar className="title_bar">
                    <BarTitle>Your current package</BarTitle>
                    <RequestBtn>Request withdraw</RequestBtn>
                </TitleBar>
                <ValuesSection className="values_sect">
                    <PackageTypeContainer>
                        <PackageType>EMERALD</PackageType>
                        <PackageCost>USD$ 300</PackageCost>
                    </PackageTypeContainer>
                    <BalanceContainer>
                        <AvailableBalance>Available balance</AvailableBalance>
                        <ActualBalance>USD$ 400 000</ActualBalance>
                    </BalanceContainer>
                </ValuesSection>
                <div className="recommendation_titles">
                    <RecommendTitle>Recommendations</RecommendTitle>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quasi explicabo, commodi nam eius ipsum deserunt soluta ipsam aut. Consequuntur mollitia laboriosam non quos numquam accusantium iste culpa porro minima.</p>
                </div>
                <div className="actual_recommendations">
                    {
                        investment_packages.filter(item => item.fee > 300).map(pack => (
                            <div>
                                {pack.package_name}
                            </div>
                        ))
                    }
                </div>
            </CurrentPlan>
            {/* <InvestmentPackagesComponent /> */}
        </div>
    )
};

export const RecommendTitle = styled.div`
    margin: 0;
`;
export const PackageTypeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
export const BalanceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const ActualBalance = styled.p`
    margin: 0;
    color: #01050f;
    font-weight: 900;
    font-size: 20px;
    font-family: Roboto;
    margin-top: 2px;
`;
export const AvailableBalance = styled.h3`
    margin: 0;
    color: ${colors.accent};
    font-size: 14px;
`;
export const PackageCost = styled.p`
    margin: 0;
    color: #01050f;
    font-weight: 900;
    font-size: 20px;
    font-family: Roboto;
    margin-top: 2px;
`;
export const PackageType = styled.h3`
    margin: 0;
    color: ${colors.accent};
    font-size: 14px;
`;
export const ValuesSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const BarTitle = styled.h4`
    text-transform: uppercase;
    color: #01050f;
    font-size: 20px;
    font-family: Oswald, sans-serif;
    font-weight: 900;
    margin: 0;
`;
export const RequestBtn = styled.div`
    cursor: pointer;
    transition: all 250ms ease-in;
    text-transform: uppercase;
    border: 2px solid ${colors.accent};
    color: ${colors.accent};
    border-radius: 6px;
    padding: 6px 8px;
    font-size: 14px;
    font-weight: 500;
    :hover {
        background-color: ${colors.accent};
        color: #fff;
    }
`;
export const TitleBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const CurrentPlan = styled.div`
    width: 100%;
    min-height: 35vh;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 6px 12px rgba(36,40,80,0.3), 0px -6px 12px rgba(36,40,80,0.3);
    padding: 15px;
`;

export default InvestmentPlansPage;