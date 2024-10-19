import { IoIosMenu } from "react-icons/io";
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";


const Navigation = () => {

    const [isOpenSidebarVal, setisOpenSidebarVal] = useState(false)

    return(
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 navPart1">
                        <div className="catWrapper">
                            <Button className="allCatTab align-items-center" onClick=
                            {() => setisOpenSidebarVal(!isOpenSidebarVal)}>
                                <span className="icon1 mr-2"><IoIosMenu/></span>
                                <span class="text">ALL CATEGORIES</span>
                                <span className="icon2 ml-2"><FaAngleDown/></span>
                            </Button>

                            <div className={`sidebarNav ${isOpenSidebarVal === true ? 'open' : ''}`}>
                                <ul>
                                    <li><Link to='/'><Button>nem</Button></Link></li>
                                    <li><Link to='/'><Button>women</Button></Link></li>
                                    <li><Link to='/'><Button>watches</Button></Link></li>
                                    <li><Link to='/'><Button>kids</Button></Link></li>
                                    <li><Link to='/'><Button>gift</Button></Link></li>
                                    <li><Link to='/'><Button>nem</Button></Link></li>
                                    <li><Link to='/'><Button>women</Button></Link></li>
                                    <li><Link to='/'><Button>watches</Button></Link></li>
                                    <li><Link to='/'><Button>kids</Button></Link></li>
                                    <li><Link to='/'><Button>gift</Button></Link></li>
                                </ul>
                            </div>
                        </div>   
                    </div>

                    <div className="col-sm-9 navPart2 d-flex align-items-center">
                        <ul className="list list-inline mr-auto">
                            <li className="list-inline-item">
                                <Link to='/'><Button>Home</Button></Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to='/'><Button>men</Button></Link>
                                <div className="submenu shadow">
                                    <Link to='/'><Button>Clothing</Button></Link>
                                    <Link to='/'><Button>Footwear</Button></Link>
                                    <Link to='/'><Button>Watches</Button></Link>
                                    <Link to='/'><Button>Clothing</Button></Link>
                                    <Link to='/'><Button>Footwear</Button></Link>
                                    <Link to='/'><Button>Watches</Button></Link>                                     
                                </div>
                            </li>
                            <li className="list-inline-item"><Link to='/'><Button>women</Button></Link>
                                <div className="submenu shadow">
                                    <Link to='/'><Button>Clothing</Button></Link>
                                    <Link to='/'><Button>Footwear</Button></Link>
                                    <Link to='/'><Button>Watches</Button></Link>
                                    <Link to='/'><Button>Clothing</Button></Link>
                                    <Link to='/'><Button>Footwear</Button></Link>
                                    <Link to='/'><Button>Watches</Button></Link>                                     
                                </div>
                            </li>
                            <li className="list-inline-item"><Link to='/'><Button>beauty</Button></Link>
                                <div className="submenu shadow">
                                    <Link to='/'><Button>Clothing</Button></Link>
                                    <Link to='/'><Button>Footwear</Button></Link>
                                    <Link to='/'><Button>Watches</Button></Link>
                                    <Link to='/'><Button>Clothing</Button></Link>
                                    <Link to='/'><Button>Footwear</Button></Link>
                                    <Link to='/'><Button>Watches</Button></Link>                                     
                                </div>
                            </li>
                            <li className="list-inline-item"><Link to='/'><Button>watches</Button></Link>
                                <div className="submenu shadow">
                                    <Link to='/'><Button>Clothing</Button></Link>
                                    <Link to='/'><Button>Footwear</Button></Link>
                                    <Link to='/'><Button>Watches</Button></Link>
                                    <Link to='/'><Button>Clothing</Button></Link>
                                    <Link to='/'><Button>Footwear</Button></Link>
                                    <Link to='/'><Button>Watches</Button></Link>                                     
                                </div>
                            </li>
                            <li className="list-inline-item"><Link to='/'><Button>kids</Button></Link>
                                <div className="submenu shadow">
                                    <Link to='/'><Button>Clothing</Button></Link>
                                    <Link to='/'><Button>Footwear</Button></Link>
                                    <Link to='/'><Button>Watches</Button></Link>
                                    <Link to='/'><Button>Clothing</Button></Link>
                                    <Link to='/'><Button>Footwear</Button></Link>
                                    <Link to='/'><Button>Watches</Button></Link>                                     
                                </div>
                            </li>
                            <li className="list-inline-item"><Link to='/'><Button>gift</Button></Link>
                                <div className="submenu shadow">
                                    <Link to='/'><Button>Clothing</Button></Link>
                                    <Link to='/'><Button>Footwear</Button></Link>
                                    <Link to='/'><Button>Watches</Button></Link>
                                    <Link to='/'><Button>Clothing</Button></Link>
                                    <Link to='/'><Button>Footwear</Button></Link>
                                    <Link to='/'><Button>Watches</Button></Link>                                     
                                </div>
                            </li>
                            <li className="list-inline-item"><Link to='/'><Button>Blog</Button></Link></li>
                            <li className="list-inline-item"><Link to='/'><Button>Contact US</Button></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
    </nav>
    )
}

export default Navigation;