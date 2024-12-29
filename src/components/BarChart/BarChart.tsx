import React, { useState, useEffect } from 'react';
import './BarChart.css';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const legendMargin = {
  id: 'legendMargin',
  afterInit(chart: any, args: any, plugins: any) {
    const originalFit = chart.legend.fit;
    const margin = 16;
    chart.legend.fit = function fit() {
      if (originalFit) {
        originalFit.call(this);
      }
      return (this.height += margin);
    };
  },
};

const getCSSVariable = (variable: string, alpha: number = 1): string => {
  const rgb = getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
  return `rgba(${rgb}, ${alpha})`; // Include alpha transparency
};

const BarChart: React.FC = () => {
  const [colors, setColors] = useState({
    income: getCSSVariable('--income', 0.5),
    expense: getCSSVariable('--expense', 0.5),
    border: getCSSVariable('--border'),
  });

  // Update colors when the theme changes
  useEffect(() => {
    const updateColors = () => {
      setColors({
        income: getCSSVariable('--income', 0.5),
        expense: getCSSVariable('--expense', 0.5),
        border: getCSSVariable('--border'),
      });
    };

    // Trigger update when the theme class is toggled
    const observer = new MutationObserver(updateColors);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'], // Watch for class changes on <html>
    });

    // Cleanup observer
    return () => observer.disconnect();
  }, []);

  return (
    <div className='barChart'>
      <Bar
        options={{
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 1 | 2,
          animations: {
            radius: {
              duration: 400,
              easing: 'linear',
              loop: (context) => context.active,
            },
          },
          interaction: {
            mode: 'index', // Enables hover for all datasets on the same x-axis index
            intersect: false, // Ensures tooltip shows for both bars on hover
          },
          scales: {
            y: {
              beginAtZero: true,
              border: { display: true, color: colors.border, width: 2 },
              grid: {
                display: false,
              },
            },
            x: {
              border: {
                display: true,
                color: colors.border,
                width: 2,
              },
              grid: {
                display: false,
              },
            },
          },
          plugins: {
            // title: { display: true, text: 'Hello' },
            legend: {
              display: true,
              align: 'end',
              position: 'top',
              labels: { usePointStyle: true, pointStyle: 'rectRounded' },
            },
            tooltip: { mode: 'index', intersect: false },
          },
        }}
        data={{
          labels: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
          ],
          datasets: [
            {
              label: 'Income',
              data: [100, 30],
              backgroundColor: [colors.income],
              hoverBackgroundColor: [getCSSVariable('--income', 1)],
              borderColor: [colors.income],
              borderWidth: 1,
              borderRadius: 6,
            },
            {
              label: 'Expenses',
              data: [100, 200],
              backgroundColor: [colors.expense],
              hoverBackgroundColor: [getCSSVariable('--expense', 1)],
              borderColor: [colors.expense],
              borderWidth: 1,
              borderRadius: 6,
            },
          ],
        }}
        plugins={[legendMargin]}
      />
    </div>
  );
};

export default BarChart;
