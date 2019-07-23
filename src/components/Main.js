import React from 'react'
import PropTypes from 'prop-types'

// import pic01 from '../images/pic01.jpg'
// import pic02 from '../images/pic02.jpg'
// import pic03 from '../images/pic03.jpg'
import pic04 from '../images/self_bw_2.jpeg'
import pic05 from '../images/dark_bounce.gif'
import Fd from '../images/fd.png'
import Xj from '../images/xj16.png'
import Icarus from '../images/ic_lives.gif'
import Fdlogo from '../images/future_logo.png'
import Rklogo from '../images/rfk_logo_white.png'
import Lrlogo from '../images/whiterabbit.png'
import Hamlogo from '../images/ham_white_logo.png'




class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic04} alt="" /></span>
          <div className="rk-info">
            <p> UX | UI | Development | Design | Robotics | Painting | Creative Expression </p>
            <p>Focusing on the importance of aesthetics, relevance, and usability. Through my interest in artistic expression, I cultivate my principles through illustrative websites and creations.</p>
            <p>I’m passionate about building out concepts that positively resonate with both the user and client.</p>
            <p>I would like to think of myself as a liaison between design and development.</p>
          </div>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <h3>Projects</h3>
          <span className="image main"><img src={Icarus} alt="" /></span>
          <h4>I C A R U S | L I V E S </h4>
            <p>Custom built project implementing threeJS within React along with live deployment</p>
            <p>Showcasing our solar system along with real time tracking of the ISS via API calls</p>
            <p>Viewable across a variety of viewports, fully responsive across desktop, tablet, and mobile</p>
          <a href="https://www.icarus-lives.com" target="_blank">live deployment</a>

          <span className="image main"><img src={Fd} alt="" /></span>
          <h4>F U T U R E D A Y S </h4>
          <p>Concept project for front end engineering company.</p>
          <p>Wire-frame and prototyping using Sketch</p>

          <span className="image main"><img src={Xj} alt="" /></span>
          <h4>X J 1 6</h4>
          <p>Built concept for shared workspace enviorment targeting creatives.</p>
          <p>A/B testing for client utlizing Sketch for wire-framing / prototyping</p>
          <p>Responsive across a multitude of viewports</p>
          <a href="https://github.com/Robbiekruszynski/web-design-process" target="_blank">Github</a>
          {close}
        </article>


        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Stack</h2>
          <span className="image main"><img src={pic05} alt="" /></span>
          <div className ="stack">
            <div class="inner-one">
              <ul>
                <li> HTML 5 </li>
                <li> CSS </li>
                <li> SCSS </li>
                <li> Styled Components </li>
                <li> JavaScript </li>
              </ul>
            </div>
            <div class="inner-two">
              <ul>
                <li> 3JS </li>
                <li> React </li>
                <li> Python </li>
                <li> PHP </li>
                <li> mySQL </li>
              </ul>
            </div>
            <div class="inner-three">
            <ul>
              <li> Sketch </li>
              <li> Figma </li>
              <li> InVision </li>
              <li> PhotoShop </li>
              <li> LightRoom </li>
            </ul>
          </div>
        </div>
            {close}
        </article>

        <article id="design" className={`${this.props.article === 'design' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Design</h2>
          <h4>Logo Creations</h4>
            <hr></hr>
          <div className="logoBlock">
            <div className="block-two">
              <div className="logo-text">
                <h4>RFK</h4>
                <p>Personal logo</p>
              </div>
              <span className="logo"><img src={Rklogo} alt="" /></span>
            </div>
            <hr></hr>
            <div className="block-one">
              <span className="logo"><img src={Fdlogo} alt="" /></span>
                <div className="logo-text">
                  <h4>Future Days</h4>
                  <p> Logo design for a start up software / front end company.</p>
                </div>
            </div>
            <hr></hr>
            <div className="block-three">
              <div className="logo-text">
                <h4>Lucky Rabbit</h4>
                <p>Logo design for a web-based moto route tracking aplication.</p>
              </div>
              <span className="logo"><img src={Lrlogo} alt="" /></span>
            </div>
            <hr></hr>
            <div className="block-four">
              <span className="logo"><img src={Hamlogo} alt="" /></span>
              <div className="logo-text">
                <h4>HammerHead</h4>
                <p>Logo design for a Portland motorcycle club</p>
              </div>
            </div>
            <hr></hr>
          </div>
            {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <h3>robbiekruszynski@gmail.com</h3>
          <a href="https://docs.google.com/presentation/d/1sL75Aqez-TWTaELnlZvwG2L_hYo4UMbG_qGcOKzX3D4/edit?usp=sharing"target="_blank"><h4>Digital Portfolio</h4></a>
          <a href="https://www.linkedin.com/in/robbie-k/"target="_blank"><h4>Linkedin</h4></a>

          <ul className="icons">
            <li><a href="https://www.instagram.com/_wave_dash/" className="icon"target="_blank"><span className="label">IG</span></a></li>
            <li><a href="https://github.com/Robbiekruszynski" className="icon"target="_blank"><span className="label">GH</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
