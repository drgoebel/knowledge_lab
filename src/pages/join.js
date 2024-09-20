import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Nav from "../components/nav";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import "../components/gridder.css";
import Trianges from "../images/triangles.svg";

const sampleCareers = [
  {
    title: "Outreach Director and Senior Project Manager",
    text:
      "The job leads the administration of academic, research, clinical or administrative programs. The Senior Project Manager and Outreach Director will be the lead administrator supporting the broader impacts and outreach associated with the collaborative NSF-funded research project “Global Observatory and Virtual Laboratory for Science & Technology Advance.” This role will manage the broader activities and outcomes of this project, tracking progress, building reports, and keeping leadership apprised of setbacks or other concerns. This role will be the key coordinator and contact for project activities including the robust outreach programs for under-represented STEM students. They will create and manage a communication strategy for public-facing outreach, and an internal communication strategy for the collaborators of the project. They will also build relationships with community partners and educational organizations who will be critical to outreach program success. The role will be an integral part of the success of this project, and will lead outreach-related goal setting, implementation, and other strategic efforts to build and report on the project’s public-facing impacts. ",
    url: "https://uchicago.wd5.myworkdayjobs.com/en-US/External/details/Outreach-Director---Senior-Project-Manager_JR27131?q=project%20manager",
    badge: false,
  },
  {
    title: "Knowledge Lab Postdoctoral Scholars",
    text:
      "The Knowledge Lab is inviting applications for several postdoctoral scholar positions. We are seeking passionate researchers eager to explore the intersection of artificial intelligence, science, technology, and policy. This is an opportunity to join a dynamic team at the forefront of research and innovation. If you are ready to make significant contributions to your field and collaborate with top-tier scholars, we encourage you to review the available positions and apply.",
    url: "https://form.jotform.com/241295631499062",
  },


];


const SecondPage = () => (
  <Layout>
    <Nav />
    
    <Container fluid id="careers-header">
      <div className="background"></div>
      <Container>
        <Row>
          <Col xs={12} sm={8}>
            <h1>Join Knowledge Lab</h1>
            <p>
            There are many ways to be a part of Knowledge Lab. Current positions are advertised below, and we are always open to proposals for collaboration with students, researchers (or artificial intelligences) who share our intellectual vision. We consistently seek new collaborations with interested individuals working in industry, non-profits, universities, and government. Please <a href="https://form.jotform.com/242426215800043" target="_blank">get in touch if you want to join, visit, or connect with our team!</a>
            </p>
          </Col>
          <Col sm={4} >
            <div className="apply-now"><a href="https://form.jotform.com/241295631499062" target="_blank">Apply to Knowledge Lab</a></div>
            <div className="join-now"><a href="https://form.jotform.com/242426215800043" target="_blank">Connect with KLab</a></div>
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid id="careers">
      <Container>
        <Row>
          <Col xs={12} md={8}>
            {/* <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link> */}
            {sampleCareers.map((career) => {
              return (
                <>
                  <h2>{career.title}</h2>
                  <p>{career.text}</p>
                  <a href={career.url} target="_blank">
                    <button>Learn More and Apply <FontAwesomeIcon icon={faCaretRight}/></button>
                  </a>
                </>
              );
            })}
          </Col>
          <Col xs={12} md={4} className="sidebar">
            <div>
              <h3>Application Instructions for All Applicants</h3>
              <ol>
                <li>
                  Cover letter, describing your interest in and qualifications
                  for pursuing interdisciplinary research
                </li>
                <li>Curriculum vitae (including publications list)</li>
                <li>
                  Two published papers or equivalent writing samples that best
                  demonstrate your expertise and fit for the position
                </li>
                <li>
                  Research statement (2-4 pages) that outlines your research
                  achievements and agenda, as well as your service and outreach
                  activities (optional)
                </li>
                <li>
                  Contact information for three or more scholars who know your
                  work and are willing to write letters of reference
                </li>
                <li>
                  An example (e.g., GitHub links or code in any language) of
                  working software you have written (optional) Link to a
                  professional webpage and Google Scholar page (optional)
                </li>
                <li>
                  Link to a professional webpage and Google Scholar page
                  (optional)
                </li>
              </ol>
            </div>
            <div>
              <h3>University Information</h3>
              <ol>
                <li>
                  All University departments and institutes are charged with
                  building a faculty from a diversity of backgrounds and with
                  diverse viewpoints; with cultivating an inclusive community
                  that values freedom of expression; and with welcoming and
                  supporting all their members. We seek a diverse pool of
                  applicants who wish to join an academic community that places
                  the highest value on rigorous inquiry and encourages diverse
                  perspectives, experiences, groups of individuals, and ideas to
                  inform and stimulate intellectual challenge, engagement, and
                  exchange. The University’s Statements on Diversity are at
                  https://provost.uchicago.edu/statements-diversity.
                </li>
                <li>
                  The University of Chicago is an Affirmative Action/Equal
                  Opportunity/Disabled/Veterans Employer and does not
                  discriminate on the basis of race, color, religion, sex,
                  sexual orientation, gender, gender identity, national or
                  ethnic origin, age, status as an individual with a disability,
                  military or veteran status, genetic information, or other
                  protected classes under the law. For additional information
                  please see the University’s Notice of Nondiscrimination. Job
                  seekers in need of a reasonable accommodation to complete the
                  application process should call 773-834- 3988 or
                  email equalopportunity@uchicago.edu with their request.”
                </li>
              </ol>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  </Layout>
);

export const Head = () => <Seo title="Join Knowledge Lab" />;

export default SecondPage;
