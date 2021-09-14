import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import portfolioImage from "./static/portfolioImage.jpg";

// per material ui docs
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

function slidePage() {
  const slideVar = setInterval(() => {
    window.scrollBy({
      top: 1000,
      left: 0,
      behavior: "smooth",
    });
    window.clearInterval(slideVar);
  }, 350);
}

function PortfolioCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    slidePage();
  };

  return (
    <Card className={classes.root} style={{ boxShadow: "1px 1px black" }}>
      <a href={"/"} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
        <CardHeader title="My Portfolio" subheader="Aug 2021" id="cardtop" />
      </a>
      <CardMedia className={classes.media} image={portfolioImage} title="Portfolio" label="image" />

      <CardContent style={{ height: "200px" }}>
        <a href="https://github.com/nvalle0624/myportfolio" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {props.tags.map((tag) => (
            <span className="tech-span" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ marginTop: "20px" }}
          label="description"
        >
          A React web app portfolio. Uses Nodemailer in a small Express backend to send mail, Howler.js to play and
          control audio, and React-pdf to present resume. Select posters in the banner image or select correspnding
          buttons to filter through projects based on tech tags.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography label="contributions"></Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default PortfolioCard;
