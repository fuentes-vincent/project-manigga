import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const ProjectStatusChart: React.FC = () => {
  // Mock data for the chart
  const data = [
    { name: 'Completed', value: 45, color: '#10b981' },  // green
    { name: 'In Progress', value: 35, color: '#f59e0b' }, // orange
    { name: 'Pending', value: 20, color: '#6b7280' }     // gray
  ];
  
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={5}
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip 
          formatter={(value) => [`${value}%`, 'Percentage']}
          contentStyle={{
            backgroundColor: '#1f2937',
            border: 'none',
            borderRadius: '6px',
            color: '#f3f4f6'
          }}
        />
        <Legend 
          verticalAlign="bottom" 
          height={36}
          formatter={(value) => <span style={{ color: '#9ca3af' }}>{value}</span>}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ProjectStatusChart; 