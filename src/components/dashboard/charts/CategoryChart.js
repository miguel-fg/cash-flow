import { RadarChart, ResponsiveContainer, PolarGrid, PolarAngleAxis, PolarRadiusAxis,Radar } from "recharts";

export default function CategoryChart(props){
    //building the data for the graph
    const { transactions, isLoading } = props;
    let data = {}
    let objData = {}
    
    if(!isLoading && transactions !== null){
        for(const index in transactions){
            const category = transactions[index].category;
            if(category in data){
                data[category]++;
            } else {
                data[category] = 1;
            }
        }

        objData = Object.entries(data).map(([category, amount]) => ({
            category: category,
            amount: amount,
        }));
    }

    return(
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={objData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="category" />
            <PolarRadiusAxis angle={30} domain={[0, 10]} />
            <Radar name="Category" dataKey="amount"  stroke="#000000" fill="#000000" fillOpacity={0.3}/>
            </RadarChart>
        </ResponsiveContainer>
    );
}