import React from 'react'
import think from '../../assets/Assets/think.png'

function Home() {
  return (
   
    <div id='home'>
      <div className="container">
        <img className='think-man'src={think} alt="thinking man" />
          <h3>Forgot your medications? <br/>We can help you!</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum provident, a autem, recusandae explicabo placeat itaque.</p>
          
        </div>

      
    </div>


  )
}

export default Home