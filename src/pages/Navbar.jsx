import React from 'react'
const Navbar = () => {
  return (
    <div className='row mt-3'>
        <div className="col-11 mt-1 fs-2 text-danger fw-bold">
            Quản Lý Địa Bàn
        </div>
        
        <div className="col-1">
            <img 
                src="https://avatarfiles.alphacoders.com/826/thumb-82642.png" 
                alt="avatar"
                className='rounded-circle w-75 '
            />
        </div>
    </div>
  )
}

export default Navbar