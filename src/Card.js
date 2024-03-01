import React from 'react';

const Card = () => {
    return (
        <div>
            <div class="card text-white bg-primary mb-3 width-40" style={{width:400 , display:'inline-flex' , margin:20}}>
                <div class="card-header">Header</div>
                    <div class="card-body">
                        <h5 class="card-title"> Card 1 </h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card text-white bg-secondary mb-3 width-40" style={{width:400, display:'inline-flex', margin:20}}>
                <div class="card-header">Header</div>
                    <div class="card-body">
                        <h5 class="card-title"> Card 2</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card text-white bg-success mb-3 width-40" style={{width:400, display:'inline-flex', margin:20}}>
                <div class="card-header">Header</div>
                <div class="card-body">
                    <h5 class="card-title"> Card 3 </h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>      
        </div>

);
    }

     export default Card;