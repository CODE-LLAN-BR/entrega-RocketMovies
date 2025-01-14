import { Container , Form , Avatar} from './styles';

import { FiArrowLeft ,FiUser ,FiCamera, FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom';


import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

export function Profile() {
    return(
        <Container>
            <header>
                <Link to="/"><FiArrowLeft/>Voltar</Link>
            </header>
            <Form>
                <Avatar>
                        <img 
                        src="https://github.com/CODE-LLAN-BR.png" 
                        alt="Foto do usuário" />

                        <label htmlFor="avatar">
                            <FiCamera/>

                            <input 
                            id="avatar"
                            type="file" />
                        </label>
                </Avatar>
                
                <Input type="text" placeholder='Nome' 
                icon= {FiUser} />

                <Input type="text" placeholder='E-mail' 
                icon= {FiMail} />

                <Input type="password" placeholder='Senha atual' 
                icon= {FiLock} />

                <Input type="password" placeholder='Nova senha' 
                icon= {FiLock} />

                <Button
                    title='Salvar'
                />

            </Form>
        </Container>
    );
};