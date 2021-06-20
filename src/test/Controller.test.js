import { requestData } from "../connections";


describe("Testando Controller", () => {
    it("Verificando se a requisição esta funcionando", async () => {
        const response = await requestData("test", [])
        if (response.type == "accept") {
            return ;
        }
        if (response.type == "erro") {
            return console.error(response.data)
        }

    })
})


