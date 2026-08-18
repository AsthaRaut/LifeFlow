import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { fetchMockAnalytics } from '../services/api';
import { Loading } from '../components/Loading';

export default function Analytics() {
  const { data, loading } = useFetch(fetchMockAnalytics);

  if (loading) return <Loading />;

  return (
    <div>
      <h1>Analytics Overview</h1>
      <div className="analytics-box">
        <h3>Efficiency Score: {data.efficiencyScore}%</h3>
        <p>Based on your weekly habit consistency & task completion rate.</p>
      </div>

      <div className="bar-chart">
        {data.weeklyActivity.map(item => (
          <div key={item.day} className="bar-column">
            <div className="bar-fill" style={{ height: `${item.count * 12}px` }}>{item.count}</div>
            <span>{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}