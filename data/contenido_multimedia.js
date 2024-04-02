db.createCollection("contenido_multimedia")
var contenido_multimedia = [
    {
        _id: "ID_CONTENIDO_1",
        nombre_contenido_multimedia: "Narcos",
        anio_publicacion: ISODate("2015-08-28"),
        puntuacion: 8.8,
        tipo_contenido: {
            nombre_contenido: "Serie",
            temporada: 3,
            episodio: 30
        },
        generos: [
            "GENERO_3",
            "GENERO_16"
        ],
        pais: "PAIS_11",
        restricciones: [
            "RESTRICCION_3",
            "RESTRICCION_8"
        ],
        duracion_min: 50,
        reparto: [
            "ACTOR_10",
            "ACTOR_2"
        ],
        idioma: [
            "IDIOMA_2",
            "IDIOMA_1"
        ],
        sinopsis: "Narcos narra la vida de Pablo Escobar desde sus comienzos en el contrabando en Colombia hasta su ascenso al poder y caída."
    },
    {
        _id: "ID_CONTENIDO_2",
        nombre_contenido_multimedia: "La Casa de Papel",
        anio_publicacion: ISODate("2017-05-02"),
        puntuacion: 8.3,
        tipo_contenido: {
            nombre_contenido: "Serie",
            temporada: 5,
            episodio: 60
        },
        generos: [
            "GENERO_3",
            "GENERO_9",
            "GENERO_16"
        ],
        pais: "PAIS_12",
        restricciones: [
            "RESTRICCION_3",
            "RESTRICCION_8"
        ],
        duracion_min: 45,
        reparto: [
            "ACTOR_9",
            "ACTOR_4"
        ],
        idioma: [
            "IDIOMA_2",
            "IDIOMA_1"
        ],
        sinopsis: "Un grupo de personas con habilidades únicas se unen para cometer el atraco del siglo a la Fábrica Nacional de Moneda y Timbre de España."
    },
    {
        _id: "ID_CONTENIDO_3",
        nombre_contenido_multimedia: "The Crown",
        anio_publicacion: ISODate("2016-11-04"),
        puntuacion: 8.7,
        tipo_contenido: {
            nombre_contenido: "Serie",
            temporada: 4,
            episodio: 40
        },
        generos: [
            "GENERO_3",
            "GENERO_15"
        ],
        pais: "PAIS_2",
        restricciones: [
            "RESTRICCION_8"
        ],
        duracion_min: 55,
        reparto: [
            "ACTOR_6",
            "ACTOR_1"
        ],
        idioma: [
            "IDIOMA_1",
            "IDIOMA_2"
        ],
        sinopsis: "La serie sigue la vida de la Reina Isabel II desde su boda en 1947 hasta los acontecimientos actuales."
    },
    {
        _id: "ID_CONTENIDO_4",
        nombre_contenido_multimedia: "Inception",
        anio_publicacion: ISODate("2010-07-16"),
        puntuacion: 8.8,
        tipo_contenido: {
            nombre_contenido: "Película",
            temporada: 1,
            episodio: 1
        },
        generos: [
            "GENERO_5",
            "GENERO_20"
        ],
        pais: "PAIS_1",
        restricciones: [
            "RESTRICCION_3",
            "RESTRICCION_10"
        ],
        duracion_min: 148,
        reparto: [
            "ACTOR_1",
            "ACTOR_2"
        ],
        idioma: [
            "IDIOMA_1"
        ],
        sinopsis: "Un ladrón hábil, Dom Cobb, es experto en el arte de la extracción: robar secretos valiosos del subconsciente durante el estado de sueño."
    },
    {
        _id: "ID_CONTENIDO_5",
        nombre_contenido_multimedia: "Coco",
        anio_publicacion: ISODate("2017-10-27"),
        puntuacion: 8.4,
        tipo_contenido: {
            nombre_contenido: "Película",
            temporada: 1,
            episodio: 1
        },
        generos: [
            "GENERO_11",
            "GENERO_12",
            "GENERO_19"
        ],
        pais: "PAIS_1",
        restricciones: [
            "RESTRICCION_7"
        ],
        duracion_min: 105,
        reparto: [
            "ACTOR_10",
            "ACTOR_4"
        ],
        idioma: [
            "IDIOMA_2",
            "IDIOMA_1"
        ],
        sinopsis: "Coco sigue a un niño de 12 años llamado Miguel, quien se encuentra en la tierra de los muertos después de tocar un hechizo mágico."
    },
    {
        _id: "ID_CONTENIDO_6",
        nombre_contenido_multimedia: "Game of Thrones",
        anio_publicacion: ISODate("2011-04-17"),
        puntuacion: 9.3,
        tipo_contenido: {
            nombre_contenido: "Serie",
            temporada: 8,
            episodio: 73
        },
        generos: [
            "GENERO_3",
            "GENERO_6",
            "GENERO_10",
            "GENERO_17"
        ],
        pais: "PAIS_1",
        restricciones: [
            "RESTRICCION_3",
            "RESTRICCION_8"
        ],
        duracion_min: 55,
        reparto: [
            "ACTOR_9",
            "ACTOR_1"
        ],
        idioma: [
            "IDIOMA_1",
            "IDIOMA_2"
        ],
        sinopsis: "La lucha por el trono de hierro en el continente de Poniente, donde las familias nobles se enfrentan por el poder."
    },
    {
        _id: "ID_CONTENIDO_7",
        nombre_contenido_multimedia: "The Matrix",
        anio_publicacion: ISODate("1999-03-31"),
        puntuacion: 8.7,
        tipo_contenido: {
            nombre_contenido: "Película",
            temporada: 1,
            episodio: 1
        },
        generos: [
            "GENERO_5",
            "GENERO_10",
            "GENERO_20"
        ],
        pais: "PAIS_1",
        restricciones: [
            "RESTRICCION_3",
            "RESTRICCION_10"
        ],
        duracion_min: 136,
        reparto: [
            "ACTOR_1",
            "ACTOR_8"
        ],
        idioma: [
            "IDIOMA_1"
        ],
        sinopsis: "Un hacker llamado Neo descubre la verdad sobre su realidad y debe luchar contra las máquinas que controlan la humanidad."
    },
    {
        _id: "ID_CONTENIDO_8",
        nombre_contenido_multimedia: "Black Mirror",
        anio_publicacion: ISODate("2011-12-04"),
        puntuacion: 8.8,
        tipo_contenido: {
            nombre_contenido: "Serie",
            temporada: 5,
            episodio: 22
        },
        generos: [
            "GENERO_5",
            "GENERO_9",
            "GENERO_10",
            "GENERO_20"
        ],
        pais: "PAIS_2",
        restricciones: [
            "RESTRICCION_3",
            "RESTRICCION_8"
        ],
        duracion_min: 60,
        reparto: [
            "ACTOR_6",
            "ACTOR_1"
        ],
        idioma: [
            "IDIOMA_1",
            "IDIOMA_2"
        ],
        sinopsis: "Serie de antología que refleja la inquietud colectiva sobre el mundo moderno y la tecnología, con episodios independientes que exploran la oscuridad de la tecnología y la sociedad."
    },
    {
        _id: "ID_CONTENIDO_9",
        nombre_contenido_multimedia: "La La Land",
        anio_publicacion: ISODate("2016-12-09"),
        puntuacion: 8.0,
        tipo_contenido: {
            nombre_contenido: "Película",
            temporada: 1,
            episodio: 1
        },
        generos: [
            "GENERO_2",
            "GENERO_8",
            "GENERO_12"
        ],
        pais: "PAIS_1",
        restricciones: [
            "RESTRICCION_10"
        ],
        duracion_min: 128,
        reparto: [
            "ACTOR_1",
            "ACTOR_5"
        ],
        idioma: [
            "IDIOMA_1"
        ],
        sinopsis: "Un pianista de jazz y una aspirante a actriz se enamoran mientras persiguen sus sueños en Los Ángeles."
    },
    {
        _id: "ID_CONTENIDO_10",
        nombre_contenido_multimedia: "The Godfather",
        anio_publicacion: ISODate("1972-03-24"),
        puntuacion: 9.2,
        tipo_contenido: {
            nombre_contenido: "Película",
            temporada: 1,
            episodio: 1
        },
        generos: [
            "GENERO_3",
            "GENERO_16"
        ],
        pais: "PAIS_1",
        restricciones: [
            "RESTRICCION_3"
        ],
        duracion_min: 175,
        reparto: [
            "ACTOR_1",
            "ACTOR_4"
        ],
        idioma: [
            "IDIOMA_1"
        ],
        sinopsis: "La saga de una familia de mafiosos italianos en Estados Unidos, centrada en el ascenso al poder de Don Vito Corleone y su hijo Michael."
    },
    {
        _id: "ID_CONTENIDO_11",
        nombre_contenido_multimedia: "Stranger Things",
        anio_publicacion: ISODate("2016-07-15"),
        puntuacion: 8.7,
        tipo_contenido: {
            nombre_contenido: "Serie",
            temporada: 3,
            episodio: 25
        },
        generos: [
            "GENERO_4",
            "GENERO_5",
            "GENERO_6"
        ],
        pais: "PAIS_1",
        restricciones: [
            "RESTRICCION_3",
            "RESTRICCION_8"
        ],
        duracion_min: 50,
        reparto: [
            "ACTOR_1",
            "ACTOR_2"
        ],
        idioma: [
            "IDIOMA_1",
            "IDIOMA_2"
        ],
        sinopsis: "Un grupo de niños en un pequeño pueblo descubre un misterio sobrenatural mientras buscan a un amigo desaparecido."
    },
    {
        _id: "ID_CONTENIDO_12",
        nombre_contenido_multimedia: "Breaking Bad",
        anio_publicacion: ISODate("2008-01-20"),
        puntuacion: 9.5,
        tipo_contenido: {
            nombre_contenido: "Serie",
            temporada: 5,
            episodio: 62
        },
        generos: [
            "GENERO_3",
            "GENERO_9",
            "GENERO_16"
        ],
        pais: "PAIS_1",
        restricciones: [
            "RESTRICCION_3",
            "RESTRICCION_8"
        ],
        duracion_min: 47,
        reparto: [
            "ACTOR_1",
            "ACTOR_2"
        ],
        idioma: [
            "IDIOMA_1",
            "IDIOMA_2"
        ],
        sinopsis: "Un profesor de química de secundaria se convierte en un fabricante de metanfetaminas para asegurar el futuro financiero de su familia después de ser diagnosticado con cáncer."
    },
    {
        _id: "ID_CONTENIDO_13",
        nombre_contenido_multimedia: "The Shawshank Redemption",
        anio_publicacion: ISODate("1994-09-23"),
        puntuacion: 9.3,
        tipo_contenido: {
            nombre_contenido: "Película",
            temporada: 1,
            episodio: 1
        },
        generos: [
            "GENERO_3",
            "GENERO_16"
        ],
        pais: "PAIS_1",
        restricciones: [
            "RESTRICCION_3"
        ],
        duracion_min: 142,
        reparto: [
            "ACTOR_1",
            "ACTOR_3"
        ],
        idioma: [
            "IDIOMA_1"
        ],
        sinopsis: "La historia de un banquero encarcelado por el asesinato de su esposa y su amante, y su amistad con otro prisionero, un contrabandista de bienes."
    },
    {
        _id: "ID_CONTENIDO_14",
        nombre_contenido_multimedia: "Inception",
        anio_publicacion: ISODate("2010-07-16"),
        puntuacion: 8.8,
        tipo_contenido: {
            nombre_contenido: "Película",
            temporada: 1,
            episodio: 1
        },
        generos: [
            "GENERO_5",
            "GENERO_10",
            "GENERO_20"
        ],
        pais: "PAIS_1",
        restricciones: [
            "RESTRICCION_3",
            "RESTRICCION_10"
        ],
        duracion_min: 148,
        reparto: [
            "ACTOR_1",
            "ACTOR_7"
        ],
        idioma: [
            "IDIOMA_1"
        ],
        sinopsis: "Un ladrón experto roba secretos corporativos a través del uso de la tecnología de compartir sueños, pero su último trabajo lo lleva a una misión aún más peligrosa: implantar una idea en la mente de un CEO."
    },
    {
        _id: "ID_CONTENIDO_15",
        nombre_contenido_multimedia: "Friends",
        anio_publicacion: ISODate("1994-09-22"),
        puntuacion: 8.9,
        tipo_contenido: {
            nombre_contenido: "Serie",
            temporada: 10,
            episodio: 236
        },
        generos: [
            "GENERO_2",
            "GENERO_6"
        ],
        pais: "PAIS_1",
        restricciones: [
            "RESTRICCION_3",
            "RESTRICCION_8"
        ],
        duracion_min: 22,
        reparto: [
            "ACTOR_1",
            "ACTOR_2"
        ],
        idioma: [
            "IDIOMA_1",
            "IDIOMA_2"
        ],
        sinopsis: "Un grupo de amigos en Nueva York enfrenta la vida, el amor y las situaciones cómicas en su camino hacia la adultez."
    },
    {
        _id: "ID_CONTENIDO_16",
        nombre_contenido_multimedia: "The Witcher",
        anio_publicacion: ISODate("2019-12-20"),
        puntuacion: 8.2,
        tipo_contenido: {
            nombre_contenido: "Serie",
            temporada: 2,
            episodio: 16
        },
        generos: [
            "GENERO_4",
            "GENERO_5",
            "GENERO_6"
        ],
        pais: "PAIS_1",
        restricciones: [
            "RESTRICCION_3",
            "RESTRICCION_8"
        ],
        duracion_min: 60,
        reparto: [
            "ACTOR_1",
            "ACTOR_10"
        ],
        idioma: [
            "IDIOMA_1",
            "IDIOMA_2"
        ],
        sinopsis: "Basada en la saga de libros, sigue al cazador de monstruos Geralt de Rivia en sus aventuras en un mundo lleno de peligros y magia."
    },
    {
        _id: "ID_CONTENIDO_17",
        nombre_contenido_multimedia: "The Office",
        anio_publicacion: ISODate("2005-03-24"),
        puntuacion: 8.9,
        tipo_contenido: {
            nombre_contenido: "Serie",
            temporada: 9,
            episodio: 201
        },
        generos: [
            "GENERO_2",
            "GENERO_6"
        ],
        pais: "PAIS_1",
        restricciones: [
            "RESTRICCION_3",
            "RESTRICCION_8"
        ],
        duracion_min: 22,
        reparto: [
            "ACTOR_1",
            "ACTOR_2"
        ],
        idioma: [
            "IDIOMA_1"
        ],
        sinopsis: "Una mirada cómica a la vida de los empleados de una oficina a través de la lente de un documental, liderada por el incompetente pero encantador jefe, Michael Scott."
    },
    {
        _id: "ID_CONTENIDO_18",
        nombre_contenido_multimedia: "Avengers: Endgame",
        anio_publicacion: ISODate("2019-04-26"),
        puntuacion: 8.4,
        tipo_contenido: {
            nombre_contenido: "Película",
            temporada: 1,
            episodio: 1
        },
        generos: [
            "GENERO_1",
            "GENERO_4",
            "GENERO_5"
        ],
        pais: "PAIS_1",
        restricciones: [
            "RESTRICCION_3",
            "RESTRICCION_8"
        ],
        duracion_min: 181,
        reparto: [
            "ACTOR_2",
            "ACTOR_7"
        ],
        idioma: [
            "IDIOMA_1"
        ],
        sinopsis: "Los superhéroes de Marvel se unen para enfrentarse a su enemigo más poderoso, Thanos, en una batalla épica por el destino del universo."
    },
    {
        _id: "ID_CONTENIDO_19",
        nombre_contenido_multimedia: "Interstellar",
        anio_publicacion: ISODate("2014-11-07"),
        puntuacion: 8.6,
        tipo_contenido: {
            nombre_contenido: "Película",
            temporada: 1,
            episodio: 1
        },
        generos: [
            "GENERO_5",
            "GENERO_10",
            "GENERO_20"
        ],
        pais: "PAIS_1",
        restricciones: [
            "RESTRICCION_3",
            "RESTRICCION_10"
        ],
        duracion_min: 169,
        reparto: [
            "ACTOR_1",
            "ACTOR_2"
        ],
        idioma: [
            "IDIOMA_1"
        ],
        sinopsis: "Un grupo de exploradores espaciales se embarca en un viaje interestelar en busca de un nuevo hogar para la humanidad, mientras luchan contra el tiempo y los peligros del espacio."
    },
    {
        _id: "ID_CONTENIDO_20",
        nombre_contenido_multimedia: "La Casa de Papel",
        anio_publicacion: ISODate("2017-05-02"),
        puntuacion: 8.3,
        tipo_contenido: {
            nombre_contenido: "Serie",
            temporada: 5,
            episodio: 70
        },
        generos: [
            "GENERO_1",
            "GENERO_3",
            "GENERO_16"
        ],
        pais: "PAIS_12",
        restricciones: [
            "RESTRICCION_3",
            "RESTRICCION_8"
        ],
        duracion_min: 50,
        reparto: [
            "ACTOR_4",
            "ACTOR_7"
        ],
        idioma: [
            "IDIOMA_2"
        ],
        sinopsis: "Un enigmático líder planea el atraco perfecto a la Fábrica Nacional de Moneda y Timbre de España, mientras un grupo de desconocidos se unen para llevar a cabo el audaz plan."
    }
]