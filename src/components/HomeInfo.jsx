import React from 'react'

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Welcome to <span className='font-semibold'>Encore Technology Services</span> 🚀
            <br />
            We are here to elevate your business with our tech experience.
            <p className='font-semibold'>Reborn to sucess!</p>
            <br />
            <p> To use this web press your keys arrows keys or drag with your mouse</p>
        </h1>
    ),
    2: (
        <h1>2</h1>
    ),
    3: (
        <h1>3</h1>
    ),
    4: (
        <h1>4</h1>
    ),
}

const infoBox = ({text, linl, btnText}) => (
    <div className='info-box'>
        {text}
    </div>
)
const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
