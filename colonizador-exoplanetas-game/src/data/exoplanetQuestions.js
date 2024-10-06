const exoplanetQuestions = [
  {
    question: "¿Qué es un exoplaneta?",
    answer: "Un planeta que orbita una estrella fuera de nuestro sistema solar.",
    detailed_answer: "Un exoplaneta es un planeta que orbita una estrella fuera de nuestro sistema solar; también son llamados 'planeta extrasolar' .",
    incorrect_answers: [
      "Un planeta que orbita alrededor de otro planeta, como una luna.",
      "Una estrella cercana a la Tierra que no orbita ningún planeta.                    "
    ]
  },
  {
    question: "¿A qué se refiere con 'zona habitable'?",
    answer: "Rango de distancia orbital que permitiría la existencia de agua líquida en la superficie.",
    detailed_answer: "Es el rango de distancia orbital a una estrella a la que las temperaturas permitirían la existencia de agua líquida en la superficie de un planeta con atmósfera suficiente.",
    incorrect_answers: [
      "El rango de exoplanetas donde hay vida.",
      "Un rango de distancia orbital fijo, sin depender del tamaño ni la temperatura de la estrella."
    ]
  },
  {
    question: "¿A qué refiere la zona de 'Ricitos de Oro'?",
    answer: "Es un nombre alternativo a 'zona habitable'.",
    detailed_answer: "La zona de 'Ricitos de Oro' o 'Goldilocks zone' en inglés, es un nombre alternativo para la 'Zona Habitable', proviene del cuento infantil 'Risitos de oro y los 3 osos'.",
    incorrect_answers: [
      "Refiere a una región del sistema solar que se encuentra entre las órbitas de Marte y Júpiter.",
      "Es una galaxia que forma parte del sistema solar."
    ]
  },
  {
    question: "¿Qué es un año luz?",
    answer: "La distancia que recorre la luz en un año.",
    detailed_answer: "Es la distancia que recorre la luz en un año y equivale a unos 9,5 billones de kilómetros",
    incorrect_answers: [
      "La distancia que recorre un planeta alrededor de su estrella en un año.",
      "El tiempo que tarda un rayo de luz en llegar desde el Sol hasta la Tierra.",
    ]
  },
  {
    question: "¿Qué significa que un planeta esté bloqueado marealmente?",
    answer: "Es cuando un cuerpo celeste siempre tiene un lado orientado hacia el cuerpo que orbita.",
    detailed_answer: "Es cuando un cuerpo celeste, como planeta o luna, tiene siempre un lado orientado hacia el cuerpo que orbita, como una estrella o un planeta; tiene un lado diurno y uno nocturno.",
    incorrect_answers: [
      "Significa que el cuerpo celeste está atrapado por fuerzas gravitacionales y no puede moverse.",
      "Es cuando un planeta tiene una atmósfera bloqueada, impidiendo el intercambio de aire entre los hemisferios."
    ]
  },
  {
    question: "¿Qué es una estrella enana roja?",
    answer: "Es una clase de estrella pequeña, que emite una luz roja tenue.",
    detailed_answer: "Es una clase de estrellas pequeñas, relativamente frías, que emiten luz roja tenue. Son el tipo de estrella más común.",
    incorrect_answers: [
      "Es una estrella que está en las últimas etapas de su vida.",
      "Es una estrella que solo emite radiación ultravioleta y no es visible desde la Tierra."
    ]
  },
  {
    question: "¿Qué significa UA?",
    answer: "Es una unidad astronómica, que representa la distancia entre la Tierra y el Sol.",
    detailed_answer: "Es una unidad astronómica, que representa la distancia entre la Tierra y el Sol, y representa unos 150 millones de [km].",
    incorrect_answers: [
      "Es una unidad de tiempo usada para medir la duración de las órbitas planetarias.",
      "Es una medida de la fuerza gravitatoria entre dos cuerpos celestes."
    ]
  },
      {
        question: "¿Qué significa la denominación 'Supertierra' en un exoplaneta?",
        answer: "Es un tipo de exoplaneta",
        detailed_answer: "Es uno de los tipos más comunes de exoplanetas descubiertos hasta ahora, con una masa comprendida entre la Tierra y la de Neptuno.",
        incorrect_answers: [
          "Es un planeta que tiene un tamaño igual o mayor que el de Júpiter.",
          "Es un planeta gaseoso similar a Saturno, pero más cercano a su estrella."
        ]
      },
      {
        question: "¿Qué es la órbita?",
        answer: "Es la trayectoría curva y repetitiva de un objeto alrededor de un cuerpo espacial",
        detailed_answer: "Trayectoria curva y repetitiva de un objeto, como un satélite, una luna o un planeta, alrededor de un cuerpo espacial, como una luna, un planeta o una estrella.",
        incorrect_answers: [
          "Es el camino que sigue un planeta mientras gira sobre su propio eje.",
          "Es la distancia fija entre un planeta y su estrella."
        ]
      },
//10
{
  question: "¿Toda las estrellas tienen un exoplaneta?",
  answer: "No todas las estrellas tienen un exoplaneta",
  detailed_answer: "Según los astrónomos, es probable que más del 50 % de las estrellas alberguen al menos un planeta.",
  incorrect_answers: [
    "Si toda las estrellas tienen almenos un exoplaneta",
    "Ninguna estrella tiene exoplaneta"
  ]
},
{
  question: "¿Cuáles son tipos de exoplanetas?",
  answer: "Mundos rocosos, mundos oceánicos, Mini-Neptunos, Super-Tierras y Júpiter calientes",
  detailed_answer: "Los exoplanetas incluyen Hot Jupiters (gigantes gaseosos cerca de su estrella), Mini-Neptunes y Super-Earths (planetas rocosos grandes o gaseosos pequeños), ocean worlds (núcleo rocoso cubierto de océano) y rocky worlds (planetas sólidos similares a la Tierra).",
  incorrect_answers: [
      "Mundos safari, planetas de chocolate, mundos oceánicos",
      "Planetas que giran alrededor de agujeros negros, mundos de cristal líquido y Júpiter calientes"
  ]
},
{
  question: "¿Las estrellas aparte de nuestro sol pueden tener planetas?",
  answer: "Sí, muchas estrellas además de nuestro sol tienen planetas.",
  detailed_answer: "En las últimas décadas, los astrónomos han descubierto miles de exoplanetas que orbitan estrellas distintas al sol, ampliando nuestro conocimiento sobre la diversidad de sistemas planetarios en el universo.",
  incorrect_answers: [
      "No, ninguna estrella fuera de nuestro sol tiene planetas.",
      "No se ha encontrado evidencia de planetas en otras estrellas."
  ]
},
{
  question: "¿De qué trata la misión Mars Express?",
  answer: "La misión se centra en determinar si puede haber condiciones que soporten vida en Marte.",
  detailed_answer: "La misión Mars Express tiene como objetivo responder preguntas fundamentales sobre la geología, la atmósfera, el entorno de la superficie, la historia del agua y el potencial de vida en Marte. Utiliza una variedad de instrumentos para estudiar la composición del planeta y su evolución.",
  incorrect_answers: [
    "La misión se centra en investigar la composición del núcleo de la Marte.",
    "La misión se dedica a explorar las lunas de Marte."
  ]
},
//13 hasta la de arriba
      {
        question: "¿Con qué método se encontraron más exoplanetas?",
        answer: "El método de tránsito, también conocido como 'búsqueda de sombras'.",
        detailed_answer: "La 'método de microlente gravitacional' implica el uso de la gravedad de una estrella para amplificar la luz de un objeto distante. Esto puede revelar la presencia de un exoplaneta al observar los cambios en la luminosidad.",
        incorrect_answers: [
          "El método de velocidad radial, también conocido como 'efecto Doppler'.",
          "El método de microlente gravitacional."
        ]
      },
      {
        question: "¿Qué es una enana ultrafría?",
        answer: "Son objetos similares a estrellas de masa extremadamente baja.",
        detailed_answer: "Son objetos similares a estrellas con temperaturas efectivas inferiores a 2700 Kelvin, se incluyen estrellas de masa extremadamente baja.",
        incorrect_answers: [
            "Son objetos que son los suficientemente masivos como para arder como una estrella.",
            "Es un término que no es utilizado para distinguir estrellas como el Sol."
        ]
    },
    {
      question: "¿Cuál es el nombre del exoplaneta más cercano a la Tierra?",
      answer: "El más próximo a la Tierra es Próxima Centauri b.",
      detailed_answer: "Próxima Centauri b se encuentra a unos 4 años luz de la Tierra lo que lo hace el exoplaneta más próximo a la Tierra",
      incorrect_answers: [
          "El exoplaneta más próximo es HD 56414 b.",
          "El exoplaneta más próximo es Kepler 68 b."
      ]
  },
  {
    question: "¿Qué es un 'Júpiter caliente'?",
    answer: "Es un gigante gaseoso que orbita muy cerca de su estrella.",
    detailed_answer: "Un 'Júpiter caliente' es un exoplaneta gigante gaseoso, similar a Júpiter, pero que orbita extremadamente cerca de su estrella, completando su órbita en pocos días. Debido a su proximidad, estos planetas experimentan temperaturas extremadamente altas.",
    incorrect_answers: [
        "Es un planeta con una temperatura interna extremadamente alta, sin importar su órbita.",
        "Es un planeta gaseoso que orbita en la zona habitable de su estrella."
    ]
},
{
    question: "¿Qué es una 'enana marrón' en términos de cuerpos estelares?",
    answer: "Es un objeto que está entre una estrella y un planeta en cuanto a masa.",
    detailed_answer: "Una 'enana marrón' es un objeto que tiene más masa que un planeta gigante como Júpiter pero no la suficiente para iniciar la fusión nuclear como una estrella. Se considera un objeto intermedio entre una estrella fallida y un planeta gigante.",
    incorrect_answers: [
        "Es una estrella pequeña que está a punto de apagarse.",
        "Es un planeta que ha sido expulsado de su sistema estelar."
    ]
},
{
  question: "¿A qué refiere la misión TESS?",
  answer: "TESS es el 'Transiting Exoplanet Survey Satellite', lanzado en 2018 para descubrir planetas.",
  detailed_answer: "TESS es el 'Transiting Exoplanet Survey Satellite', lanzado en 2018 para descubrir planetas pequeños que orbitan estrellas brillantes en todo el cielo nocturno, utilizando el método de tránsito para identificar exoplanetas.",
  incorrect_answers: [
      "Es un telescopio diseñado exclusivamente para estudiar la formación de estrellas y galaxias lejanas.",
      "TESS utiliza el método de microlente gravitacional para detectar exoplanetas en sistemas estelares cercanos."
  ]
},
{
  question: "¿Qué es la espectroscopía?",
  answer: "Es un método de análisis de la luz mediante su separación en distintas longitudes de onda.",
  detailed_answer: "Es un método de análisis de la luz mediante su separación en distintas longitudes de onda, que permite identificar los componentes químicos de un objeto astronómico por sus firmas de longitud de onda únicas.",
  incorrect_answers: [
      "Es un método que mide las ondas de radio emitidas por los planetas para calcular su masa y temperatura.",
      "Es una técnica que utiliza lentes ópticas para ampliar las imágenes de objetos lejanos y analizar su movimiento."
  ]
}
];

export default exoplanetQuestions;