import React from 'react'
import {Line} from 'react-chartjs-2'
import styles from '../styles.module.css'

function ChartLine({dataChart, loading}) {
    const data = {
        labels: dataChart.map(e => e.key),
        datasets: [
        {
            label: 'Konfirmasi Positif Korona Indonesia',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data:  dataChart.map( e => e.value)
        }
        ]
        };
    return (
        <div className={styles.ChartLine}>
            <h2>DATA POSITIF COVID-19 DI INDONESIA</h2>
            <Line 
                data={data}
                height={100}
                // width={calculateWidth()}
                    // options={options}
                
                />
        </div>
    )
}


const options = {
    legend: {
        display: false
    },
    responsive: false,
    tooltips: {
        mode: 'label'
    },
    elements: {
        line: {
            fill: false
        }
    },
    scales: {
        xAxes: [
            {
                barThickness: 'flex',
                display: true,
                gridLines: {
                    display: false
                },
                // labels: x,
                ticks: {
                    autoSkip: false,
                    maxRotation: 45,
                    minRotation: 45
                }
            }
        ],
        yAxes: [
            {
                type: 'linear',
                display: true,
                position: 'left',
                id: 'y-axis-1',
                gridLines: {
                    display: true
                },
                labels: {
                    show: false
                },
                ticks: {
                    beginAtZero: true
                }
            }
        ]
    }
}
const calculateWidth=()=> {
const { x } = this.props
let length = x ? x.length : 0
switch (true) {
    case length >= 0 && length <= 3:
        return 400
    case length >= 4 && length <= 50:
        return 1200
    case length >= 51 && length <= 100:
        return 2000
    default:
        return 5000
}
}














export default ChartLine
