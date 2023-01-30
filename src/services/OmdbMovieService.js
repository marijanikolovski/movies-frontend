import OmdbService from "./OmdbService";

class OmdbMovieService extends OmdbService {
    getOmdbMovies = async (name = '') => {
        const apiKey = "/?apikey=18eaeb4f";

        const { data } = await this.client.get(`/?apikey=18eaeb4f&s=${name}&type=movie&page=1`);
        return data;
    };
}

export const omdbMoviesService = new OmdbMovieService();