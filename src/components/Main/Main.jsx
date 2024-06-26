import React, { useContext } from 'react'
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';
const Main = () => {
     const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

     return (

          <div className="main">
               <div className="nav">
                    <p>Gemini</p>
                    <img src={assets.user_icon} alt="" />
               </div>
               <div className="main-container">

                    {!showResult ? <>
                         <div className="greet">
                              <p><span>Hello, Ali</span></p>
                              <p>How can I help you today</p>
                         </div>
                         <div className="cards">
                              <div onClick={()=>setInput("Suggest beautiful place to see on an upcoming road trip")} className="card">
                                   <p >Suggest beautiful place to see on an upcoming road trip</p>
                                   <img src={assets.compass_icon} alt="" />
                              </div>
                              <div onClick={()=> setInput("Briefly summarize this concept: urban planning")} className="card">
                                   <p >Briefly summarize this concept: urban planning</p>
                                   <img src={assets.bulb_icon} alt="" />
                              </div>
                              <div onClick={()=> setInput("Brainstorm team bonding activities for our work retreat")} className="card">
                                   <p >Brainstorm team bonding activities for our work retreat</p>
                                   <img src={assets.message_icon} alt="" />
                              </div>
                              <div onClick={()=>setInput("Impprove the readability of the following code")} className="card">
                                   <p >Impprove the readability of the following code</p>
                                   <img src={assets.code_icon} alt="" />
                              </div>
                         </div>
                    </> :
                         <div className="result">
                              <div className="result-title">
                                   <img src={assets.user_icon} alt="" />
                                   <p>{recentPrompt}</p>
                              </div>
                              <div className="result-data">
                                   <img src={assets.gemini_icon} alt="Gemini Icon" />
                                   {loading?<div className='loader'>
                                        <hr/>
                                        <hr/>
                                        <hr/>
                                        </div>
                                    :<div className='p' dangerouslySetInnerHTML={{ __html:resultData }} />
                                   }
                              </div>
                         </div>
                    }
                    <div className="main-bottom">
                         <div className="search-box">
                              <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a promt here' />
                              <div>
                                   <img src={assets.gallery_icon} alt="" />
                                   <img src={assets.mic_icon} alt="" />
                                   {input?<img onClick={() => onSent()} src={assets.send_icon} alt="" />:null}
                              </div>
                         </div>
                         <p className="bottom-info">
                              Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
                         </p>
                    </div>
               </div>
          </div>
     )
}

export default Main
