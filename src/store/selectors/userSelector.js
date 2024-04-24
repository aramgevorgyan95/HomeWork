const nameSelector = (state) => {
    return state.user.name
};

const emailSelector = (state) => {
    return state.user.email
}

const getUsers = (state) => {
    return state.user
}
export {
    nameSelector,
    emailSelector,
    getUsers
}