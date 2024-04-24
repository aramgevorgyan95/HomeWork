const nameSelector = (state) => {
    return state.user.name
};

const emailSelector = (state) => {
    return state.user.email
}

export {
    nameSelector,
    emailSelector
}