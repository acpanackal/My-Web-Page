import React from 'react';

const AboutPage = () => (
    <>
        <h1 class="hobbies">Here is what I do when I am free...</h1>
        
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                   
                    
                </ol>

            <div class="carousel-inner" role="listbox">

                <div class="item active">
                    <img src="cakes.jpg" alt="Chania" width="460" height="345"/>
                        <div class="carousel-caption">
                            <h3>Baking</h3>
                            <p>Love Baking</p>
                        </div>
                </div>

                <div class="item">
                     <img src="cycle.jpg" alt="Chania" width="460" height="345"/>
                            <div class="carousel-caption">
                                <h3>Cycling</h3>
                                <p>Cycling is happiness</p>
                            </div>
                </div>
                <div class="item">
                    <img src="travel.jpg" alt="travel" width="460" height="345" />
                    <div class="carousel-caption">
                        <h3>Travelling</h3>
                        <p>Travel and explore</p>
                    </div>
                </div>

                            </div>

                            
                            <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
        </div>
    </>
);

export default AboutPage;