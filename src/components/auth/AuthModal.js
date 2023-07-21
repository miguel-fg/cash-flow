import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AuthForm from "./AuthForm";

export default function AuthModal(props) {
    return (
        <Modal show={props.show} onHide={props.closeModal} centered>
            <Modal.Header closeButton>
                <Modal.Title>Sign up or sign in</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AuthForm />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.closeModal}>
                    Sign in
                </Button>
                <Button variant="danger" onClick={props.closeModal}>
                    Sign up
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
