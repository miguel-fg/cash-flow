import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function TransactionForm(){
    return(
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Add new Transaction</Accordion.Header>
                <Accordion.Body>
                    <Form>
                        <Form.Group className='mb-3' controlId='transactionForm.title'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type='text' placeholder='T&T Supermarket, Lululemon, ...' />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='transactionForm.type'>
                            <Form.Label>Type</Form.Label>
                            <Form.Select>
                                <option value="Expense">Expense</option>
                                <option value="Income">Income</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='transactionForm.amount'>
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type='text' placeholder='0.00' />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='transactionForm.category'>
                            <Form.Label>Category</Form.Label>
                            <Form.Control type='text' placeholder='Food, Entertainment, ...' />
                        </Form.Group>
                    </Form>
                    <Button variant="success">
                        Add
                    </Button>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}