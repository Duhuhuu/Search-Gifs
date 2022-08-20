import { useState } from "react";


// Si se utilizan propertys(props) es necesario agregar el props recibido en la funcion "()"
// export const AddCategory = ({setCategories}) => {

export const AddCategory = ({onNewCategory}) => {

    // Chainsaw Man 
    const [inputValue, setInputValue] = useState(' ')
    // Sin el evento destructurado con el target
    // const onInputChange = (event) => 

    // con el event destructurado y obteniendo los datos del target
    const onInputChange = ({ target }) => {
        setInputValue(target.value);

    }

    // // Mandar datos del input y insertarlos en la categoria denro de otro componente por medio
    // // de los props
    // const onSumit = (event) => {
    //     event.preventDefault();
    //     // Validacion si hay mas de 1 letra en el input y de no ser asi no continua con los
    //     // siguientes pasos del codigo
    //     if (inputValue.trim().length <= 1) return;

    //     //LLamando la funcion del componente GifExpertApp por medio de las property
    //     setCategories(categories => [ inputValue, ...categories] )
    //     // Borar y limpiar el input
    //     setInputValue('');

    // }

    // Mandar datos del input y insertarlos en la categoria denro de otro componente por medio
    // de los props
    const onSumit = (event) => {
        event.preventDefault();
        // Validacion si hay mas de 1 letra en el input y de no ser asi no continua con los
        // siguientes pasos del codigo
        if (inputValue.trim().length <= 1) return;
    
        //LLamando la funcion del componente GifExpertApp por medio de las property
       onNewCategory(inputValue.trim());
        // Borar y limpiar el input
        setInputValue('');

    }
    return (
  
        <form onSubmit={onSumit}>
            <input type="text" 
            placeholder="Buscar Gifs"
            value={inputValue}
            // onChange={ (event) => onInputChange(event)}
            onChange={ onInputChange }
            />
        </form>
  )
}
