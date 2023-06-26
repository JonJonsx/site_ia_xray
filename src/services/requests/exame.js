export const exame = api => ({
  exames: {
    getExames() {
      return api.get("/lista_exames")
    },
    postNovoExame(paciente) {
      const dados = {
        "patient": paciente.patient,
        "age": paciente.age,
        "sex": paciente.sex,
        "result_exam": "",
        "file_image": "file"
      }
      // adicionar a possibilidade de anexar mais de um arquivo
      // const bodyFormData = new FormData();
      // bodyFormData.append('exame', JSON.stringify(dados));
      // if (paciente.anexos.length > 0) {
      //   paciente.anexos.forEach(anexo => {
      //     bodyFormData.append('files', anexo);
      //   });
      // }

      return api.post("/lista_exames",dados)
    }
  }
})