import GraficoPizza from './tipoGrafico/GraficoPizza'

export default function GraficoPorFaixaEtaria() {
  // const [chartData, setChartData] = useState([{}])
  
  // const getExames = async () => {
  //   try{
  //     await requests.exames.getExames().then((response) => {
  //       if (response.status === 200) {
  //         return response.data
  //       } else {
  //         console.log("falha na requisicao", response.status)
  //       }
  //     })
  //   }catch (e) {
  //     console.warn("Deu erro na requisicao do grafico de Linha, ERRO: ", e)
  //     return { exame: { date: "", quantidadeDeExames: 0 } }
  //   }
    
  // }


  // useEffect(() => {
  //   const getValoresGrafico = async () => {
  //     const data = await getExames()
  //     setChartData(data)
  //   }
  //   getValoresGrafico()
  // }, []);


  return (
    <GraficoPizza
      valorX={[100,120,150]}
      // chartData.map(exame => exame.quantidadeDeExames)
      valorY={["pineumonia","cancer"]}
      // chartData.map(exame => exame.date)
      legenda="Grafico Por doença"
      titulo="Grafico Por doença" />
  );
};