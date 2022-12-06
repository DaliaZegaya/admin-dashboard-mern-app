import React from 'react';
import "./Navbar.css";
import { MdNotificationsNone } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';




function Navbar () {
  return (
    <div>
      <MDBNavbar light bgColor='light'>
        <MDBContainer>
          <MDBNavbarBrand href='#'>
            <img
              src='https://www.absolutdata.com/wp-content/uploads/2018/07/logo-1.png'
              height='80'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Navbar

