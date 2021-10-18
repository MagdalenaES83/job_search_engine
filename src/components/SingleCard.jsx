import { Card } from "react-bootstrap";

const SingleCard = ({jobb}) => {
return( 

<>
<tr>
                <td>#</td>
                <td>{jobb.company_name} </td>
                <td>{jobb.title} </td>
                <td>{jobb.category}</td>
                <td>{jobb.job_type}</td>
                <td><a></a></td>
              </tr>
</>

)


};

export default SingleCard;
