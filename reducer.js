const initalState={
    count:0
}

export default count=(initalState,action)=>{

    switch (action.type) {
        case 'INC':
           return initalState.count+=initalState.count+1
            break;
        case 'DEC':
               return initalState.count+=initalState.count-1
               break;
    
        default:
            return initalState
            break;
    }
// return initalState
}