import { useEffect, useState } from 'react'
import GraficoPizza from './tipoGrafico/GraficoPizza'
import { requests } from '../../../services/api'

export default function GraficoPorDoenca() {
  const [chartData, setChartData] = useState({})
  
  useEffect(() => {
    const getValoresDoenca = async () => {
      await requests.graficos.getCountDoenca().then((response) => {
        if (response.status === 200) {
            setChartData(response.data)
            console.log("Valores setados")
            console.log([Object.values(chartData)])
            console.log([Object.keys(chartData)])
        } else {
          console.log("falha na requisicao", response.status)
        }
      })
    }
    getValoresDoenca()
  }, []);

  return (
    <GraficoPizza
      valorX={Object.values(chartData)}
      // chartData.map(exame => exame.quantidadeDeExames)
      valorY={Object.keys(chartData)}
      // chartData.map(exame => exame.date)
      legenda="Grafico Por doença"
      titulo="Grafico Por doença" />
  );
};