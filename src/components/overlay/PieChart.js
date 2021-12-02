import { Bar, Pie } from "react-chartjs-2";
import classes from "./PieChart.module.css";
import Chart from "chart.js/auto";
import closeIcon from "../../assets/close_icon.svg";

const PieChart = ({ productList, toggleAnalysis }) => {
  const categories = [
    "Electronics",
    "Jewelery",
    "Men's clothing",
    "Women's clothing",
  ];

  const data = [0, 0, 0, 0];

  productList.map((product) => {
    if (product.category === "electronics") data[0]++;
    else if (product.category === "jewelery") data[1]++;
    else if (product.category === "men's clothing") data[2]++;
    else if (product.category === "women's clothing") data[3]++;
  });

  return (
    <div className={classes.model}>
      <div className={classes.heading}>
        <div>Categories in catalogue</div>
        <img src={closeIcon} onClick={toggleAnalysis} alt="close icon" />
      </div>
      <div className={classes.chart}>
        <Pie
          data={{
            labels: categories,
            datasets: [
              {
                label: "Number of products",
                data: data,
                backgroundColor: ["#ed6e85", "#f2a254", "#f8cd6b", "#6cbdbf"],
                borderColor: "#ffffff",
                borderWidth: 2,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
};

export default PieChart;
