
import { FiLock, FiMail } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { Container ,Form , Background } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


export function SignIn() {
    return(
        <Container>
                
            <Form>
                <h1>RocketMovies</h1>

                <p>Aplicação para acompanhar tudo que assistir.</p>

                
                <h2>Faça seu login</h2>

                <Input type="text" placeholder="E-mail" icon={FiMail}/>

                <Input type="password" placeholder="Senha" icon={FiLock}/>

                <Button title="Entrar"/>

                <Link className="link" to = "/register">Criar conta</Link>
            </Form>

            <Background/>
            
            
        </Container> 
    );
};
