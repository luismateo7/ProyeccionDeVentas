// Función para calcular el porcentaje de incremento
export default function calcularIncremento(ventasActual, ventasAnterior) {
    const incremento = {};
    for (const mes of ventasActual) {
        incremento[mes.mes] = {
            televisor: ((mes.televisor - ventasAnterior.find(item => item.mes === mes.mes).televisor) / ventasAnterior.find(item => item.mes === mes.mes).televisor) * 100,
            refrigeradora: ((mes.refrigeradora - ventasAnterior.find(item => item.mes === mes.mes).refrigeradora) / ventasAnterior.find(item => item.mes === mes.mes).refrigeradora) * 100,
            cocina: ((mes.cocina - ventasAnterior.find(item => item.mes === mes.mes).cocina) / ventasAnterior.find(item => item.mes === mes.mes).cocina) * 100
        };
    }
    return incremento;
};