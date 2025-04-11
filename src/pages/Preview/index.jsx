
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Link } from 'react-router-dom';

import {Container ,Content} from './styles';

import { TbClockHour3 } from 'react-icons/tb';
import { FiArrowLeft } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Rating } from '../../components/Rating';
import { Tag } from '../../components/Tag';
import profileDefault from '../../assets/profileDefault.svg'



export function Preview() {
    const [data, setData] = useState(null);
    const params = useParams();
    
    const {  user } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : profileDefault ;

    useEffect(() => {
        async function fetchNote(){
            const response = await api.get(`/notes/${params.id}`);
            setData(response.data);
        }

        fetchNote();
    },[]);

    
    return(
        <Container>
            <Header/>
            <main>
                <Link to="/"><FiArrowLeft/>Voltar</Link>
                {data &&
                <Content>
                    <section>
                        <div    className='head'>
                            <h2>{data.title}</h2>
                            <Rating/>
                        </div>
                        
                        <div    className='updated'>
                            <img src={avatarUrl} alt="avatar do usuário" /> 
                            <p>{user.name}</p>
                            <span>
                                <TbClockHour3/> 
                                {data.updated_at}
                            </span>
                        </div>
                        {
                            data.tags &&
                        <div    className='tags'>
                            {
                             data.tags.map(tag =>(
                                <Tag 
                                key={String(tag.id)}
                                title ={tag.name}/>
                             ))
                            }
                            
                            
                        </div>
                        }
                        <div    className='text'>
                            <p>{data.description}
                            </p>

                        </div>
                    </section>
                </Content>
                }
            </main>
        </Container>
    );
};