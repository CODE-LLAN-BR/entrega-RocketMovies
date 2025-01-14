import { Container , Leave ,Search} from './styles';

import { Input } from '../Input';
import { Link } from 'react-router-dom';



export function Header(){
    return(
        <Container>
            <h1>
                RocketMovies
            </h1>

            <Search>
                <Input placeholder ="Pesquisar pelo título" className= "input"/>
            </Search>
            
            <Leave>
                <section>
                    <h3>Leonardo Nunes</h3>

                    <a href="#">sair</a>
                </section>
                    
                <Link to="/profile">
                    <img src="https://github.com/CODE-LLAN-BR.png" alt="foto do usuário" />
                </Link>
            </Leave>

            
        </Container>
    )
};
