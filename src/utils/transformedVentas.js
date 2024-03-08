// FUncion que transforma las ventas de cun año para que puedan ser usadas en el gráfico
export default function transformedVentas(ventas, year) {
    return ventas.map((mes, index) => {
        const totalVentas = mes.televisor + mes.refrigeradora + mes.cocina;
        const month = (index + 1).toString().padStart(2, '0'); // Asegura que el mes tenga dos dígitos
        return {
            time: `${year}-${month}-01`, // Asume el primer día del mes
            value: totalVentas
        };
    });
}