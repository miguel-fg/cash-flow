import TransactionForm from "../components/dashboard/TransactionForm";
import { useEffect, useState } from "react";
import axios from "axios";

// bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Transactions from "../components/dashboard/Transactions";

export default function Dashboard() {
    const [transactions, setTransactions] = useState({
        loading: false,
        posts: [],
    });

    function getTransactions() {
        const apiURL = "http://localhost:5000/api/transactions/";

        axios.get(apiURL).then((repos) => {
            const allTransactions = repos.data;
            setTransactions({ loading: false, posts: allTransactions });
        });
    }

    useEffect(() => {
        setTransactions({loading: true});
        getTransactions();
    }, [setTransactions]);

    return (
        <Container fluid className="dashboard-container">
            <Stack gap={4} direction="horizontal" className="dashboard-stack">
                <Container className="transaction-container">
                    <Stack className="transaction-stack rounded">
                        Transactions
                        <TransactionForm />
                        <Transactions isLoading={transactions.loading} posts={transactions.posts} />
                    </Stack>
                </Container>
                <Container fluid>
                    <Row>
                        <Col lg={12} className="dashboard-card rounded">
                            Progress/Monthly view graph
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} className="dashboard-card rounded">
                            Category summary
                        </Col>
                        <Col lg={6} className="dashboard-card rounded">
                            Budgets & Goals
                        </Col>
                    </Row>
                </Container>
            </Stack>
        </Container>
    );
}
