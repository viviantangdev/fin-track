import React, { useState, useEffect } from 'react';
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
  afterInit(chart:any, args:any, plugins:any) {
    const originalFit = chart.legend.fit;
    const margin = 16;
    chart.legend.fit = function fit(){
      if(originalFit){
        originalFit.call(this);
      }
      return this.height += margin;
    }
  }
}

const getCSSVariable = (variable: string, alpha: number = 1): string => {
  const rgb = getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
  return `rgba(${rgb}, ${alpha})`; // Include alpha transparency
};

const BarChart: React.FC = () => {
  const [colors, setColors] = useState({
    income: getCSSVariable('--income'),
    expense: getCSSVariable('--expense'),
    border: getCSSVariable('--border'),
  });

  // Update colors when the theme changes
  useEffect(() => {
    const updateColors = () => {
      setColors({
        income: getCSSVariable('--income'),
        expense: getCSSVariable('--expense'),
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
    <Bar
      options={{
        responsive: true,
        aspectRatio: 1 | 2,
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
          tooltip: { mode: 'nearest' },
        
        },
      }}
      data={{
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [
          {
            label: 'Expenses',
            data: [100, 200],
            backgroundColor: [colors.expense],
            borderColor: [colors.expense],
            borderWidth: 1,
            borderRadius: 8,
          },
          {
            label: 'Income',
            data: [100, 200],
            backgroundColor: [colors.income],
            borderColor: [colors.income],
            borderWidth: 1,
            borderRadius: 8,
          },
        ],
      }}
      plugins={[legendMargin]}
    />
  );
};

export default BarChart;
