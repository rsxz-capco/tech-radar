import React, { useContext, useEffect, useState } from "react";
import {
  RadarContextType,
  RadarContext,
} from "../../components/RadarContextProvider/RadarContextProvider";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { icons } from "../../data/data";
import ClientProjects from "../../data/projects/ClientProjects";
import { Container } from "@material-ui/core";
import { BackButton } from "../../components/BackLink/BackLink";
import Tabs from "../../components/Tabs/Tabs";
import { Wrapper, ContentBody, Title } from "./styles/";
import Axios from "axios";

/**
 * Project is an object with a project property that is a string, a clientName property that is a
 * string, a clientImage property that is a string, a description property that is a string, and a
 * technologies property that is an array of strings.
 * @property {string} project - The name of the project.
 * @property {string} clientName - The name of the client.
 * @property {string} clientImage - The image of the client.
 * @property {string} description - A short description of the project.
 * @property technologies - Array<string>;
 */
type Project = {
  project: string;
  clientName: string;
  clientImage: string;
  description: string;
  technologies: Array<string>;
};

/* ProjectPage component that is using the useContext hook to get the technology from the
RadarContextProvider. It is also using the useState hook to set the state of the component. It is
also using the useEffect hook to fetch the client projects and the open source projects. */
const ProjectPage = () => {
  const { technology } = useContext<RadarContextType>(RadarContext);

  const [clientProjects, setClientProjects] = useState<Project[]>([]);
  const [clientProjectCount, setClientProjectCount] = useState<number>(0);
  const [ossProjectCount, setOssProjectCount] = useState<number>(0);
  const [iconRef, setIconRef] = useState<string>("");
  const [ossProjects, setOssProjects] = useState<any>([]);

  /**
   * It fetches data from the Github API, filters the data based on the technology name, and then sets
   * the state of the component
   * @param {string} techName - string - this is the name of the technology you want to search for.
   */
  const fetchOssProject = async (techName: string) => {
    const response = await Axios.get(
      "https://api.github.com/orgs/capcodigital/repos"
    );
    const data = await response.data;
    const results = data.filter(({ topics }: any) => topics.includes(techName));

    const picked =
      results &&
      results.map(({ name, topics, html_url, description }: any) => ({
        project: name.replace("-", " "),
        technologies: topics.flatMap((technology: any) =>
          technology.replaceAll("-", " ")
        ),
        githubLink: html_url,
        description: description,
      }));

    setOssProjects(picked);
    setOssProjectCount(results.length);
  };

  /**
   * If the technology is not null, filter the ClientProjects array by the technology, otherwise filter
   * the ClientProjects array by the techName.
   * @param {string} techName - string - The name of the technology that was clicked on.
   */
  const fetchClientProjects = (techName: string) => {
    let results: Project[] = [];
    let iconResult = icons.filter(
      (icon: any) => icon.name.toLowerCase() === techName
    )[0];
    let ref = iconResult ? iconResult.link : "";
    setIconRef(ref);

    results = technology
      ? ClientProjects.filter(({ technologies }) =>
          technologies.includes(technology)
        )
      : ClientProjects.filter(({ technologies }) =>
          technologies.some((element) => {
            return element.toLowerCase() === techName.toLowerCase();
          })
        );

    setClientProjects(results);
    setClientProjectCount(results.length);
  };

  /* Fetching the client projects and the open source projects. */
  useEffect(() => {
    let url = window.location.pathname.split("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fetchClientProjects(url[3]);
    fetchOssProject(url[3]);
  }, []);

  /* Returning the JSX that is rendered on the page. */
  return (
    <Wrapper>
      <Container maxWidth="md">
        <BackButton />
        <Title>Projects</Title>
        <svg className="tech-icon" viewBox={"0 0 80 80"}>
          <circle cx={40} cy={40} r={40} fill={"white"} />
          <image x={15} y={15} href={iconRef} height={50} width={50} />
        </svg>
        <ContentBody>
          <Tabs
            ossProjectCount={ossProjectCount}
            clientProjectCount={clientProjectCount}
            panelOne={
              clientProjectCount > 0 ? (
                <ProjectItem data={clientProjects} />
              ) : (
                <p>Projects not available</p>
              )
            }
            panelTwo={ossProjectCount > 0 && <ProjectItem data={ossProjects} />}
          ></Tabs>
        </ContentBody>
      </Container>
    </Wrapper>
  );
};

export default ProjectPage;
