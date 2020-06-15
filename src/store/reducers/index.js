import { combineReducers } from "redux";
import { handleModal } from "./handleModal";
import { selectProduct } from "./selectProduct";

const rootReducer = combineReducers({ handleModal, selectProduct });

export default rootReducer;





