import React from 'react'
import '../css/Carousel.scss'
function Carousel() {
    return (
        <div>
           
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2021/01/05/06/40/boat-5889919_960_720.png" alt="First slide" />
      <div class="carousel-caption d-none d-md-block">
    <h5>Team Meta Morph Volunteers</h5>
    <p>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2020/08/14/17/13/light-bulbs-5488573_960_720.jpg" alt="Second slide" />
      <div class="carousel-caption d-none d-md-block">
    <h5>Team Meta Morph Volunteers</h5>
    <p>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2021/01/05/06/40/boat-5889919_960_720.png" alt="Third slide" />
      <div class="carousel-caption d-none d-md-block">
    <h5>Team Meta Morph Volunteers</h5>
    <p>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
  </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </div>
    )
}
export default Carousel