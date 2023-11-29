export const exame = api => ({
  exames: {
    getExames() {
      return api.get("/exame")
    },
    getImagem(pathImagem) {
      return api.get("/imagem/"+pathImagem)
    },
    postNovoExame(formData) {
      let config = {
				url: "/exame",
				method: "POST",
				headers: {
					// 'Authorization': cookies.volunt3r,
					'Content-Type': 'multipart/form-data'
				},
				data: formData
			} 

      return api(config)
    },
    putDarFeedback(id, feedback) {
      return api.post("/exame/darFeedback/"+id,feedback)
    }
  }
})