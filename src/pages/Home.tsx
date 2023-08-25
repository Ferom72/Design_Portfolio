import Nav from "../components/Nav";
import React from "react";
import "./MyStyles/Home.css";

interface HomeProps {
  pageSelection: (value: string) => void;
}

const Home: React.FC<HomeProps> = ({ pageSelection }) => {
  function handleClick(value: string) {
    pageSelection(value);
  }

  return (
    <div className="home">
      <Nav />
      <div className="home__outercontainer">
        <div className="home__grid">
          <div
            className="cards"
            onClick={() => {
              handleClick("Bank");
            }}
          >
            <h3>
              Oak National <br />
              Bank
            </h3>
          </div>
          <div
            className="cards"
            onClick={() => {
              handleClick("Movie");
            }}
          >
            <h3>MyTickets</h3>
          </div>
        </div>
      </div>

      <div className="home__outercontainer">
        <div>
          <div
            className="cards"
            onClick={() => {
              handleClick("GradJobs");
            }}
          >
            <h3>Gradjobs</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
