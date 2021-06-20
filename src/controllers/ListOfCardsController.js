import { createContext, useState } from "react"
import axios from "axios"

const { REACT_APP_API_KEY } = process.env


export const defaultValuesContext = {
    listCards: [],
    getData: (text) => { },
    erro: [], 
    removeError: (err) => {}
}; 


export const AplicationContext = createContext(defaultValuesContext)

export function ListOfCardsProvider({ children }) {
    const [listCards, setListCards] = useState([])
    const [erro, setErro] = useState([])

    async function getData(text) {
        var count = 0
        let listErros = erro;
        count ++;
        if(!REACT_APP_API_KEY){
            listErros.push({ 'id': count, "erro": "chave de conexão não encontrada "})
            return setErro(listErros)
        }
        try {
            const response = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${REACT_APP_API_KEY}&format=json&nojsoncallback=1&safe_search=1&text=${text}`);
            if (response.status === 200) {
                return setListCards(response.data?.photos?.photo ?? [])
            }
            listErros.push({ "erro": "Erro de conexão"})
            return setErro(listErros)
        } catch (error) {
            listErros.push({ "erro": "Erro de conexão"})
            return setErro(listErros)
        }
    }

    function removeError(err){
        let listErros = erro
        listErros.splice(listErros.findIndex(item => item.id === err.id), 1);
        return setErro(listErros)
    }


    return (
        <AplicationContext.Provider
            value={
                {
                    listCards,
                    getData,
                    erro,
                    removeError
                }
            }
        >
            {children}
        </AplicationContext.Provider>
    )

}
