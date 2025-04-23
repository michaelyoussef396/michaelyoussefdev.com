import React from 'react'

const ShowcaseSection = () => {
  return (
    <div id='work' className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
          {/* LEFT */}
          <div className='first-project-wrapper'>
            <div className='image-wrapper'>
              <img src="images/project1.png" alt="ryde" />
            </div>
            <div className='text-content'>
              <h2>On-Demand Rides Made Simple with a powerful. User-Friendly App Called Ryde</h2>
              <p>An App built with React Native, Expo & TailwindCSS for a fast, user-friendly experience</p>
            </div>

          </div>
          {/* RIGHT */}
        </div>
      </div>
      
    </div>
  )
}

export default ShowcaseSection
