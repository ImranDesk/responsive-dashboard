const labels = ["S", "M", "T", "W", "T", "F", ""];

const data = {
  labels: labels,
  datasets: [
    {
      backgroundColor: "grey",
      borderColor: "#31A9FE",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    tension: 0.4,
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);

var n1 = 1;
var n2 = 1;

function toggleL() {
  n1 += 1;
  if (n1 % 2 == 0) {
    document.getElementById("n-left").style = "transform:translateX(0%);";
  }
  if (n1 % 2 == 1) {
    document.getElementById("n-left").style = "transform:translateX(-100%);";
  }
}

function toggleR() {
  n2 += 1;
  if (n2 % 2 == 0) {
    document.getElementById("n-right").style = "transform:translateY(0%);";
  }
  if (n2 % 2 == 1) {
    document.getElementById("n-right").style = "transform:translateY(-100%);";

    console.log(n2);
  }
}

function yReset(){
  document.getElementById("n-right").style = "transform:translateY(100%);";
}
function xReset(){
  document.getElementById("n-left").style = "transform:translateX(-100%);";
}
