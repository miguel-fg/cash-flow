import React from "react";

//bootstrap components
import Stack from "react-bootstrap/Stack";
import CallToAction from "../components/CallToAction";
import InfoCluster from "../components/InfoCluster";

const set_1 = [
    "Track your expenses",
    "Set realistic saving goals",
    "Make informed spending decisions",
];
const set_2 = [
    "Save for your dream vacation",
    "Get out of debt",
    "Plan for a secure retirement",
];

export default function About() {
    return (
        <>
            <Stack gap={5} className="main-stack-container">
                <div className="banner-div picture-placeholder"></div>
                <h2 className="under-title not-home">
                    At CashFlow, we believe that financial well-being is within
                    everyone's reach. We're on a mission to empower individuals
                    and families to take control of their finances and build a
                    brighter future.
                </h2>
                <CallToAction name="Get Started" />
            </Stack>
            <Stack gap={5} className="main-stack-container">
                <Stack
                    gap={5}
                    direction="horizontal"
                    className="main-stack-container"
                >
                    <InfoCluster set={set_1}/>
                    <InfoCluster set={set_2}/>
                </Stack>
                <h2 className="under-title not-home bottom">
                    Join our community of savvy budgeters and experience the
                    freedom that comes with financial stability. Start your
                    journey today with CashFlow and unlock a brighter financial
                    future.
                </h2>
            </Stack>
        </>
    );
}
