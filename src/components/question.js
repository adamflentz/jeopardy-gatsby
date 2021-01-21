import * as React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

export default function Question(props) {
  const useStyles = makeStyles({
    gameButton: {
      fontSize: props.dailyDouble ? "1.2rem" : "1rem",
    },
    question: {},
  });
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.question}>
      <Button
        className={classes.gameButton}
        color="primary"
        onClick={handleOpen}
      >
        {props.value}
      </Button>
    </div>
  );
}
