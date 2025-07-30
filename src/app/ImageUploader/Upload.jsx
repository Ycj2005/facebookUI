'use client'

import Image from 'next/image';
import React, { useRef } from 'react';
import style from './second.module.css'
import { IoAddCircle } from "react-icons/io5";

function ImageUploader() {
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
    <div className={style.mainstory}>
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileSelect}
      />
      <br />
      <p style={{fontSize:"18px", fontFamily:"sans-serif"}}>Create Your Story</p>
      <div className='img_back'>
        <Image
          ref={imageRef}
          src=""
          alt="Selected Image"
          style={{ maxWidth: '100%' }}
          className={style.imgselect}
        />
      </div>
      <div className='btn'>
        <IoAddCircle onClick={handleImageUpload} className={style.btn}/>
      </div>
    </div>
  );
}

export default ImageUploader;
