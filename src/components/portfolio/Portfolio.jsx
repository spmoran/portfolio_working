import React from "react";
import "../portfolio/portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio-item-image">
            <h3>This is a portfolio item title</h3>

            <div className="portfolio_item-cta">
              <a href="https://github.com" className="btn btn-primary">
                Github
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
