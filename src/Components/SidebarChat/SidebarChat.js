import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css';

const SidebarChat = ({addNewChat}) => {
  const [seed, setSeed] = useState("")

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const createChat = () => {
    const roomName = prompt("Please enter name for chat")

    if (roomName) {}
  }
  return !addNewChat ? (
    <div className="SidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
      <div className="SidebarChat__info">
        <h2>Room name</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) :
  (
     <div onClick={createChat}>
<div className="SidebarChat">
  <h2>Add New Chat</h2>
</div>
     </div>
  );
};

export default SidebarChat;