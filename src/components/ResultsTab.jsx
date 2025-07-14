import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faHistory } from '@fortawesome/free-solid-svg-icons';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ResultsTab({ votes, candidates }) {
  const totalVotes = Object.values(votes).reduce((sum, count) => sum + count, 0);

  const chartData = {
    labels: Object.keys(candidates),
    datasets: [{
      label: 'Votes',
      data: Object.keys(candidates).map(name => votes[name] || 0),
      backgroundColor: '#2ecc71',
    }],
  };
  
  const chartOptions = {
    responsive: true,
    plugins: { legend: { display: false }, title: { display: true, text: 'Current Vote Count' } },
    scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } },
  };

  return (
    <div className="tab-content" style={{ display: 'block' }}>
      <div className="results-chart">
        <h3 className="mb-4"><FontAwesomeIcon icon={faChartPie} /> Live Election Results</h3>
        <Bar options={chartOptions} data={chartData} />
        <div className="mt-4">
          <h5>Vote Distribution</h5>
          {Object.keys(candidates).map(name => {
            const voteCount = votes[name] || 0;
            const percentage = totalVotes > 0 ? Math.round((voteCount / totalVotes) * 100) : 0;
            return (
              <div className="mb-3" key={name}>
                <div className="d-flex justify-content-between mb-1">
                  <span>{name}</span>
                  <span>{voteCount} votes ({percentage}%)</span>
                </div>
                <div className="progress" style={{ height: '20px' }}>
                  <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="results-chart mt-4">
        <h4 className="mb-3"><FontAwesomeIcon icon={faHistory} /> Voting Statistics</h4>
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center p-3 mb-3">
              <h5>Total Votes</h5><h3 id="total-votes">{totalVotes}</h3>
            </div>
          </div>
          {/* These are placeholders as we don't have total student data */}
          <div className="col-md-4">
            <div className="card text-center p-3 mb-3">
              <h5>Voted Students</h5><h3 id="voted-students">{totalVotes}</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center p-3 mb-3">
              <h5>Remaining</h5><h3 id="remaining-students">?</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ResultsTab;