export const exame = api => ({
  exames: {
    getExames() {
      return api.get("/exames")
    },
    postNovoExame(paciente) {
      const dados = {
        "patient": paciente.patient,
        "age": paciente.age
      }
      // adicionar a possibilidade de anexar mais de um arquivo
      // const bodyFormData = new FormData();
      // bodyFormData.append('exame', JSON.stringify(dados));
      // if (paciente.anexos.length > 0) {
      //   paciente.anexos.forEach(anexo => {
      //     bodyFormData.append('files', anexo);
      //   });
      // }

      return api.post("/exames",dados)
    },
    putDarFeedback(id, feedback) {
      const dados = {
        "feedback": feedback
      }

      return api.post("/exames/"+id,dados)
    }
  }
})