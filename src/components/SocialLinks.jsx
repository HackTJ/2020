import React, {Component} from 'react';
import '../App.css';

class SocialLinks extends Component {
  render() {
    if (this.props.includeHackTJLogo) {
      return (<div className="social-links">
        <div className="social-group">
          <a className="social pe-so-twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/HackTJOfficial"/>
          <a className="social pe-so-facebook" target="_blank" rel="noopener noreferrer" href="https://facebook.com/HackTJOfficial"/>
          <a className="social pe-so-instagram" target="_blank" rel="noopener noreferrer" href="https://instagram.com/hacktjofficial"/>
        </div>
        <a className="logo-link" target="_blank" rel="noopener noreferrer" href="https://hacktj.org">
          <img className="logo" src={require('../images/logo-black.png')} alt="HackTJ"/>
        </a>
      </div>);
    } else {
      return (<div className="social-links">
        <a className="social pe-so-twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/HackTJOfficial"/>
        <a className="social pe-so-facebook" target="_blank" rel="noopener noreferrer" href="https://facebook.com/HackTJOfficial"/>
        <a className="social pe-so-instagram" target="_blank" rel="noopener noreferrer" href="https://instagram.com/hacktjofficial"/>
      </div>);
    }
  }
}

export default SocialLinks;
