import React from 'react'
import { FaSortDown } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { RiHome3Line } from "react-icons/ri";
import { GrTemplate } from "react-icons/gr";
import { RiFolderVideoLine } from "react-icons/ri";
import { SiPodcastindex } from "react-icons/si";
import { TbBrandPagekit } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { RiContactsLine } from "react-icons/ri";
import { GoQuestion } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { RiScissorsLine } from "react-icons/ri";
import { CiVideoOn } from "react-icons/ci";
import { BsBroadcast } from "react-icons/bs";
import { BsMic } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { PiStarFour } from "react-icons/pi";

const Dashboard = () => {
  return (
    <div className="flex flex-row w-full h-screen">
    <div className="aside p-5 w-1/4  h-full">
    <img className="" src="https://static-assets.veed.io/cdn-cgi/image/width=256,quality=75,format=auto/images/logo/veed.io-black.svg" alt=""/>
    <span className="flex flex-row ">
        <button className="bg-green-300 h-12 w-12 rounded mt-4 text-white font-bold">E</button>
    <span className="flex flex-col justify-center items-center mt-3">
        <span className="flex flex-row items-center ms-8">
            <h1>Emma Stone...</h1><FaSortDown />
        </span>
        <p className="text-sm">Free Plan</p>
    </span>
    </span>
    <span className="flex flex-row ">
        <button className="flex items-center justify-between bg-blue-400 h-10 w-60 rounded-lg p-3 mt-2 text-white">New Video 
        <GoPlus />
          </button>
         </span>
         <button className="flex items-center bg-gray-200 h-10 w-60 rounded-lg p-3 mt-2"> <RiHome3Line className='me-2' />
Home</button>
<div className='flex items-center p-3'><GrTemplate className='me-2' size={15} />Templates</div>
<div className='flex items-center p-3'><RiFolderVideoLine className='me-2'  />All Videos</div>
<div className='flex items-center p-3'><SiPodcastindex   className='me-2'/>Podcasts & Shows</div>
<div className='flex items-center p-3'><TbBrandPagekit  className='me-2'/>Brand Kit</div>

    </div>
    <div className='section h-screen bg-gray-100 w-3/4 '>
        <div className='flex flex-row p-4 justify-between  '>
            <span  className='flex flex-row items-center'>
            <IoIosArrowBack />
<div className='flex items-center bg-white w-48 h-10 rounded-lg ms-2 p-2 space-x-20 '> <CiSearch className='me-2' />
Search <RxCrossCircled className=' ' size={20}/>
</div>
            </span>
            <span className='flex flex-row items-center space-x-4 '>
                <div className='bg-orange-100 flex items-center h-8  w-24 p-1 rounded-md'>Upgrade <BsFillLightningChargeFill className='ms-2' color='orange' /></div>
                <div className='flex items-center bg-slate-300 h-8  w-24 p-1 rounded-md'>Invite <RiContactsLine className='ms-6' /></div>
                <GoQuestion size={25} />
                <IoNotificationsOutline size={25} />
<div className=' rounded-3xl bg-red-200 h-10 w-10' style={{backgroundImage: `url("https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg")`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>



            </span>
        </div>
<div className=' h-1/4 w-full p-5'>
    <h1 className='text-2xl'>Let's create some <span className='font-bold text-2xl'>Videos!</span></h1>
    <div className='grid grid-cols-4 mt-3'>
<div className='flex items-center space-x-3 bg-white rounded-lg h-11 p-2  w-44 border'>
<div className='bg-purple-200 h-8 flex items-center justify-center rounded w-7'><RiScissorsLine  color='purple'/></div>
<p>Create Project</p>
</div>
<div className='flex items-center space-x-3 bg-white rounded-lg h-11 p-2  w-44 border'>
<div className='bg-pink-100 h-8 flex items-center justify-center rounded w-7'><CiVideoOn color='red'/></div>
<p>Record Video</p>
</div>
<div className='flex items-center space-x-3 bg-white rounded-lg h-11 p-2  w-44 border'>
<div className='bg-blue-100 h-8 flex items-center justify-center rounded w-7'><BsBroadcast color='blue' /></div>

<p>Go Live</p>
</div>
<div className='flex items-center space-x-3 bg-white rounded-lg h-11 p-2  w-44 border'>
<div className='bg-red-100 h-8 flex items-center justify-center rounded w-7'><BsMic color='red'/></div>
<p>Record Podcast </p>
</div>

</div>
</div>
<div className='flex justify-between p-3'>
    <p>My Recent videos</p>
    <span className='flex items-center'><p>All videos
</p> <BsChevronRight />
</span>
</div>
<div className='grid grid-cols-3 p-2'>
<div className='flex flex-col'>
<div className=' h-52 w-80 flex flex-col relative' style={{backgroundImage: `url("https://static.wixstatic.com/media/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg/v1/fill/w_1211,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/38a4e9_34c69a2a418e42179e3b2a362d752625f000.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
<div className=' absolute right-2 top-2 bg-orange-500 rounded w-12 flex justify-center text-white'>Draft</div>
<div className=' absolute bottom-1 right-2 flex bg-slate-500 rounded h-5 items-center p-2'>00:46</div>
</div>
<h1>Project Name</h1>
<p className='text-sm'>10 minutes ago</p>
</div>


<div className='flex flex-col'>
<div className=' h-52 w-80 flex flex-col relative' style={{backgroundImage: `url("https://wallpapers.com/images/hd/unique-pictures-7g96f6u9pe2d53ze.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
<div className=' absolute right-2 top-2 bg-orange-400 rounded w-12 flex justify-center text-white '>Draft</div>
<div className=' absolute bottom-1 right-2 flex bg-slate-500 rounded h-5 items-center p-2 '>00:46</div>
</div>
<h1>Project Name</h1>
<p className='text-sm'>15 minutes ago</p>
</div>
<div className='flex flex-col'>
<div className=' h-52 w-80 flex flex-col relative' style={{backgroundImage: `url("https://www.shutterstock.com/image-photo/concept-be-yourself-unique-flock-260nw-762582091.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
<div className=' absolute right-2 top-2 bg-orange-400 rounded w-12 flex justify-center text-white'>Draft</div>
<div className=' absolute bottom-1 right-2 flex bg-slate-500 rounded h-5 items-center p-2'>00:46</div>
</div>
<h1>Project Name</h1>
<p className='text-sm'>20 minutes ago</p>
</div>
</div>
<Link to="/editor"><button className='bg-blue-500 p-2 rounded absolute right-5 text-white'>Go Video Editer</button></Link>
    </div>
   
        </div>
  )
}

export default Dashboard
