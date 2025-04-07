import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const RevenueChart: React.FC = () => {
  // Mock data for the chart
  const data = [
    { month: 'Jan', revenue: 58000 },
    { month: 'Feb', revenue: 60000 },
    { month: 'Mar', revenue: 72000 },
    { month: 'Apr', revenue: 70000 },
    { month: 'May', revenue: 79000 },
    { month: 'Jun', revenue: 76000 },
  ];
  
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis 
          dataKey="month" 
          tick={{ fill: '#9ca3af' }}
          axisLine={{ stroke: '#4b5563' }}
        />
        <YAxis 
          tick={{ fill: '#9ca3af' }}
          axisLine={{ stroke: '#4b5563' }}
          tickFormatter={(value) => `$${value.toLocaleString()}`}
        />
        <Tooltip 
          formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
          contentStyle={{
            backgroundColor: '#1f2937',
            border: 'none',
            borderRadius: '6px',
            color: '#f3f4f6'
          }}
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#3b82f6"
          fillOpacity={1}
          fill="url(#colorRevenue)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart; 