var dnChart = document.getElementById('doughnutChart').getContext('2d');

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