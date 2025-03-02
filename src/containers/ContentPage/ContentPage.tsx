import React, { useContext, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import {
  RadarContextType,
  RadarContext,
} from "../../components/RadarContextProvider/RadarContextProvider";
import BackLink from "../../components/BackLink/BackLink";
import { icons, technologies } from "../../data/data";
import {
  SubContent,
  ExampleContent,
  ReferenceContent,
} from "../../components/Content/Content";
import { TechContentType } from "../../data/content";
import techContent from "../../data/content/index";
import images from "../../images";
import {
  Wrapper,
  ContentWrapper,
  ContentBody,
  Title,
  Divider,
  StyledWrapper,
} from "./styles/";
import ContentNavButton from "../../components/ComponentNavButton/ContentNavButton";
import {
  getNextItem,
  getPrevItem,
  filterClientProjects,
} from "../../helpers/helpers";
import ClientProjectLink from "../../components/ProjectPageLink/ProjectPageLink";
import Axios from "axios";
import ClientProjects from "../../data/projects/ClientProjects";

/* CategoryPage component that is used to display the content of a technology. */
const CategoryPage = () => {
  const { category, technology, setCategory, setTechnology } =
    useContext<RadarContextType>(RadarContext);
  const [content, setContent] = useState<TechContentType | null>(null);
  const [imageLink, setImageLink] = useState("");
  const [ossProjectCount, setOssProjectCount] = useState<number>(0);
  const [clientProjectCount, setClientProjectCount] = useState<number>(0);

  /**
   * When the user clicks on a button, set the category and technology state variables to the values
   * passed in as arguments.
   * @param {string} categoryName - string - The name of the category that was clicked on.
   * @param {string} techName - string - the name of the technology that was clicked
   */
  const handleClick = (categoryName: string, techName: string) => {
    setCategory(categoryName);
    setTechnology(techName);
  };

  /**
   * It fetches data from the GitHub API, filters the data based on a given technology name, and sets
   * the state of the number of open source projects that use that technology
   * @param {string} techName - The name of the technology you want to search for.
   */
  const fetchOssProject = async (techName: string) => {
    const response = await Axios.get(
      "https://api.github.com/orgs/capcodigital/repos"
    );
    const data = await response.data;
    const results = data.filter(({ topics }: any) => topics.includes(techName));
    setOssProjectCount(results.length);
  };

  /**
   * Get the client projects that match the tech name and set the client project count to the length of
   * the results.
   * @param {string} techName - The name of the technology that you want to filter by.
   */
  const getClientProjects = (techName: string) => {
    const results = filterClientProjects(ClientProjects, techName);
    setClientProjectCount(results.length);
  };

  /* A React hook that is called after the component is mounted. It is used to set the state of the
  component. */
  useEffect(() => {
    let url = window.location.pathname.split("/");

    // Find category and tech name in technologies data
    let categoriesAndTechnologies =
      technologies.filter(
        ({ categoryName }) =>
          url[2] && categoryName.toLowerCase() === url[2].replace(/-/g, " ")
      )[0] || technologies[0];

    let technologyFromUrl =
      categoriesAndTechnologies.technologies.filter(
        (tech: string) =>
          url[3] && tech.toLowerCase() === url[3].replace(/-/g, " ")
      )[0] || technologies[0].technologies[0];

    let categoryFromUrl = categoriesAndTechnologies.categoryName;

    let icon = icons.filter(
      (el: any) => el.name.toLowerCase() === technologyFromUrl.toLowerCase()
    )[0]!;
    // Filter the content for specific tech
    let content = techContent.filter(
      ({ technology }) => technology === technologyFromUrl
    )[0];

    setContent(content);
    setImageLink(icon.link);
    setTechnology(technologyFromUrl);
    setCategory(categoryFromUrl);
    fetchOssProject(technologyFromUrl.toLowerCase());
    getClientProjects(technologyFromUrl.toLowerCase());

    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [technology, category, setCategory, setTechnology]);

  let nextTechnology = getNextItem(technology);

  let previousTechnology = getPrevItem(technology);

  let filteredNext =
    technology &&
    technologies.filter(({ technologies }) =>
      technologies.includes(nextTechnology)
    )[0];
  let nextCategory = filteredNext ? filteredNext.categoryName : "Devops";

  let filteredPrev =
    technology &&
    technologies.filter(({ technologies }) =>
      technologies.includes(previousTechnology)
    )[0];
  let previousCategory = filteredPrev ? filteredPrev.categoryName : "Mobile";

  /* Returning the JSX that is rendered on the page. */
  return (
    <Wrapper category={category}>
      <img
        className="background"
        src={(images as any)[category]}
        alt={category}
        width={650}
        height={650}
      />
      {content && (
        <ContentWrapper>
          <Grid container justifyContent="space-between">
            <Grid item>
              <BackLink category={category} />
            </Grid>
            <Grid item>
              <StyledWrapper showMobileLink>
                <ClientProjectLink
                  onClick={() => handleClick(category, technology)}
                />
              </StyledWrapper>
            </Grid>
          </Grid>
          <div className="content-head">
            <div>
              <Title className={`title-${technology}`}>{technology}</Title>
              <a href={content.docsLink} target="_blank" rel="noreferrer">
                <svg className="icon" viewBox={"0 0 80 80"}>
                  <circle cx={40} cy={40} r={40} fill={"white"} />
                  <image
                    x={15}
                    y={15}
                    href={imageLink}
                    height={50}
                    width={50}
                  />
                </svg>
              </a>
            </div>
            {(ossProjectCount !== 0 || clientProjectCount !== 0) && (
              <StyledWrapper>
                <ClientProjectLink
                  onClick={() => handleClick(category, technology)}
                />
              </StyledWrapper>
            )}
          </div>
          <ContentBody>
            <div
              className="content-intro"
              dangerouslySetInnerHTML={{ __html: content.intro }}
            />
            <SubContent contentData={content.content} />
            {content.examples.length > 0 && (
              <ExampleContent contentData={content.examples} />
            )}

            {content.reference.length > 0 && (
              <ReferenceContent contentData={content.reference} />
            )}

            <Divider />
            <ContentNavButton
              onClick={() => setTechnology(previousTechnology)}
              previousTechnology={previousTechnology}
              nextTechnology={nextTechnology}
              previousCategory={previousCategory}
              nextCategory={nextCategory}
              next={false}
            />
            <ContentNavButton
              onClick={() => setTechnology(nextTechnology)}
              previousTechnology={previousTechnology}
              nextTechnology={nextTechnology}
              previousCategory={previousCategory}
              nextCategory={nextCategory}
              next={true}
            />
          </ContentBody>
        </ContentWrapper>
      )}
    </Wrapper>
  );
};

export default CategoryPage;
