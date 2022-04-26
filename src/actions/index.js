export const setFavorite = (payload) => {
    return({
        type: 'SET_FAVORITE',
        payload,
    });
}

export const deleteFavorite = payload => (
    {
        type: 'DELETE_FAVORITE',
        payload,
    }
)

export const loginRequest = payload => (
    {
        type: 'LOGIN_REQUEST',
        payload,
    }
)