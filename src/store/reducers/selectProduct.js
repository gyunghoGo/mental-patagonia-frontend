const initialState = [
    {
        product_id: "",
        color: "",
        size: "",
        quantity: "",
    }
]


export const selectProduct = (state=initialState, action) => {
    switch(action.type){
        case  "SELECT_SIZE" : 
            return [...state, { size: action.size}];
        case "SELECT_COLOR" :
            return [...state, {color: action.color}];
        default:
            return state; 
    } 
}