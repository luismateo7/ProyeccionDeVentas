import { useEffect, useRef, useState } from 'react';
import { createChart, ColorType } from 'lightweight-charts';
import './App.css'

// Utils
import transformedVentas from './utils/transformedVentas';
import calcularIncremento from './utils/calcularIncremento';
import calcularVentas from './utils/calcularVentas';

// Components
import LeyendaCrecimiento from './components/LeyendaCrecimiento';
import LeyendaVentasYIncremento from './components/LeyendaVentasYIncremento';
import LeyendaVentas from './components/LeyendaVentas';

export default function App(props) {

  // const [porcentaje2019, setPorcentaje2019] = useState(-8);
  const [porcentaje2021, setPorcentaje2021] = useState(16);
  const [porcentaje2022, setPorcentaje2022] = useState(7);
  const [porcentaje2023, setPorcentaje2023] = useState(10);

  const ventas2020 = [
    {
      mes: 'Enero',
      televisor: 16,
      refrigeradora: 17,
      cocina: 20
    },
    {
      mes: 'Febrero',
      televisor: 13,
      refrigeradora: 19,
      cocina: 14
    },
    {
      mes: 'Marzo',
      televisor: 18,
      refrigeradora: 11,
      cocina: 16
    },
    {
      mes: 'Abril',
      televisor: 14,
      refrigeradora: 18,
      cocina: 11
    },
    {
      mes: 'Mayo',
      televisor: 19,
      refrigeradora: 18,
      cocina: 18
    },
    {
      mes: 'Junio',
      televisor: 15,
      refrigeradora: 15,
      cocina: 10
    },
    {
      mes: 'Julio',
      televisor: 15,
      refrigeradora: 12,
      cocina: 17
    },
    {
      mes: 'Agosto',
      televisor: 20,
      refrigeradora: 20,
      cocina: 13
    },
    {
      mes: 'Septiembre',
      televisor: 15,
      refrigeradora: 11,
      cocina: 10
    },
    {
      mes: 'Octubre',
      televisor: 16,
      refrigeradora: 20,
      cocina: 11
    },
    {
      mes: 'Noviembre',
      televisor: 14,
      refrigeradora: 18,
      cocina: 14
    },
    {
      mes: 'Diciembre',
      televisor: 12,
      refrigeradora: 18,
      cocina: 15
    }
  ]

  // Ventas
  // const ventas2019 = calcularVentas(ventas2020, porcentaje2019);
  const ventas2021 = calcularVentas(ventas2020, porcentaje2021);
  const ventas2022 = calcularVentas(ventas2021, porcentaje2022);
  const ventas2023 = calcularVentas(ventas2022, porcentaje2023);

  // Data de ventas formateada para el gráfico
  // const transformedVentas2019 = transformedVentas(ventas2019, 2019);
  const transformedVentas2020 = transformedVentas(ventas2020, 2020);
  const transformedVentas2021 = transformedVentas(ventas2021, 2021);
  const transformedVentas2022 = transformedVentas(ventas2022, 2022);
  const transformedVentas2023 = transformedVentas(ventas2023, 2023);

  // Calcula los incrementos despues de un año de ventas respecto al año anterior
  // const incremento2020 = calcularIncremento(ventas2020, ventas2019);
  const incremento2021 = calcularIncremento(ventas2021, ventas2020);
  const incremento2022 = calcularIncremento(ventas2022, ventas2021);
  const incremento2023 = calcularIncremento(ventas2023, ventas2022);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name == 'porcentaje2019') {
      console.log(value);
      setPorcentaje2019(value);
    } else if (name == 'porcentaje2021') {
      console.log(value);
      setPorcentaje2021(value);
    } else if (name == 'porcentaje2022') {
      setPorcentaje2022(value);
    } else if (name == 'porcentaje2023') {
      setPorcentaje2023(value);
    }
  }

  return (
    <>
      <h1>Taller de Inteligencia de Negocios</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
        {/* <label>
          Porcentaje de crecimiento/decremento en 2019 frente al 2020:
          <input
            style={{ width: "4rem", borderRadius: "3px", marginLeft: "1rem", padding: "0.5rem" }}
            type="number"
            name="porcentaje2019"
            value={porcentaje2019}
            onChange={handleChange}
          />
        </label>
        <br /> */}
        <label>
          Porcentaje de crecimiento en 2021:
          <input
            style={{ width: "4rem", borderRadius: "3px", marginLeft: "1rem", padding: "0.5rem", border: "1px solid #D2D2D2"}}
            type="number"
            name="porcentaje2021"
            value={porcentaje2021}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Porcentaje de crecimiento en 2022:
          <input
            style={{ width: "4rem", borderRadius: "3px", marginLeft: "1rem", padding: "0.5rem", border: "1px solid #D2D2D2" }}
            type="number"
            name="porcentaje2022"
            value={porcentaje2022}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Porcentaje de crecimiento en 2023:
          <input
            style={{ width: "4rem", borderRadius: "3px", marginLeft: "1rem", padding: "0.5rem", border: "1px solid #D2D2D2" }}
            type="number"
            name="porcentaje2023"
            value={porcentaje2023}
            onChange={handleChange}
          />
        </label>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        <ChartComponent {
          ...props}
          data={transformedVentas2020}
          data2={transformedVentas2021}
          data3={transformedVentas2022}
          // data4={transformedVentas2019}
          data5={transformedVentas2023}
        ></ChartComponent>
      </div>

      <div style={{ display: 'flex' }}>
        {/* <LeyendaCrecimiento incremento={incremento2020} year={2020} /> */}
        <LeyendaCrecimiento incremento={incremento2021} year={2021} />
        <LeyendaCrecimiento incremento={incremento2022} year={2022} />
        <LeyendaCrecimiento incremento={incremento2023} year={2023} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* <LeyendaVentas ventas={ventas2019} year={2019} /> */}
        <LeyendaVentas ventas={ventas2020} year={2020} />
        <LeyendaVentas ventas={ventas2021} year={2021} />
        <LeyendaVentas ventas={ventas2022} year={2022} />
        <LeyendaVentas ventas={ventas2023} year={2023} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* <LeyendaVentasYIncremento ventas={ventas2020} incremento={incremento2020} year={2020} ventasAnterior={ventas2019} /> */}
        <LeyendaVentasYIncremento ventas={ventas2021} incremento={incremento2021} year={2021} ventasAnterior={ventas2020} />
        <LeyendaVentasYIncremento ventas={ventas2022} incremento={incremento2022} year={2022} ventasAnterior={ventas2021} />
        <LeyendaVentasYIncremento ventas={ventas2023} incremento={incremento2023} year={2023} ventasAnterior={ventas2022} />
      </div>
    </>
  )
}

export const ChartComponent = props => {
  const {
    data,
    data2,
    data3,
    // data4,
    data5,
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

      // const newSeries4 = chart.addAreaSeries({ lineColor: 'yellow', topColor: 'yellow', bottomColor: 'rgba(255, 255, 0, 0.28)' });
      // newSeries4.setData(data4);

      const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
      newSeries.setData(data);

      const newSeries2 = chart.addAreaSeries({ lineColor: 'red', topColor: 'red', bottomColor: 'rgba(255, 0, 0, 0.28)' });
      newSeries2.setData(data2);

      const newSeries3 = chart.addAreaSeries({ lineColor: 'green', topColor: 'green', bottomColor: 'rgba(0, 255, 0, 0.28)' });
      newSeries3.setData(data3);

      const newSeries5 = chart.addAreaSeries({ lineColor: 'purple', topColor: 'purple', bottomColor: 'rgba(128, 0, 128, 0.28)' });
      newSeries5.setData(data5);

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