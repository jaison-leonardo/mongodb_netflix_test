var path_file = "C:/Users/Jaison-PC/OneDrive - IUE/IUE/2024-1/Base de datos no estructuradas/NetflixDB/"
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
        { "_id": "USUARIO_1" },
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
    usuario_id: "USUARIO_1",
    perfil_id: "PERFIL_1"
  }
];

usuarios.forEach(function(usuario) {
  var perfil = db.usuarios.findOne({ "_id": usuario.usuario_id, "perfiles._id": usuario.perfil_id }, { "perfiles.$": 1 });
  if (perfil && perfil.perfiles.length > 0) {
    var listaReproduccion = perfil.perfiles[0].historial_reproducciones;
    var recomendados = [];

    listaReproduccion.forEach(function(item) {
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