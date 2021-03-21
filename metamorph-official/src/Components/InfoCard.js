import React from 'react'
import Data from '../dataAll/Data.json'
import Logo from '../images/LogoM.png'
import '../css/InfoCard.scss'
function InfoCard({ info }) {

    return (
        <div className="all">
            <div class="movie_card" id="ave" style={{boxShadow: `0px 0px 150px -45px ${info.brcolor}`}}>
                <div class="info_section">
                    <div class="movie_header">
                        <img class="locandina" src={Logo} />
                        <h1 id="heading" style={{textAlign:'center',marginLeft:'6vw'}}>{info.Text}</h1>
                        <h4 id="eventno">{info.cornertext}</h4>
                        <span class="minutes">24 March</span>
                        <p class="type">{info.Description}</p>
                    </div>
                    <div class="movie_desc">
                        <p class="text">{info.Para}</p>
                    </div>
                    <div class="movie_social">
                        <ul>
                            <li> <i class="fa fa-heart" aria-hidden="true">Share</i></li>
                            <li><i class="fa fa-heartbeat" aria-hidden="true"></i></li>
                            <li><i class="fa fa-hand-pointer-o" aria-hidden="true"></i></li>
                        </ul>
                    </div>
                </div>
                <div class="blur_back ave_back" style={{backgroundImage:`url(${info.photo})`}}></div>
            </div>
        </div>

    )
}

export default InfoCard
