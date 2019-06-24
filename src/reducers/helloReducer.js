const helloReducer = (state='Hello', action) => {
    switch(action.type) {
        case 'DISPLAY' :
            return state = action.info;
        default:
            return state;
    }  
};

export default helloReducer;