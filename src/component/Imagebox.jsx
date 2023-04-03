import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import { Image } from "react-bootstrap";

const Imagebox = ({ setShowPicModal, index, setIndex, backdrops, profiles }) => {
  const backDrops = backdrops?.slice(0, 25).map((u) => u.file_path);
  const imageSlides = profiles?.map(u => u.file_path)

  function prevSlides() {
    backdrops ?
    setIndex(index === 1 ? backdrops.length : (prev) => prev - 1) :
    setIndex(index === 1 ? profiles.length : (prev) => prev - 1) 
  }

  function nextSlides() {
    backDrops ?
    setIndex(index === backdrops.length ? 1 : (prev) => prev + 1) :
    setIndex(index === profiles.length ? 1 : (prev) => prev + 1) 
  }

  return (
    <div className='modalbox'>
        <div className='backdrop'/>
        <div className='text-white bg-transparent p-3 rounded-3 contentbox'>
           <div className='d-flex justify-content-end'>
               <AiOutlineClose size='1.8rem' className='text-white mt-2' style={{cursor:'pointer'}} onClick={() => {
                setShowPicModal(false)
                setIndex(index)
               }
                 }/>
            </div> 
            <div className='position-relative mt-3'>
                <div className='d-flex w-100 justify-content-between position-absolute top-50'>
                    <IoMdArrowDropleftCircle size='2rem' style={{cursor:'pointer'}} onClick={prevSlides} />
                    <IoMdArrowDroprightCircle size='2rem' style={{cursor:'pointer'}} onClick={nextSlides}/>
                </div>
                <div className='d-flex justify-content-center'>
             { imageSlides &&  <Image
              src={`https://image.tmdb.org/t/p/w500/${imageSlides[index]}`}
              className='personImg rounded-3'
            />}
            {
                backDrops &&  <Image
              src={`https://image.tmdb.org/t/p/w500/${backDrops[index]}`}
              className='personImg rounded-3'
            />}
                </div>
                </div>      
        </div>
    </div>
  );
};

export default Imagebox;
