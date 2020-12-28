var dnChart = document.getElementById('doughnutChart').getContext('2d');
var lineChart = document.getElementById('LineChart').getContext('2d');
var seconddn = document.getElementById('seconddn').getContext('2d');

var myLineChart = new Chart(lineChart, {
	type: 'line',
	data: {
		labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], //Генератторы? Не, не слышали!
		datasets: [{
			label: "Sold",
			borderColor: "#1d7af3",
			pointBorderColor: "#FFF",
			pointBackgroundColor: "#1d7af3",
			pointBorderWidth: 2,
			pointHoverRadius: 4,
			pointHoverBorderWidth: 1,
			pointRadius: 4,
			backgroundColor: 'transparent',
			fill: true,
			borderWidth: 2,
			data: [12, 24, 51, 16, 64, 36, 26, 74, 443, 23, 266, 45, 37, 96, 49, 57, 16, 27, 97, 54, 25, 66,42, 65, 43, 75, 43, 57, 875, 78]
		},
		{
			label: "Remain", //Как же лееееееееень
			borderColor: "#0F00FF",
			pointBorderColor: "#FFF",
			pointBackgroundColor: "#0F00FF",
			pointBorderWidth: 2,
			pointHoverRadius: 4,
			pointHoverBorderWidth: 1,
			pointRadius: 4,
			backgroundColor: 'transparent',
			fill: true,
			borderWidth: 2,
			data: [23, 25, 60, 17, 380, 450, 432, 534, 364, 347, 888, 653, 375, 375, 163, 236, 125, 1263, 423, 473, 754, 221, 264, 463, 367, 534, 753, 776, 547, 474]
		},
		{
			label: "Money Earned", 
			borderColor: "#FF0F0F",
			pointBorderColor: "#FFF",
			pointBackgroundColor: "#FF0F0F",
			pointBorderWidth: 2,
			pointHoverRadius: 4,
			pointHoverBorderWidth: 1,
			pointRadius: 4,
			backgroundColor: 'transparent',
			fill: true,
			borderWidth: 2,
			data: [222, 245, 6650, 1777, 8380, 4450, 4632, 5334, 3264, 1347, 8588, 6653, 8375, 3675, 1563, 2346, 1235, 12563, 4233, 4733, 7541, 2221, 2364, 4643, 3657, 5314, 1753, 900, 1547, 1474]
		},
		{
			label: "Price", 
			borderColor: "#000000",
			pointBorderColor: "#FFF",
			pointBackgroundColor: "#000000",
			pointBorderWidth: 2,
			pointHoverRadius: 4,
			pointHoverBorderWidth: 1,
			pointRadius: 4,
			backgroundColor: 'transparent',
			fill: true,
			borderWidth: 2,
			data: [4000, 4000, 4000, 4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000]
		}]
	},
	options : {
		responsive: true,
		maintainAspectRatio: true,
		legend: {
			position: 'top',
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

var myDnChart = new Chart(dnChart, {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [10, 20, 30],
			backgroundColor: ['#f3545d','#fdaf4b','#1d7af3']
		}],

		labels: [
		'СПб',
		'Москва',
		'Красноярск'
		]
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		legend : {
			position: 'bottom'
		},
		layout: {
			padding: {
				left: 20,
				right: 20,
				top: 20,
				bottom: 20
			}
		}
	}
});

var MySecondDnChart = new Chart(seconddn, {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [40, 400],
			backgroundColor: ['#f3545d','#fdaf4b']
		}],
		labels: [
			'СПб',
			'Подольск'
		]
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		legend: {
			position: 'left',
		},
		layout: {
			padding: {
				left: 20,
				right: 20,
				top: 20,
				bottom: 20
			}
		}
	}
})