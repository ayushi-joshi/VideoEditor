import React, { useRef } from 'react'
import { IoIosMenu } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { BiFolderPlus } from "react-icons/bi";
import { MdOutlineAudioFile } from "react-icons/md";
import { PiSubtitlesFill } from "react-icons/pi";
import { PiTextTFill } from "react-icons/pi";
import { BiFileBlank } from "react-icons/bi";
import { GrTemplate } from "react-icons/gr";
import { SlCamrecorder } from "react-icons/sl";
import { FaQuestionCircle } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { IoColorFillSharp } from "react-icons/io5";
import { PiStarFour } from "react-icons/pi";
import { BsLightningChargeFill } from "react-icons/bs";
import { TbTimeDuration15 } from "react-icons/tb";
import { PiArrowBendUpLeftLight } from "react-icons/pi";
import { PiArrowBendUpRight } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";
import { MdDone } from "react-icons/md";
import { RiScissorsLine } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";
import { FiMic } from "react-icons/fi";
import { MdFastRewind } from "react-icons/md";
import { MdFastForward } from "react-icons/md";
import { IoMdPlay } from "react-icons/io";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { FaSearchMinus } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import { CiWavePulse1 } from "react-icons/ci";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { useState } from 'react';
import { TiArrowSortedDown } from "react-icons/ti";

const VideoEditor = () => {
  const [time, setTime] = useState(0);

  const handleSeekerChange = (e) => {
    setTime(e.target.value);
  };

 
  return (
    <div  className='flex h-screen'>
     <div className='aside border-r-2 lg:w-1/12 '>
   <div className='flex justify-center items-center mt-2 flex-col'>
   <IoIosMenu size={25} />
   <span className='mt-3 flex flex-col items-center'>
   <IoSettings size={25} color='blue' />
<p className='text-sm'>Settings</p>
   </span>
   <span className='mt-5 flex flex-col items-center'>
   <BiFolderPlus size={25} color='gray' />
<p className='text-sm'>Media</p>
   </span>
   <span className='mt-5 flex flex-col items-center'>
 <MdOutlineAudioFile size={25} color='gray'/>

<p className='text-sm'>Audio</p>
   </span>
   <span className='mt-5 flex flex-col items-center'>
   <PiSubtitlesFill  size={25} color='gray' />

<p className='text-sm'>Subtitle</p>
   </span>
   <span className='mt-5 flex flex-col items-center'>
  <PiTextTFill size={25} color='gray' />

<p className='text-sm'>Text</p>
   </span>
   <span className='mt-5 flex flex-col items-center'>
   <BiFileBlank size={25} color='gray'/>

<p className='text-sm'>Elements</p>
   </span>
   <span className='mt-5 flex flex-col items-center'>
 <GrTemplate size={25} color='gray' />

<p className='text-sm'></p>Templates
   </span>
   <span className='mt-5 flex flex-col items-center'>
 <SlCamrecorder size={25} color='gray'/>


<p className='text-sm'>Screen Recorder</p>
   </span>
   <div className='mt-5 border-t-2 border-gray-400 w-full flex justify-center'>
   <FaQuestionCircle size={30} color='gray' className='mt-3' />

   </div>
   </div>

        </div> 
        <div className='flex flex-col h-full w-11/12' >
        <div className='flex lg:flex-row flex-col h-3/4  '>
     <div className='h-full flex lg:flex-col lg:w-2/6  p-3'>
<h1 className='font-bold text-sm lg:text-lg'>Project Settings</h1>
<span className='mt-4 '>
    <p>Size</p>
    <span className='flex items-center justify-between border rounded-lg p-2  '><button>Original(16.9)</button><BsChevronDown /></span>

</span>
<span className='mt-2  ms-2 lg:ms-0'>
    <p>Background</p>
    <div className='border rounded-lg   '>
        <span className='flex items-center justify-between p-2'>Color <IoColorFillSharp size={25} /></span>
      <div className='border-t-2'>
        <span className='flex items-center justify-between p-2'>Image <p className='text-sm text-gray-300'>upload</p></span>
        </div>   
    </div>
    
    </span>
    <span className='mt-4  hidden sm:block '>
    <p>Audio</p>
    <span className='flex items-center justify-between border rounded-lg p-2 '><span className='flex items-center'> <PiStarFour className='me-2'/>
Clean Audio</span><div className='bg-orange-400 rounded h-5 w-5 flex justify-center items-center'><BsLightningChargeFill color='white' /></div>
</span>

</span>
<span className='mt-4 hidden sm:block'>
    <p>Duration</p>
    <span className='flex items-center justify-between border rounded-lg p-2'><span className='flex items-center'> 
Time Duration</span><TbTimeDuration15 size={25} />

</span>

</span>
    </div>
     <div className='lg:w-4/6   bg-slate-100'>
<div className='flex justify-between items-center lg:me-0  me-8  h-15 lg:p-2'>
   <p>Project Name</p>
  <div className='flex justify-center items-center'>
  <div className='flex flex-row space-x-2 items-center '>
<PiArrowBendUpLeftLight size={25} className='hidden sm:block'/>
<PiArrowBendUpRight size={25} className='hidden sm:block' />
<div className='flex bg-gray-200 h-10 lg:w-20 items-center p-2 rounded'>
<p className='text-sm'>Invite</p>
<RiContactsLine className='ms-2' />

</div>
<div className='flex bg-black h-10 lg:w-20 w-15 rounded-lg text-white items-center p-2'>
<p className='text-sm'>Done</p>
<MdDone className='ms-2' size={20}/>
</div>
</div>
</div>

</div>
<div className='flex justify-center items-center lg:p-3 ' style={{height:420}}>

<img  className="lg:h-96 h-80 " src="https://static.wixstatic.com/media/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg/v1/fill/w_1211,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg" alt="" />
 
</div>
</div>

        </div>
      <div className=' h-1/4 border-t-2 w-full flex flex-col '>
<div className='flex-grow flex flex-row  justify-between'>
<span className='flex space-x-3  ms-5 items-center'>
<RiScissorsLine /> <p className='hidden sm:block'>Split</p>
<CiCirclePlus /> <p className='hidden sm:block'>Add Media</p>
<FiMic  /> <p className='hidden sm:block'>Voiceover</p>


</span>
<span className='flex items-center space-x-4'>
<MdFastRewind size={25} color='gray' />
<IoMdPlay size={35} color='gray'/>
<p>00:01:6</p>
<MdFastForward size={25} color='gray'/>


</span>
<div className='flex items-center space-x-6'>
<HiOutlineSpeakerWave size={25}/>
<FaSearchMinus className='hidden sm:block' />
<div class=" relative ">
  <input type="range" 
    class="appearance   h-1 w-20 lg:w-32 rounded-md  overflow-hidden"/>
  <div class="flex justify-between mt-2 ">
  
  </div>
  <div class="absolute top-4 right-10 h-4 w-4 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
</div>
<FaSearchPlus size={20} className='hidden sm:block'/>
<CiWavePulse1 size={20} className='hidden sm:block'/>
<BiMessageRoundedDetail size={20} className='hidden sm:block'/>
</div>
</div>
      </div>
  <div className='h-1/2'>
  <div className=" h-4  rounded-lg relative flex justify-between p-2 border-t-2">
  <div className="w-px h-2 flex justify-center text-sm  bg-black"><p className='mt-2 text-sm'>0</p></div>
  <div className="w-px h-2 flex justify-center space-y-2 bg-black"><p className='mt-2 text-sm'>5</p></div>
  <div className="w-px h-2 flex justify-center bg-black"><p className='mt-2 text-sm'>10</p></div>
  <div className="w-px h-2 flex justify-center bg-black"><p className='mt-2 text-sm'>15</p></div>
  <div className="w-px h-2 flex justify-center bg-black"><p className='mt-2 text-sm'>20</p></div>
  <div className="w-px h-2 flex justify-center  bg-black"><p className='mt-2 text-sm'>25</p></div>
 </div>
 

 <div style={{ width: '100%', margin: '5px auto' }}>
      <input
        type="range"
         onChange={handleSeekerChange}
        style={{ width: '100%' }}
      />
      

    </div>


 

      <div className="flex items-center justify-center ">
      <img src="https://static.wixstatic.com/media/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg/v1/fill/w_1211,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg" alt="Image 1" className="w-14 h-14  cursor-pointer"  />
        <img src="https://static.wixstatic.com/media/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg/v1/fill/w_1211,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg" alt="Image 1" className="w-14 h-14  cursor-pointer"  />
        <img src="https://static.wixstatic.com/media/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg/v1/fill/w_1211,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg" alt="Image 1" className="w-14 h-14  cursor-pointer"  />
        <img src="https://static.wixstatic.com/media/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg/v1/fill/w_1211,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg" alt="Image 1" className="w-14 h-14  cursor-pointer"  />
        <img src="https://static.wixstatic.com/media/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg/v1/fill/w_1211,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg" alt="Image 2" className="w-14 h-14  cursor-pointer"  />
        <img src="https://static.wixstatic.com/media/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg/v1/fill/w_1211,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg" alt="Image 2" className="w-14 h-14  cursor-pointer"  />
        <img src="https://static.wixstatic.com/media/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg/v1/fill/w_1211,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg" alt="Image 2" className="w-14 h-14  cursor-pointer hidden sm:block"  />
        <img src="https://static.wixstatic.com/media/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg/v1/fill/w_1211,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg" alt="Image 2" className="w-14 h-14  cursor-pointer hidden sm:block"  />
        <img src="https://static.wixstatic.com/media/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg/v1/fill/w_1211,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg" alt="Image 2" className="w-14 h-14  cursor-pointer hidden sm:block"  />
        <img src="https://static.wixstatic.com/media/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg/v1/fill/w_1211,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg" alt="Image 2" className="w-14 h-14  cursor-pointer hidden sm:block"  />
        <img src="https://static.wixstatic.com/media/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg/v1/fill/w_1211,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg" alt="Image 2" className="w-14 h-14  cursor-pointer hidden sm:block"  />
        <img src="https://static.wixstatic.com/media/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg/v1/fill/w_1211,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg" alt="Image 2" className="w-14 h-14  cursor-pointer hidden sm:block"  />
        <img src="https://static.wixstatic.com/media/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg/v1/fill/w_1211,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg" alt="Image 2" className="w-14 h-14  cursor-pointerhidden sm:block"  />
        <img src="https://static.wixstatic.com/media/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg/v1/fill/w_1211,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg" alt="Image 2" className="w-14 h-14  cursor-pointer hidden sm:block"  />
        <img src="https://static.wixstatic.com/media/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg/v1/fill/w_1211,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg" alt="Image 2" className="w-14 h-14 cursor-pointer hidden sm:block"  />
        <img src="https://static.wixstatic.com/media/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg/v1/fill/w_1211,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg" alt="Image 2" className="w-14 h-14  cursor-pointer hidden sm:block"  />
        <img src="https://static.wixstatic.com/media/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg/v1/fill/w_1211,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg" alt="Image 2" className="w-14 h-14  cursor-pointer hidden sm:block"  />
        <img src="https://static.wixstatic.com/media/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg/v1/fill/w_1211,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg" alt="Image 2" className="w-14 h-14  cursor-pointer hidden sm:block"  />
        <img src="https://static.wixstatic.com/media/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg/v1/fill/w_1211,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg" alt="Image 2" className="w-14 h-14  cursor-pointer hidden sm:block"  />
        <img src="https://static.wixstatic.com/media/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg/v1/fill/w_1211,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg" alt="Image 2" className="w-14 h-14  cursor-pointer hidden sm:block"  />
        <img src="https://static.wixstatic.com/media/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg/v1/fill/w_1211,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg" alt="Image 2" className="w-14 h-14  cursor-pointer hidden sm:block"  />
        <img src="https://static.wixstatic.com/media/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg/v1/fill/w_1211,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg" alt="Image 2" className="w-14 h-14  cursor-pointer hidden sm:block"  />
        </div>
  </div>
      
        </div>
      
    </div>
    
  )
}

export default VideoEditor
