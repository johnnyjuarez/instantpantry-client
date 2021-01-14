import React from 'react'

export default function Modal({open, children, onClose}) {
  if(!open) return null;
  return (
    <div>
      <div className='overlay'>
        <div className='modal'>
          <button onClick={onClose}>Close</button>
          {children}
        </div>
      </div>
    </div>
  )
}
