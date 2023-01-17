import HttpService from "./HttpService";

class MovieService extends HttpService {
    getAll = async() => {
        const { data } = await this.client.get("/movies");
        return data;
    }

    add = async (newMovie) => {
        const { data } = await this.client.post("/movies", newMovie);
        return data;
    }
}


export const movieService = new MovieService();