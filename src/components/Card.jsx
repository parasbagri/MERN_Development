import React from 'react';

const Card = () => {
    return (
        <div>
            <div className="card m-3" style={{ width: "18rem", maxHeight: "860px" }}>
                <div className='m-1'>
                    <img src="https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top " alt="..."  style={{ width: "17.4rem" , maxHeight: "260px" }}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example 
                        </p>
                        <div className="container d-flex">
                            <select name="" id="" className="m-1  h-50 bg-secondary">
                                {/* Dropdown options for dishes */}
                                {[
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                ].map((dish, index) => (
                                    <option key={index}>{dish}</option>
                                ))}
                            </select>
                            <select name="" id="" className="m-1 h-50  bg-secondary">
                                {/* Dropdown options for sizes */}
                                {[
                                    "Half",
                                    "Full",
                                    "Midium",
                                    "Large",
                                    "Quater",
                                ].map((size, index) => (
                                    <option key={index}>{size}</option>
                                ))}
                            </select>
                            <div className='d-inline'>
                                Total Price:
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
