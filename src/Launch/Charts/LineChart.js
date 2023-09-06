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
  title: "Most Liked Problem of all Regions",
};

const LineChart = () => {
  return (
    <Chart
      chartType="LineChart"
      data={data}
      options={options}
      width={"100%"}
      height={"450px"}
    />
  )
}
export default LineChart;


