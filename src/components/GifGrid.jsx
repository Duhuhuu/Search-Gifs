import { useFetchGifs } from "../hooks/useFetchGifs";
import { Gifitem } from "./Gifitem";


export const GifGrid = ({ category }) => {

    const {imagenes, isLoading} = useFetchGifs(category);
   

// Una forma de obtener los datos sin usar un custom hook
//    const [imagenes, setImages] = useState([]);
   
//    const getImages = async() =>{
//     const newImages = await getGifs(category);
//     setImages(newImages);
//    }

//     useEffect( () => {
//         getImages();

//     }, [])

    // getGifs(category);

    return (
        <>
            <h1> {category} </h1>
            {
                // operacion if logico corto
                isLoading && (<h2> Loading... </h2>)
            }

            <div className="card-grid">
                {
                    imagenes.map( (image) => (
                         <Gifitem key={ image.id }
                        //  una forma mas facil de enviar propiedades que el de abajo
                        // con esto esparcimos y mandamos todas las propiedades con el props
                         {...image}

                    //una forma de enviarlos con el props  
                         //  title= {image.title}
                        //  url= {image.url}
                         />
                          ))
                }

            </div>
        
        </>
    )
}
