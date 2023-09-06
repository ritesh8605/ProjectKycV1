import { Chart } from "react-google-charts";
let data = [
  ["Comment", "likes"],
  ["tanuja", 1245],
  ["shrre", 2362],
  ["ritesh", 1522],
  ["manas", 2950],
  ["palak", 1787],
];


 const options = {
  title: "most liked sensitional comment",
};

const ColumnChart = () => {
  return (

    
    <Chart
      chartType="ColumnChart"
      data={data}
      options={options}
      width={"100%"}
      height={"450px"}
    />
  )
}
export default ColumnChart;


