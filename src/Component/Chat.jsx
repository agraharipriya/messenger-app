import React from 'react'
import Camera from '../images/video.png'
import Add from '../images/addpeople.png'
import More from '../images/more.png'
import Messages from './Messages'
import {Input}from './Input'
import  { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const {data}=useContext(ChatContext);
  return (
    <div className='chat'>
        <div className='chatInfo'>
            <span>{data.user?.displayName}</span>
            <div className='chatIcons'>
                <img src={Camera}/>
                 <img src={Add}/>
                 <img src={More}/>
            </div>  
        </div>
        <Messages/>
        <Input/>
    </div>
  );
};

export default Chat;