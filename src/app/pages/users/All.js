import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import apiInstance from '../../../common/apiInstance'
import Spinner from '../../layouts/Spinner'

function All() {

    const [getter, setter] = useState({
        users: []
    })

    function getAllUser() {
        apiInstance.get("/master/users").then((res) => {
            // console.log(res.data)
            setter((prevState) => ({
                ...prevState,
                users: res.data.data
            }))
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getAllUser();
    }, [])

    return (
        <>
            <div className="page-header">
                <h3 className="page-title text-uppercase"> All Users </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Add User</a></li>
                    </ol>
                </nav>
            </div>
            <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getter.users.length > 0 ?
                                                getter.users.map((item, key) => {
                                                    return (
                                                        <tr key={key}>
                                                            <td>{item.name}</td>
                                                            <td>{item.email}</td>
                                                            <td><label className="badge badge-success">{item.status}</label></td>
                                                            <td><Link to={`/user/${item.id}`} className="btn-line-height btn btn-inverse-info btn-icon"><i className="mdi mdi-eye"></i></Link></td>
                                                        </tr>
                                                    )
                                                })
                                                :
                                                <Spinner/>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default All;