import React from 'react'
import "./EmailRow.css"
import Checkbox from '@mui/material/Checkbox';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';


function EmailRow({ id, title, subject, description, time }) {
    const navigate = useNavigate ();





    return (
        <div onClick={()=>navigate("/mail")} className="emailRow">
            <div className="emailRow_options">
                <Checkbox />
                <IconButton>
                   <StarBorderOutlinedIcon/>
                </IconButton>
                <IconButton>
                     <LabelImportantIcon/>
                </IconButton>
            </div>
            <h3 className="emailRow_title">
              {title}
            </h3>
            <div className="emailRow_message">
                <h4>{subject}
                    <span className="emailRow_description">
                        {description}
                   </span>
                </h4>
            </div>
            <div className="emailRow_time">
                 {time}
            </div>
        </div>
    )
}

export default EmailRow
