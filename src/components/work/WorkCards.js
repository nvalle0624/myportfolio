import BananaDogCard from "./bananadogCard";
import FunReaderCard from "./funreaderCard";
import PortfolioCard from "./portfolioCard";
import TestCard from "./testCard";
// import bananadogIMG from "./static/bananadog.jpg";
// import funreaderIMG from "./static/funreader.jpg";

export const workCards = [
  <BananaDogCard tags={["Python", "Django", "Bootstrap", "CSS", "HTML"]} name="bananadog" />,
  <FunReaderCard
    tags={["JavaScript", "React", "Redux", "Node.js", "Express.js", "MongoDB", "HTML", "API's"]}
    name="funreader"
  />,
  <PortfolioCard tags={["JavaScript", "React", "Node.js", "HTML", "CSS"]} name="portfolio" />,
  <TestCard tags={["Python", "Django", "Bootstrap", "CSS", "HTML"]} name="testcard" />,
];
