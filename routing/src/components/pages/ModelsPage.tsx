import { Link } from "react-router-dom"
import { modelData } from "../../data/modelData"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ModelsPage = () => {
    return(
        <div className="m-5">
            <h2>All models</h2>
            <ul className="grid grid-cols-3 gap-6">
                {modelData.map(model => (
                    <li key={model.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title><Link className="no-underline" to={`/model/${model.id}`}>{model.name}</Link></Card.Title>
                                <Card.Text>{model.description}
                                </Card.Text>
                                <Button variant="primary">review</Button>
                            </Card.Body>
                        </Card>
                    </li>
                ))}
            </ul>

        </div>
    )
}