const exoplanetQuestions = [
    {
      question: "¿Qué es un exoplaneta?",
      answer: "Un planeta que orbita una estrella fuera de nuestro sistema solar.",
      detailed_answer: "Un exoplaneta es un planeta que orbita una estrella fuera de nuestro sistema solar. Estos planetas son importantes para la búsqueda de vida fuera de la Tierra.",
      incorrect_answers: [
        "Un planeta que orbita alrededor de otro planeta.",
        "Una estrella cercana a la Tierra que no orbita ningún planeta."
      ]
    },
    {
      question: "¿Qué factores determinan si un exoplaneta es habitable?",
      answer: "La distancia a su estrella, agua, atmósfera y temperatura.",
      detailed_answer: "Los factores que determinan la habitabilidad de un exoplaneta incluyen la distancia a su estrella, que debe permitir condiciones para agua líquida; la presencia de agua, que es esencial para la vida; una atmósfera adecuada que pueda retener calor y proteger contra la radiación; y temperaturas que no sean extremas.",
      incorrect_answers: [
        "La composición química del núcleo del planeta.",
        "La cantidad de lunas que tiene."
      ]
    },
    {
      question: "¿Por qué es importante el agua líquida para la habitabilidad?",
      answer: "Ayuda a preservar la vida.",
      detailed_answer: "El agua líquida es fundamental para la vida, ya que actúa como un solvente que facilita reacciones químicas en organismos. Sin agua líquida, los procesos biológicos no podrían ocurrir.",
      incorrect_answers: [
        "Es un recurso que ayuda a regular la temperatura del planeta.",
        "Es la fuente principal de energía solar."
      ]
    },
    {
      question: "¿Cómo influye el tamaño de un exoplaneta en su habitabilidad?",
      answer: "El tamaño determina su capacidad para mantener una atmósfera adecuada y estable.",
      detailed_answer: "El tamaño de un exoplaneta afecta su gravedad y, por ende, su capacidad para retener una atmósfera. Un exoplaneta pequeño puede no mantener una atmósfera adecuada, mientras que uno muy grande puede tener condiciones extremas que no permitan la vida.",
      incorrect_answers: [
        "Un planeta más grande siempre tiene más agua.",
        "Los planetas pequeños son siempre más fríos."
      ]
    },
    {
      question: "¿Qué papel juega la atmósfera en la habitabilidad de un exoplaneta?",
      answer: "La atmósfera regula temperatura y contiene gases.",
      detailed_answer: "La atmósfera es crucial para la habitabilidad, ya que regula la temperatura a través del efecto invernadero, protege a la superficie de la radiación cósmica y contiene gases y elementos esenciales para la vida.",
      incorrect_answers: [
        "La atmósfera no tiene influencia sobre la temperatura.",
        "Los planetas sin atmósfera son los más habitables."
      ]
    },
    {
      question: "¿Qué es un planeta 'rocoso'?",
      answer: "Un planeta con superficie sólida.",
      detailed_answer: "Un planeta rocoso tiene una superficie sólida, en contraste con los gigantes gaseosos. Estos planetas suelen tener condiciones que podrían permitir la existencia de vida.",
      incorrect_answers: [
        "Un exoplaneta que cuenta con profundas capas de helio, hidrógeno, rocas, hielo u océanos líquidos.",
        "Un exoplaneta que tiene la masa diez veces mayor que la tierra."
      ]
    },
    {
      question: "¿Qué es la 'biosfera' en un planeta?",
      answer: "Es la región donde se encuentra la vida, incluyendo la superficie y la atmósfera.",
      detailed_answer: "La biosfera comprende todas las zonas de un planeta donde se encuentra vida, incluyendo su superficie, océanos y atmósfera. Es un sistema complejo que interactúa con otros sistemas planetarios.",
      incorrect_answers: [
        "La biosfera es todo lo que está vivo y su fuente primaria de energía es la eólica.",
        "La biosfera se refiere al núcleo del planeta."
      ]
    },
        {
          question: "¿Qué técnicas se utilizan para detectar exoplanetas?",
          answer: "El método de tránsito y la velocidad radial.",
          detailed_answer: "Las técnicas más utilizadas para detectar exoplanetas son el método de tránsito, que observa la disminución del brillo de una estrella cuando un planeta pasa frente a ella, y el método de velocidad radial, que mide los cambios en la luz de la estrella debido a la gravedad del planeta.",
          incorrect_answers: [
            "La observación directa de la superficie del planeta.",
            "El análisis de las ondas sonoras del planeta."
          ]
        },
        {
          question: "¿Cuántos exoplanetas se han descubierto hasta ahora?",
          answer: "Miles de exoplanetas han sido confirmados hasta la fecha.",
          detailed_answer: "Desde que se confirmaron los primeros exoplanetas en 1992, miles han sido descubiertos, gracias a misiones como Kepler y TESS. A medida que avanza la tecnología, este número sigue aumentando.",
          incorrect_answers: [
            "Solo cien exoplanetas fueron descubiertos y confirmados.",
            "Más de un millón."
          ]
        },
        {
          question: "¿Qué es la 'zona habitable' de una estrella?",
          answer: "Es el rango de distancias donde un exoplaneta podría tener agua líquida.",
          detailed_answer: "La 'zona habitable' es el rango de distancias alrededor de una estrella donde las condiciones permiten que el agua líquida exista en la superficie de un exoplaneta. Este concepto es crucial en la búsqueda de vida.",
          incorrect_answers: [
            "Es la región donde la gravedad de la estrella es más fuerte.",
            "Es el área donde solo se pueden encontrar planetas gaseosos."
          ]
        },
        {
          question: "¿Qué es un exoplaneta 'supertierra'?",
          answer: "Es un tipo de exoplaneta más grande que la Tierra pero más pequeño que Neptuno.",
          detailed_answer: "Las 'supertierras' son exoplanetas que tienen un tamaño mayor que el de la Tierra pero menor que el de Neptuno. Estos planetas pueden tener condiciones variadas y se consideran interesantes en la búsqueda de vida.",
          incorrect_answers: [
            "Un exoplaneta que es más pequeño que la Tierra.",
            "Un planeta que siempre está en una órbita muy cercana a su estrella y se encuentra hecho mayormente de gas."
          ]
        },
        {
          question: "¿Por qué es importante estudiar la atmósfera de los exoplanetas?",
          answer: "La atmósfera puede revelar la posibilidad de vida y la composición química del planeta.",
          detailed_answer: "Estudiar la atmósfera de los exoplanetas es fundamental porque puede proporcionar información sobre su potencial para albergar vida. Gases como el oxígeno y el metano son indicadores importantes en este análisis.",
          incorrect_answers: [
            "La atmósfera no tiene relación con la habitabilidad.",
            "Solo se analiza la superficie del planeta y no la atmósfera."
          ]
        },
        {
          question: "¿Qué son los 'exoplanetas vagabundos'?",
          answer: "Son planetas que no orbitan ninguna estrella y flotan libremente en el espacio.",
          detailed_answer: "Los 'exoplanetas vagabundos' son aquellos que han sido expulsados de su sistema planetario y no orbitan ninguna estrella. Estos planetas son intrigantes porque podrían tener condiciones muy diferentes a los planetas que orbitan estrellas.",
          incorrect_answers: [
            "Son planetas que orbitan estrellas muy lejanas.",
            "Son planetas que no fueron observados ni explorados."
          ]
        },
        {
          question: "¿Qué es la 'método de microlente gravitacional'?",
          answer: "Es una técnica que utiliza la gravedad de una estrella para detectar exoplanetas.",
          detailed_answer: "La 'método de microlente gravitacional' implica el uso de la gravedad de una estrella para amplificar la luz de un objeto distante. Esto puede revelar la presencia de un exoplaneta al observar los cambios en la luminosidad.",
          incorrect_answers: [
            "Es una técnica que solo se utiliza para observar estrellas y no planetas.",
            "Es un método basado en la medición de ondas sonoras."
          ]
        },
//15 y hasta abajo hay 20
{
  question: "¿Qué tipo de estrella es más común entre los sistemas con exoplanetas?",
  answer: "Las estrellas de tipo M.",
  detailed_answer: "Las estrellas de tipo M, o enanas rojas, son las más comunes en el universo y también son las anfitrionas de muchos exoplanetas. Son más pequeñas, frías y emiten menos luz que estrellas como el Sol.",
  incorrect_answers: [
      "Las estrellas de tipo O.",
      "Las estrellas de tipo A."
  ]
},
{
  question: "¿Qué es una 'Super Júpiter'?",
  answer: "Es un exoplaneta que tiene una masa significativamente mayor que la de Júpiter.",
  detailed_answer: "Una 'Super Júpiter' es un tipo de exoplaneta gigante gaseoso con una masa mucho mayor que la de Júpiter. Aunque su tamaño puede no ser proporcionalmente mayor, su gravedad y composición son similares a las de los gigantes gaseosos.",
  incorrect_answers: [
      "Es un planeta más pequeño que Júpiter pero más denso.",
      "Es un tipo de planeta terrestre con un campo magnético muy fuerte."
  ]
},
{
  question: "¿Qué es un 'exoplaneta errante'?",
  answer: "Es un planeta que no orbita ninguna estrella.",
  detailed_answer: "Un 'exoplaneta errante' es un planeta que ha sido expulsado de su sistema estelar o nunca ha estado ligado gravitacionalmente a una estrella. Flotan libremente por el espacio sin una estrella anfitriona.",
  incorrect_answers: [
      "Es un planeta que orbita alrededor de varias estrellas.",
      "Es un planeta que cambia de órbita constantemente."
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
  question: "¿Qué es el 'método de astrometría' para detectar exoplanetas?",
  answer: "Es una técnica que mide los pequeños movimientos de una estrella en el cielo.",
  detailed_answer: "El 'método de astrometría' consiste en medir las pequeñas desviaciones en la posición de una estrella en el cielo, causadas por la atracción gravitacional de un exoplaneta. Si un planeta grande está orbitando la estrella, puede provocar que esta se 'bambolee' ligeramente.",
  incorrect_answers: [
      "Es un método que detecta exoplanetas midiendo su brillo.",
      "Es una técnica que solo se utiliza para detectar lunas de exoplanetas."
  ]
},
{
  question: "¿Qué significa 'orbital excentricidad' en un exoplaneta?",
  answer: "Es una medida de cuán elíptica o circular es la órbita de un exoplaneta.",
  detailed_answer: "La 'orbital excentricidad' describe la forma de la órbita de un exoplaneta. Una excentricidad de 0 indica una órbita circular, mientras que valores cercanos a 1 indican una órbita muy elíptica.",
  incorrect_answers: [
      "Es una medida del tamaño de un exoplaneta.",
      "Es una forma de clasificar la composición atmosférica de un exoplaneta."
  ]
}

  ];

  export default exoplanetQuestions;
  