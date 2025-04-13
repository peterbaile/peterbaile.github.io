import React, { useState } from 'react'

const VisibleText = ({ children }) => {
  const [show, setShow] = useState(false)

  if (show) {
    return (
      <>
        <button type="button" className="btn shadow-none" style={{ outline: 'None' }} onClick={() => setShow(!show)}>⬆️</button>
        {children}
      </>
    )
  }

  return (<button type="button" className="btn shadow-none" style={{ outline: 'None' }} onClick={() => setShow(!show)}>⬇️</button>)
}

export default VisibleText