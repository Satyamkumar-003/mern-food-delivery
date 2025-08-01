import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '15%', // ✅ Changed from 50% to 10% to avoid overlapping navbar
  left: '50%',
  transform: 'translateX(-50%)', // ✅ Only horizontal centering now
  backgroundColor: 'rgba(245, 245, 245, 1)',
  zIndex: 1000,
  height: '80vh', // ✅ Use viewport height unit
  width: '90%',
  overflowY: 'auto', // ✅ Make modal content scrollable
  borderRadius: '8px',
  padding: '20px'
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}
// created two style and provided to divs below
export default function Modal({ children, onClose }) {
//   as we are doing everything on the single page and want and another page over the same page and thngs remain as a single page so ther we use a create portal 
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button className='btn bg-danger fs-4' style={{ marginLeft: "90%", marginTop: "-35px" }} onClick={onClose}> X </button>
        {children}
      </div>
    </>,
    document.getElementById('cart-root')
  )
}