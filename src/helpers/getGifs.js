

export const gitGifs = async(category)=> {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=da8YCCsOcm8XpqCOUC65xaZNtZKnsbwG&q=${ encodeURI(category) }&limit=10`
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map( resp => {
        return {
            id: resp.id,
            title: resp.title,
            url :resp.images?.downsized_medium.url
        }   
    })

    return gifs;
}