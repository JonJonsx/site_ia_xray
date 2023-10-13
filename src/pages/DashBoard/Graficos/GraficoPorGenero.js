import { useEffect, useState } from 'react'
import GraficoPizza from './tipoGrafico/GraficoPizza'
import { requests } from '../../../services/api'

export default function GraficoPorGenero() {
  const [chartData, setChartData] = useState([{}])
  
  const getQuantidadePorGenero = async () => {
    try{
      await requests.exames.getCountGenero().then((response) => {
        if (response.status === 200) {
          return response.data
        } else {
          console.log("falha na requisicao", response.status)
        }
      })
    }catch (e) {
      console.warn("Deu erro na requisicao do grafico de Linha, ERRO: ", e)
      return { exame: { date: "", quantidadeDeExames: 0 } }
    }
    
  }


  useEffect(() => {
    const getValoresGrafico = async () => {
      const data = await getQuantidadePorGenero()
      setChartData(data)
    }
    getValoresGrafico()
  }, []);


  return (
    <GraficoPizza
      valorX={ [10,20]}
      // chartData.map(exame => exame.quantidadeDeExames)
      valorY={ ["masculino","feminino"] }
      // chartData.map(exame => exame.date)
      legenda="Quantidade de exames por genero"
      titulo="Grafico Por doença" />
  );
};