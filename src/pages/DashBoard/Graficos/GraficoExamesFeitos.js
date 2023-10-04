import GraficoLinha from './tipoGrafico/GraficoLinha'

export default function GraficoExamesFeitos() {
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
    <GraficoLinha
      valorX={[100,120,150]}
      // chartData.map(exame => exame.quantidadeDeExames)
      valorY={["05-2023","06-2023","07-023"]}
      // chartData.map(exame => exame.date)
      legenda="Quantidade de exames"
      titulo="Visão mês a mês" />
  );
};