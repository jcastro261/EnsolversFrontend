import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
  } from "reactstrap";



const ButtonsNote = (props) => {

    const [estado, setEstado] = useState({state:false});
    const handleClickOpen = ()=>{
        if (estado.state === true) {
            setEstado({state:false});
        }else{
            setEstado({state:true});
        }
    }
    return (
        <div style={styleButtonsNote.buttonsNoteContainer}>
            <button style={styleButtonsNote.buttons} id={props.idNote} onClick={handleClickOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M20.125 15 18 12.875 19.425 11.45 21.55 13.575ZM12 21V18.875L17.3 13.575L19.425 15.7L14.125 21ZM3 16V14H10V16ZM3 12V10H14V12ZM3 8V6H14V8Z"/></svg>
            </button>
            <button style={styleButtonsNote.buttons} id={props.idNote}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5 21V6H4V4H9V3H15V4H20V6H19V21ZM7 19H17V6H7ZM9 17H11V8H9ZM13 17H15V8H13ZM7 6V19Z"/></svg>
            </button>
            <button style={styleButtonsNote.buttons} id={props.idNote}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M3 21V5.8L5.3 3H18.7L21 5.8V21ZM5.4 6H18.6L17.75 5H6.25ZM5 19H19V8H5ZM12 18 16 14 14.6 12.6 13 14.2V10H11V14.2L9.4 12.6L8 14ZM5 19V8V19Z"/></svg>            
            </button>

        <div style={styleButtonsNote.divModal}>
        <Modal isOpen={estado.state}>
          <ModalHeader>
           <div><h3>Edit Note</h3></div>
          </ModalHeader>

          <ModalBody>
            
            <FormGroup>
              <label>
                Title: 
              </label>
              <input
                className="form-control"
                name="title"
                type="text"
                value='datos'
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Description: 
              </label>
              <textarea
                className="form-control"
                name="description"
                type="text"
                value='datos'
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
            >
              Edit
            </Button>
            <Button
              color="danger"
              onClick={handleClickOpen}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        </div>

        </div>
    );
};

const styleButtonsNote = {
    buttonsNoteContainer:{
        width:'30%',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'flex-end'
    },
    buttons:{
        width:'40px',
        height:'40px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        border:'none',
        borderRadius:'5px',
        backgroundColor:'transparent'
    },
    divModal:{
      display:'hidden'
    }
};

export default ButtonsNote;