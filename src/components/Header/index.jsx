import { useNavigate,Link } from "react-router-dom";


import  { api } from "../../services/api.js";
import { useAuth } from "../../hooks/Auth";

import { Container , Leave ,Search} from './styles';
import profileDefault from "../../assets/profileDefault.svg"

import { Input } from '../Input';




export function Header({useSet}){

    const { signOut , user } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : profileDefault ;
    
    const navigation = useNavigate();
    function handleSignOut(){
        navigation("/");
        signOut();
    }


    return(


        <Container>
            <h1>
                RocketMovies
            </h1>

            <Search>
                <Input 
                placeholder ="Pesquisar pelo título" 
                className= "input"
                onChange={(e)=> useSet(e.target.value)}
                />
            </Search>
            
            <Leave>
                <section>
                    <h3>{user.name}</h3>

                    <a onClick={handleSignOut}>sair</a>
                </section>
                    
                <Link to="/profile">
                    <img src={avatarUrl} alt={user.name} />
                </Link>
            </Leave>

            
        </Container>
    )
};
