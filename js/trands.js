var lineChart = document.getElementById('lineChart').getContext('2d');

var myLineChart = new Chart(lineChart, {
	type: 'line',
	data: {
		labels: ["8", "9", "10", "11", "12", "1"], //Генератторы? Не, не слышали!
		datasets: [{
			label: "Продажи",
			yAxisID: 'Items',
			borderColor: "#1d7af3",
			pointBorderColor: "#FFF",
			pointBackgroundColor: "#1d7af3",
			pointBorderWidth: 2,
			pointHoverRadius: 4,
			pointHoverBorderWidth: 1,
			pointRadius: 4,
			backgroundColor: 'rgba(29.0, 122.0, 243.0, 0.1)',
			fill: true,
			borderWidth: 2,
			data: [12, 24, 51, 16, 64, 42]
		},
		{
			label: "Число товаров", //Как же лееееееееень
			yAxisID: "Items",
			borderColor: "#0F00FF",
			pointBorderColor: "#FFF",
			pointBackgroundColor: "#0F00FF",
			pointBorderWidth: 2,
			pointHoverRadius: 4,
			pointHoverBorderWidth: 1,
			pointRadius: 4,
			backgroundColor: 'rgba(15.0, 0.0, 255.0, 0.1)',
			fill: true,
			borderWidth: 2,
			data: [23, 25, 60, 17, 380, 450]
		},
		{
			label: "Выручка",
			yAxisID: 'Money', 
			borderColor: "#FF0F0F",
			pointBorderColor: "#FFF",
			pointBackgroundColor: "#FF0F0F",
			pointBorderWidth: 2,
			pointHoverRadius: 4,
			pointHoverBorderWidth: 1,
			pointRadius: 4,
			backgroundColor: 'rgba(255.0, 15.0, 15.0, 0.1)',
			fill: true,
			borderWidth: 2,
			data: [222, 245, 6650, 1777, 8380, 4450]
		},
		{
			label: "Число брендов", 
			yAxisID: 'Items',
			borderColor: "#000000",
			pointBorderColor: "#FFF",
			pointBackgroundColor: "#000000",
			pointBorderWidth: 2,
			pointHoverRadius: 4,
			pointHoverBorderWidth: 1,
			pointRadius: 4,
			backgroundColor: 'rgba(0.0, 0.0, 0.0, 0.1)',
			fill: true,
			borderWidth: 2,
			data: [4000, 4000, 4000, 4000, 4000, 4000]
        },
        {
			label: "Выручка на товар", 
			yAxisID: 'Money',
			borderColor: "#F0F000",
			pointBorderColor: "#FFF",
			pointBackgroundColor: "#F0F000",
			pointBorderWidth: 2,
			pointHoverRadius: 4,
			pointHoverBorderWidth: 1,
			pointRadius: 4,
			backgroundColor: 'rgba(240.0, 240.0, 0.0, 0.1)',
			fill: true,
			borderWidth: 2,
			data: [3200, 3200, 3200, 3200, 3200, 3200] //Снова тонкие намёки  
        }]
	},
	options : {
		responsive: true,
		maintainAspectRatio: true,
		scales: {
			yAxes:[{
				id: 'Items',
				position: 'left'
			}, {
				id: 'Money',
				position: 'left'
			}]
		},
		legend: {
			position: 'right',
			labels : {
				padding: 10,
				fontColor: '#1d7af3',
			}
		},
		tooltips: {
			bodySpacing: 4,
			mode:"nearest",
			intersect: 0,
			position:"nearest",
			xPadding:10,
			yPadding:10,
			caretPadding:10
		},
		layout:{
			padding:{left:15,right:15,top:15,bottom:15}
		}
	}
});