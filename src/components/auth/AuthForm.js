import Form from 'react-bootstrap/Form';

export default function AuthForm(){
    return (
        <Form>
            <Form.Group className='mb-3' controlId='authForm.usermane'>
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' placeholder='john_doe' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='authForm.pwd'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' />
            </Form.Group>
        </Form>
    );
}