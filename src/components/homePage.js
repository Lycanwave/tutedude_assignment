import React from "react";
import "./homePage.css";
import { inviteFriend } from "../enrolledData.js";

function HomePage() {
    return (
        <div className="homepage">
            <div className="homepage-earning-details">
                <div className="homepage-earning-detail-balance-container">
                    <div className="homepage-earning-detail-balance">
                        <div>
                            <div className="homepage-earning-details-balance-section">
                                Referral Earning
                            </div>
                            <div className="homepage-earning-details-balance-price">
                                ₹ 2,500
                            </div>
                        </div>

                        <div>
                            <div className="homepage-earning-details-balance-section">
                                Total Referral
                            </div>
                            <div className="homepage-earning-details-balance-price">
                                7
                            </div>
                        </div>

                        <div>
                            <div className="homepage-earning-details-balance-section">
                                Wallet Balance
                            </div>
                            <div className="homepage-earning-details-balance-price">
                                ₹ 500
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            // background: "green",
                            display: "flex",
                            justifyContent: "center",
                            marginTop: 30,
                        }}
                    >
                        <div className="homepage-earning-detail-withdraw-button">
                            Withdraw Balance
                        </div>
                    </div>
                </div>
                <div className="homepage-earning-details-referral">
                    <div className="homepage-earning-details-referral-code">
                        Your Referral Code
                    </div>
                    <div className="homepage-earning-details-referral-container-gradient">
                        <div className="homepage-earning-details-referral-container">
                            EDCH5
                            <span style={{ letterSpacing: "-1.5em" }}>4</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="invite-friend"> How does it work ?</div>
            <div className="invite-friend-items">
                {inviteFriend.map((element, index) => (
                    <div
                        className="invite-friend-item"
                        style={
                            index < 2
                                ? { marginTop: "0px" }
                                : { marginTop: "37px" }
                        }
                    >
                        <div className="invite-friend-item-logo">
                            <img src={element.logo} alt="" />
                        </div>

                        <div style={{ width: "268px", marginLeft: "20px" }}>
                            <div className="invite-friend-item-title">
                                {element.title}
                            </div>
                            <div className="invite-friend-item-subtitle">
                                {element.subtitle}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div
                className="homepage-footer"
                style={{ marginBottom: "20px", marginTop: "60px" }}
            >
                Friends Who Enrolled
            </div>
            <div className="homepage-footer" style={{ marginBottom: "80px" }}>
                Terms & Conditions
            </div>
        </div>
    );
}

export default HomePage;
