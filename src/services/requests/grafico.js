export const grafico = api => ({
    graficos: {
      getCountGenero() {
        return api.get("/exame/countGenero")
      },
    }
  })