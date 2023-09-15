import React  from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiEnvelope } from 'react-icons/bi';
import { TbBellRinging2Filled } from 'react-icons/tb';
import { VscRefresh } from 'react-icons/vsc';
import { BsPersonCircle } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Refresh,Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({title, customFunc, icon, color, dotColor, hide}) =>(
  <TooltipComponent content={title} position="BottomCenter" >
    <button type="button" onClick={customFunc} style={{color }} className={`${!hide ? "relative" : "hidden"} text-xl rounded-full p-3 hover:bg-light-gray`}>
      <span style={{background:dotColor}} className=" absolute inline-flex rounded-full h-2 w-2 right-2 top-2"/>
        {icon}
    </button>
  </TooltipComponent>

)
const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked,handleClick} = useStateContext();

  return (
    <div className="flex justify-between p-1  relative ">
      <NavButton title="Menu" hide={activeMenu? true : false} customFunc={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)} color="black" icon={<AiOutlineMenu/>}/>

      <div className="flex ">
      <NavButton title="Messages" customFunc={()=> handleClick('chat')} color="black" icon={<BiEnvelope/>}/>
      <NavButton title="Alerts" customFunc={()=> handleClick('notification')} color="black" icon={<TbBellRinging2Filled/>}/>
      <NavButton title="Refresh" customFunc={()=>handleClick('refresh')} color="black" icon={<VscRefresh/>}/>
      <TooltipComponent content="Profile" position="BottomCenter">
        <div className=" flex items-center gap-2 cursor-pointer p-3 hover:bg-light-gray rounded-lg" onClick={()=>handleClick('userProfile')}>
          <p>
            <span className="text-gray-400 font-bold ml-1 text-14"> First Name</span>
          </p> 
          <BsPersonCircle className="text-15"/>
          
        </div>
      </TooltipComponent>

      {isClicked.chat && <Chat/>}
      {isClicked.notification && <Notification/>}
      {isClicked.refresh && <Refresh/>}
      {isClicked.userProfile && <UserProfile/>}
      </div>
    </div>
  )
}

export default Navbar;

