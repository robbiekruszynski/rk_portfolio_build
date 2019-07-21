import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/self_bw_2.jpeg'
import pic05 from '../images/dark_bounce.gif'
import Fd from '../images/fd.png'
import Xj from '../images/xj16.png'
import Icarus from '../images/ic_lives.gif'
import Fdlogo from '../images/fd_logo_white.png'
import Rklogo from '../images/rfk_logo_white.png'


class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic04} alt="" /></span>
              <p>| UX | UI | Development | Design | Robotics | Painting | Creative Expression </p>
              <p>Focusing on the importance of aesthetics, relevance, and usability. Through my interest in artistic expression, I cultivate my principles through illustrative websites and creations.</p>
              {close}
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work Examples</h2>
          <span className="image main"><img src={Fd} alt="" /></span>
          <p>F U T U R E D A Y S </p>
          <span className="image main"><img src={Xj} alt="" /></span>
          <p>X J 1 6</p>
          <span className="image main"><img src={Icarus} alt="" /></span>
          <h4>I C A R U S | L I V E S </h4>
          <p>Custom built project implementing threeJS within React along with live deployment</p>
            <ul>
              <li>Showcasing our solar system along with real time tracking of the ISS via API calls</li>
              <li>Viewable across a variety of viewports, fully responsive across desktop, tablet, and mobile</li>
              <li>Logo creation / rings house built</li>
            </ul>
          <a ref="https://www.icarus-lives.com">live deployment</a>
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
            </ul>
          </div>
        </div>
            {close}

        </article>

        <article id="design" className={`${this.props.article === 'design' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Design</h2>
          <h4>Logo work</h4>
          <span className="logo"><img src={Fdlogo} alt="" /></span>
          <span className="logo"><img src={Rklogo} alt="" /></span>
          <span className="logo"><img src={Fdlogo} alt="" /></span>

          <p>Testing</p>
            {close}

        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">

            <li><a href="#" className="icon"><span className="label">IG</span></a></li>
            <li><a href="#" className="icon"><span className="label">GH</span></a></li>
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
