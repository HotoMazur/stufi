import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

export default function Login() {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const {
        email,
        password,
    } = user

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    };



    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(user)
            try {
                const postUser = {...user};
                await axios.post("http://localhost:8080/login", postUser)
                navigate("/")
            } catch (error) {
                alert("Login is not exist")
            }
        }



    return (
        <>
            <div style={{
                backgroundImage: `url(${require("./templates/registration_background.png")})`,
                backgroundSize: "cover"
            }}>
                <div className={"container display-flex"}
                     style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
                <div className={"col-md-6 offset-md-3 border p-4 mt-2 shadow"} style={{
                    borderRadius: '30px',
                    width: "684px",
                    height: "450px",
                    marginTop: "107px",
                    marginRight: "414px",
                    marginLeft: "414px",
                    backgroundColor: "white"
                }}>
                    <h5 className={"text-center "} style={{
                        color: "#14279B",
                        fontSize: "30px",
                        marginTop: "20px",
                        marginRight: "250",
                        marginLeft: "250"
                    }}>Login</h5>
                    <form onSubmit={(e) => onSubmit(e)}>

                            <div className= "mb-3" style={{marginTop: "50px", marginLeft: "13vh", marginRight: "13vh"}}>
                                <input type={"text"}
                                       className="form-control"
                                       placeholder="Enter your email"
                                       name="email"
                                       value={email}
                                       onChange={(e) => onInputChange(e)}
                                       required
                                />
                            </div>
                            <div className="mb-3" style={{marginTop: "30px", marginLeft: "13vh", marginRight: "13vh"}}>
                                <input type={"text"}
                                       className="form-control"
                                       placeholder="Enter your password"
                                       name="password"
                                       value={password}
                                       onChange={(e) => onInputChange(e)}
                                       required
                                />
                            </div>

                        <button type="submit" className="btn btn-primary rounded-4" style={{
                            backgroundColor: "#14279B",
                            color: "white",
                            width: "243px",
                            height: "55px",
                            fontSize: "20px",
                            marginTop: "30px"
                        }}>Log in
                        </button>

                        <div className={"row"} style={{marginTop: "15px"}}>
                            <p className={"col"} style={{marginLeft: "4px", fontSize: "18px"}}>
                                Don't have an account?
                                <Link className={"col"} to={"/registration"}
                                      style={{marginLeft: "10px", fontSize: "18px"}}>
                                    Sign up
                                </Link>
                            </p>

                        </div>

                        </form>



            </div>
            </div>


                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap');
                        </style>


                <div style={{
                    position: 'absolute',
                    left: '74px',
                    top: '74px',
                    width: '118px',
                    height: '81px',
                    fontSize: "55px",
                    fontFamily: "Bubblegum Sans",
                    fontStyle: "Regular",
                    color: "white"
                }}>
                    Stufi
                </div>
                </div>
        </>
    )
}
