import styled from "styled-components";



export const Container = styled.div`
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;

    .red {background-color: red}
    .orange {background-color: orange}
    .blue {background-color: blue}
    .green {background-color: green}
    .default {background-color: white}
`

export const AllNotes = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    button {
        position: relative;
        right: 100px;
        top: -100px;
        text-align: center; 
        line-height: 20px; 
        margin-right: 10px;
        height: 25px;
        width: 35px;
        border-radius: 10px;
        
        
        
    }
    @media (max-width: 750px) {
        flex-direction: column;
        margin-bottom: 10px;
        button {
            top: -230px;
            right: -70px;
            margin-bottom: 10px;
        }
    }
    

`
type NotesProps = {
    bgColor: string

    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Notes = styled.div<NotesProps>`
    width: 150px;
    height: 200px;
    background-color: ${props => props.bgColor};
    padding: 20px;
    border-radius: 20%;
    opacity: 70%;
    overflow: hidden;
    display: inline-block;
    cursor: pointer;

    span {
        word-wrap: break-word;
    }

    
`

export const OpenNote = styled.div`

    display: flex;
    flex-direction: column;
    padding: 40px;
    width: 60%;
    min-height: 40%;

    border: 1px solid #000;
    border-radius: 20px;
    position: absolute;
    z-index: 10;

    .close {
        width: 40px;
        height: 30px;
        border-radius: 15px;
        position: absolute;
        left: 80%;
        
     }

    .cont-note {
        padding: 20px;

        h1 {
            text-align: center;
            border-radius: 20px;
            min-width: 70%;
            background-color: #eee;
            overflow: hidden;
        }
        .text-note {
            border-radius: 0;
            min-width: 70%;
            height: 300px;
            background-color: #eee;
            overflow: hidden;
            word-wrap: break-word;
        }
     }

`

export const Plus= styled.button`
    display: block;
    font-size: 18px;
    background-color: rgba(12, 171, 168, 1);
    opacity: 0.7;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    border: none;
    cursor: pointer;

    &:hover {
        
        height: 60px;
        width: 60px;
        border-radius: 30px;
        opacity: 0.4;
    }
`
export const BgModal = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    position: fixed;
    z-index: 10;
    justify-content: center;
    align-items: center;

`
export const Modal = styled.div`
    display: block;
    flex-direction: column;
    padding: 40px;
    width: 60%;
    height: auto;
    
    border: 1px solid #000;
    border-radius: 20px;
    position: fixed;

    .close {
       width: 40px;
       height: 30px;
       border-radius: 15px;
       position: fixed;
       margin-right: 2px;
       right: 30%;
       
    }

    

    .title, .color, .text {
        margin-bottom: 10px;

        label {
            display: block;
            font-size: 18px;
            margin-right: 10px;
            
        }
    }

    .title {
        input {
            width: 50%;
            border-radius: 5px;
            
        }
    }
    

    .color
        select {
            border-radius: 5px;
        }
    }

    .text {
        textarea {
            width: 80%;
            height: 100px;
            resize: none;
        }
    }
`

export const EditNote = styled.div`
    
    display: block;
    flex-direction: column;
    padding: 40px;
    width: 60%;
    min-height: 40%;

    border: 1px solid #000;
    border-radius: 20px;
    position: absolute;
    z-index: 10;

    .close {
        width: 40px;
        height: 30px;
        border-radius: 15px;
        position: absolute;
        left: 80%;
        
    }

    .title, .color, .text {
        margin-bottom: 10px;

        label {
            display: block;
            font-size: 18px;
            margin-right: 10px;
            
        }
    }

    .title {
        input {
            width: 50%;
            border-radius: 5px;
            
        }
    }
    

    .color
        select {
            border-radius: 5px;
        }
    }

    .text {
        textarea {
            width: 80%;
            height: 100px;
            resize: none;
        }
    }
`