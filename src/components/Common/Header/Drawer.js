import React, {useState} from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Button from '../Button/button';


export default function MobileDrawer() {
const [flag, setFlag]=useState(false);
  return (
    <div className='drawer-wrapper'>
        <React.Fragment>
          <MenuRoundedIcon className='link' onClick={() => setFlag(true)} />
          <Drawer anchor={"right"} open={flag} onClose={()=>setFlag(false)}>
            <div className='mobile-drawer'>
            <a href='/'>
                <p className='link'>Home</p>
            </a>
            <a href='/'>
                <p className='link'>Compare</p>
            </a>
            <a href='/'>
                <p className='link'>Watchlist</p>
            </a>
            <a href='/'>
                <p className='link'>Dashboard</p>
            </a>
            {/* <Button text="Dashboard" onClick={() => {
                console.log("btn-clicked!!!");
            }}/> */}
            </div>
          </Drawer>
        </React.Fragment>
    </div>
  );
}