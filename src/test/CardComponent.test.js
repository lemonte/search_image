import { render } from "@testing-library/react";
import CardComponent from "../components/CardComponent";


describe("Testando pagina principal", () => {
    it("Testando o texto do alerta aparece corretamente", () => {
        const item = {
                'farm': 66,
                'id': "51235083159",
                'isfamily': 0,
                'isfriend': 0,
                'ispublic': 1,
                'owner': "66296731@N07",
                'secret': "d964f04d60",
                'server': "65535",
                'title': "2021-06-08, TPG, Bernex Vailly"
        }
        const { getByTestId } = render(<CardComponent item={item} />)
        getByTestId("imagem")
    })
})


