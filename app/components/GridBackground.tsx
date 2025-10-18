import React from 'react'

export default function GridBackground() {
  return (
    <>
     <div className="absolute inset-0 z-0">
        {/* Grid */}
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:40px_40px]">
          </div>
      </div>
    </>
  )
}
