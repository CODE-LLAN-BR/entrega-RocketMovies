import { Container } from './styles';

import { Rating } from '../Rating';
import { Tag } from '../Tag';





export function Note({ data ,...rest}) {
    return(
        <Container {...rest}>
            <h3>
                {data.title}
            </h3>

            <Rating className='stars'/>

            <p>
                {data.description}
            </p>
            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag=>
                        <Tag key={tag.id} title={tag.name} className="tag"/>    
                        )
                    }
                </footer>
            }
            
        </Container>
    );
};