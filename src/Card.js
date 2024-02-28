import React from 'react';

const Card = () => {
    return (
            <div className="card-deck">
              <div className="card">
                <img src="..." className="card-img-top" alt="Card 1" />
                <div className="card-body">
                  <h5 className="card-title">Card 1</h5>
                  <p className="card-text">This is a sample card.</p>
                </div>
              </div>
              <div className="card">
                <img src="..." className="card-img-top" alt="Card 2" />
                <div className="card-body">
                  <h5 className="card-title">Card 2</h5>
                  <p className="card-text">This is another sample card.</p>
                </div>
              </div>
              <div className="card">
                <img src="..." className="card-img-top" alt="Card 3" />
                <div className="card-body">
                  <h5 className="card-title">Card 3</h5>
                  <p className="card-text">This is a third sample card.</p>
                </div>
              </div>
            </div>

);
    }

     export default Card;