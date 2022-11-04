import { Box, Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addedittodo, addTodo, remvoeeditid } from "../redux/actions";


const TodoAdder = () => {
  const [title, setTitle] = useState("");
  const handleTextChange = (e) => {
    setTitle(e.target.value);
  };

  const dispatch = useDispatch();

  const editId = useSelector((state) => {
    return state.editreducer;
  });


  const editTodo = useSelector((state) => {
    return state.todoreducer;
  });

  const addtodoItem = () => {
    if(editId!==""){
        console.log('if block execute');
        dispatch(remvoeeditid());
        console.log(`id: ${editId} and title:${title} `);
        dispatch(addedittodo(editId,title));
        setTitle("");

    }else{
        console.log('else block execute');
        dispatch(addTodo(title));
        setTitle("");
    }
  };



  useEffect(()=>{
    console.log('--useeffect---');
    console.log(editId);
    let editList = editTodo.filter((val,idx)=>{
        return val.id===editId;
    })

    editList.forEach( val=> {
        setTitle(val.title);
    });

  },[editId])





  return (
    <React.Fragment>
      <Box>
        <TextField
          style={{ width: 400 }}
          id="standard-textarea"
          label="add todo"
          placeholder="text..."
          multiline
          variant="standard"
          value={title}
          onChange={handleTextChange}
        />
        <Button
          style={{ height: 45 }}
          variant="contained"
          onClick={addtodoItem}
        >
          add
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default TodoAdder;
