'use client'
import styles from './home.module.css'
import { MdAccountCircle } from "react-icons/md";
import { AiFillHome, AiFillSignal, AiFillPieChart } from "react-icons/ai";
import { FaUserFriends, FaCreditCard, FaFacebookMessenger } from "react-icons/fa";
import { MdSmartDisplay } from "react-icons/md";
import { FaClockRotateLeft, FaRadio } from "react-icons/fa6";
import { BsFillBookmarkFill, BsMessenger, BsThreeDots, BsSearch } from "react-icons/bs";
import { MdPeople, MdBloodtype } from "react-icons/md";
import { IoGiftSharp } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import ImageUploader from '../ImageUploader/Upload';
import { useState } from 'react';
import Link from 'next/link';

export default function Homepage() {
  const [like, setlike] = useState(false)
  const changehandler = () => {
    if (like) {
      setlike(false)
    }
    else {
      setlike(true);
    }
  }

  return (
    <div className={styles.mainPage}>
      {/* first part */}
      <div className={styles.firstpart}>
        <div className={styles.container}>
          <Link className={styles.innerFM} href="/Profile" style={{ textDecoration: "none" }}><div><MdAccountCircle style={{ fontSize: "35px" }} /></div><div className={styles.font} >My Account</div></Link>
          <div className={styles.innerFM}><div><FaUserFriends style={{ fontSize: "25px", marginRight: "10px", color: "#0080ff" }} /></div><div className={styles.font}>Friends</div></div>
          <div className={styles.innerFM}><div><MdSmartDisplay style={{ fontSize: "25px", marginRight: "10px", color: "#0080ff" }} /></div><div className={styles.font}>Videos</div></div>
          <div className={styles.innerFM}><div><FaClockRotateLeft style={{ fontSize: "25px", marginRight: "10px", color: "#0080ff" }} /></div><div className={styles.font}>Memories</div></div>
          <div className={styles.innerFM}><div><BsFillBookmarkFill style={{ fontSize: "25px", marginRight: "10px", color: "purple" }} /></div><div className={styles.font}>Saved</div></div>
          <div className={styles.innerFM}><div><MdPeople style={{ fontSize: "25px", marginRight: "10px", color: "#fff", backgroundColor: "#0080ff", borderRadius: "50%", padding: "3px" }} /></div><div className={styles.font}>Group</div></div>
          <div className={styles.innerFM}><div><AiFillHome style={{ fontSize: "25px", marginRight: "10px", color: "#0080ff" }} /></div><div className={styles.font}>Marketplace</div></div>
          <div className={styles.innerFM}><div><FaRadio style={{ fontSize: "25px", marginRight: "10px", color: "#0080ff" }} /></div><div className={styles.font}>Feed</div></div>
          <div className={styles.innerFM}><div><FaCreditCard style={{ fontSize: "25px", marginRight: "10px", color: "red" }} /></div><div className={styles.font}>Events</div></div>
          <div className={styles.innerFM}><div><AiFillSignal style={{ fontSize: "25px", marginRight: "10px", color: "#0080ff" }} /></div><div className={styles.font}>Ads Managers</div></div>
          <div className={styles.innerFM}><div><AiFillPieChart style={{ fontSize: "25px", marginRight: "10px", color: "#0080ff" }} /></div><div className={styles.font}>Crisis resnce</div></div>
          <div className={styles.innerFM}><div><MdBloodtype style={{ fontSize: "25px", marginRight: "10px", color: "red" }} /></div><div className={styles.font}>Blood Donations</div></div>
          <div className={styles.innerFM}><div><FaFacebookMessenger style={{ fontSize: "25px", marginRight: "10px", color: "#0080ff" }} /></div><div className={styles.font}>Messenger</div></div>
          <div className={styles.innerFM}><div><BsMessenger style={{ fontSize: "25px", marginRight: "10px", color: "rgb(4, 216, 4)" }} /></div><div className={styles.font}>messenger kids</div></div>
        </div>
      </div>
      {/* second part */}
      <div className={styles.poststories}>
        <div className={styles.secondpart}>
          <ImageUploader />
          <div className={styles.stories} id={styles.firstpostid}>
            <div className={styles.status}></div>
          </div>
          <div className={styles.stories}>
            <div className={styles.status}></div>
          </div>
          <div className={styles.stories}>
            <div className={styles.status}></div>
          </div>
        </div>
        <div className={styles.post}>
          <div className={styles.top}>
            <div className={styles.imgdp}></div>
            <div className={styles.head}>New Movies</div>
            <BsThreeDots className={styles.dots} />
          </div>
          <hr style={{ marginTop: "2rem" }} />
          <div className={styles.description}>The sequel Kung Fu Hustle 2 is finally official — heres why it took 15 years to happen.</div>
          <div className={styles.mainpost}></div>
          <div className={styles.response}>
            <div style={{ fontSize: "20px", borderRadius: "50%", padding: "5px 10px", cursor: "pointer" }} onClick={changehandler} className={like && styles.blue} >
              <BiLike />
            </div>
            <div><input type="text" name='comment' className={styles.comment} placeholder="Write Comment" /></div>
            <div className={styles.share}>share</div>
          </div>
        </div>
        <div className={styles.post}>
          <div className={styles.top}>
            <div className={styles.imgdp}></div>
            <div className={styles.head}>New Movies</div>
            <BsThreeDots className={styles.dots} />
          </div>
          <hr style={{ marginTop: "2rem" }} />
          <div className={styles.description}>The sequel Kung Fu Hustle 2 is finally official — heres why it took 15 years to happen.</div>
          <div className={styles.mainpost}></div>
          <div className={styles.response}>
            <div style={{ fontSize: "20px", borderRadius: "50%", padding: "5px 10px", cursor: "pointer" }} onClick={changehandler} className={like && styles.blue} >
              <BiLike />
            </div>
            <div><input type="text" name='comment' className={styles.comment} placeholder="Write Comment" /></div>
            <div className={styles.share}>share</div>
          </div>
        </div>
        <div className={styles.post}>
          <div className={styles.top}>
            <div className={styles.imgdp}></div>
            <div className={styles.head}>New Movies</div>
            <BsThreeDots className={styles.dots} />
          </div>
          <hr style={{ marginTop: "2rem" }} />
          <div className={styles.description}>The sequel Kung Fu Hustle 2 is finally official — heres why it took 15 years to happen.</div>
          <div className={styles.mainpost}></div>
          <div className={styles.response}>
            <div style={{ fontSize: "20px", borderRadius: "50%", padding: "5px 10px", cursor: "pointer" }} onClick={changehandler} className={like && styles.blue} >
              <BiLike />
            </div>
            <div><input type="text" name='comment' className={styles.comment} placeholder="Write Comment" /></div>
            <div className={styles.share}>share</div>
          </div>
        </div>

      </div>
      {/* third part */}
      <div className={styles.thirdpart}>
        <div className={styles.wish}>
          <div className={styles.birth}>Birthdays</div>
          <div className={styles.twodiv}>
            <div className={styles.logo}><IoGiftSharp style={{ fontSize: "18px", color: "#0080ff" }} /></div>
            <div className={styles.people}>Raj users and 7 others have Birthday today</div>
          </div>
        </div>
        <div className={styles.contacts}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid  gray" }}>
            <div className={styles.cntct}>Contacts</div>
            <div><BsSearch /></div>
          </div>
          <div className={styles.contactpeople}>
            <div className={styles.realppl}> <div className={styles.bg} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80')" }}></div> <div style={{ fontSize: "18px", fontFamily: "sans-serif", fontWeight: "500" }}>Hemant Rane</div></div>
            <div className={styles.realppl}> <div className={styles.bg} style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80')", backgroundPositionX: "-10px" }} ></div>  <div style={{ fontSize: "18px", fontFamily: "sans-serif", fontWeight: "500" }}>Sandesh Devrukhar</div></div>
            <div className={styles.realppl}> <div className={styles.bg} style={{ backgroundImage: "url('https://i.pinimg.com/236x/04/bd/b7/04bdb72cc2ef2d0a2cdda2114339f1b4.jpg')" }}></div>  <div style={{ fontSize: "18px", fontFamily: "sans-serif", fontWeight: "500" }}>Harshal Bari</div></div>
            <div className={styles.realppl}> <div className={styles.bg} style={{ backgroundImage: "url('https://pbs.twimg.com/media/BduTxWnIUAAKT_5.jpg')" }}></div>  <div style={{ fontSize: "18px", fontFamily: "sans-serif", fontWeight: "500" }}>Sahil Sawant</div></div>
            <div className={styles.realppl}> <div className={styles.bg} style={{ backgroundImage: "url('https://media.licdn.com/dms/image/C5103AQGo2b1xZ6IyqA/profile-displayphoto-shrink_800_800/0/1554655775848?e=2147483647&v=beta&t=0qQ8TRQqlVeg_hcWttP_T1ufmZa2Ga7VjzBdItIH4u0')" }}></div>  <div style={{ fontSize: "18px", fontFamily: "sans-serif", fontWeight: "500" }}>Sahil Sakpal</div></div>
            <div className={styles.realppl}> <div className={styles.bg} style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7l6nJt3R2zpOD4-6rlJtCpufSw1Nam82-og&usqp=CAU')" }}></div>  <div style={{ fontSize: "18px", fontFamily: "sans-serif", fontWeight: "500" }}>Ninad sawant</div></div>
            <div className={styles.realppl}> <div className={styles.bg} style={{ backgroundImage: "url('https://pbs.twimg.com/media/BcINeMVCIAABeWd.jpg:large')" }}></div>  <div style={{ fontSize: "18px", fontFamily: "sans-serif", fontWeight: "500" }}>Prakash Dhuri</div></div>
            <div className={styles.realppl}> <div className={styles.bg} style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrYCNlYpuNV9PfNMzlNT9SAHTvkPLjI_OmRw&usqp=CAU')" }}></div>  <div style={{ fontSize: "18px", fontFamily: "sans-serif", fontWeight: "500" }}>Gaurav Dhuri</div></div>
            <div className={styles.realppl}> <div className={styles.bg} style={{ backgroundImage: "url('https://www.dailyherald.com/storyimage/DA/20111121/business/711219977/AR/0/AR-711219977.jpg&updated=201111200846&MaxW=900&maxH=900&noborder&Q=80')" }}></div>  <div style={{ fontSize: "18px", fontFamily: "sans-serif", fontWeight: "500" }}>Madhur Shinde</div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
