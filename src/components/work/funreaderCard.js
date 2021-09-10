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

function FunReaderCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} style={{ boxShadow: "1px 1px black" }}>
      <a
        href="https://gitlab.com/nvalle0624/kapstoneq2"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <CardHeader title="Fun Reader" subheader="January 2021" id="cardtop" />
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
            <li>Spearheaded development of custom CRM platform for dog trainer’s business in team of 3</li>
            <li>
              Planned project’s features, presented ideas through organized and detailed outlines, receiving glowing
              feedback from team
            </li>
            <li>Created development roadmap and schedule, delegated tasks, providing clarity for team success</li>
            <li>Led the design and programming of all front-end app functionality and back-end data relationships</li>
            <li>
              Developed features such as: social media style profiles, photo and video uploads, calendar, scheduling,
              full profile and report editing, auto-report generation, and private messaging
            </li>
            <li>
              Maintained correspondence with team members via detailed daily briefings, collaborated in shared virtual
              workspaces, keeping team updated and on schedule
            </li>
            <li>Initiated preparations for checkpoints, created scripts and presentation structure </li>
            <li>Completed capstone well within 2 week deadline</li>
            <li>
              Selected as a featured project for cohort after surpassing project requirements and course expectations
              with exemplary app and presentation
            </li>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default FunReaderCard;
