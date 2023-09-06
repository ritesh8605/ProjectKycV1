
import { Chart } from "react-google-charts";

const temp=([{name:"tanuja",comment:1221},{name:"tanuja",comment:1221},{name:"tanuja",comment:1221},{name:"tanuja",comment:1221},{name:"tanuja",comment:1221},{name:"tanuja",comment:1221},{name:"tanuja",comment:1221},{name:"tanuja",comment:1221},{name:"tanuja",comment:1221},]);

let data=[];
data.push(["height ","weight"]);
temp.forEach((item)=>data.push( [item.name , item.comment]));
console.log(data);
// const data = [
//   ["Popularity", "df"],
//   ["tanuja", 1245],
//   ["shrre", 2362],
//   ["ritesh", 1522],
//   ["manas", 2950],
//   ["palak", 1787],
// ];
 const options = {
  title: "Most Popular Candidate of all Regions",
};

const PieChart = () => {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"450px"}
    />
  )
}
export default PieChart;


