import { Container ,Form } from './styles';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi'

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { NoteTag } from '../../components/NoteTag';
import { Button } from '../../components/Button'


export function New() {
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
                                <Input type='text' placeholder='Título' />

                                <Input type='text' placeholder='Sua  nota (de 0 a 5)'/>
                            </div>
                            <textarea placeholder='Observações'></textarea>
                        </section>

                        <section>
                            <h3>Marcadores</h3>
                            <div className='tagBox'>
                                <NoteTag value ="Terror"/>
                                <NoteTag value ="Drama" />
                    
                                <NoteTag placeholder='Novo marcador' isNew/>
                            </div>  
                        </section>   
                        <div className='button-box'>
                            <Button title='Excluir filme'/>
                            
                            <Button title='Salvar alterações'/>
                        </div>
                    </div> 
                </Form>
            </main>
        </Container>
    );
};