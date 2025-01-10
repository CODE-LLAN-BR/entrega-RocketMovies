import { Container , Leave ,Search} from './styles';

import { Input } from '../Input';



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
                    
                <figure>
                    <img src="https://github.com/CODE-LLAN-BR.png" alt="foto do usuário" />
                </figure>
            </Leave>

            
        </Container>
    )
};
