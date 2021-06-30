const initialState = {
    loggedIn: false,
    isAdmin: false
}
const userReducer = (state = initialState, action) =>{
    console.log(state)
    return state
}

export default userReducer 