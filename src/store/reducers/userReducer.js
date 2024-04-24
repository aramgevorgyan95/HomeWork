import { UserTypes } from "../types";

const initData = {
    name: null,
    email: null
}

export default function (state = initData, action) {
    const { type, payload } = action;
    switch (type) {
        case UserTypes.LOGIN:
            return { ...state, ...payload };
        case UserTypes.CHANGENAME:
            return { ...state, ...payload };
        case UserTypes.EMAIL:
            return { ...state, ...payload };
        case UserTypes.CHANGEEMAIL:
            return { ...state, ...payload };
        case UserTypes.LOGOUT:
            return initData;
        case UserTypes.GETUSERSDATA:
            return payload
        default:
            return state
    }
}