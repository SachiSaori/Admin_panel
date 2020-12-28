var dnIncome = document.getElementById('dnIncome').getContext('2d');
var dnSold = document.getElementById('dnSold').getContext('2d');

var sold = new Chart(dnSold, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [10, 20],
            backgroundColor: ['#f3545d','#fdaf4b']
        }],

        labels: [
        'Продавец 1',
        'Продавец 2'
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend : {
            position: 'left'
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

var income = new Chart(dnIncome, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [10, 20],
            backgroundColor: ['#f3545d','#fdaf4b']
        }],

        labels: [
        'Продавец 1',
        'Продавец 2'
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend : {
            position: 'left'
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