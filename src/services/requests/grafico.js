export const grafico = api => ({
    graficos: {
      getCountGenero() {
        return api.get("/exame/countGenero")
      },
      getVisaoMesAMes() {
        return api.get("/exame/countExameAno")
      },
      getCountDoenca() {
        return api.get("/exame/countDoencas")
      },
      getCountExames() {
        return api.get("/exame/countAllExames")
      },
      getCountFeedbacks() {
        return api.get("/exame/countAllFeedbacks")
      },
      getCountRightFeedbacks() {
        return api.get("/exame/countAllRightFeedbacks")
      }
    }
  })

  