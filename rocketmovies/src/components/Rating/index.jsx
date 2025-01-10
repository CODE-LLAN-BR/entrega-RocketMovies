import {Container } from './styles';

import { FaStar , FaRegStar  } from 'react-icons/fa';
export function Rating({...rest}) {
    return(
        <Container {...rest}>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaRegStar/>
        </Container>
        
    );
};