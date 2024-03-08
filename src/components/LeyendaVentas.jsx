
export default function LeyendaVentas({ ventas, year }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
                <h3>Ventas en {year}</h3>
                <ul>
                    {ventas.map((mes) => (
                        <p key={mes.mes}>
                            <span style={{ fontWeight: 'bold' }}>{mes.mes + ": "}</span>
                            {`Televisores: `}
                            <span style={{ fontWeight: 'bold', color: mes.televisor > 1 ? 'green' : 'red' }}>
                                {`${mes.televisor}`}
                            </span>
                            {`, Refrigeradoras: `}
                            <span style={{ fontWeight: 'bold', color: mes.refrigeradora > 1 ? 'green' : 'red' }}>
                                {`${mes.refrigeradora}`}
                            </span>
                            {`, Cocinas: `}
                            <span style={{ fontWeight: 'bold', color: mes.cocina > 1 ? 'green' : 'red' }}>
                                {`${mes.cocina}`}
                            </span>
                        </p>
                    ))}
                </ul>
            </div>
        </div>
    )
}