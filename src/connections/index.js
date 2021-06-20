import axios from "axios"


const { REACT_APP_API_KEY } = process.env

export async function requestData(text, erro) {
    var count = 0
    let listErros = erro;
    count ++;
    if(!REACT_APP_API_KEY){
        return controleReturnRequest("erro", listErros.push({"erro": "Chave não encontrada"}))
    }
    try {
        const response = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${REACT_APP_API_KEY}&format=json&nojsoncallback=1&safe_search=1&text=${text}`);
        if (response.status === 200) {
            return controleReturnRequest("accept", response.data?.photos?.photo ?? [])
        }
        return controleReturnRequest("erro", listErros.push({"erro": "erro de conexão"}))
    } catch (error) {
        return controleReturnRequest("erro", listErros.push({"erro": "erro de conexão"}))
    }
}

function controleReturnRequest(type, data){
    return {
        "type" : type,
        "data": data
    }
}