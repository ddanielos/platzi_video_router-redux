const reducer = (state, action) => {
    switch (action.type){
        case 'SET_FAVORITE':
            return {
                ...state, //traer el estado, destructurándolo
                myList: [...state.myList, action.payload]
            }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload)
            }
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;