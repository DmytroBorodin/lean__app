import React from "react";
import ProfileIndent from "../ProfileIdentComponent/ProfileIdentComponent";
import ProfileEditIdent from "../ProfileEditIdetComponent/ProfileEditIdentComponent";

const ProfileNested = ({match}) => {
    console.log(match);
    let component;
    if (match.params.profilePage == 'identification') {
        component = <ProfileIndent/>
        console.log(component);
    }else if (match.params.profilePage == 'edit') {
        component = <ProfileEditIdent/>
    }
    return (
        <div>
            {component}
        </div>
    )
}

export default ProfileNested;