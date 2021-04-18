import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__comtainer">
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg" alt="" />

                <div className="home__raw">
                    <Product />
                    {/*product*/}
                </div>

                <div className="home__raw">
                    {/*product*/}
                    {/*product*/}
                    {/*product*/}
                </div>
                <div className="home__raw">
                    {/*product*/}
                </div>
            </div>
        </div>
    )
}

export default Home
