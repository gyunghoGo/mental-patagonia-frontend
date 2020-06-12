export const handleModal = (state=false, action) => {
    switch(action.type){
        case  "SHOW_MODAL" : 
            return !state;
        default:
            return state; 
    } 
}