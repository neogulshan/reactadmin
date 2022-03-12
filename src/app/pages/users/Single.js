import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiInstance from "../../../common/apiInstance";
import Spinner from "../../layouts/Spinner";

function Single() {

    const [getter, setter] = useState({
        detail: null
    })
    const { userId } = useParams();
    // console.log(userId)

    function getUserDetail() {
        apiInstance.get(`master/user/${userId}`).then((res) => {
            setter((prevState) =>({
                ...prevState,
                detail:res.data
            }))
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getUserDetail();
    }, [])

    return (
        <>
            {
                getter.detail != null ? 
                <h1>{getter.detail.name}</h1>
                :
                <Spinner/>
            }
        </>
    )
}

export default Single