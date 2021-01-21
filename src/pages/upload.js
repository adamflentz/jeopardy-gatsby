import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Category from "../components/category.js";
import Jeopardy from "../templates/jeopardy";

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
    textAlign: "center",
  },
  h1: {},
  gameBoard: { display: "flex" },
});

const getRandomInt = () => {
  return Math.floor(Math.random() * Math.floor(25)) + 1;
};

const dailyDouble1 = getRandomInt();
const dailyDouble2 = getRandomInt();
while (dailyDouble2 === dailyDouble1) {
  dailyDouble2 = getRandomInt();
}

const dailyDoubles = [dailyDouble1, dailyDouble2];

// markup
const Upload = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>Upload Page</h1>
    </div>
  );
};

export default Upload;
