var path_file = "C:/Users/Jaison-PC/OneDrive - IUE/IUE/2024-1/Base de datos no estructuradas/NetflixDB/mongodb_netflix_test/"
load(path_file + "functions.js")
load(path_file + "data/paises.js")
load(path_file + "data/idiomas.js")
load(path_file + "data/generos.js")
load(path_file + "data/actores.js")
load(path_file + "data/restricciones.js")
load(path_file + "data/contenido_multimedia.js")
load(path_file + "data/usuarios.js")
use netflixdatabase

// Paises
db.paises.insertMany(paises)

// Idiomas
db.idiomas.insertMany(idiomas)

// Generos
db.generos.insertMany(generos)

// Actores
db.actores.insertMany(actores)

// Restricciones
db.restricciones.insertMany(restricciones)

// contenido multimedia
db.contenido_multimedia.insertMany(contenido_multimedia)

// usuarios
db.usuarios.insertMany(usuarios)

var historiales = [
    {
        contenido_multimedia: "ID_CONTENIDO_1",
        tiempo_reproduccion: 120,
        calificacion_usuario: 0
    },
    {
        contenido_multimedia: "ID_CONTENIDO_2",
        tiempo_reproduccion: 90,
        calificacion_usuario: 5
    },
    {
        contenido_multimedia: "ID_CONTENIDO_3",
        tiempo_reproduccion: 30,
        calificacion_usuario: 3.5
    },
    {
        contenido_multimedia: "ID_CONTENIDO_4",
        tiempo_reproduccion: 10,
        calificacion_usuario: 1
    },
    {
        contenido_multimedia: "ID_CONTENIDO_5",
        tiempo_reproduccion: 120,
        calificacion_usuario: 3
    },
];

historiales.forEach(function (his) {
    db.usuarios.updateMany(
        { "_id": "USUARIO_10" },
        { $push: { "perfiles.$[perfil].historial_reproducciones": his } },
        { arrayFilters: [{ "perfil.historial_reproducciones": { $exists: true, $ne: null } }] }
    )
})

var id_user = "USUARIO_1"
var name_perfil = "Perfil Principal"
var contenido = {
    contenido_multimedia: "ID_CONTENIDO_4",
    tiempo_reproduccion: 20,
    calificacion_usuario: 0
}
var user = db.usuarios.findOne({ _id: id_user })
var perfil = user.perfiles.find(function (perfil) {
    return perfil.nombre_perfil === name_perfil;
});
db.usuarios.updateOne(
    { "_id": "USUARIO_1" },
    { $push: { "perfiles.$[perfil].historial_reproducciones": contenido } },
    { arrayFilters: [{ "perfil.nombre_perfil": name_perfil }] }
)

db.usuarios.find()
// Facturas
db.createCollection("facturas")
// crear una factura nueva
// si la ip es diferente a la del perfil invocar esta funcion
add_excedente_factura(id_user)
db.facturas.find()

db.facturas.updateOne({ _id: "FACTURAS_1" }, { $set: { excedente_aplicado: false } })
db.facturas.updateOne({ _id: "FACTURAS_1" }, { $set: { costo_base_total: 9.99 } })
db.facturas.updateOne({ _id: "FACTURAS_1" }, { $set: { factura_pagada: true, fecha_pago: new Date() } })
db.facturas.updateOne({ _id: "FACTURAS_1" }, { $set: { factura_pagada: false, fecha_pago: null } })
db.facturas.deleteOne({ _id: "FACTURAS_1" })
db.facturas.updateOne({ _id: "FACTURAS_1" }, { $unset: { saldo_pendiente: "" } })
db.facturas.updateOne({ _id: "FACTURAS_1" }, { $unset: { costo_total: "" } })
db.facturas.updateOne({ _id: "FACTURAS_1" }, { $set: { fecha_pago: null } })

db.paises.aggregate([
    // Match para filtrar el país específico por su ID
    { $match: { _id: "PAIS_1" } },
    // Realiza un lookup para traer los idiomas asociados al país
    {
        $lookup: {
            from: "idiomas", // Colección a la que se hace referencia
            localField: "_id", // Campo local de la colección actual (paises)
            foreignField: "pais_idioma", // Campo de la colección referenciada (idiomas)
            as: "idiomas_del_pais" // Alias para el resultado del lookup
        }
    },
    // Proyecto para mostrar solo los campos necesarios
    {
        $project: {
            _id: 0, // Excluye el campo _id del resultado
            nombre_pais: 1, // Incluye el nombre del país en el resultado
            idiomas_del_pais: 1,
            nombre_idioma: "$nombre_idioma"
        }
    }
]);

// Recomendaciones
var usuarios = [
    {
        usuario_id: "USUARIO_10",
        perfil_id: "PERFIL_1"
    }
];

usuarios.forEach(function (usuario) {
    var perfil = db.usuarios.findOne({ "_id": usuario.usuario_id, "perfiles._id": usuario.perfil_id }, { "perfiles.$": 1 });
    if (perfil && perfil.perfiles.length > 0) {
        var listaReproduccion = perfil.perfiles[0].historial_reproducciones;
        var recomendados = [];

        listaReproduccion.forEach(function (item) {
            if (item.calificacion_usuario > 3) {
                recomendados.push({
                    contenido_multimedia: item.contenido_multimedia,
                    razon_recomendacion: "Porque tiene una calificación alta en tu lista de reproducción."
                });
            }
        });

        if (recomendados.length > 0) {
            db.usuarios.updateOne(
                { "_id": usuario.usuario_id, "perfiles._id": usuario.perfil_id },
                { $set: { "perfiles.$.recomendaciones": recomendados } }
            );
        }
    }
});

var userId = "USUARIO_2"
var result = detectDifferentIP(userId);
printjson(result.toArray());

var result = detectDifferentIPsInUsers();
printjson(result.toArray());

// Obtener los IDs de los usuarios que tienen perfiles con IPs diferentes
var usersWithDifferentIPs = detectDifferentIPsInUsers();

// Iterar sobre los resultados y aplicar la función add_excedente_factura
usersWithDifferentIPs.forEach(function (user) {
    var userId = user.usuario._id;
    add_excedente_factura(userId);
});

// Realizar pago
var userId = "USUARIO_10"
var fechaActual = new Date();
var primerDiaMesActual = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1);
var ultDiaMesActual = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0);
var existePago = db.usuarios.findOne({
    _id: userId,
    "preferencias.pago.fecha_pago": {
        $gte: primerDiaMesActual,
        $lte: ultDiaMesActual,
    },
})
if (!existePago) {
    var facturaExistente = db.facturas.findOne({
        usuario_id: userId,
        fecha_generacion: {
            $gte: primerDiaMesActual,
            $lte: ultDiaMesActual,
        },
    })
    if (!facturaExistente) {
        id_factura = db.facturas.insertOne({
            _id: getNextSequenceValue(db.facturas, 'FACTURAS'),
            usuario_id: userId,
            costo_base_total: 9.99,
            excedente_aplicado: false,
            factura_pagada: false,
            fecha_generacion: new Date(),
            fecha_pago: null,
            saldo_pendiente: 0.0,
        })
    }
    var pago = {
        metodo_pago: "Tarjeta de credito",
        monto: 9.99,
        fecha_pago: new Date(),
        id_factura: (facturaExistente) ? facturaExistente._id : id_factura.insertedId
    }
    db.usuarios.updateMany(
        { "preferencias.pago": { $type: "string" } },
        { $set: { "preferencias.pago": [] } }
    )
    db.usuarios.updateOne(
        { _id: userId },
        { $push: { "preferencias.pago": pago } }
    )
    db.facturas.updateOne(
        { _id: (facturaExistente) ? facturaExistente._id : id_factura.insertedId },
        {
            $set: { factura_pagada: true, fecha_pago: new Date() }
        }
    )
} else {
    print("Ya existe un pago para esa fecha")
}

db.usuarios.updateOne(
    { _id: userId },
    { $unset: { "preferencias.pago": [] } }
);


// Consultar documentos
db.usuarios.aggregate([
    {
        $match: { _id: userId, 'perfiles.nombre_perfil': 'Perfil Principal' }
    },
    {
        $lookup: {
            from: "contenido_multimedia",
            localField: "perfiles.historial_reproducciones.contenido_multimedia",
            foreignField: "_id",
            as: "contenido_multimedia"
        }
    },
    {
        $unwind: "$contenido_multimedia"
    },
    {
        $lookup: {
            from: "paises",
            localField: "pais",
            foreignField: "_id",
            as: "paises_join"
        }
    },
    {
        $lookup: {
            from: "generos",
            localField: "contenido_multimedia.generos",
            foreignField: "_id",
            as: "generos_name"
        }
    },
    {
        $lookup: {
            from: "restricciones",
            localField: "contenido_multimedia.restricciones",
            foreignField: "_id",
            as: "restricciones_join"
        }
    },
    {
        $lookup: {
            from: "actores",
            localField: "contenido_multimedia.reparto",
            foreignField: "_id",
            as: "reparto_join"
        }
    },
    {
        $lookup: {
            from: "idiomas",
            localField: "preferencias.idioma",
            foreignField: "_id",
            as: "idiomas_join"
        }
    },
    {
        $lookup: {
            from: "facturas",
            localField: "preferencias.pago.id_factura",
            foreignField: "_id",
            as: "facturas_join"
        }
    },
    {
        $addFields: {
            "contenido_multimedia.generos": "$generos_name",
            "contenido_multimedia.restricciones": "$restricciones_join",
            "contenido_multimedia.reparto": "$reparto_join",
            "preferencias.idioma": "$idiomas_join",
            "preferencias.pago": "$facturas_join"
        }
    },
    {
        $project: {
            "nombres":1,
            "apellidos":1,
            "estado":1,
            "preferencias": 1,
            "paises_join.nombre_pais": 1,
            "contenido_multimedia.nombre_contenido_multimedia": 1,
            "contenido_multimedia.generos": 1,
            "contenido_multimedia.restricciones": 1,
            "contenido_multimedia.reparto": 1
        }
    }
])
db.usuarios.find()
db.contenido_multimedia.find()
db.restricciones.find()
db.actores.find()
db.paises.find()
db.idiomas.find()
db.facturas.find()

//Actualizar el numero de temporadas
db.contenido_multimedia.updateOne(
  { "_id": "ID_CONTENIDO_1", "tipo_contenido.nombre_contenido": "Serie" },
  { $set: { "tipo_contenido.temporada": 4} } 
)
db.contenido_multimedia.find({})

//actualizar la biografia de un actor
db.actores.updateOne(
  { "nombre_actor": "Tom Hanks" },
  { $set: { "biografia": "Muere" } }
)
db.actores.find({})

//actualizar la puntuacion de una pelicula o serie
db.contenido_multimedia.updateOne(
  { "nombre_contenido_multimedia": "Narcos" }, // Filtrar el contenido multimedia por su nombre
  { $set: { "puntuacion": NUEVA_PUNTUACION } } // Actualizar la puntuación
)
//agregar el campo estado en la coleccion multimedia
db.contenido_multimedia.updateMany(
  { }, 
  { $set: { "estado": "vigente" } }
)

db.contenido_multimedia.updateMany(
  { "nombre_contenido_multimedia": { $in: ["La Casa de Papel", "Coco", "La La Land"] } }, 
  { $set: { "estado": "Próximamente" } } 
)
//mostrar que peliculas estan proximas 
db.contenido_multimedia.find({ "estado": "Próximamente" })
db.contenido_multimedia.find({})
