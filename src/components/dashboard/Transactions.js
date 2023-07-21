import Container from "react-bootstrap/Container";
import Transaction from "./Transaction";

export default function Transactions(props){
    const {posts, isLoading} = props;

    return (
        <Container fluid>
            {!isLoading && posts.map((post) =>{
                return(
                    <Transaction key={post._id} post={post} />
                );
            })}
        </Container>
    );
}