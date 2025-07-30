'use client'
import Image from 'next/image';
import React, { useRef } from 'react';
import { IoAddCircle } from "react-icons/io5";
import { IoIosAdd, IoMdPhonePortrait } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { BiSolidEditAlt, BiSolidDownArrow } from "react-icons/bi";
import style from './profile.module.css'
import Link from 'next/link';
import Editpage from '../Editprof/page';

export default function Upperpage() {

    const fileInputRef = useRef(null);
    const imageRef = useRef(null);

    const handleImageUpload = () => {
        fileInputRef.current.click();
    };

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                imageRef.current.src = e.target.result;
            };

            reader.readAsDataURL(file);
        }
    };
    return (
        <div className={style.top}>
            <div className={style.dpselect}>
                <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleFileSelect}
                />
                <br />
                <div className={style.imgback}>
                    <Image
                        ref={imageRef}
                        src=""
                        alt="Selected Image"
                        style={{ maxWidth: '100%' }}
                        className={style.imgselect}
                    />
                </div>
                <div onClick={handleImageUpload} className={style.mainbtn}>
                    <div className={style.create}>Select Your Photo</div>
                    <IoAddCircle className={style.btn} />
                </div>
            </div>
            <div className={style.profile}>
                <div className={style.dprof}></div>
                <div className={style.midprof}>
                    <div className={style.mname}>
                        Rohit Bhaskar
                    </div>
                    <div className={style.friends}>
                        2.7k Friends
                    </div>
                </div>
                <div className={style.lastprof}>
                    <div className={style.addprof}>
                        <IoIosAdd style={{ color: "#fff", fontSize: "25px", marginLeft: "5px" }} />
                        <div style={{ fontFamily: "sans-serif" }}>Add to Story</div>
                    </div>
                    <div className={style.modal}>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <BiSolidEditAlt style={{ color: "#fff", fontSize: "25px", margin:"0 10px"}} />
                            Edit Profile
                        </button>

                        {/* <!-- Modal --> */}
                        <div className="modal fade modal-lg"  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel" > Edit Your Profile </h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className={style.mainsubject}>
                                       <Editpage/>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.down}>
                        <BiSolidDownArrow />
                    </div>
                </div>
            </div>
            <hr style={{ border: "1.8px solid black", width: "100%" }} />
            <div className={style.menu}>
                <div className={style.innermenu}>
                    <div className={style.inmenu}>Post</div>
                    <div className={style.inmenu}>About</div>
                    <div className={style.inmenu}>Friends</div>
                    <div className={style.inmenu}>Photos</div>
                    <div className={style.inmenu}>Videos</div>
                    <div className={style.inmenu}>Reels</div>
                    <div className={style.inmenu}>More <BiSolidDownArrow /></div>
                </div>
                <div style={{ color: "#000", backgroundColor: "rgb(227, 227, 227)", padding: "7px 7px", borderRadius: "10px" }}>
                    <BsThreeDots style={{ fontSize: "18px" }} />
                </div>
            </div>
        </div>
    )
}
