import style from './profile.module.css'
import { IoMdSchool } from "react-icons/io";
import { AiFillHome, AiOutlineHeart, AiFillSetting } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { BsDatabaseDash, BsInstagram, BsCameraVideoFill, BsFilterRight, BsListUl, BsFillGridFill } from "react-icons/bs";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { BiSolidFlagAlt } from "react-icons/bi";
import Upperpage from './upper'
import Link from 'next/link';
import data from './Data';
import Image from 'next/image';

export default function Profilepage() {
   return (
      <div className={style.maindiv}>
         <Upperpage />
         <div className={style.midpage}>
            <div className={style.fpart}>
               <div className={style.infpart}>
                  <div className={style.parthead}>Intro</div>
                  <div className={style.btnbio}>Add Bio</div>
                  <div className={style.mydetails}>
                     <IoMdSchool style={{ fontSize: "2rem" }} /> <div style={{ fontSize: "16px", fontWeight: "500", fontFamily: "sans-serif" }}> Studied at Vedanta College of Management and Information Technology</div>
                  </div>
                  <div className={style.mydetails}>
                     <IoMdSchool style={{ fontSize: "1.5rem" }} /> <div style={{ fontSize: "16px", fontWeight: "500", fontFamily: "sans-serif" }}> Went to Shivaji Abaji Kolkar Vidyalay Ambarnath</div>
                  </div>
                  <div className={style.mydetails}>
                     <AiFillHome style={{ fontSize: "1.2rem" }} /> <div style={{ fontSize: "16px", fontWeight: "500", fontFamily: "sans-serif", marginRight: "auto" }}>Lives in Ambarnath</div>
                  </div>
                  <div className={style.mydetails}>
                     <ImLocation style={{ fontSize: "1.2rem" }} /> <div style={{ fontSize: "16px", fontWeight: "500", fontFamily: "sans-serif", marginRight: "auto" }}>From Mumbai, Maharashtra</div>
                  </div>
                  <div className={style.mydetails}>
                     <AiOutlineHeart style={{ fontSize: "1.2rem" }} /> <div style={{ fontSize: "16px", fontWeight: "500", fontFamily: "sans-serif", marginRight: "auto" }}>Single</div>
                  </div>
                  <div className={style.mydetails}>
                     <BsInstagram style={{ fontSize: "1.2rem" }} /> <Link style={{ fontSize: "16px", fontWeight: "500", fontFamily: "sans-serif", marginRight: "auto", textDecoration: "none" }} href="https://instagram.com">Rohit_Bhaskar_18</Link>
                  </div>
                  <div className={style.btnbio}>Edit Detaills</div>
                  <div className={style.btnbio}>Add Hobbies</div>
                  <div className={style.btnbio}>Add Features</div>
               </div>

               <div className={style.insecpart}>
                  <div className={style.photos}>
                     <div className={style.inphoto}>Photos</div>
                     <Link href="./slug" className={style.slug}>See all photos</Link>
                  </div>
                  <div className={style.posts}>
                     {
                        data.map((element) =>
                           <>
                              <Image
                                 src={element.download_url}
                                 height={100}
                                 width={100}
                                 style={{ borderRadius: "5px" }}
                                 alt="" />
                           </>
                        )
                     }
                  </div>

               </div>

               <div className={style.inthirdpart}>
                  <div className={style.friends}>
                     <div className={style.infriends}>Friends</div>
                     <Link href="./slug" className={style.seefrnds}>See all Friends</Link>
                  </div>
                  <div className={style.friendsall}>
                     {
                        data.map((inform, index) =>
                           <>
                              <div className={style.frndcard}>
                                 <Image
                                    src={inform.download_url}
                                    alt={'hello'}
                                    height={100}
                                    width={100}
                                 />
                                 <div className={style.auth}>
                                    {inform.author}
                                 </div>
                              </div>
                           </>
                        )
                     }
                  </div>
               </div>
            </div>
            <div className={style.spart}>
               <div className={style.mind}>
                  <div className={style.picmind}>
                     <div style={{ borderRadius: "50%" }}>
                        <Image
                           src='https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?q=10&h=200'
                           alt='hello world'
                           height={100}
                           width={100}
                           className={style.imgpic}
                        />
                     </div>
                     <div>
                        <input type="text" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className={style.inptmodal} placeholder="What's On Your Mind ?" />

                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                           <div className="modal-dialog">
                              <div className="modal-content">
                                 <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                 <div className="modal-body">
                                    <div className={style.ftext}>
                                       We care about your privacy and want to give you more ways to control who you share with in your community. You can now set a default audience.
                                    </div>
                                    <div className={style.stext}>
                                       This will be your audience for future posts, but you can always change it for a specific post.
                                    </div>
                                 </div>
                                 <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Understood</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <hr style={{ height: "3px" }} />
                  <div className={style.threelogo}>
                     <div className={style.fion}>
                        <BsCameraVideoFill style={{ color: "red", fontSize: "20px" }} />
                        <div>
                           Live Video
                        </div>
                     </div>
                     <div className={style.fion}>
                        <MdOutlineInsertPhoto style={{ color: "greenyellow", fontSize: "20px" }} />
                        <div>
                           Photo / Video
                        </div>
                     </div>
                     <div className={style.fion}>
                        <BiSolidFlagAlt style={{ fontSize: "20px", color: "royalblue" }} />
                        <div>
                           Life Event
                        </div>
                     </div>
                  </div>
               </div>

               <div className={style.postfm}>
                  <div className={style.firstfm}>
                     <div style={{ fontFamily: "inherit", fontWeight: "bold", fontSize: "18px" }}>
                        Posts
                     </div>
                     <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", fontSize: "16px" }}>
                        <div className={style.btnfm}>
                           <BsFilterRight />
                           <div>Filter</div>
                        </div>
                        <div className={style.btnfm}>
                           <AiFillSetting />
                           <div>Manage Posts</div>
                        </div>
                     </div>
                  </div>
                  <hr style={{ margin: "20px 0", }} />
                  <div className={style.secondfm}>
                     <div className={style.secondbtnfm}>
                        <BsListUl style={{ fontSize: "20px", fontWeight: "600" }} />
                        <div>List View</div>
                     </div>
                     <div className={style.secondbtnfm}>
                        <BsFillGridFill style={{ fontSize: "20px", fontWeight: "600" }} />
                        <div>Grid View</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
