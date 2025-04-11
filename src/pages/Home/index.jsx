import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

import {FiPlus} from 'react-icons/fi';

import { Container ,Content } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Note } from "../../components/Note";






export function Home() {
    
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    

    function handlePreview(id){
        navigate(`/preview/${id}`);
    }

    useEffect(()=>{
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}`);
            
            setNotes(response.data);
        }
        fetchNotes()
        
        
    },[search]);

    


    return(
        <Container>
            <Header useSet={setSearch}/>
            <main>
                <section className='head'>
                    <h2>Meus filmes</h2>
                    <Button icon={FiPlus} title="Adicionar filme" id="button" to="/new" />
                </section>

                <Content>
                    <section className='contentData'>
                    {
                    notes?.map(note => (
                            <Note
                                key={String(note.id)}
                                data={note}
                                onClick={()=>handlePreview(note.id)}
                            /> 
                        ))
                     }
                    
                    </section>
                </Content>
 
            </main>
        </Container>
    );
};