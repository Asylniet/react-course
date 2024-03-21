import { Link } from "react-router-dom"
import { modelData } from '../data/modelData';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ModelsPage = () => {
        return(
        <div className="my-5 grid justify-center">
            <h2 className="grid justify-center font-marker">All models</h2>
            <ul className="mt-10 grid justify-center grid-cols-3 gap-6">
                {modelData.map(model => (
                    <li key={model.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={model.image} />
                            <Card.Body>
                                <Card.Title><Link className="no-underline" to={`/models/${model.id}`}>{model.name}</Link></Card.Title>
                                <Card.Text>{model.description}
                                </Card.Text>
                                <Link className="no-underline" to={`/models/${model.id}`}><Button variant="primary">more</Button></Link>
                            </Card.Body>
                        </Card>
                    </li>
                ))}
            </ul>
        </div>
    )
}