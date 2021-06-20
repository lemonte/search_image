import axios from "axios"


const { REACT_APP_API_KEY } = process.env

export async function requestData(text, erro) {
    var count = 0
    let listErros = [];
    listErros = erro
    count++;
    if (!REACT_APP_API_KEY) {
        listErros.push({ "erro": "Chave não encontrada" })
        return {
            "type": "erro",
            "data": listErros
        }
    }
    try {
        const response = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${REACT_APP_API_KEY}&format=json&nojsoncallback=1&safe_search=1&text=${text}`);
        if (response.status === 200) {
            return {
                "type": "accept",
                "data": response.data?.photos?.photo ?? []
            }
        }
        listErros.push({ "id": count, "erro": "erro de conexão" })
        return {
            "type": "erro",
            "data": listErros
        }
    } catch (error) {
        listErros.push({ "id": count, "erro": "erro de conexão" })
        return {
            "type": "erro",
            "data": listErros
        }
    }
}
