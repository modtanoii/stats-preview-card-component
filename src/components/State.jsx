import React from 'react';
import Card from './Card';
import HeaderImg from '../assets/image-header-desktop.jpg'
import './State.css'

function State() {
  return (
    <Card>
        <div className="main">
            <div className="left">
                <p className='title'>Get insights that help your business grow.</p>

                <p className='text'>Discover the benefits of data analytics and make better decisions regarding revenue, customer 
                experience, and overall efficiency.</p>

                <div className="footer">
                    <div className="value1">
                        <h2>10k+</h2> <p>companies</p>
                    </div>
                    <div className="value2">
                        <h2>314</h2> <p>templates</p>
                    </div>
                    <div className="value3">
                        <h2>12m+</h2> <p>queries</p>
                    </div>
                </div>
            </div>
            
            <div className="right">
                <img src={HeaderImg} alt="" className='headerimg' />
            </div>
        </div>
    </Card>
  )
}

export default State