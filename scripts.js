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
