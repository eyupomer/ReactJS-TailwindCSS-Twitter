import React from 'react';
import {
    HomeIcon,
    ExploreIcon,
    NotificationsIcon,
    MessagesIcon,
    BookmarksIcon,
    ListsIcon,
    ProfileIcon,
    MoreIcon
} from '../icons/Icon';

const Sidebar = () => {
    return (
        <div className="w-72 bg-blue-200">
            Sidebar 
            <HomeIcon/>
            <ExploreIcon/>
            <NotificationsIcon/>
            <MessagesIcon/>
            <BookmarksIcon/>
            <ListsIcon/>
            <ProfileIcon/>
            <MoreIcon/>
            </div>
    )
}

export default Sidebar
