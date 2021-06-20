import { render } from "@testing-library/react";
import AlertComponent from "../components/AlertComponent";


describe("Testando pagina principal", () => {
    it("Testando o texto do alerta aparece corretamente", () => {
        const erro = { erro: "meu erro"}
        const { getByTestId } = render(<AlertComponent item={erro} />)
        const item = getByTestId("textAlert").textContent
        expect(item).toEqual("meu erro !");
    })
})


