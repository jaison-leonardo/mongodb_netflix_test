// función que agrega un excedente del 10% a la factura del mes y crea una si no existe
function add_excedente_factura(id_user) {
    var fechaActual = new Date();
    var primerDiaMesActual = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1);
    var ultDiaMesActual = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0);
    var facturaExistente = db.facturas.findOne(
        {
            usuario_id: id_user,
            fecha_generacion: {
                $gte: primerDiaMesActual,
                $lte: ultDiaMesActual
            }
        }
    )
    if (facturaExistente && !facturaExistente.excedente_aplicado && !facturaExistente.factura_pagada) {
        var costo = facturaExistente.costo_base_total
        db.facturas.updateOne(
            { usuario_id: id_user },
            {
                $set: {
                    costo_base_total: costo * 1.1,
                    excedente_aplicado: true
                }
            }
        )
    } else if (facturaExistente && !facturaExistente.excedente_aplicado && facturaExistente.factura_pagada) {
        var costo = facturaExistente.costo_base_total
        db.facturas.updateOne(
            { usuario_id: id_user },
            {
                $set: {
                    saldo_pendiente: costo * 0.1
                }
            }
        )
    } else if (!facturaExistente) {
        db.facturas.insertOne(
            {
                _id: getNextSequenceValue(db.facturas, "FACTURAS"),
                usuario_id: id_user,
                costo_base_total: 9.99 * 1.1,
                excedente_aplicado: true,
                factura_pagada: false,
                fecha_generacion: new Date(),
                fecha_pago: null,
                saldo_pendiente: 0.0
            }
        )
    }

}

// Función obtener un id dependiendo de un documento y un nombre
function getNextSequenceValue(document, sequenceName) {
    var sequenceDocument = document.countDocuments() + 1
    return sequenceName + "_" + sequenceDocument;
}