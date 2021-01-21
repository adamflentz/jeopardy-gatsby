import * as React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "fontsource-roboto";

// styles
const useStyles = makeStyles({
  menu: {
    height: "auto",
    margin: "auto",
    fontFamily: "Roboto",
  },
  body: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    height: "100vh",
    backgroundImage: "url('../images/splashBase.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },
  menuButtons: {
    display: "flex",
    flexDirection: "column",
  },
  menuButton: {},
});
// markup
const IndexPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <title>Friend Jeopardy</title>
      <div className={classes.menu}>
        <h1>Friend Jeopardy!</h1>
        <div className={classes.menuButtons}>
          <Button className={classes.menuButton} color="primary" href="">
            Upload a Template
          </Button>
          <Button className={classes.menuButton} color="primary" href="">
            Create a Board
          </Button>
          <Button className={classes.menuButton} color="primary" href="">
            <Link to="/board/" style={{ textDecoration: "none" }}>
              View Example Board
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
