import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {
    // Chainsaw Man
    const [ categories, setCategories ] = useState([ '' ]);

    const onAddCategory = (NewCategory) =>{
        

        if(categories.includes(NewCategory))return;
        // primera forma para instertar datos a la categoria
        // console.log(NewCategory)
        setCategories([ NewCategory , ...categories] )
      
        // segunda forma
        // setCategories(cat => [...cat, 'Gato Panzon'] );
    }

    return(
        <>
        {/* Titutlo */}
        <h1> Search Gifs </h1>
    
        {/*  Inputs  */}
        <AddCategory 
        // Mando una funcion por medio de las propertyes al componente hijo
        // setCategories= {setCategories} 
        
        onNewCategory = { value => onAddCategory(value) }
        />

        {/*  Listado de Items/Gifs */}

        { categories.map( category => 
            // Retorna el componente de gifGird
            (<GifGrid key={category} 
                category = {category} 
                />
                
            )) 
                
        }
           


        </>
    )

}