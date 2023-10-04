import React from 'react'
import { Pie } from "react-chartjs-2";
import {
  Flex
} from '@chakra-ui/react';
import "chart.js/auto"
export default function GraficoPizza({ valorX, valorY, legenda, titulo }) {

//   Funcao que define uma cor aleatoria
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const data = {
    labels: valorY,
    datasets: [
      {
        label: legenda,
        data: valorX,
        backgroundColor: [getRandomColor(),getRandomColor()]
      }
    ]
  };


  return (
    <Flex h="100%" w="100%" align="center" justify="center">
      <Pie
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            title: {
              display: true,
              text: titulo,
              color: "#FFFFFF"
            },
            legend: {
              display: true,
              position: "bottom"
            },
            responsive: true
          }
        }}
      />
    </Flex>
  );
};