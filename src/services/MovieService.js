import HttpService from "./HttpService";

class MovieService extends HttpService {
    getAll = async (page = 0) => {
        let endpoint = `/movies/?page=${page}`;

        const { data } = await this.client.get(endpoint);
        return data;
    };

    get = async (id) => {
        const { data } = await this.client.get(`/movies/${id}`);
        return data;
    }


    add = async (newMovie) => {
        const { data } = await this.client.post("/movies", newMovie);
        return data;
    }
}


export const movieService = new MovieService();