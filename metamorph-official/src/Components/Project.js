import React from 'react'
import '../css/Events.scss'
import '../css/Project.scss'
import InfoCard from './InfoCard'
import dataProject from '../dataAll/dataProject.json'
function Project() {

    
    const personList= dataProject.map(info=> <div className="col-md-12"><InfoCard info={info} />  </div>)
    return (
        <div className="eventCard">
            <h1 id="ttl">Our Projects</h1>
           <div className="container">
               <div className="row">
                        {personList}
               </div>
           </div>
        </div>
    )
}
export default Project