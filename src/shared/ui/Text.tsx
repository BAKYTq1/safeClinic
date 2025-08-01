import React from 'react'

interface TextCont {
  title: string
}
function Text({children}: TextCont) {
  return (
    <div>
      <h1 style={{fontSize:'16px',fontWeight: '500', lineHeight:'25px' }}>{children}</h1>
    </div>
  )
}

export default Text
