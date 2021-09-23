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
import funreaderIMG from "./static/funreader.jpg";

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

function FunReaderCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    slidePage();
  };

  return (
    <Card className={classes.root} style={{ boxShadow: "1px 1px black" }}>
      <a
        href="https://gitlab.com/nvalle0624/kapstoneq2"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <CardHeader title="Fun Reader - see the code" subheader="January 2021" id="cardtop" />
      </a>
      <CardMedia className={classes.media} image={funreaderIMG} title="BananaDog" />
      <CardContent style={{ height: "200px" }}>
        <a href="https://gitlab.com/nvalle0624/kapstoneq2" target="_blank" rel="noreferrer">
          GitLab
        </a>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {props.tags.map((tag) => (
            <span className="tech-span" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <Typography variant="body2" color="textSecondary" component="p" style={{ marginTop: "20px" }}>
          A spelling game web application. Users select topics to save on their profiles, and those topics are used to
          fetch dictionary API data to select words for the game. Game presents definition, part of speech and soundclip
          for pronunciation.
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
      <Collapse className="collapse" in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            <li>Reworked product owner’s initial concept for team to better execute within deadline</li>
            <li>
              Led the design and programming of nearly all front-end app functionality and back-end data relationships
            </li>
            <li>
              Successfully leveraged multiple public API’s simultaneously for accurate text and audio data for real-time
              interaction
            </li>
            <li>
              Designed game logic and functionality to work with user profiles and API requests, completing project goal
              within deadline
            </li>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default FunReaderCard;
