import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types';

const GifExpertApp = () => {

    // const categories = ['One Punch','Samurai X','Dragon ball']; // no se hace a menos que este arreglo nunca cambie

    const [categories, setCategories] = useState(['Sailor Moon']);

    // const handleAdd = () => {

    //     // setCategories(['HunterXHunter', ...categories]); // Agrega el elemento al inicio del arreglo
    //     setCategories(cats => [ ...cats, 'HunterX' ]); // agrega el elemento a final del arreglo utilizando Callback
    // };
    
    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={setCategories} />   
            
            <hr />
            
            

            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category} 
                            category={category} />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;