import axios from "axios"

export const baseUrl = "http://ec2-54-91-145-179.compute-1.amazonaws.com/sojourn-cabins/api/v1"

const loginUser = async (credentials, setTokens) => {
    await axios.post(`${baseUrl}/auth/token/`, credentials)
    .then((response) => {
        setTokens(response.data);
    })
    .catch((error) => {
        console.log(error);
        alert("Invalid credentials")
    })
}

export {
    loginUser
}


