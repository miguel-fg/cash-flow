import { useState } from "react";
import axios from "axios";

// bootstrap components
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function TransactionForm() {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("Expense");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {

        const apiURL = "http://localhost:5000/api/transactions/"
        const transaction = { title, type, amount, category };

        axios.post(apiURL, transaction);

        setTitle("");
        setAmount("");
        setCategory("")
    };

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Add new Transaction</Accordion.Header>
                <Accordion.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group
                            className="mb-3"
                            controlId="transactionForm.title"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="T&T Supermarket, Lululemon, ..."
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="transactionForm.type"
                        >
                            <Form.Label>Type</Form.Label>
                            <Form.Select
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value="Expense">Expense</option>
                                <option value="Income">Income</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="transactionForm.amount"
                        >
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="0.00"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="transactionForm.category"
                        >
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Food, Entertainment, ..."
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </Form.Group>
                        <Button type="submit">Add</Button>
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}