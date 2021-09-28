import React from "react"
import Session1 from "../../assets/svg/sessions-svg/sessions-1.svg";
import Session2 from "../../assets/svg/sessions-svg/sessions-2.svg";
import codesprint1 from "../../assets/svg/codesprint-svg/codesprint-right.svg";
import codesprint2 from "../../assets/svg/codesprint-svg/codesprint-left.svg"

import "./icons.css";

const iconslist = [Session1, Session2, codesprint1, codesprint2]

const Icons = (props) => {
    return(  <img src={iconslist[props.id]} alt="" className={`icons ${props.id==4?"icons-tree":""}`}/>
       
    )
}

export default Icons;