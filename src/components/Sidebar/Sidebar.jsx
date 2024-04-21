import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets.js'
import './Sidebar.css'
import { Context } from '../../context/Context.jsx';

const Sidebar = () => {
  const [extended, setExtende] = useState(true);
  const {newChat, onSent, prevPrompts, setRecentPrompt } = useContext(Context);
  
  const loadPrompt = async(prompt)=>{
    setRecentPrompt(prompt);
    await onSent(prompt)
  }
  
  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={() => { setExtende(prev => !prev) }} className='menu' src={assets.menu_icon} alt="" />
        <div onClick={()=> newChat() } className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ?
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div onClick={()=>loadPrompt(item) } className="recent-enetry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0,18)}....</p>
                </div>
              )
            })}
          </div> : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-enetry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>help</p> : false}
        </div>
        <div className="bottom-item recent-enetry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-enetry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>

      </div>
    </div>
  )
}

export default Sidebar
