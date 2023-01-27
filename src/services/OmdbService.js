import axios from "axios";

export default class OmdbService {
    constructor() {
        this.client = axios.create({ baseURL: "https://www.omdbapi.com" });
    }
}