import {
    Box,
    Grid,
    makeStyles,
    Typography,
    Divider,
    List
  } from "@material-ui/core";
  
  import React from "react";
  import { useSelector } from "react-redux";
  import TodoItem from "./TodoItem";
  
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: 20,
      padding: 20,
      backgroundColor: "rgb(92.9%,92.9%,92.9%)"
    }
  }));
  
  const TodoContainer = () => {
  
    const classes = useStyles();
  
    const data = useSelector((state) => {
      return state.todoreducer;
    });
  
    const prioritisedTodos = (function () {
      const importantTodos = [];
      const notImportantTodos = [];
  
      data.forEach((value) => {
        if (value.important) {
          importantTodos.push(value);
        } else {
          notImportantTodos.push(value);
        }
      });
  
      return [...importantTodos, ...notImportantTodos];
    })();
  
    return (
      <Box className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h5" gutterBottom style={{ textAlign: "left" }}>
              ToDo list
            </Typography>
            <Divider />
            <List>
              {prioritisedTodos.map((value) => {
                if (!value.completed) {
                  return <TodoItem key={value.id} value={value}></TodoItem>;
                } else {
                  return false;
                }
              })}
            </List>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" gutterBottom style={{ textAlign: "left" }}>
              Completed
            </Typography>
            <Divider />
            <List>
              {prioritisedTodos.map((value) => {
                if (value.completed) {
                  return <TodoItem key={value.id} value={value}></TodoItem>;
                } else {
                  return false;
                }
              })}
            </List>
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default TodoContainer;
  