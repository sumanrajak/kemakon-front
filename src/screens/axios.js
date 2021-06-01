import axios from "axios"

const instance = axios.create({
    baseURL: "https://kemaserver.herokuapp.com/",
})
export default instance;