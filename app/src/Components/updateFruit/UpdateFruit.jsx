import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContextFruits } from "../../Contexts/ContextProviderFruits";

function UpdateFruit() {
    const navigate = useNavigate();
    const params=useParams();
    const {listFruits,setListFruits} = useContextFruits();
    const [loader,setLoader] = useState(true)
    const [fruitNewData,setFruitNewData]=useState({
        code:"",
        name:"",
        quantity:""
    })

    function handlerInputEdit(e) {
        setFruitNewData({...fruitNewData,[e.target.name]: e.target.value});
    }

    function updateFruit() {
        const indexObject =listFruits.findIndex((item)=>item.code === params.code);
        listFruits.splice(indexObject,1,fruitNewData);
        navigate("/");
    }

    useEffect(()=>{
        const objectFind =listFruits.find((item)=>item.code === params.code)
        setFruitNewData({...objectFind})
        if(fruitNewData){
            setLoader(false)
        }
    },[])

    return(
       <>
         {
            loader===false ? <div className="container_add">
            <h1 className='title'>Actualizar fruta</h1>
            <form action="" className="add_form">
                <label htmlFor="">Código</label> <input readOnly defaultValue={fruitNewData.code} type="number"/>
                <label htmlFor="">Nombre</label> <input onInput={(e)=>handlerInputEdit(e)} name="name" defaultValue={fruitNewData.name} type="text"/>
                <label htmlFor="">Cantidad</label> <input onInput={(e)=>handlerInputEdit(e)} name="quantity" defaultValue={fruitNewData.quantity} type="number"/>
            </form>
            <div className="add_btns">
                <button className="btn" onClick={()=>updateFruit()}>Actualizar</button>
                <button className="btn" onClick={()=>navigate("/")}>Volver</button>
            </div>         
        </div>: "Recurso no encontrado"
         }
       </>
    )
}

export default UpdateFruit;