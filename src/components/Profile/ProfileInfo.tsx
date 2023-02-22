import profileModule from "./Profile.module.css";
import React from "react";

export const ProfileInfo = () => {
    return(
        <div>
            <div className={profileModule.ava}>
                <img src="https://img.freepik.com/premium-vector/illustration-concept-of-samurai-warrior_157713-245.jpg?w=2000"/>
            </div>
            <div className={profileModule.description}>
                description
            </div>
        </div>
    )
}