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
import bananadogIMG from "./static/bananadog.jpg";
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

function TestCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} style={{ boxShadow: "1px 1px black" }}>
      <a
        href="https://github.com/nvalle0624/kenzie-q4-capstone"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <CardHeader title="Test Card" subheader="July 2021" id="cardtop" />
      </a>
      <CardMedia className={classes.media} image={bananadogIMG} title="BananaDog" label="image" />

      <CardContent style={{ height: "200px" }}>
        <div style={{ display: "flex", flexDirection: "wrap" }}>
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
          Description...
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
          <Typography label="contributions">
            <li>Details...</li>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default TestCard;
