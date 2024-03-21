import { useParams } from "react-router-dom"
import { modelData } from "../data/modelData";

export const Models = () => {
    const {id} = useParams();
    if(!id) return null;

    const currentModel = modelData.find((data) => data.id === +id);
    if(!currentModel) throw new Error('model not found');
    return(
        <div>
            {currentModel?.name}
        </div>
    )
}