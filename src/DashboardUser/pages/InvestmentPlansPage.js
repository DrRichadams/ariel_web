import React from "react";
import styled from "styled-components";

import { colors } from "../../constants/colors";
import { investment_packages } from "../../constants/DATA";

import { 
    UpgradeBtn,
    RecoNameFee,
    Recommendation,
    ActualRecommendations,
    Recommendations,
    RecommendStory,
    RecommendTitle,
    PackageTypeContainer,
    BalanceContainer,
    ActualBalance,
    AvailableBalance,
    PackageCost,
    PackageType,
    ValuesSection,
    BarTitle,
    RequestBtn,
    TitleBar,
    CurrentPlan,
 } from "../features/InvestmentPlanStyledComponents";

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
                <Recommendations>
                    <RecommendTitle>Recommendations</RecommendTitle>
                    <RecommendStory>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quasi explicabo, commodi nam eius ipsum deserunt soluta ipsam aut. Consequuntur mollitia laboriosam non quos numquam accusantium iste culpa porro minima.
                    </RecommendStory>
                </Recommendations>
                <ActualRecommendations className="actual_recommendations">
                    {
                        investment_packages.filter(item => item.fee > 300).map(pack => (
                            <Recommendation>
                                <RecoNameFee>
                                    <h3>{pack.package_name}</h3>
                                    <PackageCost>USD${pack.fee}</PackageCost>
                                </RecoNameFee>
                                <UpgradeBtn>Upgrade</UpgradeBtn>
                            </Recommendation>
                        ))
                    }
                </ActualRecommendations>
            </CurrentPlan>
        </div>
    )
};

export default InvestmentPlansPage;