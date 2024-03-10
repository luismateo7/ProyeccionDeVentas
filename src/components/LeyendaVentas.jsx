
export default function LeyendaVentas({ ventas, year }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
                <h3 className="titulo">Ventas en {year}</h3>
                <ul>
                    {ventas.map((mes) => (
                        <div key={mes.mes} className="infoCard">
                            <span style={{ fontWeight: 'bold' }}>{mes.mes + ": "}</span>
                            {`Televisores: `}
                            <span style={{ fontWeight: 'bold', color: mes.televisor > 1 ? 'black' : 'red' }}>
                                {`${mes.televisor}`}
                            </span>
                            {`, Refrigeradoras: `}
                            <span style={{ fontWeight: 'bold', color: mes.refrigeradora > 1 ? 'black' : 'red' }}>
                                {`${mes.refrigeradora}`}
                            </span>
                            {`, Cocinas: `}
                            <span style={{ fontWeight: 'bold', color: mes.cocina > 1 ? 'black' : 'red' }}>
                                {`${mes.cocina}`}
                            </span>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}