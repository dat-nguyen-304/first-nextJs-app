import axios from "axios";

export const getRandomJoke = async () => {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random1');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}