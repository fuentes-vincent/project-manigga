import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { ProjectStatus } from '../../mockData/dashboardData';

interface ProjectStatusChartProps {
  data?: ProjectStatus[];
}

// Default data if none is provided
const defaultData: ProjectStatus[] = [
  { status: 'Completed', count: 15, color: '#4ade80' },
  { status: 'In Progress', count: 10, color: '#3b82f6' },
  { status: 'On Hold', count: 5, color: '#f97316' },
  { status: 'Cancelled', count: 2, color: '#ef4444' },
];

const ProjectStatusChart: React.FC<ProjectStatusChartProps> = ({ data = defaultData }) => {
  // Transform data for the pie chart if needed
  const formattedData = data.map(item => ({
    name: item.status,
    value: item.count,
    color: item.color
  }));
  
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={formattedData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {formattedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip 
          formatter={(value) => [value, 'Projects']}
          contentStyle={{ 
            backgroundColor: 'white', 
            borderRadius: '6px',
            borderColor: '#e5e7eb',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ProjectStatusChart;