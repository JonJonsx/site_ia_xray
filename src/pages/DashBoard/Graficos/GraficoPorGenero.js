import { useEffect, useState } from 'react'
import GraficoPizza from './tipoGrafico/GraficoPizza'
import { requests } from '../../../services/api'

export default function GraficoPorGenero() {
  const [dadosGrafico, setDadosGrafico] = useState({})

  useEffect(() => {
    const getValoresGrafico = async () => {
      await requests.graficos.getCountGenero().then((response) => {
        if (response.status === 200) {
          setDadosGrafico(response.data)
        } else {
          console.log("falha na requisicao", response.status)
          setDadosGrafico({Masculino:1,Feminino:1})
        }
      })
    }
    getValoresGrafico()
  }, []);


  return (
    <GraficoPizza
      valorX={[dadosGrafico.Masculino,dadosGrafico.Feminino]}
      valorY={ ["Masculino","Feminino"] }
      legenda="Quantidade de exames por genero"
      titulo="Grafico Por doença" />
  );
};