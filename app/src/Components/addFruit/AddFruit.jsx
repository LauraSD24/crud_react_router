import { useNavigate } from 'react-router-dom';
import './AddFruit.css'
import { useState } from 'react';
import { useContextFruits } from '../../Contexts/ContextProviderFruits';

function AddFruit() {
    const navigate = useNavigate();
    const {listFruits,setListFruits} = useContextFruits();
    const [newFruit,setNewFruit] = useState({
        code: '',
        name: '',
        quantity: ''
    });
    
    function handleAddFruit(e){
        setNewFruit({...newFruit,[e.target.name]:e.target.value});
    }
    function validateEmptyFields() {
        let count = 0;
        Object.values(newFruit).map((item)=>{
            if(item === ''){
                count++;
            }
        })   
        if (count === 0) {
            return false;
        }else{
            return true
        }
    }
    function saveFruit() {
        const lengthActual = listFruits.length;
        if (validateEmptyFields()) {
            alert("Por favor llene todos los campos");
        }else if (listFruits.some((item)=>item.code === newFruit.code)) {
            alert("El código ingresado ya existe");
        }else{
            setListFruits([...listFruits,newFruit]);
                setNewFruit({
                    code: '',
                    name: '',
                    quantity: ''
                })
        }
    }

    return(
        <div className="container_add">
            <h1 className='title'>Añadir fruta</h1>
            <form action="" className="add_form">
                <label htmlFor="">Código</label> <input value={newFruit.code} name='code' type="number" className="input_code" onInput={(e)=>handleAddFruit(e)}/>
                <label htmlFor="">Nombre</label> <input value={newFruit.name} name='name' type="text" className="input_name" onInput={(e)=>handleAddFruit(e)}/>
                <label htmlFor="">Cantidad</label> <input value={newFruit.quantity} name='quantity' type="number" className="input_quantity" onInput={(e)=>handleAddFruit(e)}/>
            </form>
            <div className="add_btns">
                <button className="btn" onClick={()=>saveFruit()}>Añadir</button>
                <button className="btn" onClick={()=>navigate("/")}>Volver</button>
            </div>         
        </div>
    )
}

export default AddFruit;