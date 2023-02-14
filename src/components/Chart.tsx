import { useState } from "react";
import { Line } from "react-chartjs-2";

enum OptionType {
  日 = "日",
  週 = "週",
  月 = "月",
  年 = "年"
}

const labels = ["6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5"];
const firstData = [
  0.9,
  0.7,
  0.6,
  0.8,
  0.7,
  0.6,
  0.7,
  0.6,
  0.55,
  0.45,
  0.35,
  0.2
];
const secondData = [
  0.9,
  0.8,
  0.7,
  0.65,
  0.6,
  0.55,
  0.53,
  0.5,
  0.45,
  0.4,
  0.3,
  0.18
];
const getChartData = (labels: string[]) => {
  return {
    labels,
    datasets: [
      {
        data: firstData,
        backgroundColor: "transparent",
        borderColor: "#FFCC21",
        lineTension: 0,
        pointBackgroundColor: "#FFCC21"
      },
      {
        data: secondData,
        backgroundColor: "transparent",
        borderColor: "#8FE9D0",
        lineTension: 0,
        pointBackgroundColor: "#8FE9D0"
      }
    ]
  };
};

function Chart(props: any) {
  const dumpOptions: Array<keyof typeof OptionType> = ["日", "週", "月", "年"];
  const [activeOption, setActiveOption] = useState<keyof typeof OptionType>(
    "日"
  );
  const chartData = getChartData(labels.map((item) => `${item}日`));
  return (
    <div
      className="chart"
      style={{
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 16,
        paddingBottom: 16,
        backgroundColor: "#414141"
      }}
    >
      { !props.hideInfo &&
        <div
          style={{
            flexDirection: "row",
            alignItems: "center",
            display: "flex"
          }}
        >
          <div style={{ width: 96, color: "#FFF", textAlign: "start" }}>
            BODY RECORD
          </div>
          <div style={{ fontSize: 22, color: "#FFF" }}>2021.05.21</div>
        </div>
      }
      <Line
        data={chartData}
        options={{
          title: {
            display: true,
            text: ""
          },
          legend: {
            display: false,
            labels: {
              fontColor: "#FFF"
            }
          },
          scales: {
            // @ts-ignore
            yAxes: [
              {
                display: false,
                ticks: {
                  min: 0,
                  max: 1
                }
              }
            ],
            // @ts-ignore
            xAxes: [
              {
                display: true,
                gridLines: {
                  color: "#777777",
                  drawBorder: false
                },
                ticks: {
                  fontSize: 12,
                  padding: 10,
                  fontColor: "#FFFFFF"
                }
              }
            ]
          }
        }}
      />
      { !props.hideInfo && <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
        {dumpOptions.map((item) => (
          <div
            key={item}
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              paddingBottom: 2,
              paddingTop: 2,
              borderRadius: 20,
              marginRight: 16,
              backgroundColor: item === activeOption ? "#FFFFFF" : "#FFCC21",
              color: item === activeOption ? "#FFCC21" : "#FFFFFF"
            }}
            onClick={() => setActiveOption(item)}
          >
            {item}
          </div>
        ))}
      </div>}
    </div>
  );
}

Chart.defaultProps = {
  displayTitle: true,
  displayLegend: false,
  legendPosition: "bottom"
};

export default Chart;
