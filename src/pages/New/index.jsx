import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { api } from "../../services/api";

import { Container ,Form } from './styles';


import { FiArrowLeft } from 'react-icons/fi'

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { NoteTag } from '../../components/NoteTag';
import { Button } from '../../components/Button'


export function New() {
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [rating , setRating] = useState("");
    const [ tags, setTags ] = useState([]);
    const [ newTag, setNewTag ] = useState("");

    const navigate = useNavigate();

    
    function handleAddTag() {
        setTags(prevState =>[...prevState, newTag ])
    }
    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted ))
    }

    async function handleNewNote() {
        if(!title) {
            return alert("Digite o título do filme");
        }

        if(newTag){
            return alert("Você deixou uma tag no campo de adicionar , mas nao clicou em adicionar. Clique para adicionar ou deixe o campo vazio");
        }

        await api.post("/notes", {
            title,
            rating,
            description,
            tags,

        }).then(()=>{
            alert("Nota do filme criada com sucesso!");
            navigate(-1);
        }).catch(error => {
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Não foi possível criar a nota do filme");
            }
        });


        
    }

    return(
        <Container>
            <Header/>
            <main>
                <Link to="/"><FiArrowLeft/>Voltar</Link>
                <Form>
                    <div className='formBox'>
                        <section>
                            <h2>Novo filme</h2>
                            <div className='inputBox'>
                                <Input type='text' 
                                placeholder='Título' 
                                onChange = {e => setTitle(e.target.value)}/>

                                <Input type='text' placeholder='Sua  nota (de 0 a 5)'
                                onChange = {e => setRating(e.target.value)}/>
                            </div>
                            <textarea 
                            placeholder='Observações'
                            onChange = {e => setDescription(e.target.value)}></textarea>
                        </section>

                        <section>
                            <h3>Marcadores</h3>
                            <div className='tagBox'>
                            {
                            tags.map((tag,index)=> (
                                <NoteTag 
                                key={String(index)}
                                value={tag}
                                onClick={()=>handleRemoveTag(tag)}
                                />
                            ))
                            
                        }
                                
                                <NoteTag 
                                placeholder='Novo marcador' 
                                isNew
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}/>
                            </div>  
                        </section>   
                        <div className='button-box'>
                            <Button title='Excluir filme'
                            to="/"/>
                    
                            <Button 
                            title='Salvar alterações'
                            onClick={handleNewNote}/>
                        </div>
                    </div> 
                </Form>
            </main>
        </Container>
    );
};