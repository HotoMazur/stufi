import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {DateField} from "@mui/x-date-pickers/DateField";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";


export default function Registration() {
    let navigate = useNavigate();

    const FacultyType = ["TYPE_1", "TYPE_2"];
    const MajorType = ["TYPE_3", "TYPE_4"];
    const GroupType = ["TYPE_5", "TYPE_6"];

    const [user, setUser] = useState({
        password: "",
        name: "",
        surname: "",
        email: "",
        birthDate: null,
        uni_name: "",
        faculty: "",
        major: "",
        group: "",
        phoneNumber: "",
        startStudyDate: null,
        endStudyDate: null,
    })

    const {
        password,
        name,
        surname,
        email,
        birthDate,
        uni_name,
        faculty,
        major,
        group,
        phoneNumber,
        startStudyDate,
        endStudyDate,
    } = user

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    };

    const onChangeBirthDate = (value) => {
        if (value) {
            setUser({...user, birthDate: value.format("YYYY-MM-DD")});
        } else {
            setUser({...user, birthDate: null});
        }
    };

    const onChangeStartStudyDate = (value) => {
        if (value) {
            setUser({...user, startStudyDate: value.format("YYYY-MM-DD")});
        } else {
            setUser({...user, startStudyDate: null});
        }
    };

    const onChangeEndStudyDay = (value) => {
        if (value) {
            setUser({...user, endStudyDate: value.format("YYYY-MM-DD")});
        } else {
            setUser({...user, endStudyDate: null});
        }
    };


    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(user)
        const emailExists = await checkLoginExists(email);
        if (emailExists) {
            try {
                const postUser = {...user};
                await axios.post("http://localhost:8080/registration", postUser);
                navigate("/");
            } catch (error) {
                alert("Login is exist")
            }
        } else {
            alert("Login is exist")
        }
    }


    const checkLoginExists = async (email) => {
        try {
            const response = await axios.get(
                `http://localhost:8080/user/email-exists/${email}`
            );
            return response.data;
        } catch (error) {
            alert("Error checking if login exists");
            return false;
        }
    };

    return (
        <>
            <div style={{
                backgroundImage: `url(${require("./templates/registration_background.png")})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                backgroundPosition: "center center",
                display: "flex"
            }}>
                <div className={"container border shadow"} style={{
                    position: "absolute",
                    borderRadius: '30px',
                    width: "40%",
                    height: "80%",
                    top: "10%",
                    left: "32%",
                    backgroundColor: "white"
                }}>
                    <h5 className={"text-center "} style={{
                        position: "absolute",
                        color: "#14279B",
                        fontSize: "30px",
                        top: "6%",
                        left: "38%",

                    }}>Registration</h5>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className={"row"}>
                            <div style={{position: "absolute", top: "13%", width: "50%"}}>
                                <input type={"text"}
                                       className="form-control"
                                       placeholder="Enter your name"
                                       name="name"
                                       value={name}
                                       onChange={(e) => onInputChange(e)}
                                       required
                                />
                            </div>
                            <div className="col-md-6 mb-3" style={{position: "absolute", top: "13%", left: "50%"}}>
                                <input type={"text"}
                                       className="form-control"
                                       placeholder="Enter your surname"
                                       name="surname"
                                       value={surname}
                                       onChange={(e) => onInputChange(e)}
                                       required
                                />
                            </div>
                        </div>
                        <div className="mb-3" style={{position: "absolute", top: "23%", width: "95%"}}>
                            <input type={"text"}
                                   className="form-control"
                                   placeholder="Enter your email"
                                   name="email"
                                   value={email}
                                   onChange={(e) => onInputChange(e)}
                                   required
                            />
                        </div>
                        <div className="mb-3" style={{position: "absolute", top: "33%", width: "95%"}}>
                            <input type={"text"}
                                   className="form-control"
                                   placeholder="Enter your password"
                                   name="password"
                                   value={password}
                                   onChange={(e) => onInputChange(e)}
                                   required
                            />
                        </div>
                        <div className="mb-3" style={{position: "absolute", top: "43%", width: "95%"}}>
                            <input type={"text"}
                                   className="form-control"
                                   placeholder="Enter your university"
                                   name="uni_name"
                                   value={uni_name}
                                   onChange={(e) => onInputChange(e)}
                                   required
                            />
                        </div>
                        <div className={"row"}>
                            <div style={{position: "absolute", top: "53%", width: "32%"}}>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    name="faculty"
                                    value={faculty}
                                    onChange={(e) => onInputChange(e)}
                                >
                                    <option value="faculty" selected>Faculty</option>
                                    {FacultyType.map((facultyType) => (
                                        <option key={facultyType} value={facultyType}>
                                            {facultyType}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-4 mb-3"
                                 style={{position: "absolute", top: "53%", left: "33%", width: "32%"}}>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    name="major"
                                    value={major}
                                    onChange={(e) => onInputChange(e)}
                                >
                                    <option value="major" selected>Major</option>
                                    {MajorType.map((majorType) => (
                                        <option key={majorType} value={majorType}>
                                            {majorType}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div style={{position: "absolute", top: "53%", left: "65%", width: "33%"}}>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    name="group"
                                    value={group}
                                    onChange={(e) => onInputChange(e)}
                                >
                                    <option value="group" selected>Group</option>
                                    {GroupType.map((groupType) => (
                                        <option key={groupType} value={groupType}>
                                            {groupType}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="mb-3" style={{position: "absolute", top: "63%", width: "95%"}}>
                            <input type={"text"}
                                   className="form-control"
                                   placeholder="Enter your phone number"
                                   name="phoneNumber"
                                   value={phoneNumber}
                                   onChange={(e) => onInputChange(e)}
                                   required
                            />
                        </div>
                        <div className={"row"}>
                            <div className={"col-md-4 mb-3"} style={{position: "absolute", top: "73%",}}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateField
                                        label="Birth Date"
                                        name="birthDate"
                                        value={birthDate ? dayjs(birthDate) : null}
                                        onChange={onChangeBirthDate}
                                    />
                                </LocalizationProvider>
                            </div>
                            <div className={"col-md-4 mb-3 "} style={{position: "absolute", top: "73%", left: "35%"}}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateField
                                        label="Start Study Day"
                                        name="startStudyDate"
                                        value={startStudyDate ? dayjs(startStudyDate) : null}
                                        onChange={onChangeStartStudyDate}
                                    />
                                </LocalizationProvider>
                            </div>
                            <div className={"col-md-4 mb-3"} style={{position: "absolute", top: "73%", left: "70%"}}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateField
                                        label="End Study Day"
                                        name="endStudyDat"
                                        value={endStudyDate ? dayjs(endStudyDate) : null}
                                        onChange={onChangeEndStudyDay}
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary rounded-4" style={{
                            position: "absolute",
                            backgroundColor: "#14279B",
                            color: "white",
                            top: "85%",
                            left: "33%",
                            width: "30%",
                            height: "7%",
                            fontSize: "20px",
                        }}>Register
                        </button>

                        <p style={{position: "absolute", top: "92%", left: "33%", fontSize: "18px", width:"40%"}}>
                            Do have an account?
                            <Link className={"col"} to={"/login"}
                                  style={{position: "absolute", fontSize: "18px"}}>
                                Log in
                            </Link>
                        </p>



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
            {/*</div>*/}
        </>
    )
}