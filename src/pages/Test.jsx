import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../components/Utilities/apiUtils";

const Test = () => {
    const [token, setToken] = useState("");

    useEffect(() => {
      if (!token) {
        axios.post(`${baseUrl}/auth/token/`, {
          email: "sojourndevteam@gmail.com",
          password: "!a2hy9"
        })
        .then((response) => {
          setToken(response.data)
        })
      }
    }, [token])
    return (
      <div>
        <span className="text-red text-4xl">Refresh Token: </span><span className="text-2xl">{token.refresh}</span>
        <span className="text-red text-4xl block my-5">Access Token: </span><span className="text-green-400 text-4xl">{token.access}</span>
      </div>
    )
}

export default Test;