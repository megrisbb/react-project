import {baseURL} from "../consts/urls";
import axios from "axios";

const apiService = axios.create({baseURL})

export {
    apiService
}