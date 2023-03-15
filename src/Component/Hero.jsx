import React from 'react';
import './Hero.css';


function Hero (props) {
    return (
        <React.Fragment>
        <div className='heroCard'>
            <div className='heroPicture'><img src={props.picture} alt='heroPicture'></img></div><br/>
            <div className='heroTitle'>{props.title}</div>
            <div className='heroText'>{props.text}</div><br/><hr/>
            <div className='heroDescription'>{props.description}</div><br/>
        </div>
        </React.Fragment>
    );
}

export default Hero;