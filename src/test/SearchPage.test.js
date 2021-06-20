import { fireEvent, render } from "@testing-library/react";
import SearchPage from "../pages/SearchPage";


describe("Testando pagina principal", () => {
    it("Testando se o corpo com a lista dos cards aparece corretamente", () => {
        const { getByTestId } = render(<SearchPage />)
        const item = getByTestId("listaCards")
        fireEvent.submit(item)
    })
    it("Testando se o NavBar aparece corretamente", () => {
        const { getByTestId } = render(<SearchPage />)
        const item = getByTestId("navBar")
    })
})



