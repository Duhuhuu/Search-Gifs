 
//  Componente para extraer los datos de una url y asignarlos a una categoria
 export const getGifs = async(category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=SWGj0VP5eMtWbU090liZeEL4CVRCqhyp&q=${category}&limit=15`
    const resp = await fetch(url);
    const { data} = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
   
    return gifs;
}
