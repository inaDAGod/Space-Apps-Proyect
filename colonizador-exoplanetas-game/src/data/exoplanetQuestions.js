const exoplanetQuestions = [
    {
      question: "¿Qué es un exoplaneta?",
      answer: "Un planeta que orbita una estrella fuera de nuestro sistema solar.",
      detailed_answer: "Un exoplaneta es un planeta que orbita una estrella fuera de nuestro sistema solar. Estos planetas son importantes para la búsqueda de vida fuera de la Tierra.",
      incorrect_answers: [
        "Un planeta que orbita alrededor de otro planeta, como una luna, y no se considera un exoplaneta.",
        "Una estrella cercana a la Tierra que no orbita ningún planeta.                    "
      ]
    },
    {
      question: "¿Qué factores determinan si un exoplaneta es habitable?",
      answer: "La distancia a su estrella, agua, atmósfera y temperatura son factores clave.",
      detailed_answer: "Los factores que determinan la habitabilidad de un exoplaneta incluyen la distancia a su estrella, que debe permitir condiciones para agua líquida; la presencia de agua, que es esencial para la vida; una atmósfera adecuada que pueda retener calor y proteger contra la radiación; y temperaturas que no sean extremas.",
      incorrect_answers: [
        "La composición química del núcleo del planeta, que no tiene un impacto directo en la habitabilidad.",
        "La cantidad de lunas que tiene, que no afecta la capacidad del planeta para albergar vida.     "
      ]
    },
    {
      question: "¿Por qué es importante el agua líquida para la habitabilidad?",
      answer: "Es fundamental para la vida, ya que es un solvente que permite procesos biológicos.",
      detailed_answer: "El agua líquida es fundamental para la vida, ya que actúa como un solvente que facilita reacciones químicas en organismos. Sin agua líquida, los procesos biológicos no podrían ocurrir.",
      incorrect_answers: [
        "Es un recurso que ayuda a regular la temperatura del planeta, pero no es la única razón para su importancia.",
        "Es la fuente principal de energía solar, lo cual no es correcto, ya que la energía solar proviene del Sol. "
      ]
    },
    {
      question: "¿Cómo influye el tamaño de un exoplaneta en su habitabilidad?",
      answer: "El tamaño determina su capacidad para mantener una atmósfera adecuada y estable.",
      detailed_answer: "El tamaño de un exoplaneta afecta su gravedad y, por ende, su capacidad para retener una atmósfera. Un exoplaneta pequeño puede no mantener una atmósfera adecuada, mientras que uno muy grande puede tener condiciones extremas que no permitan la vida.",
      incorrect_answers: [
        "Un planeta más grande siempre tiene más agua, lo cual no necesariamente es cierto.           ",
        "Los planetas pequeños son siempre más fríos, pero esto depende de otros factores como la distancia a su estrella."
      ]
    },
    {
      question: "¿Qué papel juega la atmósfera en la habitabilidad de un exoplaneta?",
      answer: "La atmósfera regula temperatura y permite la existencia de vida al contener gases necesarios.",
      detailed_answer: "La atmósfera es crucial para la habitabilidad, ya que regula la temperatura a través del efecto invernadero, protege a la superficie de la radiación cósmica y contiene elementos esenciales para la vida.",
      incorrect_answers: [
        "La atmósfera no tiene influencia sobre la temperatura, lo que es falso, ya que sin ella, los planetas serían inhóspitos.",
        "Los planetas sin atmósfera son los más habitables, pero en realidad, necesitan una atmósfera para sostener la vida. "
      ]
    },
    {
      question: "¿Qué es un planeta 'rocoso'?",
      answer: "Un planeta con superficie sólida que puede albergar condiciones para la vida.",
      detailed_answer: "Un planeta rocoso tiene una superficie sólida, en contraste con los gigantes gaseosos. Estos planetas suelen tener condiciones que podrían permitir la existencia de vida.",
      incorrect_answers: [
        "Un planeta hecho completamente de gas, lo cual no tiene las condiciones necesarias para la vida. ",
        "Un planeta que nunca orbita una estrella, lo que lo hace un objeto no planetario.        "
      ]
    },
    {
      question: "¿Qué es la 'biosfera' en un planeta?",
      answer: "Es la región donde se encuentra la vida, incluyendo la superficie y la atmósfera.",
      detailed_answer: "La biosfera comprende todas las zonas de un planeta donde se encuentra vida, incluyendo su superficie, océanos y atmósfera. Es un sistema complejo que interactúa con otros sistemas planetarios.",
      incorrect_answers: [
        "La biosfera es solo el océano de un planeta, pero en realidad incluye más que solo agua.    ",
        "La biosfera se refiere al núcleo del planeta, lo cual es incorrecto, ya que se relaciona con la vida en la superficie."
      ]
    },
        {
          question: "¿Qué técnicas se utilizan para detectar exoplanetas?",
          answer: "Las técnicas más comunes son el método de tránsito y la velocidad radial.",
          detailed_answer: "Las técnicas más utilizadas para detectar exoplanetas son el método de tránsito, que observa la disminución del brillo de una estrella cuando un planeta pasa frente a ella, y el método de velocidad radial, que mide los cambios en la luz de la estrella debido a la gravedad del planeta.",
          incorrect_answers: [
            "La observación directa de la superficie del planeta, que es casi imposible debido a la distancia.",
            "El análisis de las ondas sonoras del planeta, lo cual no es una técnica válida para exoplanetas. "
          ]
        },
        {
          question: "¿Cuántos exoplanetas se han descubierto hasta ahora?",
          answer: "Miles de exoplanetas han sido confirmados hasta la fecha.",
          detailed_answer: "Desde que se confirmaron los primeros exoplanetas en 1992, miles han sido descubiertos, gracias a misiones como Kepler y TESS. A medida que avanza la tecnología, este número sigue aumentando.",
          incorrect_answers: [
            "Solo un par de ellos han sido descubiertos, lo que no refleja la realidad de los descubrimientos recientes.",
            "Más de un millón, lo cual es una cifra exagerada y no precisa."
          ]
        },
        {
          question: "¿Qué es la 'zona habitable' de una estrella?",
          answer: "Es el rango de distancias donde un exoplaneta podría tener agua líquida.",
          detailed_answer: "La 'zona habitable' es el rango de distancias alrededor de una estrella donde las condiciones permiten que el agua líquida exista en la superficie de un exoplaneta. Este concepto es crucial en la búsqueda de vida.",
          incorrect_answers: [
            "Es la región donde la gravedad de la estrella es más fuerte, lo que no se relaciona directamente con la habitabilidad.",
            "Es el área donde solo se pueden encontrar planetas gaseosos, lo cual es incorrecto."
          ]
        },
        {
          question: "¿Qué es un exoplaneta 'supertierra'?",
          answer: "Es un tipo de exoplaneta más grande que la Tierra pero más pequeño que Neptuno.",
          detailed_answer: "Las 'supertierras' son exoplanetas que tienen un tamaño mayor que el de la Tierra pero menor que el de Neptuno. Estos planetas pueden tener condiciones variadas y se consideran interesantes en la búsqueda de vida.",
          incorrect_answers: [
            "Un exoplaneta que es más pequeño que la Tierra, lo cual es incorrecto.",
            "Un planeta que siempre está en una órbita muy cercana a su estrella, lo que no define a las supertierras."
          ]
        },
        {
          question: "¿Por qué es importante estudiar la atmósfera de los exoplanetas?",
          answer: "La atmósfera puede revelar la posibilidad de vida y la composición química del planeta.",
          detailed_answer: "Estudiar la atmósfera de los exoplanetas es fundamental porque puede proporcionar información sobre su potencial para albergar vida. Gases como el oxígeno y el metano son indicadores importantes en este análisis.",
          incorrect_answers: [
            "La atmósfera no tiene relación con la habitabilidad, lo cual es incorrecto.",
            "Solo se analiza la superficie del planeta y no la atmósfera, lo que no es una práctica adecuada."
          ]
        },
        {
          question: "¿Qué son los 'exoplanetas vagabundos'?",
          answer: "Son planetas que no orbitan ninguna estrella y flotan libremente en el espacio.",
          detailed_answer: "Los 'exoplanetas vagabundos' son aquellos que han sido expulsados de su sistema planetario y no orbitan ninguna estrella. Estos planetas son intrigantes porque podrían tener condiciones muy diferentes a los planetas que orbitan estrellas.",
          incorrect_answers: [
            "Son planetas que orbitan estrellas muy lejanas, lo cual no es correcto.",
            "Son planetas que solo existen en teorías, pero no han sido observados, lo que es falso."
          ]
        },
        {
          question: "¿Qué es la 'método de microlente gravitacional'?",
          answer: "Es una técnica que utiliza la gravedad de una estrella para detectar exoplanetas.",
          detailed_answer: "La 'método de microlente gravitacional' implica el uso de la gravedad de una estrella para amplificar la luz de un objeto distante. Esto puede revelar la presencia de un exoplaneta al observar los cambios en la luminosidad.",
          incorrect_answers: [
            "Es una técnica que solo se utiliza para observar estrellas y no planetas, lo cual es incorrecto.",
            "Es un método basado en la medición de ondas sonoras, que no es aplicable aquí."
          ]
        }


  ];
  
  
  






  export default exoplanetQuestions;
  