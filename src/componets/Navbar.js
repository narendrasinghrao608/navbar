import React from 'react'

function Navbar() {
  return (
        <nav className='flex container items-center space-between '>
            <div className="left flex">
                <img src="https://tse1.mm.bing.net/th?id=OIP.2UpcBpvxDKSvG3kYHOwkfAHaHa&pid=Api&P=0" alt="img" />
                <ul className='flex items-center justify-center uppercase semi-bold'>
                    <li>Men</li>
                    <li>Women</li>
                    <li>kids</li>
                    <li>Home and living</li>
                    <li>Beauty</li>
                    <li>Studio</li>
                </ul>
            </div>
            <div className="right flex  items-center">
                <input class="search" type="text" className='' placeholder='Search for products,brands and more'/>
                <div className="profile mx-2">Profile</div>
                <div className="wishlist mx-2">WishList</div>
                <div className="bag mx-2">Bag</div>
            </div>
        </nav>
  )
}

export default Navbar
