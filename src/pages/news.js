import * as React from "react";
import { Link } from "gatsby";
import Scroll from "../components/scroll";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Seo from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";
import "../components/gridder.css";

import Trianges from "../images/triangles.svg";
// import Neural from "../images/neural.webp"
// import TedX from "../images/james-tedtx.webp"
// import Cutlure from "../images/culture-by-design.webp"
// import Complexity from "../images/complexity.webp"
// import IRIS from "../images/iris.webp"
// import Teams from "../images/teams.webp"
// import Wiki from "../images/wiki.webp"
import SmallerTeams from "../images/smallerteams.webp"
import Doomed from "../images/doomed.webp"
import TooBig from "../images/toobig.webp"
import WSJ from "../images/wsj.webp"
import GreatMinds from "../images/greatminds.webp"
import BBC from "../images/bbc.webp"
import FastCo from "../images/fastcompany.webp"
import Wired from "../images/wired.webp"
import HBR from "../images/hbr.webp"
import Forbes2 from "../images/forbes2.webp"
import LeMonde from "../images/lamonde.webp"
import DieZeit from "../images/diezeit.webp"
import Nature from "../images/nature.webp"
import Science from "../images/science.webp"
import JoeRogan from "../images/joerogan.webp"


const newsItems = [
  
    {
        "title": "New Yorker",
        "image": Doomed,
        "url": "https://www.newyorker.com/magazine/2024/06/10/are-we-doomed-heres-how-to-think-about-it"
    },
    {
        "title": "NYT",
        "image": TooBig,
        "url": "https://www.nytimes.com/2019/02/13/science/science-research-psychology.html"
    },
    {
        "title": "Atlantic",
        "image": SmallerTeams,
        "url": "https://www.theatlantic.com/science/archive/2019/02/why-small-science-still-matters/582685/"
    },
    {
        "title": "Wall Street Journal",
        "image": WSJ,
        "url": "https://www.wsj.com/articles/SB10001424052702304066504576341280447107102"
    },
    {
        "title": "The Economist",
        "image": GreatMinds,
        "url": "https://www.economist.com/science-and-technology/2008/07/17/great-minds-think-too-much-alike"
    },
    {
        "title": "BBC",
        "image": BBC,
        "url": "https://www.sciencefocus.com/news/algorithm-predict-future-crimes-90-accuracy-heres-why-creator-thinks-tech-wont-be-abused"
    },
    {
        "title": "Fast Company",
        "image": FastCo,
        "url": "https://www.fastcompany.com/90451983/science-reveals-the-tipping-point-between-success-and-failure"
    },
    {
        "title": "Wired",
        "image": Wired,
        "url": "https://www.wired.com/2008/07/is-the-internet/"
    },
    {
        "title": "HBR",
        "image": HBR,
        "url": "https://hbr.org/2019/02/research-when-small-teams-are-better-than-big-ones"
    },
    {
        "title": "Forbes",
        "image": Forbes2,
        "url": "https://www.forbes.com/sites/billfischer/2019/02/15/it-takes-more-than-members-to-make-a-team/?sh=2c3a41946016"
    },
    {
        "title": "Le Monde",
        "image": LeMonde,
        "url": "https://www.lemonde.fr/sciences/article/2019/02/18/en-science-les-plus-petites-equipes-sont-les-plus-innovantes_5424938_1650684.html"
    },
    {
        "title": "Der Zeit",
        "image": DieZeit,
        "url": "https://www.zeit.de/wissen/2014-02/wissenschaft-james-evans-forschung-computer"
    },
    {
        "title": "Nature",
        "image": Nature,
        "url": "https://www.nature.com/articles/d41586-023-03596-0"
    },
    {
        "title": "Science",
        "image": Science,
        "url": "https://www.science.org/content/article/larger-teams-worsen-academic-career-prospects"
    },
    {
        "title": "The Joe Rogan Experience",
        "image": JoeRogan,
        "url": "https://drive.google.com/file/d/1lTfWSU7KUvQoTSMAO-4AGS7mdaxfUf51/view?usp=sharing"
    }
];

const News = () => (
  <Layout>
    <Nav />
   
    <Container fluid id="news-header">
      <div className="background"></div>
      <Container>
      

        <Row>
        
          <Col xs={12} sm={9}>
            <h1>Knowledge Lab News</h1>
            <p>
            Our research has been cited in a wide variety of news outlets. On topics ranging from the future of science to the fate of humanity, the work at Knowledge Lab generates insight and gives interpretation to timely questions of public concern. You can learn more below about the ways that Knowledge Lab’s research is making the news.
            </p>
          </Col>
          <Col sm={3} className="d-none d-sm-block">
            <img src={Trianges} alt="connected triagle shapes" />
          </Col>
          
          
        </Row>

      </Container>
    </Container>

    <Container fluid style={{width: "100%", maxWidth: "1400px"}}>
          <Row>
          <Scroll  />
          </Row>
        
        </Container>

   
    
   
    <Container fluid id="news">
      <Container>
        <Row>
          {newsItems.map((item) => {
            return (
              <>
              <Col xs={12} sm={3} className="h-100 news-item">
              <Row>

                <Col xs={3} sm={12} className="d-sm-block">
                <a href={item.url} target="_blank" ><img src={item.image} alt={item.title}/></a>
                  {/* <img src="https://placeholder.com/400x200" /> */}
                </Col>

                {/* <Col xs={9} sm={12}>
                  <h3><a href={item.url} target="_blank" >{item.title}</a></h3>
                
                </Col> */}
                </Row>
                
                   
               </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </Container>

  </Layout>
  
);

export const Head = () => <Seo title="News for Knowledge Lab" />;

export default News;
