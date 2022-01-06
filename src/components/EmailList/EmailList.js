import React from 'react'
import './Emailist.css'
import { Checkbox } from '@mui/material';
function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList-settings">
            <div className="emailList_settingsLeft">
                  <Checkbox/>
            </div>
            </div>
        </div>
    )
}

export default EmailList
