import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef, useState } from 'react';
import './App.css'

export default function App(props) {
  const ventas2020 = [
    {
      mes: 'Enero',
      televisor: 10,
      refrigeradora: 5,
      cocina: 3
    },
    {
      mes: 'Febrero',
      televisor: 8,
      refrigeradora: 6,
      cocina: 4
    },
    {
      mes: 'Marzo',
      televisor: 12,
      refrigeradora: 7,
      cocina: 5
    },
    {
      mes: 'Abril',
      televisor: 11,
      refrigeradora: 8,
      cocina: 6
    },
    {
      mes: 'Mayo',
      televisor: 9,
      refrigeradora: 9,
      cocina: 7
    },
    {
      mes: 'Junio',
      televisor: 10,
      refrigeradora: 10,
      cocina: 8
    },
    {
      mes: 'Julio',
      televisor: 12,
      refrigeradora: 11,
      cocina: 9
    },
    {
      mes: 'Agosto',
      televisor: 11,
      refrigeradora: 12,
      cocina: 10
    },
    {
      mes: 'Septiembre',
      televisor: 10,
      refrigeradora: 13,
      cocina: 11
    },
    {
      mes: 'Octubre',
      televisor: 9,
      refrigeradora: 14,
      cocina: 12
    },
    {
      mes: 'Noviembre',
      televisor: 8,
      refrigeradora: 15,
      cocina: 13
    },
    {
      mes: 'Diciembre',
      televisor: 7,
      refrigeradora: 16,
      cocina: 14
    }
  ]

  const ventas2021 = ventas2020.map((mes) => {
    return {
      mes: mes.mes,
      televisor: Math.ceil(mes.televisor * 1.16),
      refrigeradora: Math.ceil(mes.refrigeradora * 1.16),
      cocina: Math.ceil(mes.cocina * 1.16)
    }
  })

  console.log(ventas2021)

  const ventas2022 = ventas2021.map((mes) => {
    return {
      mes: mes.mes,
      televisor: Math.ceil(mes.televisor * 1.07),
      refrigeradora: Math.ceil(mes.refrigeradora * 1.07),
      cocina: Math.ceil(mes.cocina * 1.07)
    }
  })

  const ventas2019 = ventas2020.map((mes) => {
    return {
      mes: mes.mes,
      televisor: Math.ceil(mes.televisor * 0.95),
      refrigeradora: Math.ceil(mes.refrigeradora * 0.95),
      cocina: Math.ceil(mes.cocina * 0.95)
    }
  })

  console.log(ventas2022);

  const transformedVentas2020 = ventas2020.map((mes, index) => {
    const totalVentas = mes.televisor + mes.refrigeradora + mes.cocina;
    const month = (index + 1).toString().padStart(2, '0'); // Asegura que el mes tenga dos dígitos
    return {
      time: `${2020}-${month}-01`, // Asume el primer día del mes
      value: totalVentas
    };
  });

  console.log(transformedVentas2020);

  const transformedVentas2021 = ventas2021.map((mes, index) => {
    const totalVentas = mes.televisor + mes.refrigeradora + mes.cocina;
    const month = (index + 1).toString().padStart(2, '0'); // Asegura que el mes tenga dos dígitos
    return {
      time: `${2021}-${month}-01`, // Asume el primer día del mes
      value: totalVentas
    };
  });

  const transformedVentas2022 = ventas2022.map((mes, index) => {
    const totalVentas = mes.televisor + mes.refrigeradora + mes.cocina;
    const month = (index + 1).toString().padStart(2, '0'); // Asegura que el mes tenga dos dígitos
    return {
      time: `${2022}-${month}-01`, // Asume el primer día del mes
      value: totalVentas
    };
  });

  const transformedVentas2019 = ventas2019.map((mes, index) => {
    const totalVentas = mes.televisor + mes.refrigeradora + mes.cocina;
    const month = (index + 1).toString().padStart(2, '0'); // Asegura que el mes tenga dos dígitos
    return {
      time: `${2019}-${month}-01`, // Asume el primer día del mes
      value: totalVentas
    };
  })

  // Necesito que compares el porcentaje de cantidad de televisores, cocians y refrigeradoras vendidas en cada mes frente el mes del año anterior, por ejemplo que me digas si en enero del 2020 se vendieron 10 cocians y en enero del 2020 se vendeiron 20 cocinas, entonces necesito que me digas que es 100% de incremento de ventas:

  // Función para calcular el porcentaje de cambio
  function getPercentageChange(oldNumber, newNumber) {
    var changeValue = newNumber - oldNumber;
    return (changeValue / oldNumber) * 100;
  }

  // Iterar sobre los datos para calcular el porcentaje de cambio
  ventas2021.forEach((venta, index) => {
    const ventaAnterior = ventas2020[index];
    const incrementoTelevisores = getPercentageChange(ventaAnterior.televisor, venta.televisor);
    const incrementoCocinas = getPercentageChange(ventaAnterior.cocina, venta.cocina);
    const incrementoRefrigeradoras = getPercentageChange(ventaAnterior.refrigeradora, venta.refrigeradora);

    console.log(`En ${venta.mes}, hubo un incremento de ${incrementoTelevisores.toFixed(2)}% en televisores, ${incrementoCocinas.toFixed(2)}% en cocinas y ${incrementoRefrigeradoras.toFixed(2)}% en refrigeradoras en comparación con el mismo mes del año anterior.`);
  });


  return (
    <>
      <h1>Taller de Inteligencia de Negocios</h1>
      <ChartComponent {
        ...props}
        data={transformedVentas2020}
        data2={transformedVentas2021}
        data3={transformedVentas2022}
        data4={transformedVentas2019}

      ></ChartComponent>
    </>
  )
}

export const ChartComponent = props => {
  const {
    data,
    data2,
    data3,
    data4,
    colors: {
      backgroundColor = 'white',
      lineColor = '#2962FF',
      textColor = 'black',
      areaTopColor = '#2962FF',
      areaBottomColor = 'rgba(41, 98, 255, 0.28)',
    } = {},
  } = props;

  const chartContainerRef = useRef();

  useEffect(
    () => {
      const handleResize = () => {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      };

      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { type: ColorType.Solid, color: backgroundColor },
          textColor,
        },
        width: 1200,
        height: 300,
      });
      chart.timeScale().fitContent();

      const newSeries4 = chart.addAreaSeries({ lineColor: 'yellow', topColor: 'yellow', bottomColor: 'rgba(255, 255, 0, 0.28)' });
      newSeries4.setData(data4);

      const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
      newSeries.setData(data);

      const newSeries2 = chart.addAreaSeries({ lineColor: 'red', topColor: 'red', bottomColor: 'rgba(255, 0, 0, 0.28)' });
      newSeries2.setData(data2);

      const newSeries3 = chart.addAreaSeries({ lineColor: 'green', topColor: 'green', bottomColor: 'rgba(0, 255, 0, 0.28)' });
      newSeries3.setData(data3);

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);

        chart.remove();
      };
    },
    [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
  );

  return (
    <div
      ref={chartContainerRef}
    />
  );
};