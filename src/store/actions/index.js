//action creator 
export const openModal = (bool) => {
    return {
     type: "SHOW_MODAL",
    }
} 

export const selectSize = (size) => {
    return{
        type: "SELECT_SIZE",
        size: size
    }
}

export const selectColor = (color) => {
    return{
        type:  "SELECT_COLOR",
        color: color
    }
}


