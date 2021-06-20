import { createContext, useState } from "react"
import { requestData } from "../connections";
import Tools from "../tools/tools";


export const defaultValuesContext = {
    listCards: [],
    getData: (text) => { },
    erro: [],
    removeError: (err) => { },
    setListOfCards: (list) => { }
};


export const AplicationContext = createContext(defaultValuesContext)

export function ListOfCardsProvider({ children }) {
    const [listCards, setListCards] = useState([])
    const [erro, setErro] = useState([])

    async function getData(text) {
        const response = await requestData(text, erro)
        if (response.type == "accept") {
            return setListCards(response.data)
        }
        if (response.type == "erro") {
            return setErro(response.data)
        }
    }

    function removeError(err) {
        return setErro(Tools.removeElementOfArray(erro, err))

    }

    function setListOfCards(list) {
        return setListCards(list)
    }

    return (
        <AplicationContext.Provider
            value={
                {
                    listCards,
                    getData,
                    erro,
                    removeError,
                    setListOfCards
                }
            }
        >
            {children}
        </AplicationContext.Provider>
    )

}
