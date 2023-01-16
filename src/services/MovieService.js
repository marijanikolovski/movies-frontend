import HttpService from "./HttpService";

class MovieService extends HttpService {
    add = async (newMovie) => {
        const { data } = await this.client.post("/movies", newMovie);
        return data;
    }
}


export const movieService = new MovieService();