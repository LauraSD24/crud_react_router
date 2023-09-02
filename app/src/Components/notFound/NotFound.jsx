import { useNavigate } from 'react-router-dom';
import './NotFound.css'

function NotFound() {
    const navigate = useNavigate();
    return(
        <div className="notFound_container">
            <h1>Not Found</h1>
            <div className='notFound_container_btns'>
                <button className="btn" onClick={()=>navigate("/")}>Volver</button>
            </div>
        </div>
    )
}

export default NotFound;