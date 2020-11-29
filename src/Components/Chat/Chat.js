import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, Search } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [input, setInput] = useState("")
  const [seed, setSeed] = useState("")

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const sendMessage = (e) => {
    e.preventDefault()
    console.log("type", input);
    setInput("")
  }
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {/* message.name === user.displayName */}
        <p className={`chat__message ${true && "chat__receiver"}`}>
          <span className="chat__name">kawser Ahmed</span>
        hey Guys
        <span className="chat__timestamp">
            3.52pm
        </span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form action="">
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" type="text" />
          <button type="submit" onClick={sendMessage}>Send a message</button>
        </form>
        <Mic />
      </div>
    </div>
  );
};

export default Chat;