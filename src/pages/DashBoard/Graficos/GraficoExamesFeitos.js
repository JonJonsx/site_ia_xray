import { useEffect, useState } from 'react'
import { requests } from '../../../services/api'
import GraficoLinha from './tipoGrafico/GraficoLinha'

export default function GraficoExamesFeitos() {
  const [chartData, setChartData] = useState({})

  useEffect(() => {
    const getValoresGrafico = async () => {
      await requests.graficos.getVisaoMesAMes().then((response) => {
        if (response.status === 200) {
          const dadosOrdenados = Object.fromEntries(Object.entries(response.data).sort());
          setChartData(dadosOrdenados)
        } else {
          console.log("falha na requisicao", response.status)
          setChartData({"2023/1":"26"})
        }
      })
    }
    getValoresGrafico()
  }, []);


  return (
    <GraficoLinha
      valorX={Object.values(chartData)}
      valorY={Object.keys(chartData)}
      legenda="Quantidade de exames"
      titulo="Visão mês a mês" />
  );
};