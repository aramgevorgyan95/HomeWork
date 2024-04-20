import axios from "axios";

const doctorAPI = axios.create({
    baseURL: 'https://api.allodoc.md/users/get-doctors',
})

export default doctorAPI;