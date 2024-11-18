import axios from "axios";
import {BASE_URL ,   BACKDROP_BASE_URL} from "../config.js";


export class TvShowAPI {
    static async fetchPopulars() {
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await axios.get(`${BASE_URL}tv/top_rated?api_key=${apiKey}`);
        console.log(response.data.results);
        return response.data.results;

    }

    static async fetchRecommendations(tvShowId) {
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations?api_key=${apiKey}`);
        console.log(response.data.results);
        return response.data.results;

    }

    static async fetchByTitle(title) {
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await axios.get(`${BASE_URL}search/tv?api_key=${apiKey}&query=${title}`);
        console.log(response.data.results);
        return response.data.results;

    }
}

