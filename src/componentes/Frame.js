import React from 'react'

export const Frame = ({ currentiFrame }) => {
  const sizeOfFrame= { 
    width: "100%",
    height: window.innerHeight*.8,
  }
  return (
    <div style={{ width: '80%', height: "100%"}}>
      <iframe 
        title={'iframe-'  + currentiFrame} 
        src={"http://localhost:1880/ui/#!/" + (currentiFrame-1) +"?socketid=iiXQNHrkM3JlaJBOAAAD"}
        width={sizeOfFrame.width}  
        height={sizeOfFrame.height} 
        align="center" 
        style={{ border: 'none'}}
      />
    </div>
  )
}

export default Frame;
//currentiFrame===12? "1500px": (currentiFrame===1||currentiFrame===7)? "1200px" : "800",