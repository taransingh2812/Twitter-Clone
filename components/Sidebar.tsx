import React from 'react';
import { 
    BellIcon, 
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon,
} from "@heroicons/react/outline";
import SideBarRow from './SideBarRow';
import { signIn, signOut, useSession } from 'next-auth/react';

function Sidebar() {

  const { data : session } = useSession();
  return (
    <div className="col-span-2 flex flex-col  items-center px-4 md:items-start">
        <img className="m-3 h-10 w-10" src="https://links.papareact.com/drq" alt=""/>
        
        <SideBarRow Icon={HomeIcon} title="Home"/>
        <SideBarRow Icon={HashtagIcon} title="Explore"/>
        <SideBarRow Icon={BellIcon} title="Notifications"/>
        <SideBarRow Icon={MailIcon} title="Messages"/>
        <SideBarRow Icon={BookmarkIcon} title="BookMarks"/>
        <SideBarRow Icon={CollectionIcon} title="Lists"/>
        <SideBarRow onClick={session ? signOut : signIn} Icon={UserIcon} title={session ? 'Sign Out' : 'Sign In'}/>
        <SideBarRow Icon={DotsCircleHorizontalIcon} title="More"/>
    </div>

    
  )
}

export default Sidebar