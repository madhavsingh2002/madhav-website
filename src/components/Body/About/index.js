
import './about.css'
import SocialContact from '../../common/social-Contact/social'

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <h1>Hi, <br /> <span className="info-name"> I am Madhav Singh </span> </h1>
          <p>MERN Stack Developer and UI/UX Designer <br />Based out of Delhi</p>
        </div>
        <div className="about-photo">
           <img src={require('../../../images/bg.png')} className='picture' />
        </div>
      </div>
      
      <div className="about-bottom">
        <SocialContact/>
      </div>
    </div>
  )
}

export default About
