import React, { useState } from 'react'
import axios from "axios";

const GitHubProfile = () => {

    const [gitid, setgitid] = useState("");
    const [profiledata, setprofiledata] = useState("");

    const getProfiledata = async (e) => {
        e.preventDefault();
        await axios.get(`https://api.github.com/users/${gitid}`)
            .then((res) => {
                if (res) {
                    setprofiledata(res.data);
                    setgitid("");
                }
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <div className="container-fluid" style={{ marginTop: "60px" }}>
                <div className="row">
                    <div className="col-md-6 offset-md-3 border border-2 border-dark shadow rounded">
                        <form onSubmit={getProfiledata}>
                            <div className='m-3 '>
                                <label htmlFor="ID" className='text-info fw-bold'>Git Hub Profile Id.</label>
                                <input type="text" className='form-control border border-3 m-2 shadow' id="ID"
                                    value={gitid} onChange={(e) => setgitid(e.target.value)} />
                                <button type="submit" className='btn btn-secondary offset-md-5'>Check</button>
                            </div>
                        </form>
                    </div>
                </div>
                {
                    profiledata ?
                        <>
                            <div className="row">
                                <div className="col-md-6 mt-3 offset-md-3 border border-2 border-dark shadow rounded">
                                    <div className="d-flex flex-row">
                                        <h1 className='ms-5'>Git Hub Profile Details </h1>
                                        {/* <i class='bx bx-refresh ms-auto fs-1 me-3'
                                            onClick={getProfiledata()}></i> */}
                                    </div>
                                    <div >
                                        <p className='form-control border border-3 m-2 shadow fs-5 fw-bold'>
                                            Name : {profiledata.name}</p>
                                        <p className='form-control border border-3 m-2 shadow fs-5 fw-bold'>
                                            Location : {profiledata.location}</p>
                                        <p className='form-control border border-3 m-2 shadow fs-5 fw-bold'>
                                            Profile_Bio : {profiledata.bio}</p>
                                        <p className='form-control border border-3 m-2 shadow fs-5 fw-bold'>
                                            Profile_Link : {profiledata.html_url}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <></>
                }
            </div>

        </>
    )
}

export default GitHubProfile
