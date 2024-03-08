export default function LeyendaVentasYIncremento({ ventas, incremento, year, ventasAnterior }) {
    return (
        <div>
            <h3>Incremento y ventas en {year}</h3>
            <ul>
                {ventas.map((mes, index) => (
                    <p key={mes.mes}>
                        <span style={{ fontWeight: 'bold' }}>{`${mes.mes} del ${year}: `}</span>
                        {`Televisores: `}
                        <span style={{ fontWeight: 'bold', color: incremento[mes.mes].televisor > 1 ? 'green' : 'red' }}>
                            {`${mes.televisor} (${incremento[mes.mes].televisor.toFixed(2)}%)`}
                        </span>
                        {`, Refrigeradoras: `}
                        <span style={{ fontWeight: 'bold', color: incremento[mes.mes].refrigeradora > 1 ? 'green' : 'red' }}>
                            {`${mes.refrigeradora} (${incremento[mes.mes].refrigeradora.toFixed(2)}%)`}
                        </span>
                        {`, Cocinas: `}
                        <span style={{ fontWeight: 'bold', color: incremento[mes.mes].cocina > 1 ? 'green' : 'red' }}>
                            {`${mes.cocina} (${incremento[mes.mes].cocina.toFixed(2)}%)`}
                        </span>
                        {ventasAnterior && (
                            <span style={{ fontStyle: 'italic' }}>
                                {`, vs. ${ventasAnterior[index].mes} ${year - 1}: `}
                                {`Televisores: ${ventasAnterior[index].televisor}, Refrigeradoras: ${ventasAnterior[index].refrigeradora}, Cocinas: ${ventasAnterior[index].cocina}`}
                            </span>
                        )}
                    </p>
                ))}
            </ul>
        </div>
    )
}