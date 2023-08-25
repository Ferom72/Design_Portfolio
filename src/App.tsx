import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import data from "./info/info.json";
import Home from "./pages/Home";
import ProjectTemplate from "./pages/ProjectTemplate";
import Contact from "./pages/Contact";

interface ProjectData {
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
}

function App() {
  const [projectData, setProjectData] = useState<ProjectData[]>([]);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );
  const naviagte = useNavigate();

  useEffect(() => {
    function getData() {
      setProjectData(data as ProjectData[]);
    }
    getData();
  }, [data]);

  function getPage(value: string) {
    setSelectedProject(
      projectData.find((project) => project.page === value) as ProjectData
    );
    naviagte("/project");
    return selectedProject || null;
  }

  return (
    <Routes>
      <Route path="/" element={<Home pageSelection={getPage} />} />
      <Route
        path="/project"
        element={<ProjectTemplate info={selectedProject} />}
      />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
