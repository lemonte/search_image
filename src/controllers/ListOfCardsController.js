import { createContext, useState } from "react"
import axios from "axios"
import env from "react-dotenv";

export const defaultValuesContext = {
    listCards: [],
    getData: (text) => { }
};


export const AplicationContext = createContext(defaultValuesContext)

export function ListOfCardsProvider({ children }) {
    const [listCards, setListCards] = useState([])

    async function getData(text) {
        try {
            const response = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${env.API_KEY}&format=json&nojsoncallback=1&safe_search=1&text=${text}`);
            if (response.status === 200) {
                setListCards(response.data?.photos?.photo)
            }
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <AplicationContext.Provider
            value={
                {
                    listCards,
                    getData
                }
            }
        >
            {children}
        </AplicationContext.Provider>
    )

}
