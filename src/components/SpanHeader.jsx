import React, { Children } from 'react'

const SpanHeader = (props) => {
  return (
    <>
      <span  className="px-4 rounded-full hover:scale-110 hover:bg-white/30 transition" onClick={props.onClick} >
        {props.children}
      </span>
    </>
  );
}

export default SpanHeader




