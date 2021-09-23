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
import spacetagramIMG from "./static/spacetagramIMG.png";
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

function Spacetagram(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    slidePage();
  };

  return (
    <Card className={classes.root} style={{ boxShadow: "1px 1px black" }}>
      <a href={"https://spacetagram.xyz/"} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
        <CardHeader title="Spacetagram" subheader="Sept 2021" id="cardtop" />
      </a>
      <CardMedia className={classes.media} image={spacetagramIMG} title="Spacetagram" label="image" />

      <CardContent style={{ height: "200px" }}>
        <a href="https://github.com/nvalle0624/spacetagram" target="_blank" rel="noreferrer">
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
          A small search app made for technical challenge. Uses a small Python and Django backend to store "likes" for
          search results from the NASA images API. It also uses Javascript to handle front end interactions. Each image
          returns with its date, description, and a seperate link to the photo. Users can like and unlike photos but
          there are no user accounts, so like/unlike status is universal.
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
            <li>Solo project, built and deployed within less than 4 afternoons</li>
            <li>
              Added extra features not listed in front-end tech challenge, such as persistent storage for likes and
              unlikes and scrolling
            </li>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Spacetagram;
