
import { editText } from "./editText";
import { EDIT_TODO, REMOVE_EDITID } from "./utils";
function editreducer(state=editText,action){
    
    switch(action.type){
        case EDIT_TODO:{
            const {id} = action.payload;
            return state=id;
        }

        case REMOVE_EDITID:{
            return state="";
        }

        default:
            return state;
    }

}


export default editreducer;