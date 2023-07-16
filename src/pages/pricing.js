import React from "react";

//bootstrap components
import Stack from "react-bootstrap/Stack";
import PriceCluster from "../components/PriceCluster";

const PRICE_INFO = [
    {
        name: "Basic",
        price: "Free",
        sub_title: "Get a taste of what CashFlow has to offer.",
        features: [
            "Basic budgeting features",
            "Expense tracking",
            "Goal setting",
        ],
    },
    {
        name: "Standard",
        price: "$15.00 /mo",
        sub_title: "Take your financial management to the next level.",
        features: [
            "Customized budget categories",
            "Transaction categorization",
            "Detailed spending reports",
        ],
    },
    {
        name: "Premium",
        price: "$25.00 /mo",
        sub_title: "Unlock the ultimate budgeting experience.",
        features: [
            "Bill reminders",
            "Bank account syncing",
            "Priority customer support",
        ],
    },
];

export default function Pricing() {
    const priceItems = PRICE_INFO.map((plan) => (
        <PriceCluster
            title={plan.name}
            amount={plan.price}
            description={plan.sub_title}
            features={plan.features}
        />
    ));

    return (
        <Stack gap={5} className="main-stack-container">
            <h2 className="under-title not-home">
                We offer flexible pricing plans to suit your needs and help you
                take charge of your finances. Choose the plan that fits you best
                and start your journey towards financial freedom today.
            </h2>
            <Stack
                gap={2}
                direction="horizontal"
                className="financial-plans-container"
            >
                {priceItems}
            </Stack>
        </Stack>
    );
}
