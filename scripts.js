//Inicio obtener diferentes Ips
var userId = 'USUARIO_2';
var result = detectDifferentIP(userId);
printjson(result.toArray());

var result = detectDifferentIPsInUsers();
printjson(result.toArray());
//Fin obtener diferentes Ips

//Inicio aplicar excedente a usuarios con Ips diferentes en sus perfiles

// Obtener los IDs de los usuarios que tienen perfiles con IPs diferentes
var usersWithDifferentIPs = detectDifferentIPsInUsers();

// Iterar sobre los resultados y aplicar la función add_excedente_factura
usersWithDifferentIPs.forEach(function (user) {
  var userId = user.usuario._id;
  add_excedente_factura(userId);
});

// Obtener el ID del usuario para el que deseas verificar la factura
var userId = 'USUARIO_1';

// Buscar la factura del usuario actual con el excedente aplicado
var facturaConExcedente = db.facturas.findOne({
  usuario_id: userId,
  excedente_aplicado: true,
});

if (facturaConExcedente) {
  print('Se ha aplicado el excedente a la factura del usuario:', userId);
  printjson(facturaConExcedente);
} else {
  print('El excedente no se ha aplicado a la factura del usuario:', userId);
}

//Fin aplicar excedente a usuarios con Ips diferentes en sus perfiles

//Inicio para llamar la funcion para detectar que usuarios de la base de datos tienen perfiles con Niños

db.runCommand({
  aggregate: 'usuarios',
  pipeline: [
    {
      $addFields: {
        restricciones: {
          $filter: {
            input: restricciones,
            as: 'restriccion',
            cond: {
              $eq: ['$$restriccion.tipo_restriccion', 'Restricción de Edad - Contenido para Adultos'],
            },
          },
        },
      },
    },
    {
      $match: {
        'perfiles.tipo_perfil': 'Niño',
        restricciones: { $ne: [] },
      },
    },
    {
      $project: {
        _id: 1,
        nombres: 1,
        apellidos: 1,
        numero_documento: 1,
        perfiles: 1,
        restricciones: 1,
      },
    },
  ],
  cursor: {},
});

//Fin para  llamar la funcion para detectar que usuarios de la base de datos tienen perfiles con Niños

//Inicio para insertar contenido a todos los perfiles de los usuarios y eliminar algun historial de reproducciones

var usuarios = db.usuarios.find();

usuarios.forEach(function (usuario) {
  var historiales = [
    {
      contenido_multimedia: 'ID_CONTENIDO_1',
      tiempo_reproduccion: 120,
      calificacion_usuario: 0,
    },
    {
      contenido_multimedia: 'ID_CONTENIDO_2',
      tiempo_reproduccion: 90,
      calificacion_usuario: 5,
    },
    {
      contenido_multimedia: 'ID_CONTENIDO_3',
      tiempo_reproduccion: 30,
      calificacion_usuario: 3.5,
    },
    {
      contenido_multimedia: 'ID_CONTENIDO_4',
      tiempo_reproduccion: 10,
      calificacion_usuario: 1,
    },
    {
      contenido_multimedia: 'ID_CONTENIDO_5',
      tiempo_reproduccion: 120,
      calificacion_usuario: 3,
    },
  ];

  historiales.forEach(function (historial) {
    db.usuarios.updateOne({ _id: usuario._id }, { $push: { 'perfiles.$[].historial_reproducciones': historial } });
  });
});

var id_usuario = 'USUARIO_2';

db.usuarios.updateOne({ _id: id_usuario }, { $unset: { 'perfiles.$[].historial_reproducciones': '' } });

//Fin para insertar contenido a todos los perfiles de los usuarios y eliminar algun historial de reproducciones
