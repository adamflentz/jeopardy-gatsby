import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Question from "./question.js";

const useStyles = makeStyles({
  category: { display: "flex", flexDirection: "column", padding: "20px" },
});

export default function Category(props) {
  const classes = useStyles();

  const checkDailyDouble = (doubleValue) => {
    return (
      doubleValue <= props.categoryNumber * 5 &&
      doubleValue > (props.categoryNumber - 1) * 5
    );
  };

  const dailyDoublesArray = props.dailyDoubles
    .filter((element) => {
      return checkDailyDouble(element);
    })
    .map((element) => {
      return element % 5;
    });

  const dailyDouble = (questionNumber) => {
    if (dailyDoublesArray !== undefined) {
      return dailyDoublesArray.some(
        (element) => questionNumber % 5 === element
      );
    }
    return false;
  };

  return (
    <div className={classes.category}>
      <h3>{props.category.categoryTitle}</h3>
      <Question
        question={props.category.answers[0]}
        value="100"
        dailyDouble={dailyDouble(1)}
      ></Question>
      <Question
        question={props.category.answers[1]}
        value="200"
        dailyDouble={dailyDouble(2)}
      ></Question>
      <Question
        question={props.category.answers[2]}
        value="300"
        dailyDouble={dailyDouble(3)}
      ></Question>
      <Question
        question={props.category.answers[3]}
        value="400"
        dailyDouble={dailyDouble(4)}
      ></Question>
      <Question
        question={props.category.answers[4]}
        value="500"
        dailyDouble={dailyDouble(5)}
      ></Question>
    </div>
  );
}
