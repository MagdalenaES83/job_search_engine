

import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const SingleCard = ({jobb}) => {
return( 

<>
<tr>
               
                <td>{jobb.company_name} </td>
                <td>{jobb.title} </td>
                <td>{jobb.category}</td>
                <td>{jobb.job_type}</td>
                <td><a><ButtonGroup><Button>Add to Fav</Button></ButtonGroup></a></td>
              </tr>
</>

)


};

export default SingleCard;
