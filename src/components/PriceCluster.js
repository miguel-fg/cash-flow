//bootstrap components
import Stack from "react-bootstrap/Stack";

export default function PriceCluster(props){

    const features = props.features?.map((offer) => (
        <div className="info-cluster-sentence">
            {offer}
        </div>
    ));

    return (
        <Stack gap={5} className="info-stack plans">
            <div className="info-cluster-center">
                <h5>{props.title}</h5>
            </div>
            <div className="info-cluster-center">
                <h1>{props.amount}</h1>
            </div>
            <div className="info-cluster-center">
                <h5>{props.description}</h5>
            </div>
            <Stack gap={4}>
                {features}
            </Stack>
        </Stack>
    );
}