import React, { useState, useEffect } from "react";
import "./GitHubStats.css";
import { motion } from "framer-motion";
import { FaGithub, FaCodeBranch, FaStar, FaUsers } from "react-icons/fa";
import { useCountUp } from "../../Hooks/useCountUp";
import {
  fadeInDirection,
  staggerContainer,
  staggerItem,
  scrollReveal,
  hoverScale,
} from "../../utils/animations";

const GitHubStats = () => {
  const githubUsername = process.env.REACT_APP_GITHUB_USERNAME;
  const githubApiUrl = process.env.REACT_APP_GITHUB_API_URL;
  const contributionsApiUrl =
    process.env.REACT_APP_GITHUB_CONTRIBUTIONS_API_URL;
  const githubChartUrl = process.env.REACT_APP_GITHUB_CHART_URL;

  const [githubData, setGithubData] = useState({
    totalStars: 0,
    publicRepos: 0,
    totalContributions: 0,
    followers: 0,
    currentYear: new Date().getFullYear(),
  });
  const [loading, setLoading] = useState(true);

  // Counter animations
  const contributionsCount = useCountUp(githubData.totalContributions, 3000);
  const followersCount = useCountUp(githubData.followers, 3000);
  const starsCount = useCountUp(githubData.totalStars, 3000);
  const reposCount = useCountUp(githubData.publicRepos, 3000);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Fetch user data
        const userRes = await fetch(`${githubApiUrl}/users/${githubUsername}`);
        const userData = await userRes.json();

        // Fetch ALL repositories (handle pagination)
        let allRepos = [];
        let page = 1;
        let hasMoreRepos = true;

        while (hasMoreRepos) {
          const reposRes = await fetch(
            `${githubApiUrl}/users/${githubUsername}/repos?per_page=100&page=${page}`
          );
          const reposData = await reposRes.json();

          if (reposData.length === 0) {
            hasMoreRepos = false;
          } else {
            allRepos = [...allRepos, ...reposData];
            page++;
          }
        }

        // Calculate total stars from all repos
        const totalStars = allRepos.reduce(
          (acc, repo) => acc + repo.stargazers_count,
          0
        );

        // Fetch contribution data using GitHub's contribution API
        const currentYear = new Date().getFullYear();
        const contributionRes = await fetch(
          `${contributionsApiUrl}/${githubUsername}?y=${currentYear}`
        );
        const contributionData = await contributionRes.json();

        // Calculate total contributions for current year
        const totalContributions = contributionData.total[currentYear] || 0;

        setGithubData({
          totalStars: totalStars,
          publicRepos: userData.public_repos,
          totalContributions: totalContributions,
          followers: userData.followers,
          currentYear: currentYear,
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, [githubUsername]);

  const stats = [
    {
      icon: <FaCodeBranch />,
      label: "Total Contributions",
      value: loading ? "..." : contributionsCount.toLocaleString(),
      year: githubData.currentYear.toString(),
      gradient: "linear-gradient(135deg, #2d3e52 0%, #364559 100%)",
    },
    {
      icon: <FaUsers />,
      label: "Followers",
      value: loading ? "..." : followersCount.toString(),
      unit: "",
      gradient: "linear-gradient(135deg, #3d4e62 0%, #4a5869 100%)",
    },
    {
      icon: <FaStar />,
      label: "Total Stars",
      value: loading ? "..." : starsCount.toString(),
      unit: "",
      gradient: "linear-gradient(135deg, #35495e 0%, #3e5366 100%)",
    },
    {
      icon: <FaGithub />,
      label: "Public Repos",
      value: loading ? "..." : reposCount.toString(),
      unit: "",
      gradient: "linear-gradient(135deg, #3a4c5f 0%, #455668 100%)",
    },
  ];

  return (
    <section className="github-stats" id="github-stats">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          variants={fadeInDirection("up")}
          {...scrollReveal}
        >
          <h2 className="section-title">Github Contributions</h2>
          <p className="section-lead">
            Consistent coding activity that reflects my growth, learning, and
            hands-on experience across personal and professional projects.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="stats-grid"
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="visible"
          {...scrollReveal}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              style={{ background: stat.gradient }}
              variants={staggerItem}
              whileHover={hoverScale}
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
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Contribution Graph */}
        <motion.div
          className="contribution-graph"
          initial="hidden"
          whileInView="visible"
          variants={fadeInDirection("up", 0.4)}
          {...scrollReveal}
        >
          <h3 className="graph-title">
            <FaGithub /> Contribution Activity - {githubData.currentYear}
          </h3>
          <div className="graph-wrapper">
            <img
              src={`${githubChartUrl}/${githubUsername}`}
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
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
