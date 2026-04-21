// Line Chart
new Chart(document.getElementById("lineChart"), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Issued',
            data: [10, 40, 42, 80, 35, 60],
            borderWidth: 2,
            fill: false
        }]
    }
});

// Pie Chart
new Chart(document.getElementById("pieChart"), {
    type: 'doughnut',
    data: {
        labels: ['In Stock', 'Low Stock', 'Out of Stock', 'Expired'],
        datasets: [{
            data: [196, 12, 12, 25],
        }]
    }
});