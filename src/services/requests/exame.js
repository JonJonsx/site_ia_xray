export const exame = api => ({
  exames: {
    getExames() {
      return api.get("/exames")
    },
    postNovoExame(paciente) {
      const dados = {
        "patient": paciente.patient,
        "age": paciente.age,
        "sex": paciente.sex
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

      return api.put("/exames/"+id,feedback)
    }
  }
})