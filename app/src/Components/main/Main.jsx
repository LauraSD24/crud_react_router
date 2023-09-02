import { useNavigate } from 'react-router-dom';
import './Main.css';
import { useContextFruits } from '../../Contexts/ContextProviderFruits';

function Main() {
    const {listFruits,setListFruits} = useContextFruits();
    const navigate = useNavigate();

    function deleteFruit(code) {
       const verify = window.confirm("Está seguro de eliminar este producto"); 
       if (verify === true) {
        for (let i = 0; i < listFruits.length; i++) {
            const fruit = listFruits[i];
            if(fruit.code === code){
                const newList = listFruits;
                newList.splice(i, 1);
                setListFruits([...newList]);
                break;
            }
           }
       }
    }
    return(
        <div className="main">
            <h1 className="title">Fruits</h1>
            <div className='main_add'>
                <button onClick={()=>navigate("/add")} className='btn'>Añadir</button>
                <p><strong>Cantidad: </strong>{listFruits.length}</p>
            </div>
            <div className="listFruits">
                <div className='itemFruits itemFruits_titles'>
                    <h3>Código</h3>
                    <h3>Nombre</h3>
                    <h3>Cantidad</h3>
                </div>
                {listFruits.map((item)=>{
                    return(
                        <div key={item.code} className='itemFruits'>
                            <p>{item.code}</p>
                            <p>{item.name}</p>
                            <p>{item.quantity}</p>
                            <p><button className='btn' onClick={()=>navigate("/update/"+item.code)}>Editar</button></p>
                            <p><button className='btn' onClick={()=>deleteFruit(item.code)}>Eliminar</button></p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Main;