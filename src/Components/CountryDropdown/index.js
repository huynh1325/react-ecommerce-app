import { Dialog } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from 'react-icons/md';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


const CountryDropdown = () => {

    const [isOpenModal, setisOpenModal] = useState(false);



    return(
        <>
        <Button className='countryDrop' onClick={()=>setisOpenModal(true)}>
            <div className="info d-flex flex-column">
                <span className='label'>Your Location</span>
                <span className='name'>India</span>
            </div>
            <span className='ml-auto'><FaAngleDown /></span>
        </Button>

        <Dialog open={isOpenModal} onClose={()=>setisOpenModal(false)} className='locationModal' TransitionComponent={Transition}>
            <h4 className='mb-0'>Choose your Delivery Location</h4>
            <p>Enter your address and we will specify the offer for your area.</p>
            <Button className='close_' onClick={()=>setisOpenModal(false)}><MdClose/></Button>

            <div className="headerSearch w-100">
                <input type="text" placeholder="Search your erea" />
                <Button><IoIosSearch /></Button>
            </div>

            <ul className='countryList mt-3'>
                <li><Button onClick={()=>setisOpenModal(false)}>Việt Nam</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>China</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Laos</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Agentina</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Chile</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Cuba</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Colombia</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Canada</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Iran</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Mexico</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Mexico</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Monaco</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Việt Nam</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Thailand</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Colombia</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Canada</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Iran</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Mexico</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Monaco</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Việt Nam</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Thailand</Button></li>
            </ul>
        </Dialog>

        </>
    )
}

export default CountryDropdown;