import HttpService from "./HttpService";

class MovieService extends HttpService {
    getAll = async (page = 0, term = "") => {
        let endpoint = `/movies/?page=${page}`;

        if (term) {
            endpoint += `&term=${term}`;
        }
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

    createLike = async (id) => {
        const { data } = await this.client.put(`/movies/${id}/like`);
        return data;
    };

    createDisLike = async (id) => {
        const { data } = await this.client.put(`/movies/${id}/dislike`);
        return data;
    };

    addComment = async ({ movieId, comment }) => {
        const { data } = await this.client.post(`/movies/${movieId}/comments`, comment);
        return data;
      };
}


export const movieService = new MovieService();