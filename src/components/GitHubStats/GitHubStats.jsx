import React from "react";
import "./GitHubStats.css";
import { FaGithub, FaCodeBranch, FaStar, FaFire } from "react-icons/fa";

const GitHubStats = () => {
  const githubUsername = "SohelTanbir"; // Your GitHub username

  const stats = [
    {
      icon: <FaCodeBranch />,
      label: "Total Contributions",
      value: "1,638",
      year: "2023",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      icon: <FaFire />,
      label: "Current Streak",
      value: "45",
      unit: "days",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      icon: <FaStar />,
      label: "Total Stars",
      value: "150+",
      unit: "",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      icon: <FaGithub />,
      label: "Public Repos",
      value: "50+",
      unit: "",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
  ];

  return (
    <section className="github-stats" id="github-stats">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Github Contributions</h2>
          <p className="section-lead">
            My coding journey and open-source contributions showcasing
            consistent development activity and commitment to learning.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card"
              style={{ background: stat.gradient }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <h3 className="stat-value">
                  {stat.value}
                  {stat.unit && <span className="stat-unit"> {stat.unit}</span>}
                </h3>
                <p className="stat-label">{stat.label}</p>
                {stat.year && <span className="stat-year">in {stat.year}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Contribution Graph */}
        <div className="contribution-graph">
          <h3 className="graph-title">
            <FaGithub /> Contribution Activity
          </h3>
          <div className="graph-wrapper">
            <img
              src={`https://ghchart.rshah.org/${githubUsername}`}
              alt="GitHub Contribution Chart"
              className="github-chart"
            />
          </div>

          {/* GitHub Profile Link */}
          <div className="github-link">
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="view-profile-btn"
            >
              <FaGithub /> View Full Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
