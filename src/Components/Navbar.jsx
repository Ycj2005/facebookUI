'use client'
import { AiFillHome, AiOutlineShop, AiOutlineUnorderedList } from "react-icons/ai";
import { BiJoystick } from "react-icons/bi";
import { FaUserGroup } from "react-icons/fa6";
import Image from "next/image";
import { IoIosNotifications } from "react-icons/io";
import { BsFillChatDotsFill } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";

export default function Menubar() {
    const [back, setback] = useState();
    const handleclick = () => {
        setback(!back)
    }
    const [isopen, setIsopen] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <>

            <nav className="flex justify-around items-center bg-blue-700 navbar">
                <div className=" flex justify-between items-center first_element main_logo_search">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                            <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                        </svg>
                    </div>
                    <div className="search">
                        <input type="search" className="input_search" placeholder="search facebook" />
                        <input type="search" name="search" id="" className="input_search_max" placeholder="search" />
                    </div>
                </div>

                <div className="second_menu">
                    <Link href="/" className="outer_icon" ><AiFillHome className="icons" /></Link>
                    <div className="outer_icon"><MdOndemandVideo className="icons" /></div>
                    <div className="outer_icon"><AiOutlineShop className="icons" /></div>
                    <div className="outer_icon"><FaUserGroup className="icons" /></div>
                    <div className="outer_icon"><BiJoystick className="icons" /></div>
                </div>

                <div className="Third_menu">
                    <div className="outer_second_icon" style={{ color: "#fff", backgroundColor: "#0080ff", position: "relative", zIndex: "999" }} onClick={() => setIsopen((prev) => !prev)}>
                        <AiOutlineUnorderedList className="second_icon" />
                        {
                            isopen && <div style={{ position: "absolute", backgroundColor: "#0080ff", color: "#Fff", fontSize: "18px", marginTop: "1rem", width: "200px", borderRadius: "10px" }}>
                                <div style={{ width: "100%", textAlign: "center", alignItems: "center", lineHeight: "3rem" }}>
                                    <div><Link href="/" className="innerlink" >Profile</Link></div>
                                    <div><Link href="/" className="innerlink" >Details</Link></div>
                                    <div><Link href="/" className="innerlink" >Friends</Link></div>
                                    <div><Link href="/" className="innerlink" >Videos</Link></div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="outer_second_icon"><BsFillChatDotsFill className="second_icon" /></div>
                    <div className="outer_second_icon"><IoIosNotifications className="second_icon" style={{ color: "gold" }} /></div>
                    <div className="outer_image_icon" style={{ position: "relative" }} onClick={() => setOpen((prev) => !prev)}><Link href="/Profile"><Image src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?q=10&h=200" style={{ borderRadius: "50%" }} width="40" height="40" alt="" /></Link>
                        {
                            open && <div style={{ position: "absolute" }}>
                                <div className="seeprof">
                                    <div>
                                        <img src="" alt="" />
                                        <div>Rohit Bhaskar</div>
                                    </div>
                                    <div>
                                        See My Profile
                                    </div>

                                </div>
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div>
                                    <div>Log Out</div>
                                </div>
                            </div>
                        }
                    </div>

                </div>

            </nav>
        </>
    )
}

