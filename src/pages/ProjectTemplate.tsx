import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import "../pages/MyStyles/ProjectTemplate.css";
import Images from "../images";
import ReactPlayer from "react-player";

interface ProjectProps {
  info: {
    page: string;
    challenge: string;
    solution: string;
    wireframes: string[];
    midfi: string[];
    mobileusabletest: string;
    thinkaloud: string[];
    insights: string[];
    insightimg: string;
    userflow: string;
    hifi: string[];
    finaldesign: string;
  } | null;
}

interface ImagesProps {
  id: number;
  page: string;
  hero: string;
  wireframes: string[];
  midfi: string[];
  mobileusabletest: string;
  insightimg: string;
  userflow: string;
  hifi: string[];
  finaldesign: string;
}

const ProjectTemplate: React.FC<ProjectProps> = ({ info }) => {
  const [images, setImages] = useState<ImagesProps | null>(null);

  useEffect(() => {
    function getImages() {
      Images.map((item) => {
        if (item.page === info?.page) {
          setImages(item);
        }
      });
    }
    getImages();
  }, [info]);

  return (
    <div>
      <Nav />
      <div className="purpose__outercontainer">
        <div className="hero__container_info">
          <div className="hero__outercontainer">
            <div>
              {info?.page === "Movie" ? (
                <img className="movie__hero" src={images?.hero} alt="hero" />
              ) : (
                <img className="hero__image" src={images?.hero} alt="hero" />
              )}
            </div>
          </div>
          <div className="purpose__innercontainer">
            <div className="purpose__text">Challenge: {info?.challenge}</div>
            <div className="purpose__text">Solution: {info?.solution}</div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="container__title">Design Process</h3>
        <h5 className="sub__titles">WireFrames</h5>
        <div className="design__outercontainer">
          <div className="design__innercontainer">
            {images?.wireframes.map((items, index) => {
              return (
                <img
                  className="images__template"
                  key={index}
                  src={items}
                  alt="wire frames"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <h5 className="sub__titles">Mid-Fi Screen Flow</h5>
        <div className="design__outercontainer">
          <div className="design__innercontainer">
            {images?.midfi.map((items, index) => {
              return (
                <img
                  className="images__template"
                  key={index}
                  src={items}
                  alt="mid-fi"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <h3 className="container__title">Usability Testing</h3>
        <div className="usability__outercontainer">
          <div className="usability__grid">
            <ReactPlayer
              className="video__usable"
              width="500px"
              height="200px"
              url={images?.mobileusabletest}
              playing={true}
              loop={true}
            />
            <div>
              <h6>Think Aloud Cognitive Walkthrough</h6>
              <ul>
                {info?.thinkaloud.map((items, index) => {
                  return <li key={index}>{items}</li>;
                })}
              </ul>
            </div>
            <div>
              <h6>Insights</h6>
              <ul>
                {info?.insights.map((items, index) => {
                  return <li key={index}>{items}</li>;
                })}
              </ul>
            </div>
            <div className="insightImg_container">
              <img className="insightImg__template" src={images?.insightimg} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="container__title">Final Iteration</h3>
        <h5 className="sub__titles">User Flow</h5>
        <div className="design__outercontainer">
          <div className="design__innercontainer">
            <img
              className="images__template"
              src={images?.userflow}
              alt="userflow"
            />
          </div>
        </div>
      </div>
      <div>
        <h5 className="sub__titles">Hi-Fi Screen Flow</h5>
        <div className="design__outercontainer">
          <div className="design__innercontainer">
            {images?.hifi.map((item, index) => {
              return (
                <img className="images__template" key={index} src={item} />
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <h3 className="container__title">Final Design</h3>
        <div className="design__outercontainer">
          <div className="design__innercontainer">
            <ReactPlayer
              url={images?.finaldesign}
              controls={false}
              playing={true}
              loop={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplate;
