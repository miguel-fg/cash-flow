import Button from "react-bootstrap/Button";

export default function CallToAction(props) {
    return (
        <div className="col-md-12 text-center">
            <Button className="call-to-act">{props.name}</Button>
        </div>
    );
}
