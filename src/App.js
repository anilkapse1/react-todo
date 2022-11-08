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
import { useSelector } from "react-redux";
import Badge from '@mui/material/Badge';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

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
  const totalList = useSelector((state)=>{
    return state.todoreducer;
  })

  let list;
    if(totalList.length > 0){
      list =
        <Badge badgeContent={totalList.length} color="primary">
        <FormatListBulletedIcon/>
      </Badge>
      
    }else{
      list= 
      <HourglassEmptyIcon/>
    }
  

  return (
    <React.Fragment>
      <div>
        <AppBar>
          <Toolbar>
              <Typography variant="h4" style={{ marginLeft: "20px",marginRight:'10px' }}>
                ToDo for a Day:
              </Typography>
              {
                list           
              }
              
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
