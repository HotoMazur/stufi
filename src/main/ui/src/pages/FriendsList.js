import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {BsHouse, BsPeople, BsChatDots, BsCalendar4Week, BsGear} from 'react-icons/bs';
import {BiArrowToRight, BiSearch, BiChevronRight} from 'react-icons/bi';
import {Avatar, Stack} from "@mui/material";
import axios from "axios";


export default function FriendsList() {
    let navigate = useNavigate();

    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredHome, setIsHoveredHome] = useState(false);
    const [isHoveredChat, setIsHoveredChat] = useState(false);
    const [isHoveredCalendar, setIsHoveredCalendar] = useState(false);
    const [isHoveredSettings, setIsHoveredSettings] = useState(false);
    // const [isFocused, setIsFocused] = useState(false);

    const [friends, setFriends] = useState([])
    const [userTask, setUserTask] = useState([])

    useEffect(() => {
        loadTasks();
        loadFriends();
    }, [])


    const loadFriends = async () => {
        try {
            const result = await axios.get('http://localhost:8080/friends')
            setFriends(result.data)
        } catch (error) {
            console.error("Error - ", error)
        }
    }

    const loadTasks = async () => {
        try {
            const result = await axios.get('http://localhost:8080/tasks')
            setUserTask(result.data)
        } catch (error) {
            console.error("Error - ", error)
        }
    }


    const Icon = ({children}) => {
        return (
            <div className="icon" style={{}}>
                {children}
            </div>
        );
    };

    const FriendContainer = ({user}) => {
        const avatarText = `${user.name} ${user.surname}`;
        return (
            <div className="user-container shadow border" style={{
                marginTop: "2%",
                borderRadius: "27px",
                backgroundColor: "#3D56B2",
                display: "flex",
                alignItems: "center",
                height: "6vh",
            }}>
                <Avatar {...stringAvatar(avatarText)}
                        sx={{marginTop: "0%", marginLeft: "2%", bgcolor: stringToColor(user.name)}}/>
                <h3 style={{marginLeft: "5%", marginRight: "auto", color: "white"}}>{user.name} {user.surname}</h3>
                <Icon>
                    <Link to={""}>
                        <button
                            className="icon-button"
                            style={{
                                borderRadius: "50px",
                                marginLeft: "-60%",
                                // background: isHoveredSettings ? "#f0f0f0" : "none",
                                border: "none",
                                backgroundColor: "#14279B"
                            }}
                        >
                            <BiChevronRight className="bs" style={{width: "30px", height: "36px", color:"white"}}/>
                        </button>
                    </Link>
                </Icon>

            </div>
        );
    };

    const TaskContainer = ({task}) => {
        return (
            <div className="user-container shadow border" style={{
                marginTop: "2%",
                borderRadius: "27px",
                backgroundColor: "#3D56B2",
                display: "flex",
                alignItems: "center",
                height: "5vh",
            }}>
                <h3 style={{marginLeft: "5%", marginRight: "auto", color: "white"}}>{task.date}        {task.text}</h3>

            </div>

        )
    }

    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    // reformat string name to avatar
    function stringAvatar(name) {
        return {
            sx: {
                position: "absolute",
                bgcolor: stringToColor(name),
                width: "70px",
                height: "70px",
                top: "4.5%",
                left: "70%"
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }


    const [findClassmate, setFindClassmate] = useState({
        email: ""
    })

    const {
        email
    } = findClassmate

    const onInputFindClassmate = (e) => {
        setFindClassmate({...findClassmate, [e.target.name]: e.target.value})
    };


    return (
        <>
            <div style={{
                backgroundImage: `url(${require("./templates/FriendList.jpg")})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                backgroundPosition: "center center",
                display: "flex"
            }}>
                {/*Text 'STUFI' and font style Bubblegum Sans*/}
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap');
                </style>
                <div style={{
                    position: 'absolute',
                    left: '4%',
                    top: '7%',
                    width: '118px',
                    height: '81px',
                    fontSize: "55px",
                    fontFamily: "Bubblegum Sans",
                    fontStyle: "Regular",
                    color: "white"
                }}>
                    Stufi
                </div>
                {/*Sidebar with icons home, friends, chats, calendar, settings, log out*/}
                <div className="sidebar" style={{marginLeft: "100px", height: "721px"}}>
                    {/*Home button */}
                    <Icon>
                        <Link to={'/home'}>
                            <button className="icon-button" style={{
                                width: "80px",
                                height: "80px",
                                top: "20%",
                                left: '6%',
                                borderRadius: "50px",
                                position: 'absolute',
                                transform: 'translateX(-50%)',
                                // border: isFocused ? "1px solid #000" : "none",
                                background: isHoveredHome ? "#f0f0f0" : "none",
                                border: "none"
                            }}
                                    onMouseEnter={() => setIsHoveredHome(true)}
                                    onMouseLeave={() => setIsHoveredHome(false)}
                                // onFocus={() => setIsFocused(true)}
                                // onBlur={() => setIsFocused(false)}

                            >
                                <BsHouse className="bs" style={{width: "55px", height: "55px"}}/>
                            </button>
                        </Link>
                    </Icon>
                    {/*Friends button */}
                    <Icon>
                        {/*The container waht connect sidebar and main container*/}
                        <div className={"container border shadow"}
                             style={{
                                 width: "20%",
                                 height: "80px",
                                 top: "33%",
                                 left: '14%',
                                 backgroundColor: "white",
                                 position: "absolute",
                                 borderRadius: "45px",
                                 transform: 'translateX(-50%)'
                             }}/>
                        {/*Friend button*/}
                        <button className="icon-button" style={{
                            width: "80px",
                            height: "80px",
                            top: "33%",
                            left: '6%',
                            border: "none",
                            borderRadius: "50px",
                            position: 'absolute',
                            transform: 'translateX(-50%)',
                            backgroundColor: "white",

                        }}>
                            <BsPeople className="bs" style={{width: "55px", height: "55px"}}/>
                        </button>
                    </Icon>
                    {/*Chats button */}
                    <Icon>
                        <Link to={"/chats"}>
                            <button className="icon-button" style={{
                                width: "80px",
                                height: "80px",
                                top: "46%",
                                left: '6%',
                                borderRadius: "50px",
                                position: 'absolute',
                                transform: 'translateX(-50%)',
                                // border: isFocused ? "1px solid #000" : "none",
                                background: isHoveredChat ? "#f0f0f0" : "none",
                                border: "none"
                            }}
                                    onMouseEnter={() => setIsHoveredChat(true)}
                                    onMouseLeave={() => setIsHoveredChat(false)}
                                // onFocus={() => setIsFocused(true)}
                                // onBlur={() => setIsFocused(false)}
                            >
                                <BsChatDots className="bs" style={{width: "55px", height: "55px"}}/>
                            </button>
                        </Link>
                    </Icon>
                    {/*Calendar button */}
                    <Icon>
                        <Link to={"/calendar"}>
                            <button className="icon-button" style={{
                                width: "80px",
                                height: "80px",
                                top: "59%",
                                left: '6%',
                                borderRadius: "50px",
                                position: 'absolute',
                                transform: 'translateX(-50%)',
                                // border: isFocused ? "1px solid #000" : "none",
                                background: isHoveredCalendar ? "#f0f0f0" : "none",
                                border: "none"
                            }}
                                    onMouseEnter={() => setIsHoveredCalendar(true)}
                                    onMouseLeave={() => setIsHoveredCalendar(false)}
                                // onFocus={() => setIsFocused(true)}
                                // onBlur={() => setIsFocused(false)}
                            >
                                <BsCalendar4Week className="bs" style={{width: "55px", height: "55px"}}/>
                            </button>
                        </Link>
                    </Icon>
                    {/*Settings button */}
                    <Icon>
                        <Link to={"/settings"}>
                            <button className="icon-button" style={{
                                width: "80px",
                                height: "80px",
                                top: "72%",
                                left: '6%',
                                borderRadius: "50px",
                                position: 'absolute',
                                transform: 'translateX(-50%)',
                                // border: isFocused ? "1px solid #000" : "none",
                                background: isHoveredSettings ? "#f0f0f0" : "none",
                                border: "none"
                            }}
                                    onMouseEnter={() => setIsHoveredSettings(true)}
                                    onMouseLeave={() => setIsHoveredSettings(false)}
                                // onFocus={() => setIsFocused(true)}
                                // onBlur={() => setIsFocused(false)}
                            >
                                <BsGear className="bs" style={{width: "55px", height: "55px"}}/>
                            </button>
                        </Link>
                    </Icon>
                    {/*Log out button and text*/}
                    <div>
                        <div className={"row"}>
                            {/*Log out button*/}
                            <Icon>
                                <Link to={"/login"}>
                                    <button className={"icon-button"} style={{
                                        width: "80px",
                                        height: "80px",
                                        top: "85%",
                                        left: '6%',
                                        border: "none",
                                        // border: isFocused ? "1px solid #000" : "none",
                                        // background: isHovered ? "#f0f0f0" : "none",
                                        borderRadius: "50px",
                                        position: 'absolute',
                                        transform: 'translateX(-50%)',
                                        background: "none",
                                        color:"white"
                                    }}>
                                        <BiArrowToRight className={"bi "} style={{width: "30px", height: "30px"}}/>
                                    </button>
                                </Link>
                            </Icon>
                        </div>
                        {/*Log out text*/}
                        <Link className={"col"} to={"/login"}
                              style={{
                                  fontSize: "30px",
                                  position: "absolute",
                                  top: "86.5%",
                                  left: '9%',
                                  margin: 0,
                                  color: "white"
                              }}>Log out</Link>
                    </div>
                </div>
            </div>
            {/*Main container*/}
            <div className={"container border shadow"} style={{
                position: "absolute",
                top: "5%",
                left: "18%",
                width: "75%",
                height: "90%",
                backgroundColor: "white",
                borderRadius: "54px"
            }}>

                {/*Container Find classmates*/}
                <div className={"container border shadow"} style={{
                    position: "absolute",
                    top: "4%",
                    left: "5%",
                    height: "7%",
                    width: "60%",
                    borderRadius: "23px"
                }}>
                    {/*Bottom border 1px*/}
                    <div style={{
                        border: "none",
                        borderBottom: "1px solid black",
                        outline: "none",
                        width: "50%",
                        fontSize: "21px",
                        padding: "1%",

                    }}>
                        {/*Input email to find classmates*/}
                        <input type={"text"}
                               className="form-control"
                               placeholder="Find your classmates here"
                               name="email"
                               value={email}
                               onChange={(e) => onInputFindClassmate(e)}
                               required
                               style={{
                                   border: "none",
                                   padding: "1%",
                               }}
                        />
                    </div>
                    {/*Search button in find classmates container*/}
                    <Icon>
                        <button className="icon-button" style={{
                            width: "80px",
                            height: "80px",
                            top: "-10%",
                            right: '-4%',
                            borderRadius: "50px",
                            position: 'absolute',
                            transform: 'translateX(-50%)',
                            border: "none",
                            background: "none"
                        }}
                        >
                            <BiSearch className="bi" style={{width: "40px", height: "40px"}}/>
                        </button>
                    </Icon>
                </div>
                {/*'Your friend list text*/}
                <h3 style={{
                    top: "17%",
                    left: "5%",
                    position: "absolute"
                }}>
                    YOUR FRIEND LIST
                </h3>
                {/*Container with friends*/}
                <div className={"container border shadow"}
                     style={{
                         position: "absolute",
                         top: "25%",
                         left: "5%",
                         width: "60%",
                         height: "70%",
                         borderRadius: "29px",
                         overflowY: "scroll"
                     }}>
                    <div>
                        {friends.map(friend => (
                            <FriendContainer key={friend.id} user={friend}/>
                        ))}
                    </div>

                </div>
                {/*container with name, avatar, calendar and upcoming task*/}
                <div className={"container border shadow"} style={{
                    position: "absolute",
                    left: "70%",
                    height: "100%",
                    width: "30%",
                    borderTopRightRadius: "54px",
                    borderBottomRightRadius: "54px",
                }}>
                    {/*Text 'Hello {name}'*/}
                    <h4 style={{position: "absolute", top: "5%", left: "10%"}}>Hello name</h4>
                    {/*Text 'Student' user's role*/}
                    <p style={{position: "absolute", top: "9%", left: "10%", fontSize: "125%"}}>Student</p>
                    {/*Avatar with the default image like first letter from name and surname*/}
                    <div>
                        <Avatar {...stringAvatar('Dmytro Mazurev')} />
                    </div>
                    {/*Container for calendar*/}
                    <div className={"container border shadow"} style={{
                        position: "absolute",
                        top: "20%",
                        left: "10%",
                        width: "80%",
                        height: "30%",
                        borderRadius: "20px"
                    }}>
                    </div>
                    {/*Text 'Upcoming task'*/}
                    <h4 style={{
                        position: "absolute",
                        left: "10%",
                        top: "56%"
                    }}>
                        UPCOMING TASK
                    </h4>
                    {/*Link to view all tasks*/}
                    <Link to={""} style={{
                        position: "absolute",
                        top: "56.4%",
                        left: "75%",
                        fontSize: "15px",
                        color: "black",
                        textDecoration: "none"
                    }}>
                        VIEW
                    </Link>
                    <div className={"container"} style={{
                        position: "absolute",
                        top: "60%",
                        left: "10%",
                        width: "85%",
                        height:"32%",
                        border:"none",
                    }}>
                        <div>
                            {userTask.map(task => (
                                <TaskContainer key={task.id} task={task}/>
                            ))}
                        </div>

                    </div>
                </div>


            </div>


        </>
    )
}