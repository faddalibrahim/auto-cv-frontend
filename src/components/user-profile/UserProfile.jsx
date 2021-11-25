import React from 'react'
// import Profile from 'assets/dark_logo_finale.png'
import './profile.css'
import { FACE, MATERIAL_ICONS_OUTLINED } from "utils/MaterialIconsData";
import Icon from "components/icon/Icon";

const UserProfile = () => {
    return (
        <div className = "main-profile">
            <div className="profile-top">
                <div className = "avatar-container">
                    {/* <Icon type={MATERIAL_ICONS_OUTLINED} name={FACE}/>  */}
                    <i class="fas fa-user-alt fa-6x" id = "user"></i>
                </div>
            </div>

            <div className = "particulars">
                <div className = "par_inf">Alhassan Hassan</div>
                <div className = "par_inf">Ashesi University</div>
                <div className = "par_inf">Class of 2023</div>
                <div className = "par_inf">B.sc Computer Science</div>
            </div>

            <div className = "analytics">
                <div className = "analytic">
                    <div>Add Resume</div>
                </div>
                <div className="analytic">
                    <div>View Resume</div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
