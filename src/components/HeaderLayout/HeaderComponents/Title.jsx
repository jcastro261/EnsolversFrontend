import React from 'react';

const Title = () => {
    return (
        <div style={styleTitle.title}>
            <h1 style={styleTitle.letter}>MY NOTES</h1>
        </div>
    );
};

const styleTitle ={
    title:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    letter:{
        fontFamily: '"Radio Canada", sans-serif',
    }
    
};

export default Title;