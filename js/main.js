
var lineChart = document.getElementById('LineChart').getContext('2d');
var SecondChart = document.getElementById('Chart2').getContext('2d');

(function() {
	var ul = document.querySelectorAll('.treeCSS > li:not(:only-child) ul, .treeCSS ul ul');
	for (var i = 0; i < ul.length; i++) {
	  var div = document.createElement('div');
	  div.className = 'drop';
	  div.innerHTML = '+'; // картинки лучше выравниваются, т.к. символы на одном браузере ровно выглядят, на другом — чуть съезжают 
	  ul[i].parentNode.insertBefore(div, ul[i].previousSibling);
	  div.onclick = function() {
		this.innerHTML = (this.innerHTML == '+' ? '−' : '+');
		this.className = (this.className == 'drop' ? 'drop dropM' : 'drop');
	  }
	}
  })();

var myLineChart = new Chart(lineChart, {
	type: 'line',
	data: {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
			data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 900]
		}]
	},
	options : {
		responsive: true,
		maintainAspectRatio: false,
		legend: {
			position: 'bottom',
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

var MySecondChart = new Chart(SecondChart, {
	type: 'line',
	data: {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
			data: [234, 50, 636, 206, 464, 453, 380, 802, 701, 655, 702, 600]
		}]
	},
	options : {
		responsive: true,
		maintainAspectRatio: false,
		legend: {
			position: 'bottom',
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
