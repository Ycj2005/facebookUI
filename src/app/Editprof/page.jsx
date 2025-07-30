'use client'
import { useRef, useState } from 'react'
import { IoAddCircle } from "react-icons/io5";
import style from './Edit.module.css'
import Image from 'next/image'

export default function Editpage() {

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

    const [opac, setopac] = useState(false);

    const handleclick = () => {
        setopac(!opac);
    }
    return (

        < div className={style.mainpage} >
            <div className={style.name}>
                <label htmlFor="name" className={style.label}>Edit Your Name :</label>
                <div><input type="text" name='name' className={style.input} /></div>
            </div>
            <div className={style.name}>
                <label htmlFor="email" className={style.label}>Remove Your friends </label>
                <div><input type="email" name="email" id="eId" className={style.input} /></div>
            </div>
            <div className={style.editbio}>
                <div>
                    <label htmlFor="collage" className={style.label}>Collage</label>
                    <input type="text" name="collage" id="" className={style.input} />
                </div>
                <div>
                    <label htmlFor="school" className={style.label}>School</label>
                    <input type="text" name="school" id='' className={style.input} />
                </div>
            </div>
            <div className={style.bio}>
            </div>
            <div>

            </div>
        </div >

    )
}
