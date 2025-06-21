import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';

const KPIDashboard: React.FC = () => {
  const ticketData = [
    { name: 'Jan', resolved: 85, opened: 92 },
    { name: 'Feb', resolved: 78, opened: 72 },
    { name: 'Mar', resolved: 90, opened: 86 },
    { name: 'Apr', resolved: 81, opened: 75 },
    { name: 'May', resolved: 95, opened: 90 },
    { name: 'Jun', resolved: 88, opened: 82 },
  ];

  const satisfactionData = [
    { name: 'Very Satisfied', value: 45 },
    { name: 'Satisfied', value: 30 },
    { name: 'Neutral', value: 15 },
    { name: 'Dissatisfied', value: 7 },
    { name: 'Very Dissatisfied', value: 3 },
  ];

  const COLORS = ['#0D9488', '#10B981', '#6EE7B7', '#F59E0B', '#EF4444'];

  const uptimeData = [
    { name: 'Week 1', uptime: 99.8 },
    { name: 'Week 2', uptime: 99.9 },
    { name: 'Week 3', uptime: 99.7 },
    { name: 'Week 4', uptime: 100 },
    { name: 'Week 5', uptime: 99.9 },
    { name: 'Week 6', uptime: 99.8 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4 text-blue-900">Help Desk Ticket Resolution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={ticketData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #ccc',
                borderRadius: '4px'
              }} 
            />
            <Legend />
            <Bar dataKey="resolved" name="Tickets Resolved" fill="#1E3A8A" />
            <Bar dataKey="opened" name="Tickets Opened" fill="#0D9488" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4 text-blue-900">Customer Satisfaction</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={satisfactionData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
            >
              {satisfactionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`${value} responses`, 'Count']}
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #ccc',
                borderRadius: '4px'
              }} 
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4 text-blue-900">System Uptime</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={uptimeData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[99, 100]} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #ccc',
                borderRadius: '4px'
              }} 
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="uptime" 
              name="System Uptime %" 
              stroke="#1E3A8A" 
              activeDot={{ r: 8 }} 
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4 text-blue-900">KPI Summary</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-500">Average Resolution Time</h4>
            <p className="text-2xl font-bold text-blue-900">4.2 hours</p>
            <span className="text-green-600 text-sm">↓ 12% from last month</span>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-500">First Response Time</h4>
            <p className="text-2xl font-bold text-blue-900">15 min</p>
            <span className="text-green-600 text-sm">↓ 25% from last month</span>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-500">SLA Compliance</h4>
            <p className="text-2xl font-bold text-blue-900">96.8%</p>
            <span className="text-green-600 text-sm">↑ 3.2% from last month</span>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-500">Customer Satisfaction</h4>
            <p className="text-2xl font-bold text-blue-900">4.7/5</p>
            <span className="text-green-600 text-sm">↑ 0.3 from last month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPIDashboard;