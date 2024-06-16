import React from 'react'
import cross from "../../assets/cross.svg"
import ReactDOM from 'react-dom';
export const Modal = ({isOpen, onClose, children}) => {
  
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className='fixed top-0  w-full h-full bg-black bg-opacity-80 ' style={{zIndex: 100}}>
      <div className='flex items-center justify-center w-full h-full  '>
      <div className='w-fit h-fit  p-2 ps-4 flex flex-col text-black bg-white rounded-md ' >
        <div className='top-0 right-0 flex justify-between gap-52 p-2 '>
          <div>TITLE</div>
          <div className='flex justify-center items-center '>
          <button onClick={onClose} className='w-6 h-6' ><img src={cross} alt="Close" /></button>
          </div>
        </div>
        <hr/>
        <div className='p-2 h-full'>
        {children}
        </div>
      </div>
      </div>
    </div>,
    document.getElementById("modal") as any
  )

}
