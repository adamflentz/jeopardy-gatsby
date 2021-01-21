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
const Board = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <title>Game Board</title>
      <div className={classes.menu}>
        <h1>Jeopardy Title</h1>
        <h3>{dailyDoubles.join()}</h3>
        <div className={classes.gameBoard}>
          <Category
            className={classes.category}
            category={Jeopardy.rounds[0].categories[0]}
            categoryNumber="1"
            dailyDoubles={dailyDoubles}
          />
          <Category
            className={classes.category}
            category={Jeopardy.rounds[0].categories[1]}
            categoryNumber="2"
            dailyDoubles={dailyDoubles}
          />
          <Category
            className={classes.category}
            category={Jeopardy.rounds[0].categories[2]}
            categoryNumber="3"
            dailyDoubles={dailyDoubles}
          />
          <Category
            className={classes.category}
            category={Jeopardy.rounds[0].categories[3]}
            categoryNumber="4"
            dailyDoubles={dailyDoubles}
          />
          <Category
            className={classes.category}
            category={Jeopardy.rounds[0].categories[4]}
            categoryNumber="5"
            dailyDoubles={dailyDoubles}
          />
        </div>
      </div>
    </div>
  );
};

export default Board;
