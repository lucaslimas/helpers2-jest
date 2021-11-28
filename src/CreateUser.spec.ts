describe("Criação de Usuário", ()=> {
  it("Não pode ser usuário vazio",() => {
    const user = "lucas";
    expect(user).not.toBe("");
  })

  it("Não pode ser usuário nulo",() => {
    const user = "lucas";
    expect(user).not.toBe(null);
  })

  it("Ter a propriedade nome",() => {
    const user = {
      name: null
    }
    expect(user).toHaveProperty("name");
  })
})