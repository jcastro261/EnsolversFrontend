import React,{ useState, useEffect }  from 'react';
import Note from './NoteCard/Note';



const Notes = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/api/note/findAll")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setNotes(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])

      if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div style={styleNotes.notesContainer}>
                {notes.map((dato) =>(
                <Note
                titulo = {dato.title}
                texto = {dato.text}
                idNote = {dato.idNote}
                />
            ))}
            </div>
        );
    }
}

const styleNotes ={
    notesContainer:{
        width:'100vw',
        display:'flex',
        flexFlow:'row wrap',
        justifyContent:'space-around',
        alignItems:'center',
    }
}

export default Notes;