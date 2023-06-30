import React from 'react';
import { BsHouse, BsPeople, BsChatDots, BsCalendar4Week, BsGear } from 'react-icons/bs';

const Sidebar = () => {
    return (

        <div
            style={{
                backgroundImage: `url(${require("./templates/FriendList.jpg")})`,
                backgroundSize: "cover",display:"flex"
            }}
        >
            <div className="sidebar" style={{ marginLeft: "100px", height: "721px" }}>
                <Icon>
                    <button className="icon-button" style={{ marginTop:"100px", border: "none", borderRadius: "50px", width: "80px", height: "80px"  }}>
                        <BsHouse className="bs" style={{ width: "55px", height: "55px" }} />
                    </button>
                </Icon>
                <Icon>
                    <button className="icon-button" style={{ border: "none", marginTop: "20px", borderRadius: "50px", width: "80px", height: "80px" }}>
                        <BsPeople className="bs" style={{ width: "55px", height: "55px" }} />
                    </button>
                </Icon>
                <Icon>
                    <button className="icon-button" style={{ border: "none", marginTop: "20px", borderRadius: "50px", width: "80px", height: "80px" }}>
                        <BsChatDots className="bs" style={{ width: "55px", height: "55px" }} />
                    </button>
                </Icon>
                <Icon>
                    <button className="icon-button" style={{ border: "none", marginTop: "20px", borderRadius: "50px", width: "80px", height: "80px" }}>
                        <BsCalendar4Week className="bs" style={{ width: "55px", height: "55px" }} />
                    </button>
                </Icon>
                <Icon>
                    <button className="icon-button" style={{ border: "none", marginTop: "20px", borderRadius: "50px", width: "80px", height: "80px" }}>
                        <BsGear className="bs" style={{ width: "55px", height: "55px" }} />
                    </button>
                </Icon>
            </div>
        </div>
    );
};

const Icon = ({ children }) => {
    return (
        <div className="icon">{children}</div>
    );
};

export default Sidebar;