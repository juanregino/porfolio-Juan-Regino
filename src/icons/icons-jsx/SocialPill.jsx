



{/* <style >
  .shadow.md {
    box-shadow: 0 0 35px 12px var(#17bab8) !important;
  }
</style> */}

import React from 'react'

const SocialPill = ({href,children}) => {
  return (
    <>
      <a
  href={href}
  class="shadow-lg bg-teal-500 rounded-full border border-white/10 flex justify-center items-center gap-x-3 py-2 px-4 bg-white/10 hover:scale-110 hover:bg-white/30 transition "
  target="_blank"
>
 {children}
</a>
    </>
  )
}

export default SocialPill
