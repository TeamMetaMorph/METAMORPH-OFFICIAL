import React from 'react'
import '../css/Landing.scss'
import Robot from "../images/AB.svg"
function Landing() {
    return (
        <div className="one">
            <div class="container-fluid">
                <div class="row">
                    <div className="col-md-4 Hero">
                        <div class="row mt-sm-6">
                            <h1 className="col-md-12 text-center  hero1">Team Metamorph<span id="hero2"> Fascilating.</span>.</h1>
                            <p className="col-md-12 text-center hero3">Technology Beyond Science</p>
                        </div>
                    </div>
                    <div className="col-md-8 Robot">
                        <object type="image/svg+xml" data={Robot} className="Robo"></object>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Landing