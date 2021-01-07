$(function(e){
  'use strict'
  
	/* Chartjs (#bar-chart-horizontal) */
	new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
	data: {
		labels: ["Organic", "Direct", "Campagion", "another one" ],
		datasets: [
				{
					label: "Traffic Source",
					backgroundColor: ["rgba(0, 123, 255,0.7)", "rgba(255, 102, 0,0.7)","rgba(9, 176, 236,0.7)", "rgba(255, 102, 0,0.9)"],
					data: [5470,2000,910,6000],
				}
			]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: '#000',
				bodyFontColor: '#000',
				backgroundColor: '#fff',
				cornerRadius: 3,
				intersect: false,

			},
			legend: {
				display: false,
				labels: {
					usePointStyle: true,
				},
			},
			scales: {
				xAxes: [{
					 barPercentage: 0.2,
					 barSpacing:3,
					ticks: {
						fontColor: "#8e9cad",
					 },
					display: true,
					gridLines: {
						display: true,
						color: 'rgb(142, 156, 173,0.1)',
						drawBorder: false
					},
					scaleLabel: {
						display: false,
						labelString: 'Month',
						fontColor: '#8492a6 '
					}
				}],
				yAxes: [{
					 barPercentage: 1,
					 barSpacing:2,
					ticks: {
						fontColor: "#8e9cad",
					 },
					display: true,
					gridLines: {
						display: true,
						color: 'rgb(142, 156, 173,0.1)',
						drawBorder: false
					},
					scaleLabel: {
						display: false,
						labelString: 'sales',
						fontColor: '#8492a6 '
					}
				}]
			},
			title: {
				display: false,
				text: 'Normal Legend'
			}
		}
	});
	/* Chartjs (#bar-chart-horizontal) closed */
	/* sparkline_bar31 */
	$(".sparkline_bar").sparkline([2, 4, 3, 4, 5, 4,5,3,4], {
		type: 'bar',
		height:35,
		width:50,
		barWidth: 4,
		barSpacing: 2,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: '#007bff'
	});
	/* sparkline_bar31 end */
	
	/* sparkline_bar31 */
	$(".sparkline_bar31").sparkline([2, 4, 3, 4, 5, 4,5,3,4], {
		type: 'bar',
		height:35,
		width:50,
		barWidth:4,
		barSpacing: 2,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: '#f88960',
	});
	/* sparkline_bar31 end */


});


