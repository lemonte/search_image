import { fireEvent, render} from "@testing-library/react";
import App from "../App";
import NavbarComponent from "../components/NavbarComponent";

describe("Testando componente de navegação", () => {
    it("Testando se o titulo do component de navegacao aparece corretamente", () => {
        const { getByText } = render(<NavbarComponent/>)
        getByText("Buscador de Imagem")
    });
    it("Testando se o campo de pesquisa funciona corretamente", () => {
        const { getByTestId } = render(<NavbarComponent/>)
        const search = getByTestId("formSearch")
        fireEvent.change(search, { target: { value: "test"}})
        expect(search.value).toEqual("test")
    })
    it("Testando botão de pesquisa funciona corretamente", () => {
        const { getByTestId } = render(<App/>)
        const search = getByTestId("buttonSearch")
        fireEvent.submit(search)
    })
})
 