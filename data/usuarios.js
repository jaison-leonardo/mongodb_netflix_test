db.createCollection('usuarios');
var usuarios = [
  {
    _id: 'USUARIO_1',
    nombres: 'Juan',
    apellidos: 'Pérez',
    numero_documento: '123456789',
    numero_telefono: '123456789',
    email: 'juan@example.com',
    password: 'hashed_password',
    fecha_nacimiento: ISODate('1990-01-01'),
    perfiles: [
      {
        _id: 'PERFIL_1_U1',
        nombre_perfil: 'Perfil Principal',
        ip_perfil: 1921986325,
        tipo_perfil: 'Adulto',
        pin_perfil: '1234',
        recomendaciones: [],
        historial_reproducciones: [],
      },
    ],
    pais: 'PAIS_11',
    estado: 'activo',
    preferencias: {
      idioma: 'IDIOMA_2',
      pago: [
        {
          metodo_pago: 'tarjeta_de_credito',
          monto: 9.99,
          fecha_pago: ISODate('2024-03-25T15:00:00'),
        },
      ],
      estado_suscripcion: 'activo',
      ip: 19216811,
    },
  },
  {
    _id: 'USUARIO_2',
    nombres: 'María',
    apellidos: 'Gómez',
    numero_documento: '987654321',
    numero_telefono: '987654321',
    email: 'maria@example.com',
    password: 'hashed_password',
    fecha_nacimiento: ISODate('1995-05-05'),
    perfiles: [
      {
        _id: 'PERFIL_2',
        nombre_perfil: 'Perfil Principal',
        ip_perfil: 19216811,
        tipo_perfil: 'Adulto',
        pin_perfil: '5678',
        recomendaciones: [],
        historial_reproducciones: [],
      },
      {
        _id: 'PERFIL_3',
        nombre_perfil: 'Perfil Secundario',
        ip_perfil: 123456789,
        tipo_perfil: 'Niño',
        pin_perfil: '7890',
        recomendaciones: [],
        historial_reproducciones: [],
      },
    ],
    pais: 'PAIS_10',
    estado: 'activo',
    preferencias: {
      idioma: 'IDIOMA_2',
      pago: [
        {
          metodo_pago: 'tarjeta_de_credito',
          monto: 9.99,
          fecha_pago: ISODate('2024-03-25T15:00:00'),
        },
      ],
      estado_suscripcion: 'activo',
      ip: 1921986325,
    },
  },
  {
    _id: 'USUARIO_3',
    nombres: 'Pedro',
    apellidos: 'Martínez',
    numero_documento: '111111111',
    numero_telefono: '111111111',
    email: 'pedro@example.com',
    password: 'hashed_password',
    fecha_nacimiento: ISODate('1988-03-15'),
    perfiles: [
      {
        _id: 'PERFIL_1_U3',
        nombre_perfil: 'Perfil Principal',
        ip_perfil: 19216822,
        tipo_perfil: 'Adulto',
        pin_perfil: '2222',
        recomendaciones: [],
        historial_reproducciones: [],
      },
    ],
    pais: 'PAIS_4',
    estado: 'activo',
    preferencias: {
      idioma: 'IDIOMA_1',
      pago: [
        {
          metodo_pago: 'tarjeta_de_credito',
          monto: 12.99,
          fecha_pago: ISODate('2024-03-25T15:00:00'),
        },
      ],
      estado_suscripcion: 'activo',
      ip: 19216833,
    },
  },
  {
    _id: 'USUARIO_4',
    nombres: 'Laura',
    apellidos: 'Gutiérrez',
    numero_documento: '222222222',
    numero_telefono: '222222222',
    email: 'laura@example.com',
    password: 'hashed_password',
    fecha_nacimiento: ISODate('1992-11-20'),
    perfiles: [
      {
        _id: 'PERFIL_1_U4',
        nombre_perfil: 'Perfil Principal',
        ip_perfil: 19216833,
        tipo_perfil: 'Adulto',
        pin_perfil: '3333',
        recomendaciones: [],
        historial_reproducciones: [],
      },
      {
        _id: 'PERFIL_2_U4',
        nombre_perfil: 'Perfil Secundario',
        ip_perfil: 19216844,
        tipo_perfil: 'Niño',
        pin_perfil: '4444',
        recomendaciones: [],
        historial_reproducciones: [],
      },
    ],
    pais: 'PAIS_4',
    estado: 'activo',
    preferencias: {
      idioma: 'IDIOMA_3',
      pago: [
        {
          metodo_pago: 'paypal',
          monto: 14.99,
          fecha_pago: ISODate('2024-03-25T15:00:00'),
        },
      ],
      estado_suscripcion: 'activo',
      ip: 19216855,
    },
  },
  {
    _id: 'USUARIO_5',
    nombres: 'Ana',
    apellidos: 'Sánchez',
    numero_documento: '333333333',
    numero_telefono: '333333333',
    email: 'ana@example.com',
    password: 'hashed_password',
    fecha_nacimiento: ISODate('1985-09-10'),
    perfiles: [
      {
        _id: 'PERFIL_1_U5',
        nombre_perfil: 'Perfil Principal',
        ip_perfil: 19216844,
        tipo_perfil: 'Adulto',
        pin_perfil: '5555',
        recomendaciones: [],
        historial_reproducciones: [],
      },
    ],
    pais: 'PAIS_1',
    estado: 'activo',
    preferencias: {
      idioma: 'IDIOMA_1',
      pago: [
        {
          metodo_pago: 'tarjeta_de_credito',
          monto: 9.99,
          fecha_pago: ISODate('2024-03-25T15:00:00'),
        },
      ],
      estado_suscripcion: 'activo',
      ip: 19216822,
    },
  },
  {
    _id: 'USUARIO_6',
    nombres: 'David',
    apellidos: 'López',
    numero_documento: '444444444',
    numero_telefono: '444444444',
    email: 'david@example.com',
    password: 'hashed_password',
    fecha_nacimiento: ISODate('1998-12-25'),
    perfiles: [
      {
        _id: 'PERFIL_1_U6',
        nombre_perfil: 'Perfil Principal',
        ip_perfil: 19216855,
        tipo_perfil: 'Adulto',
        pin_perfil: '6666',
        recomendaciones: [],
        historial_reproducciones: [],
      },
    ],
    pais: 'PAIS_11',
    estado: 'activo',
    preferencias: {
      idioma: 'IDIOMA_2',
      pago: [
        {
          metodo_pago: 'tarjeta_de_credito',
          monto: 11.99,
          fecha_pago: ISODate('2024-03-25T15:00:00'),
        },
      ],
      estado_suscripcion: 'activo',
      ip: 19216866,
    },
  },
  {
    _id: 'USUARIO_7',
    nombres: 'Sofía',
    apellidos: 'Díaz',
    numero_documento: '555555555',
    numero_telefono: '555555555',
    email: 'sofia@example.com',
    password: 'hashed_password',
    fecha_nacimiento: ISODate('1996-07-08'),
    perfiles: [
      {
        _id: 'PERFIL_1_U7',
        nombre_perfil: 'Perfil Principal',
        ip_perfil: 192168779,
        tipo_perfil: 'Adulto',
        pin_perfil: '7777',
        recomendaciones: [],
        historial_reproducciones: [],
      },
    ],
    pais: 'PAIS_11',
    estado: 'activo',
    preferencias: {
      idioma: 'IDIOMA_3',
      pago: [
        {
          metodo_pago: 'paypal',
          monto: 10.99,
          fecha_pago: ISODate('2024-03-25T15:00:00'),
        },
      ],
      estado_suscripcion: 'activo',
      ip: 192168779,
    },
  },
  {
    _id: 'USUARIO_8',
    nombres: 'Elena',
    apellidos: 'Fernández',
    numero_documento: '666666666',
    numero_telefono: '666666666',
    email: 'elena@example.com',
    password: 'hashed_password',
    fecha_nacimiento: ISODate('1991-04-30'),
    perfiles: [
      {
        _id: 'PERFIL_1_U8',
        nombre_perfil: 'Perfil Principal',
        ip_perfil: 19216877,
        tipo_perfil: 'Adulto',
        pin_perfil: '8888',
        recomendaciones: [],
        historial_reproducciones: [],
      },
      {
        _id: 'PERFIL_2_U8',
        nombre_perfil: 'Perfil Secundario',
        ip_perfil: 19216888,
        tipo_perfil: 'Niño',
        pin_perfil: '9999',
        recomendaciones: [],
        historial_reproducciones: [],
      },
    ],
    pais: 'PAIS_3',
    estado: 'inactivo',
    preferencias: {
      idioma: 'IDIOMA_1',
      pago: [
        {
          metodo_pago: 'tarjeta_de_credito',
          monto: 8.99,
          fecha_pago: ISODate('2024-03-25T15:00:00'),
        },
      ],
      estado_suscripcion: 'activo',
      ip: 19216899,
    },
  },
  {
    _id: 'USUARIO_9',
    nombres: 'Carlos',
    apellidos: 'Ramírez',
    numero_documento: '777777777',
    numero_telefono: '777777777',
    email: 'carlos@example.com',
    password: 'hashed_password',
    fecha_nacimiento: ISODate('1994-02-14'),
    perfiles: [
      {
        _id: 'PERFIL_1_U9',
        nombre_perfil: 'Perfil Principal',
        ip_perfil: 19216888,
        tipo_perfil: 'Adulto',
        pin_perfil: '0000',
        recomendaciones: [],
        historial_reproducciones: [],
      },
    ],
    pais: 'PAIS_3',
    estado: 'activo',
    preferencias: {
      idioma: 'IDIOMA_2',
      pago: [
        {
          metodo_pago: 'tarjeta_de_credito',
          monto: 7.99,
          fecha_pago: ISODate('2024-03-25T15:00:00'),
        },
      ],
      estado_suscripcion: 'activo',
      ip: 19216900,
    },
  },
  {
    _id: 'USUARIO_10',
    nombres: 'Luis',
    apellidos: 'Hernández',
    numero_documento: '888888888',
    numero_telefono: '888888888',
    email: 'luis@example.com',
    password: 'hashed_password',
    fecha_nacimiento: ISODate('1993-08-21'),
    perfiles: [
      {
        _id: 'PERFIL_1_U10',
        nombre_perfil: 'Perfil Principal',
        ip_perfil: 19216922,
        tipo_perfil: 'Adulto',
        pin_perfil: '1111',
        recomendaciones: [],
        historial_reproducciones: [],
      },
      {
        _id: 'PERFIL_2_U10',
        nombre_perfil: 'Perfil Secundario',
        ip_perfil: 19216922,
        tipo_perfil: 'Niño',
        pin_perfil: '2222',
        recomendaciones: [],
        historial_reproducciones: [],
      },
    ],
    pais: 'PAIS_8',
    estado: 'activo',
    preferencias: {
      idioma: 'IDIOMA_3',
      pago: [
        {
          metodo_pago: 'paypal',
          monto: 6.99,
          fecha_pago: ISODate('2024-03-25T15:00:00'),
        },
      ],
      estado_suscripcion: 'activo',
      ip: 19216922,
    },
  },
];
