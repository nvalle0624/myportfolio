import BananaDogCard from "./bananadogCard";
import FunReaderCard from "./funreaderCard";
import PortfolioCard from "./portfolioCard";
import TestCard from "./testCard";
import TestCard2 from "./testCard2";
import Spacetagram from "./spacetagramCard";
// import bananadogIMG from "./static/bananadog.jpg";
// import funreaderIMG from "./static/funreader.jpg";

export const workCards = [
  <BananaDogCard tags={["Python", "Django", "Bootstrap", "CSS", "HTML"]} name="bananadog" />,
  <FunReaderCard
    tags={["JavaScript", "React", "Redux", "Node.js", "Express.js", "MongoDB", "HTML", "API's"]}
    name="funreader"
  />,
  <PortfolioCard tags={["JavaScript", "React", "Node.js", "HTML", "CSS"]} name="portfolio" />,
  <Spacetagram tags={["JavaScript", "Python", "Django", "CSS", "API's", "RESTframework", "HTML"]} name="spacetagram" />,
  <TestCard tags={["Python", "Django", "Postgresql", "RESTframework", "API's", "SQL"]} name="testcard" />,
  <TestCard2 tags={["JavaScript", "NoSql", "MongoDB", "Node.js"]} name="testcard2" />,
];
