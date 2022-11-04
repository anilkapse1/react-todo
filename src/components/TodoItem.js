import {
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    IconButton,
    ListItem
  } from "@material-ui/core";
  import React, { useEffect } from "react";
  import { useDispatch } from "react-redux";
  import DeleteIcon from "@material-ui/icons/Delete";
  import EditIcon from "@material-ui/icons/Edit";
  import StarIcon from "@material-ui/icons/Star";
  import StarOutlineIcon from "@material-ui/icons/StarOutline";
    import { deleteTodo, editTodo, toggleCompleted, toggleImportant } from "../redux/actions";

  
  const TodoItem = ({ value }) => {
    const dispatch = useDispatch();
    const { id, title, completed, important } = value;

    const toggleCheckbox = () => {
      dispatch(toggleCompleted(id));
    };
  
    const handleDelete = () => {
        dispatch(deleteTodo(id));

    };
  
    const toggleImport = () => {
      dispatch(toggleImportant(id));
    };

    const editList=()=>{
        dispatch(editTodo(id))
    }

  

  
    return (
      <React.Fragment>
        <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
          <FormGroup style={{ marginRight: "auto" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={completed}
                  color="primary"
                  onChange={toggleCheckbox}
                  name={title}
                />
              }
              label={title}
            />
          </FormGroup>
          <IconButton edge="end" onClick={editList}>
            <EditIcon /> 
          </IconButton>

          <IconButton edge="end" onClick={toggleImport}>
            {important ? <StarIcon /> : <StarOutlineIcon />}
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="delete"
            size="large"
            edge="end"
            onClick={handleDelete}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </ListItem>
      </React.Fragment>
    );
  };
  
  export default TodoItem;
  