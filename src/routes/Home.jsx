import React from 'react';
import '../css/Home.scss';
import headerImage from '../assets/img/motorhead1.png';
import textBg from '../assets/img/textBg1_1.jpg';
import * as homeText from '../text/HomeText';
import parallaxImage1 from '../assets/img/paralax-1.jpg';

function Home() {
    return (
        <div>
            <div id="home-header">
                <img id="home-header-image" 
                    src={headerImage}
                    alt="n/a"
                />
                <h1 id="alternative-home-header-text">
                    "If you think you're too old for rock'n'roll, then you are"
                </h1>
            </div>

            <div className="home-bg-with-text">
                <img className="home-text-bg"
                    src={textBg}
                    alt="n/a"
                />
                <p className="paragraph-text">
                    {
                        homeText.FIRST_PARAGRAPH
                    }
                </p>
            </div>

            <div className="parallax-image" 
                style={firstParallaxImageStyle}
            />
        </div>
    )
}

const firstParallaxImageStyle = {
    backgroundImage: "url(" + parallaxImage1 +")",
    // backgroundSize: "cover",
    // height: "1000px"
}

export default Home;
