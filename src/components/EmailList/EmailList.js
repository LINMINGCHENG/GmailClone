import React from 'react'
import './Emailist.css'
import { Checkbox,IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList_settings">
            <div className="emailList_settingsLeft">
                  <Checkbox/>
                  <IconButton>
                    <ArrowDownwardIcon/>
                  </IconButton>
                  <IconButton>
                    <RedoIcon/>
                  </IconButton>
                  <IconButton>
                    <MoreVertIcon/>
                  </IconButton>
            </div>
            <div className="emailList_settingsRight">
                  <IconButton>
                    <ChevronLeftIcon/>
                  </IconButton>
                  <IconButton>
                   <ChevronRightIcon/>
                  </IconButton>
                  <IconButton>
                    <KeyboardHideIcon/>
                  </IconButton>
                  <IconButton>
                  <SettingsIcon/>
                   </IconButton>
            </div>
            </div>

            <div className="emailList_sections">
                <Setion Icon={InboxIcon}
            </div>


        </div>
    )
}

export default EmailList
