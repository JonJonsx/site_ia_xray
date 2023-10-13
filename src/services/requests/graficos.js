export const grafico = api => ({
    exames: {
      getCountGenero() {
        return api.get("/exame/countGenero")
      },
    }
  })