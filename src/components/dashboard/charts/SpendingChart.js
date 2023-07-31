import {
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Line,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

export default function SpendingChart(props) {
    const { transactions, isLoading } = props;

    let data = [];

    if (!isLoading && transactions !== null) {
        let spending = 0;

        const transactionEntries = Object.entries(transactions).reverse();

        for (const [transactionKey, transaction] of transactionEntries) {
            if (transaction.type === "Expense") {
                const value = transaction.amount
                spending += value;
                data.push({
                    date: new Date(transaction.createdAt).toLocaleDateString(),
                    amount: spending,
                });
            }
        }
    }

    return (
        <ResponsiveContainer>
            <LineChart data={data} margin={{bottom: 110}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" angle={-45} textAnchor="end" />
                <YAxis />
                <Line type="monotone" dataKey="amount" stroke="#000000" />
            </LineChart>
        </ResponsiveContainer>
    );
}
