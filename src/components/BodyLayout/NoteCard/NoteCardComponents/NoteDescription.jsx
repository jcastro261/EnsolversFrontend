import React from 'react';

const NoteDescription = (props) => {
    return (
        <div style={styleNoteDescription.textContainer}>
            <p>{props.titulo}</p>
            <p>{props.texto}</p>
        </div>
    );
};

const styleNoteDescription ={
    textContainer:{
        width:'40%',
        display:'flex',
        flexFlow:'column',
        justifyContent:'center',
        alignItems:'center',
    }
};

export default NoteDescription;