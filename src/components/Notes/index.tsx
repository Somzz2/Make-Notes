import * as C from './styles';
import React, { useState } from 'react';
import { NotesType, useNotes } from '../../reducers/useReducer';



const Notes = () => {

    const [list, dispatch] = useNotes();

    const [modalShow, setModalShow] = useState<boolean>(false);
    const [bgColor, setBgColor] = useState<string>("default");
    const [bgColorEdit, setBgColorEdit] = useState<string>("default");
    const [titles, setTitle] = useState<string>("")
    const [importances, setImportance] = useState<string>("")
    const [texts, setText] = useState<string>("")


    const [noteActual, setNoteActual] = useState<NotesType[]>()
    const [noteActualDisplay, setNoteActualDisplay] = useState<boolean>(false)

    const [editNote, setEditNote] = useState<boolean>(false)
    const [editID, setEditID] = useState<string | undefined>('')


    const handleOpenModal = () => {
    setModalShow(true)
    
    }

    const handleCloseModal = () => {
        setModalShow(false)
        setBgColor("default")
        setImportance("")
        setTitle("")
        setText("")
        
    }

    const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        if (e.target.value !== "default") {
            setBgColor(e.target.value);
            setImportance(e.target.value)
        } else {
            setBgColor("default")
        }
        
    }

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }


    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        dispatch({
            type: 'ADD',
            payload: {
                title: titles,
                importance: importances,
                text: texts
                }
            });
        handleCloseModal()
 
    }

    const handleOpenNote = (id: string | undefined) => {
        const actualNote: NotesType[] =  list.filter(i=>i.id === id)
        setNoteActual(actualNote)
        setNoteActualDisplay(true)
    }
    const handleCloseNote = () => {
        setNoteActualDisplay(false)
        
    }
    const handleEdit = (id: string | undefined) => {
        
        const actualNote: NotesType[] =  list.filter(i=>i.id === id)
        setNoteActual(actualNote)
        setEditNote(true)
        setTitle(actualNote[0].title)
        setImportance(actualNote[0].importance)
        setText(actualNote[0].text)
        setEditID(actualNote[0].id)
    }
    const handleDelete = (id: string | undefined) => {
        dispatch({
            type: 'DEL',
            payload: {
                id: id,
                title: '',
                importance: '',
                text: ''
            }
            });
    }
    const handleCloseEdit = () => {
        setEditNote(false)
    }

    const handleEditSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        dispatch({
            type: 'EDIT',
            payload: {
                id: editID,
                title: titles,
                importance: importances,
                text: texts
                }
            });
            setEditNote(false);
        
    }

    return (
        <C.Container>
            <C.AllNotes>
                {list.map((i, index) => (
                    <>
                    <C.Notes onClick={() => handleOpenNote(i.id)} bgColor={i.importance}>
                        <h5>{i.title}</h5>
                        <span >{i.text}</span>
                    </C.Notes>
                    <button id={i.id} onClick={() => handleEdit(i.id)}>✏️</button>
                    <button id={i.id} onClick={() => handleDelete(i.id)}>❌</button>
                    </>
                ))}
            </C.AllNotes>
            <C.Plus onClick={handleOpenModal}>+</C.Plus>
            {modalShow &&
                <C.BgModal>
                    <C.Modal className={bgColor}>
                        <button className="close" onClick={handleCloseModal}>❌</button>
                        <form onSubmit={handleSubmit}>
                            <div className="noteItems">
                                <div className="title" >
                                    <label>Título:</label>
                                    <input type="text" onChange={handleTitle} required/>
                                </div>
                                <div className="color">
                                    <label>Importância:</label>
                                    <select required value={importances} onChange={handleColorChange}>
                                        <option value="default" selected>Selecione</option>
                                        <option value="red">Muito Importante</option>
                                        <option value="orange">Importante</option>
                                        <option value="blue">Pouco Importante</option>
                                        <option value="green">Sem Relevância</option>
                                    Selecione</select>
                                </div>
                                <div className="text">
                                    <label>Texto:</label>
                                    <textarea onChange={handleText} required></textarea>
                                </div>
                            </div>
                            <button type='submit'>Adicionar</button>
                            <button>Cancelar</button>
                        </form>
                    </C.Modal>
                </C.BgModal>
            }  
            {noteActual && noteActualDisplay &&
            <C.BgModal>
                <C.OpenNote className={noteActual[0].importance}>
                    <button className="close" onClick={handleCloseNote}>❌</button>
                    
                    <div className='cont-note'>
                        <h1>{noteActual[0].title}</h1>
                        <div className='text-note'>{noteActual[0].text}</div>
                    </div>
                
                </C.OpenNote>
            </C.BgModal>
        }
            {noteActual && editNote &&
            <C.BgModal>
                <C.EditNote className={noteActual[0].importance}>
                    <button className="close" onClick={handleCloseEdit}>❌</button>
                    <form onSubmit={handleEditSubmit}>
                            <div className="noteItems">
                                <div className="title" >
                                    <label>Título:</label>
                                    <input type="text" onChange={handleTitle} defaultValue={noteActual[0].title} required />
                                </div>
                                <div className="color">
                                    <label>Importância:</label>
                                    <select required value={noteActual[0].importance} onChange={handleColorChange}>
                                        <option value="default" selected>Selecione</option>
                                        <option value="red">Muito Importante</option>
                                        <option value="orange">Importante</option>
                                        <option value="blue">Pouco Importante</option>
                                        <option value="green">Sem Relevância</option>
                                    Selecione</select>
                                </div>
                                <div className="text">
                                    <label>Texto:</label>
                                    <textarea onChange={handleText} required>{noteActual[0].text}</textarea>
                                </div>
                            </div>
                            <button type='submit'>Editar</button>
                    </form>
                </C.EditNote>
            </C.BgModal>
        }
        </C.Container>
    )
}

export default Notes