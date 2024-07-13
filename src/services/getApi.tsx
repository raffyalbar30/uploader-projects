import axios from "axios";
export const getApi = async (endpoint: string | number) => {
    try {
         await axios(`https://reqres.in/${endpoint}`)
        .then(data => console.log(data))
    } catch (error) {
        console.log(error);
    }
}