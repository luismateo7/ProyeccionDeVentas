// Función que calcula las ventas de un año a partir de las ventas del año anterior y un porcentaje de incremento
export default function calcularVentas(ventas, porcentaje) {
    porcentaje = porcentaje / 100 + 1;

    return ventas.map((mes) => {
        return {
            mes: mes.mes,
            televisor: Math.ceil(mes.televisor * porcentaje),
            refrigeradora: Math.ceil(mes.refrigeradora * porcentaje),
            cocina: Math.ceil(mes.cocina * porcentaje)
        }
    })
}