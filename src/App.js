import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  Container,
  Paper
} from "@material-ui/core";
import TodoAdder from "./components/TodoAdder";
import TodoContainer from "./components/TodoContainer";

const useStyles = makeStyles((theme) => ({
  root: {},
  appContainer: {
    paddingLeft: 100,
    paddingRight: 100,
    marginTop: 100
  },
  wrapper: {
    textAlign: "center",
    width: "100%"
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div>
        <AppBar>
          <Toolbar>
            <IconButton edge="start" color="inherit">
              {/* <img src="logo.png" alt="user logo" style={{ width: "40%" }} /> */}
              <Typography variant="h4" style={{ marginLeft: "20px" }}>
                It's my Todo
              </Typography>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Container className={classes.appContainer}>
          <Paper className={classes.wrapper} elevation={0}>
            <TodoAdder />
            <TodoContainer />
          </Paper>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default App;
