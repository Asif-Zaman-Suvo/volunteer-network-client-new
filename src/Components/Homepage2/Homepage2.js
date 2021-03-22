import React from 'react';
import './Homepage2.css';
import fakeData from '../../fakeData/fakeData';
import CardService from '../CardService/CardService';

const Homepage2 = () => {
    return (
        <div className="container">

           <div className="row">
          
            {
                fakeData.map(service =><CardService service={service}></CardService>)
            }
            
         
           </div>
        </div>
    );
};

export default Homepage2;