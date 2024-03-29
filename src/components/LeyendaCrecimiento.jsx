export default function LeyendaCrecimiento({ incremento, year }) {
    return (
        <div>
            <h3 className="titulo">Incremento de ventas en {year}</h3>
            <div>
                {Object.entries(incremento).map(([mes, datos]) => (
                    <p key={mes} className="infoCard">
                        <span style={{ fontWeight: 'bold' }}>{mes + ": "}</span>
                        {`Televisores: `}
                        <span style={{ fontWeight: 'bold', color: datos.televisor > 1 ? 'green' : 'red' }}>
                            {`${datos.televisor.toFixed(2)}%`}
                        </span>
                        {`, Refrigeradoras: `}
                        <span style={{ fontWeight: 'bold', color: datos.refrigeradora > 1 ? 'green' : 'red' }}>
                            {`${datos.refrigeradora.toFixed(2)}%`}
                        </span>
                        {`, Cocinas: `}
                        <span style={{ fontWeight: 'bold', color: datos.cocina > 1 ? 'green' : 'red' }}>
                            {`${datos.cocina.toFixed(2)}%`}
                        </span>
                    </p>
                ))}
            </div>
        </div>
    )
}
