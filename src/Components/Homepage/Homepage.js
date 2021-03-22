import React from 'react';
import Header from '../Header/Header';
import MenuBar from '../MenuBar/MenuBar';
import './Homepage.css';

const Homepage = () => {
    return (
        <section className='background'>

            <div className='image-overlay'>
            </div>
            <MenuBar></MenuBar>
            <Header></Header>

        </section>
    );
};

export default Homepage;