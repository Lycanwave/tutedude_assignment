import React from "react";
import "./enrollmentScreen.css";
import { enrolledData } from "../enrolledData";

function EnrollmentScreen() {
    return (
        <div className="enrollment-container">
            <div className="enrollment-container-boxx">
                <div className="enrollment-container-referral-container">
                    <div className="enrollment-container-referral">
                        Your Referral Code{" "}
                    </div>
                    <div className="enrollment-container-referral-code">
                        EDCH54
                    </div>
                </div>

                <div className="enrollment-container-wallet-container">
                    <div>
                        <div className="enrollment-container-wallet">
                            Wallet Balance
                        </div>
                        <div className="enrollment-container-wallet-balance">
                            ₹ 500
                        </div>
                    </div>
                </div>
            </div>

            <div
                style={{
                    marginBottom: "20px",
                    marginTop: "70px",
                    color: "rgb(129,0,129)",
                }}
            >
                Friends who Enrolled
                <span
                    style={{ color: "rgb(98,99,99)" }}
                >{`(${enrolledData.length})`}</span>
            </div>

            <div className="enrollment-cards">
                {enrolledData.map((element) => (
                    <div className="enrollment-card">
                        <div className="enrollment-card-name-date">
                            <div className="enrollment-card-name">
                                {element.name}
                            </div>
                            <div className="enrollment-card-date">
                                {element.date}
                            </div>
                        </div>
                        <div className="enrollment-card-course">{`Couses Enrolled(${element.courseEnrolledList.length})`}</div>
                        <div className="enrollment-card-course-detail">
                            {element.courseEnrolledList.map((element) => (
                                <div className="enrollment-card-course-detail-element">
                                    {element}
                                </div>
                            ))}
                        </div>

                        <div className="enrollment-card-amount">
                            {`Referral Amount `}
                            <p style={{ margin: "5px" }}></p>
                            <div
                                style={{ fontweight: "600", fontSize: "24px" }}
                            >{` ₹${element.referralAmount}`}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="enrollment-container-terms-condition">
                Terms & Conditions
            </div>
        </div>
    );
}

export default EnrollmentScreen;
