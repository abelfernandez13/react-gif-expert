export const GetGifs = async(categories) => {

    const url = `http://api.giphy.com/v1/gifs/search?api_key=v2QJ8ixEn8dIiVOCBm8jFBrVcwWTopwr&q=valorant=${categories}&limit=10`

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map(img => ({

        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }))
    console.log(gifs)
    return (gifs);

};