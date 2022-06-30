import React from "react";
import styled from "styled-components";

import { colors } from "../../constants/colors";
import { investment_packages } from "../../constants/DATA";

const InvestmentPlansPage = () => {
    return(
        <div>
            <CurrentPlan>
                <TitleBar className="title_bar">
                    <h4>Your current package</h4>
                    <button>Request withdraw</button>
                </TitleBar>
                <div className="values_sect">
                    <div className="package_sect">
                        <h3>EMERALD</h3>
                        <p>USD$ 300</p>
                    </div>
                    <div className="balance_sect">
                        <p>Available balance</p>
                        <p>USD$ 400 000</p>
                    </div>
                </div>
                <div className="recommendation_titles">
                    <h3>Recommendations</h3>
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


export const TitleBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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