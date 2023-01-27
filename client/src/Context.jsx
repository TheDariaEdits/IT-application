import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const UserContext = createContext({});

const Context = (props) => {

    const [userObject, setUserObject] = useState();

    useEffect(() => {
        axios.get("http://localhost:4000/auth/getuser", { withCredentials: true })
        .then((res) => {
            if (res.data) {
                setUserObject(res.data);
            }
        })
    }, [])
    return (
        <UserContext.Provider value={userObject}>{props.children}</UserContext.Provider>
    )
}

export default Context;