import { UserTypes } from "../types";

function login(name) {
    return {
        type: UserTypes.LOGIN,
        payload: {
            name: name
        }
    }
}
function changeName(name) {
    return {
        type: UserTypes.CHANGENAME,
        payload: {
            name: name
        }
    }
}

function email(email) {
    return {
        type: UserTypes.LOGIN,
        payload: {
            email: email
        }
    }
}
function changeEmail(email) {
    return {
        type: UserTypes.CHANGEEMAIL,
        payload: {
            email: email
        }
    }
}

function logout() {
    return {
        type: UserTypes.LOGOUT,
    }
}


function setUser (data){
    return {
        type: UserTypes.GETUSERSDATA,
        payload: data
    }
}

export {
    login,
    changeName,
    email,
    changeEmail,
    logout,
    setUser
}