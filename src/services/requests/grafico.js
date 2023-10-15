export const grafico = api => ({
    graficos: {
      getCountGenero() {
        return api.get("/exame/countGenero")
      },
      getVisaoMesAMes() {
        return api.get("/exame/countExameAno")
      }
    }
  })

  