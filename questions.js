/**
 * Banco de preguntas para el Quiz interactivo de Bioquímica.
 * 
 * NOTA PARA EL USUARIO:
 * Asegúrate de que el nombre del array sea EXACTAMENTE 'quizQuestions'.
 * 
 * Cada pregunta debe tener este formato:
 * - id: número identificador
 * - pregunta: texto de la pregunta
 * - opciones: array con las opciones
 * - respuestaCorrecta: letra de la opción correcta ('a', 'b', 'c' o 'd')
 */
const quizQuestions = [
  {
    id: 1,
    pregunta: "¿Qué es el genoma de un organismo?",
    opciones: [
      "El conjunto de proteínas que expresa.",
      "Todo el material genético de un organismo, constituido principalmente por ADN.",
      "El conjunto de ARN mensajero.",
      "El estudio de las interacciones ambientales."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 2,
    pregunta: "Según el texto, ¿qué es la genómica?",
    opciones: [
      "La ciencia que estudia las proteínas.",
      "Una rama de la química.",
      "La ciencia que se enfoca al estudio de los genomas, genes, sus funciones e interacciones.",
      "La técnica para crear animales transgénicos."
    ],
    respuestaCorrecta: "c"
  },
  {
    id: 3,
    pregunta: "¿En qué se divide la genómica según su campo de estudio?",
    opciones: [
      "Genómica molecular, celular y de organismos.",
      "Genómica estructural, funcional y comparativa.",
      "Genómica simple, compleja y mixta.",
      "Genómica física, química y biológica."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 4,
    pregunta: "¿Cuál es el enfoque principal de la genómica estructural?",
    opciones: [
      "El estudio de la función de los genes.",
      "La identificación y estudio de variantes estructurales de secuencia de los genomas.",
      "La comparación de genomas entre especies.",
      "La creación de modelos computacionales de proteínas."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 5,
    pregunta: "¿Qué herramientas utiliza la genómica estructural para estudiar estructuras tridimensionales?",
    opciones: [
      "Solo microscopía electrónica.",
      "Técnicas experimentales y simulaciones por computadora (in silico).",
      "Análisis de ARN mensajero.",
      "Técnicas de hibridación."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 6,
    pregunta: "¿Cuál es el objetivo principal de la genómica funcional?",
    opciones: [
      "Secuenciar el ADN.",
      "Llenar el hueco entre el conocimiento de las secuencias de un gen y su función.",
      "Comparar el genoma del humano con el del ratón.",
      "Crear organismos transgénicos."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 7,
    pregunta: "¿Qué busca expandir la genómica funcional en la investigación biológica?",
    opciones: [
      "Del estudio de genes individuales al estudio de todos los genes de una célula al mismo tiempo.",
      "Del estudio de las proteínas al estudio de los lípidos.",
      "Del estudio de una especie al estudio de toda la biosfera.",
      "Del estudio del núcleo al estudio del citoplasma."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 8,
    pregunta: "¿Qué estudia la genómica comparativa?",
    opciones: [
      "El estudio comparativo estructural y funcional del genoma de los organismos.",
      "La estructura de las proteínas únicamente.",
      "Las mutaciones de un solo nucleótido.",
      "El transcriptoma celular."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 9,
    pregunta: "¿Qué término se usa para referirse a la conservación del orden de los genes entre segmentos cromosómicos?",
    opciones: [
      "Homología.",
      "Sintenia.",
      "Ortología.",
      "Transgénesis."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 10,
    pregunta: "¿Cuál es la diferencia entre ortólogos y parálogos?",
    opciones: [
      "No hay diferencia.",
      "Los ortólogos son genes de una misma especie, los parálogos de distintas.",
      "Los ortólogos son homólogos verdaderos; los parálogos surgen de duplicaciones tras una divergencia.",
      "Los parálogos son más antiguos que los ortólogos."
    ],
    respuestaCorrecta: "c"
  },
  {
    id: 11,
    pregunta: "¿Qué es BLAST?",
    opciones: [
      "Una herramienta para secuenciar genomas.",
      "Un programa para realizar búsquedas de similitud en bases de datos de secuencias.",
      "Una técnica de electroforesis.",
      "Un tipo de gen reportero."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 12,
    pregunta: "¿Cuál es la función principal de los genes reporteros?",
    opciones: [
      "Amplificar ADN.",
      "Codificar proteínas con propiedades fenotípicas distintas al sistema estudiado para su monitoreo.",
      "Modificar el ADN del organismo.",
      "Destruir ADN dañado."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 13,
    pregunta: "¿Qué es la GFP?",
    opciones: [
      "Gen Factorial Proteico.",
      "Proteína Verde Fluorescente.",
      "Gen de Función Proteómica.",
      "Gen de Fusión de Proteínas."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 14,
    pregunta: "¿Qué permite el uso de proteínas reporteras fluorescentes?",
    opciones: [
      "Vigilancia altamente sensible y no destructiva de la expresión génica.",
      "La eliminación de genes.",
      "La creación de nuevos cromosomas.",
      "La purificación de proteínas."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 15,
    pregunta: "¿Qué define a un organismo transgénico o Genéticamente Modificado (OGM)?",
    opciones: [
      "Un organismo que ha evolucionado naturalmente.",
      "Un organismo al que se le han agregado genes por ingeniería genética.",
      "Un organismo que ha sido clonado.",
      "Un organismo que solo contiene ADN de su propia especie."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 16,
    pregunta: "¿Cuál es un objetivo común en la creación de cultivos transgénicos?",
    opciones: [
      "Reducir la productividad.",
      "Aumentar la resistencia a plagas y calidad nutricional.",
      "Eliminar la variabilidad genética.",
      "Impedir la reproducción sexual."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 17,
    pregunta: "¿Puede modificarse el genoma de un animal insertando genes de otras especies?",
    opciones: [
      "No, es imposible.",
      "Sí, es posible.",
      "Solo si son especies muy cercanas.",
      "Solo en laboratorios cerrados."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 18,
    pregunta: "¿Qué es la transcripción?",
    opciones: [
      "El proceso de replicación del ADN.",
      "El proceso de expresión génica donde el ADN se transfiere a ARN.",
      "La síntesis de proteínas a partir de ARN.",
      "La traducción del ARN a ADN."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 19,
    pregunta: "¿Cuál es el producto inmediato de la transcripción?",
    opciones: [
      "Proteína.",
      "ADN.",
      "ARN mensajero (ARNm).",
      "Lípido."
    ],
    respuestaCorrecta: "c"
  },
  {
    id: 20,
    pregunta: "¿Qué enzima lleva a cabo la síntesis de ARN a partir de un molde de ADN?",
    opciones: [
      "ADN polimerasa.",
      "ARN polimerasa dependiente de ADN.",
      "Transcriptasa reversa.",
      "Ligasa."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 21,
    pregunta: "¿Qué es el transcriptoma?",
    opciones: [
      "El conjunto de todos los genes del genoma.",
      "El conjunto de ARNs de todos los genes.",
      "El conjunto de todas las proteínas.",
      "El conjunto de todos los metabolitos."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 22,
    pregunta: "¿Qué técnica es útil para el análisis de expresión de ARNm?",
    opciones: [
      "PCR tiempo real (RT-PCR).",
      "Secuenciación masiva.",
      "Western blot.",
      "Cromatografía."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 23,
    pregunta: "En la PCR, ¿qué ocurre en la etapa de desnaturalización?",
    opciones: [
      "Se sintetizan nuevas cadenas.",
      "Se separan las cadenas de ADN mediante temperatura.",
      "Los iniciadores se hibridan.",
      "Se emite fluorescencia."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 24,
    pregunta: "¿En qué etapa de la PCR los iniciadores se hibridan?",
    opciones: [
      "Desnaturalización.",
      "Alineamiento.",
      "Extensión.",
      "Ciclo final."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 25,
    pregunta: "¿Qué mide la PCR tiempo real cuantitativa?",
    opciones: [
      "La longitud del ADN.",
      "La emisión continua de señales fluorescentes durante los ciclos.",
      "La secuencia exacta de nucleótidos.",
      "La masa del ADN."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 26,
    pregunta: "¿Cómo funciona la sonda en la PCR tiempo real?",
    opciones: [
      "Cambia de color con la temperatura.",
      "Emite fluorescencia al ser desplazada por la ADN polimerasa.",
      "Inhibe la amplificación.",
      "Se une permanentemente al ADN."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 27,
    pregunta: "¿Qué es el 'quencher' en la PCR tiempo real?",
    opciones: [
      "Un fluoróforo.",
      "Una molécula que inhibe la fluorescencia.",
      "Un catalizador de reacción.",
      "Un tipo de iniciador."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 28,
    pregunta: "¿Qué se requiere realizar en paralelo para que la cuantificación por PCR sea válida?",
    opciones: [
      "Una curva patrón.",
      "Una segunda PCR.",
      "Una electroforesis.",
      "Una secuenciación."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 29,
    pregunta: "¿Qué permite la técnica de RT-PCR tiempo real?",
    opciones: [
      "Solo ver el ADN amplificado al final.",
      "La cuantificación sensible de transcritos y pequeños cambios en la expresión génica.",
      "La creación de genomas nuevos.",
      "La eliminación de ADN."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 30,
    pregunta: "¿Qué es un microarreglo (DNA chip)?",
    opciones: [
      "Un chip electrónico.",
      "Soporte con múltiples fragmentos de ADNc ordenados según su función.",
      "Un método de secuenciación.",
      "Un tipo de proteína."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 31,
    pregunta: "¿Qué permite hacer el microarreglo?",
    opciones: [
      "Comparar el transcriptoma de un tejido problema con un tejido control.",
      "Aislar el ADN.",
      "Medir la concentración de proteínas.",
      "Clonar genes."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 32,
    pregunta: "¿Qué significa 'differential display' en el contexto de microarreglos?",
    opciones: [
      "El uso de pantallas táctiles.",
      "La comparación del transcriptoma entre dos condiciones (ej. tejido problema vs. control).",
      "La visualización de proteínas.",
      "El análisis de la estructura del genoma."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 33,
    pregunta: "¿Qué color emite Cy3 en los microarreglos?",
    opciones: [
      "Rojo.",
      "Amarillo.",
      "Verde.",
      "Azul."
    ],
    respuestaCorrecta: "c"
  },
  {
    id: 34,
    pregunta: "¿Qué color emite Cy5 en los microarreglos?",
    opciones: [
      "Rojo (naranja-rojo).",
      "Amarillo.",
      "Verde.",
      "Azul."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 35,
    pregunta: "¿Qué indica el color verde en un análisis de microarreglo?",
    opciones: [
      "Mayor expresión en la condición problema.",
      "Mayor expresión en la condición control.",
      "Hibridación similar en ambos tejidos.",
      "Ausencia de expresión."
    ],
    respuestaCorrecta: "c"
  },
  {
    id: 36,
    pregunta: "¿Qué es el proteoma?",
    opciones: [
      "El conjunto de genes de un genoma.",
      "El conjunto de proteínas de un genoma, célula o tejido.",
      "El conjunto de ARN mensajero.",
      "La técnica de secuenciación de masas."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 37,
    pregunta: "¿Cuál es el nombre de la disciplina que estudia el proteoma?",
    opciones: [
      "Genómica.",
      "Transcriptómica.",
      "Proteómica.",
      "Metabolómica."
    ],
    respuestaCorrecta: "c"
  },
  {
    id: 38,
    pregunta: "¿Qué factores fueron decisivos para el desarrollo de la proteómica?",
    opciones: [
      "La secuenciación de genomas, espectrometría de masas y electroforesis 2D.",
      "La invención del microscopio óptico.",
      "El descubrimiento del ADN.",
      "La invención de la PCR."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 39,
    pregunta: "A diferencia del genoma, el proteoma es...",
    opciones: [
      "Invariable.",
      "Dinámico y cambiante en respuesta a señales ambientales.",
      "Estático.",
      "Indestructible."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 40,
    pregunta: "¿Qué estudia la proteómica?",
    opciones: [
      "Solo el ADN.",
      "La estructura y función de las proteínas de un tipo celular globalmente.",
      "Solo la secuencia de ARN.",
      "Los lípidos de la membrana."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 41,
    pregunta: "¿Qué método surgió en los noventa como una técnica poderosa para el análisis de proteínas?",
    opciones: [
      "Electroforesis en gel.",
      "Espectrometría de masas.",
      "Cristalografía de rayos X.",
      "Hibridación in situ."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 42,
    pregunta: "¿Cuáles son los dos tipos de proteómica mencionados?",
    opciones: [
      "Estructural y funcional.",
      "De expresión y del mapa celular.",
      "Simple y compleja.",
      "Dinámica y estática."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 43,
    pregunta: "¿Qué estudia la proteómica de expresión?",
    opciones: [
      "El estudio cuantitativo de la expresión de proteínas entre muestras.",
      "La localización subcelular de las proteínas.",
      "Solo la estructura de una proteína.",
      "La síntesis de ADN."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 44,
    pregunta: "¿Qué estudia la proteómica del mapa celular (o estructural)?",
    opciones: [
      "La localización subcelular de proteínas e interacciones proteína-proteína.",
      "Solo la cantidad de proteínas.",
      "La secuencia de ADN.",
      "El peso molecular del ADN."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 45,
    pregunta: "¿Cuál es la tecnología más utilizada para la separación de proteínas?",
    opciones: [
      "PCR.",
      "Electroforesis en geles de poliacrilamida.",
      "Espectrometría de masas.",
      "Centrifugación diferencial."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 46,
    pregunta: "¿En qué se basa la separación de proteínas en electroforesis?",
    opciones: [
      "En su punto isoeléctrico (carga) y su peso molecular.",
      "En su color.",
      "En su velocidad de replicación.",
      "En su solubilidad en lípidos."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 47,
    pregunta: "¿Qué es el isoelectroenfoque (IEF)?",
    opciones: [
      "Una técnica de separación por peso molecular.",
      "Una técnica que separa proteínas por su punto isoeléctrico usando gradiente de pH.",
      "Una técnica de amplificación de ADN.",
      "Un tipo de espectrometría."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 48,
    pregunta: "¿Qué separa la electroforesis SDS-PAGE (segunda dimensión)?",
    opciones: [
      "Proteínas según su carga.",
      "Proteínas según su peso molecular.",
      "ADN según su longitud.",
      "ARN según su función."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 49,
    pregunta: "¿Qué ventaja ofrece el uso de gradientes de pH inmovilizados (IPGs) en 2D-PAGE?",
    opciones: [
      "Eliminan la inestabilidad de los gradientes y mejoran la reproducibilidad.",
      "Aumentan el peso de las proteínas.",
      "Permiten el uso de agua.",
      "No tienen ventajas."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 50,
    pregunta: "¿Cuál es una limitación de la técnica 2D-PAGE?",
    opciones: [
      "Es muy rápida y barata.",
      "Es laboriosa, difícil de automatizar y limitada en el tipo de proteínas que resuelve.",
      "No requiere equipo especializado.",
      "Funciona solo con ADN."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 51,
    pregunta: "¿Qué técnica se utiliza para digerir proteínas antes de analizarlas por espectrometría de masas?",
    opciones: [
      "Tripsina.",
      "Pepsina.",
      "ADN polimerasa.",
      "Ligasa."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 52,
    pregunta: "¿Qué mide un espectrómetro de masas?",
    opciones: [
      "El color de la proteína.",
      "La relación masa/carga (m/z) de los iones.",
      "La actividad enzimática.",
      "La temperatura de fusión del ADN."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 53,
    pregunta: "¿Por qué se deben convertir las proteínas en péptidos para la espectrometría de masas?",
    opciones: [
      "Porque la masa de una proteína completa no es suficiente para identificarla.",
      "Porque las proteínas son muy pequeñas.",
      "Porque las proteínas no pueden ser ionizadas.",
      "Porque el espectrómetro no puede ver proteínas grandes."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 54,
    pregunta: "¿Qué es MALDI?",
    opciones: [
      "Un tipo de electroforesis.",
      "Técnica de desorción con láser asistida por matriz (ionización).",
      "Un gen reportero.",
      "Un software de bioinformática."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 55,
    pregunta: "¿Qué técnica de ionización se utiliza frecuentemente en espectrometría de masas?",
    opciones: [
      "ESI (electrospray).",
      "PCR.",
      "Microarreglo.",
      "Sintenia."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 56,
    pregunta: "¿Qué componente mide los iones en un espectrómetro de masas?",
    opciones: [
      "Fuente de iones.",
      "Analizador de masas.",
      "Detector.",
      "Láser."
    ],
    respuestaCorrecta: "c"
  },
  {
    id: 57,
    pregunta: "¿Qué estudia la genómica estructural?",
    opciones: [
      "Genes individuales.",
      "Variantes estructurales de secuencia de los genomas.",
      "ARN mensajero.",
      "Proteínas."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 58,
    pregunta: "¿Cuál es el principal componente del genoma?",
    opciones: [
      "ARN.",
      "Proteínas.",
      "Ácido desoxirribonucleico (ADN).",
      "Lípidos."
    ],
    respuestaCorrecta: "c"
  },
  {
    id: 59,
    pregunta: "¿En qué rango de tamaño se encuentran generalmente los microarreglos de ADN?",
    opciones: [
      "100-500 fragmentos por cm².",
      "9,000-40,000 fragmentos de ADNc por cm².",
      "1-10 fragmentos por cm².",
      "Millones de fragmentos por metro cuadrado."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 60,
    pregunta: "¿Qué significa 'in silico'?",
    opciones: [
      "Simulaciones por computadora.",
      "Experimentos en tubos de ensayo.",
      "Análisis in vivo.",
      "Análisis in situ."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 61,
    pregunta: "¿Qué es la sintenia?",
    opciones: [
      "La pérdida de genes.",
      "Conservación del orden de los genes entre segmentos cromosómicos.",
      "El proceso de replicación.",
      "Un tipo de mutación."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 62,
    pregunta: "¿La genómica funcional es necesariamente hipótesis-dependiente?",
    opciones: [
      "Sí, siempre.",
      "No necesariamente, puede ofrecer información global.",
      "Solo en bacterias.",
      "Solo en humanos."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 63,
    pregunta: "¿Qué información puede obtenerse mediante la genómica funcional?",
    opciones: [
      "Expresión de ARNm y función de proteínas.",
      "Solo la secuencia de ADN.",
      "La edad del organismo.",
      "El comportamiento social."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 64,
    pregunta: "¿La proteómica es fundamental para qué era?",
    opciones: [
      "Era pre-genómica.",
      "Era post-genómica.",
      "Era de los fósiles.",
      "Era de la microbiología."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 65,
    pregunta: "¿Qué moléculas inhiben la fluorescencia en las sondas de PCR?",
    opciones: [
      "Quencher.",
      "Primer.",
      "Polimerasa.",
      "ADN."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 66,
    pregunta: "¿Qué se necesita para realizar una PCR?",
    opciones: [
      "Un par de oligonucleótidos iniciadores.",
      "Una proteína verde.",
      "Un microarreglo.",
      "Un ratón transgénico."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 67,
    pregunta: "¿Qué técnica permite el monitoreo de cambios temporales en la expresión génica?",
    opciones: [
      "PCR en tiempo real.",
      "Reporteros basados en luciferasa.",
      "Microarreglos estáticos.",
      "Electroforesis en una dimensión."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 68,
    pregunta: "¿Qué tipo de células usan las proteínas reporteras fluorescentes para su estudio?",
    opciones: [
      "Células madre.",
      "Células muertas.",
      "Bacterias secas.",
      "Virus."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 69,
    pregunta: "¿Cómo se llama el proceso donde el ADN se modifica en animales?",
    opciones: [
      "Transgénesis.",
      "Replicación.",
      "Transcripción.",
      "Traducción."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 70,
    pregunta: "¿Qué base nitrogenada contiene el ARN en lugar de timina?",
    opciones: [
      "Adenina.",
      "Guanina.",
      "Citosina.",
      "Uracilo."
    ],
    respuestaCorrecta: "d"
  },
  {
    id: 71,
    pregunta: "¿Cuál es el tamaño promedio de un gen humano según el texto?",
    opciones: [
      "1 Kb.",
      "27 Kb.",
      "100 Kb.",
      "1 Mb."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 72,
    pregunta: "¿Qué fragmentos pequeños puede amplificar la RT-PCR tiempo real?",
    opciones: [
      "60 pb.",
      "1000 pb.",
      "5000 pb.",
      "10000 pb."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 73,
    pregunta: "¿Qué se requiere para identificar proteínas de forma global?",
    opciones: [
      "Bioinformática.",
      "Espectrometría de masas.",
      "Electroforesis 2D.",
      "Todas las anteriores."
    ],
    respuestaCorrecta: "d"
  },
  {
    id: 74,
    pregunta: "¿Qué técnica es útil para la caracterización de modificaciones post-traduccionales?",
    opciones: [
      "Espectrometría de masas.",
      "PCR.",
      "Northern blot.",
      "Secuenciación de ADN."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 75,
    pregunta: "¿Qué es un 'locus'?",
    opciones: [
      "La secuencia completa del ADN.",
      "Regiones de genes ordenados que codifican para una función determinada.",
      "Un tipo de proteína.",
      "Una enzima."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 76,
    pregunta: "¿Qué es la espectrometría de masas en tándem?",
    opciones: [
      "Combinación de dos analizadores de masas diferentes.",
      "Una técnica de electroforesis.",
      "Un tipo de microarreglo.",
      "Una técnica de PCR."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 77,
    pregunta: "¿Qué aminoácidos determinan principalmente la carga neta de una proteína?",
    opciones: [
      "Ácido glutámico, aspártico, lisina, arginina e histidina.",
      "Glicina, alanina y valina.",
      "Cisteína y metionina.",
      "Fenilalanina y triptófano."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 78,
    pregunta: "¿Qué técnica permite determinar la expresión genética completa de un tejido?",
    opciones: [
      "PCR.",
      "Microarreglos.",
      "Clonación.",
      "Transgénesis."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 79,
    pregunta: "¿Qué se necesita para distinguir ortólogos de parálogos?",
    opciones: [
      "Métodos filogenéticos apropiados.",
      "Solo comparación de secuencias.",
      "Electroforesis.",
      "Nada, son lo mismo."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 80,
    pregunta: "¿Cómo se conoce también a la genómica funcional?",
    opciones: [
      "Se relaciona con la proteómica.",
      "No tiene otro nombre.",
      "Se llama transcriptómica.",
      "Se llama metabolómica."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 81,
    pregunta: "¿Cómo se denomina al octámero de proteínas histonas rodeado por ADN?",
    opciones: [
      "Cromosoma.",
      "Nucleosoma.",
      "Ribosoma.",
      "Plásmido."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 82,
    pregunta: "¿A qué se refiere la estructura de 'cuentas de rosario' en el ADN?",
    opciones: [
      "A la secuencia de nucleótidos desnuda.",
      "Al espaciamiento de los nucleosomas a lo largo del ADN.",
      "A la estructura de una proteína.",
      "A la unión del ARN polimerasa."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 83,
    pregunta: "¿Qué sucede con la expresión génica cuando la cromatina está empaquetada estrechamente (conformación cerrada)?",
    opciones: [
      "Se activa inmediatamente.",
      "La expresión génica se reprime.",
      "El ADN se replica más rápido.",
      "Se produce ARN mensajero."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 84,
    pregunta: "¿Qué enzimas son responsables de modificar covalentemente las histonas para abrir la estructura de la cromatina?",
    opciones: [
      "ADN polimerasas.",
      "Histona-acetil-transferasas (HATs).",
      "Lipasas.",
      "Transcriptasas."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 85,
    pregunta: "¿Qué debe ocurrir para que el complejo de transcripción se ensamble e inicie la transcripción?",
    opciones: [
      "El ADN debe estar en una conformación 'abierta'.",
      "El ADN debe estar en una conformación 'cerrada'.",
      "Se deben eliminar las histonas permanentemente.",
      "El gen debe mutar."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 86,
    pregunta: "¿Qué regula la expresión génica en un tejido o estado de desarrollo específico?",
    opciones: [
      "Solo factores ambientales externos.",
      "Factores específicos que se unen al promotor del complejo de transcripción basal.",
      "El tamaño del genoma.",
      "La temperatura corporal."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 87,
    pregunta: "¿Qué estructura protege y condensa el ADN en un orden superior?",
    opciones: [
      "La cromatina.",
      "El citoplasma.",
      "La membrana nuclear.",
      "El nucleolo."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 88,
    pregunta: "¿Cuál es el papel de los factores específicos en la transcripción?",
    opciones: [
      "Destruir el ADN.",
      "Activar o reprimir la transcripción al unirse al promotor.",
      "Replicar el ADN.",
      "Transportar proteínas al núcleo."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 89,
    pregunta: "¿Qué sucede si la estructura de la cromatina permanece cerrada?",
    opciones: [
      "El complejo de transcripción no tiene acceso al promotor.",
      "La transcripción es altamente eficiente.",
      "Se liberan factores de crecimiento.",
      "La célula se divide rápidamente."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 90,
    pregunta: "¿Cómo se conoce a la forma de ADN cuando no está 'desnuda' y está organizada?",
    opciones: [
      "Cromatina.",
      "ARN.",
      "Proteína básica.",
      "Genoma mitocondrial."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 91,
    pregunta: "¿Qué alternativa se utiliza para estudiar los factores de transcripción implicados en la regulación génica?",
    opciones: [
      "El uso de genes reporteros.",
      "La eliminación total del genoma.",
      "El uso de microscopía de luz solamente.",
      "La cristalografía."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 92,
    pregunta: "¿Qué técnica permite separar elementos de respuesta específicos dentro de un promotor para ver sus efectos?",
    opciones: [
      "Mutagénesis sitio-dirigida.",
      "Centrifugación.",
      "Cromatografía de gases.",
      "Clonación simple."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 93,
    pregunta: "¿Qué determina la mutagénesis sitio-dirigida en un estudio de promotor?",
    opciones: [
      "Si los elementos específicos tienen efectos sobre la expresión de un gen reportero.",
      "El peso total de la célula.",
      "La secuencia de los lípidos.",
      "El color de la proteína reportera."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 94,
    pregunta: "En el estudio de El-Sankary et al. (2002), ¿qué se modificó en el promotor del CYP3A4?",
    opciones: [
      "Un sitio de unión a C/EBPα.",
      "La secuencia de la proteína final.",
      "El número de exones.",
      "El codón de inicio."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 95,
    pregunta: "¿Qué efecto causó la mutación en el sitio de unión a C/EBPα en el promotor del CYP3A4?",
    opciones: [
      "Aumento total de la respuesta.",
      "Disminución en la respuesta del gen reportero a los glucocorticoides.",
      "No tuvo efecto alguno.",
      "Aumento de la respuesta a la rifampicina."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 96,
    pregunta: "¿La mutación en el promotor del CYP3A4 afectó la respuesta a la rifampicina?",
    opciones: [
      "Sí, la eliminó.",
      "Sí, la aumentó.",
      "No, mostró evidencia de mecanismos separados.",
      "Solo en condiciones de alta temperatura."
    ],
    respuestaCorrecta: "c"
  },
  {
    id: 97,
    pregunta: "¿Qué demostró el experimento de El-Sankary et al. respecto a los glucocorticoides y la rifampicina?",
    opciones: [
      "Que actúan por el mismo mecanismo.",
      "Que actúan, al menos en parte, por mecanismos separados.",
      "Que no tienen efecto sobre el CYP3A4.",
      "Que son tóxicos en ambos casos."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 98,
    pregunta: "¿Qué mide un gen reportero en este contexto?",
    opciones: [
      "La expresión basal o la respuesta a exposición química.",
      "Solo la cantidad de ADN genómico.",
      "La estructura de la cromatina.",
      "La tasa de división celular."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 99,
    pregunta: "¿Qué permite la mutagénesis sitio-dirigida en los elementos de respuesta?",
    opciones: [
      "Identificar funciones específicas de secuencias reguladoras.",
      "Crear nuevos organismos.",
      "Eliminar el ADN no deseado.",
      "Medir la toxicidad."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 100,
    pregunta: "¿Cuál es el propósito principal de usar genes reporteros en toxicología genética?",
    opciones: [
      "Analizar cómo las sustancias químicas regulan la expresión génica.",
      "Fabricar proteínas de consumo.",
      "Limpiar el ADN.",
      "Observar células bajo el microscopio."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 101,
    pregunta: "¿Qué es el CYP3A4?",
    opciones: [
      "Un gen reportero.",
      "Una enzima del citocromo P450 importante en el metabolismo de fármacos.",
      "Una proteína histona.",
      "Un tipo de ARN."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 102,
    pregunta: "¿Por qué es importante estudiar la inducción del CYP3A4?",
    opciones: [
      "Porque define condiciones seguras para la polifarmacia.",
      "Porque cambia el color de la sangre.",
      "Porque ayuda a clonar animales.",
      "Porque cura enfermedades genéticas."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 103,
    pregunta: "¿Qué proporcionan los experimentos de inducción de CYP3A4 según el texto?",
    opciones: [
      "Información sobre las implicaciones de la exposición a compuestos co-administrados.",
      "La secuencia completa del genoma humano.",
      "Una cura para el cáncer.",
      "El peso molecular de todas las proteínas."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 104,
    pregunta: "¿Qué concepto se menciona en relación con la administración de múltiples fármacos?",
    opciones: [
      "Polifarmacia.",
      "Monoterapia.",
      "Vacunación.",
      "Terapia génica."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 105,
    pregunta: "¿Qué ayuda a definir el estudio de la inducción del CYP3A4?",
    opciones: [
      "Condiciones seguras para usar en la polifarmacia.",
      "El costo de los fármacos.",
      "La fecha de caducidad de los medicamentos.",
      "La preferencia del paciente."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 106,
    pregunta: "¿La exposición a una mezcla de fármacos puede alterar la expresión génica?",
    opciones: [
      "No, los fármacos no interactúan con el ADN.",
      "Sí, es una implicación importante a considerar.",
      "Solo si son dosis extremadamente altas.",
      "Solo en laboratorios."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 107,
    pregunta: "¿Qué clase de compuestos se mencionan como inductores en el estudio de El-Sankary?",
    opciones: [
      "Glucocorticoides y rifampicina.",
      "Lípidos y azúcares.",
      "Ácidos y bases fuertes.",
      "Proteínas y metales."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 108,
    pregunta: "¿Qué ocurre con la respuesta a los glucocorticoides al mutar el sitio C/EBPα?",
    opciones: [
      "Se mantiene igual.",
      "Disminuye.",
      "Se multiplica por diez.",
      "Desaparece la proteína histona."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 109,
    pregunta: "¿Qué tipo de estudio es el de El-Sankary et al.?",
    opciones: [
      "Un estudio de toxicología in silico.",
      "Un estudio que utiliza tecnología de genes reporteros.",
      "Un estudio de epidemiología poblacional.",
      "Un estudio de ecología."
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 110,
    pregunta: "¿Qué se busca al definir 'intervalos' en la respuesta clínica?",
    opciones: [
      "La habilidad de inducir completamente al CYP3A4.",
      "La duración del tratamiento.",
      "La cantidad de pacientes estudiados.",
      "La estabilidad química del fármaco."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 111,
    pregunta: "¿Qué enzimas actúan específicamente sobre las histonas?",
    opciones: [
      "Histona-acetil-transferasas (HATs).",
      "Nucleasas.",
      "Lipasas.",
      "Proteasas."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 112,
    pregunta: "¿Qué significa que un promotor tenga una 'conformación abierta'?",
    opciones: [
      "Que el complejo de transcripción tiene acceso a él.",
      "Que el ADN está roto.",
      "Que el gen está silenciado.",
      "Que el ADN no tiene histonas."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 113,
    pregunta: "¿Cuál es el primer nivel de empaquetamiento del ADN?",
    opciones: [
      "La formación del nucleosoma.",
      "La formación del cromosoma.",
      "La síntesis de ARN.",
      "La traducción."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 114,
    pregunta: "¿Qué estructura resulta del enrollamiento de los nucleosomas?",
    opciones: [
      "Cromatina estrechamente empaquetada.",
      "ADN desnudo.",
      "Membrana nuclear.",
      "Mitocondria."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 115,
    pregunta: "¿Los factores de transcripción basales necesitan un promotor accesible?",
    opciones: [
      "Sí.",
      "No, pueden entrar en cualquier estado.",
      "Solo en bacterias.",
      "Solo en virus."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 116,
    pregunta: "¿Qué ocurre en el estado de conformación cerrada de la cromatina?",
    opciones: [
      "Se reprime la expresión génica.",
      "Se activa la expresión génica.",
      "Se duplica el genoma.",
      "Se degradan las proteínas."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 117,
    pregunta: "¿Qué término describe la regulación de la expresión génica en un tejido específico?",
    opciones: [
      "Regulación específica.",
      "Regulación aleatoria.",
      "Regulación química.",
      "Regulación termodinámica."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 118,
    pregunta: "¿Qué constituye el complejo de transcripción basal?",
    opciones: [
      "Los constituyentes básicos necesarios para la transcripción.",
      "Las histonas solamente.",
      "Los ribosomas.",
      "El ARN de transferencia."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 119,
    pregunta: "¿El ADN usualmente está en forma 'desnuda' en el núcleo?",
    opciones: [
      "No.",
      "Sí.",
      "Solo durante la división celular.",
      "Solo en células cancerosas."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 120,
    pregunta: "¿Qué se requiere para iniciar la expresión génica?",
    opciones: [
      "Que la estructura de la cromatina se abra.",
      "Que la estructura de la cromatina se cierre más.",
      "Que se destruya el núcleo.",
      "Que se añada un fármaco tóxico."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 121,
    pregunta: "¿La respuesta tóxica puede verse influenciada por la genética del individuo?",
    opciones: [
      "Sí, es un factor determinante.",
      "No, es puramente ambiental.",
      "Solo en plantas.",
      "Solo en bacterias."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 122,
    pregunta: "¿Qué es un promotor?",
    opciones: [
      "Una región del ADN donde se une el complejo de transcripción.",
      "Una proteína que acelera la reacción.",
      "Un tipo de ARN.",
      "Un lípido de membrana."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 123,
    pregunta: "¿Qué hacen los factores de transcripción al unirse al promotor?",
    opciones: [
      "Activan o reprimen la transcripción.",
      "Destruyen el gen.",
      "Cambian el código genético.",
      "Ninguna de las anteriores."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 124,
    pregunta: "¿Qué es la rifampicina en el contexto del texto?",
    opciones: [
      "Un compuesto utilizado en los experimentos de inducción del CYP3A4.",
      "Un gen reportero.",
      "Una enzima.",
      "Una base nitrogenada."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 125,
    pregunta: "¿Qué es un glucocorticoide?",
    opciones: [
      "Una clase de compuesto que actúa sobre el promotor del CYP3A4.",
      "Un tipo de enzima de restricción.",
      "Un marcador de ADN.",
      "Un componente del citoplasma."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 126,
    pregunta: "¿Qué se entiende por 'sitio de unión' en un promotor?",
    opciones: [
      "Una secuencia específica donde se fijan proteínas reguladoras.",
      "El centro del núcleo.",
      "El lugar donde se guarda la energía.",
      "Una mutación aleatoria."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 127,
    pregunta: "¿Por qué el estudio de la polifarmacia es relevante para la toxicología?",
    opciones: [
      "Porque las interacciones entre fármacos pueden causar toxicidad.",
      "Porque aumenta el costo de los fármacos.",
      "Porque no es relevante.",
      "Porque los pacientes no toman medicinas."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 128,
    pregunta: "¿Qué significa 'covalentemente' en el contexto de las modificaciones de histonas?",
    opciones: [
      "Mediante enlaces químicos estables.",
      "Por simple contacto físico.",
      "Por difusión.",
      "Por magnetismo."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 129,
    pregunta: "¿El genoma humano está compuesto solo de genes que codifican proteínas?",
    opciones: [
      "No, contiene mucho ADN no codificante y regulador.",
      "Sí.",
      "Solo en el cromosoma Y.",
      "Solo en la mitocondria."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 130,
    pregunta: "¿Qué técnica permite modificar un gen específico para estudiar su función?",
    opciones: [
      "Mutagénesis.",
      "Transcripción in vivo.",
      "Cromatografía.",
      "Electroforesis en una dimensión."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 131,
    pregunta: "¿Qué enzima sintetiza el ARN mensajero?",
    opciones: [
      "ARN polimerasa.",
      "ADN polimerasa.",
      "Ligasa.",
      "Hidrolasa."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 132,
    pregunta: "¿La cromatina compacta es accesible para la maquinaria de transcripción?",
    opciones: [
      "No.",
      "Sí.",
      "Solo si está en el citoplasma.",
      "Solo si la célula es joven."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 133,
    pregunta: "¿Las HATs (Histona-acetil-transferasas) son activadoras o represoras de la transcripción?",
    opciones: [
      "Generalmente activadoras al abrir la cromatina.",
      "Represoras.",
      "No tienen efecto.",
      "Destruyen la cromatina."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 134,
    pregunta: "¿Qué es la polifarmacia?",
    opciones: [
      "El uso concomitante de múltiples fármacos.",
      "La creación de fármacos nuevos.",
      "La venta de fármacos.",
      "La falta de fármacos."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 135,
    pregunta: "¿Es posible determinar si los efectos de dos compuestos son por mecanismos separados?",
    opciones: [
      "Sí, mediante estudios de mutagénesis en promotores.",
      "No, es imposible.",
      "Solo con modelos matemáticos.",
      "Solo observando al paciente."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 136,
    pregunta: "¿La regulación génica es dinámica?",
    opciones: [
      "Sí.",
      "No.",
      "Solo en el nacimiento.",
      "Solo en la muerte."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 137,
    pregunta: "¿Qué efecto tiene la acetilación de histonas?",
    opciones: [
      "Generalmente favorece la apertura de la cromatina y la transcripción.",
      "Favorece la condensación.",
      "No hace nada.",
      "Elimina el ADN."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 138,
    pregunta: "¿Qué significa 'constitutivo' en la expresión génica?",
    opciones: [
      "Que se requiere para las funciones básicas y siempre ocurre en cierto nivel.",
      "Que solo ocurre bajo estrés extremo.",
      "Que solo ocurre en el hígado.",
      "Que es artificial."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 139,
    pregunta: "¿El ADN está enrollado alrededor de histonas?",
    opciones: [
      "Sí, formando nucleosomas.",
      "No, está libre.",
      "Solo en los virus.",
      "Solo en las bacterias."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 140,
    pregunta: "¿Los factores de transcripción pueden unirse a lugares distantes del sitio de inicio de la transcripción?",
    opciones: [
      "Sí, mediante bucles en el ADN.",
      "No.",
      "Solo si el ADN está roto.",
      "Solo en plantas."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 141,
    pregunta: "¿Qué es un octámero de histonas?",
    opciones: [
      "Un complejo de 8 proteínas.",
      "Un complejo de 4 proteínas.",
      "Una cadena de ARN.",
      "Una enzima digestiva."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 142,
    pregunta: "¿La estructura del ADN influye en la toxicología?",
    opciones: [
      "Sí, porque determina qué genes se expresan en respuesta a un tóxico.",
      "No.",
      "Solo indirectamente.",
      "No hay relación."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 143,
    pregunta: "¿Cómo se llama el proceso de copiar ADN a ARN?",
    opciones: [
      "Transcripción.",
      "Traducción.",
      "Replicación.",
      "Mutación."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 144,
    pregunta: "¿Qué sucede con la expresión génica si el promotor está bloqueado?",
    opciones: [
      "Se reduce o inhibe.",
      "Se incrementa.",
      "No cambia.",
      "El gen se elimina."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 145,
    pregunta: "¿El CYP3A4 es una proteína importante en el metabolismo?",
    opciones: [
      "Sí.",
      "No.",
      "Solo en ratones.",
      "Solo en plantas."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 146,
    pregunta: "¿Qué es la 'base de la transcripción'?",
    opciones: [
      "Los elementos necesarios para el inicio del proceso.",
      "La base nitrogenada.",
      "El azúcar del ADN.",
      "El núcleo."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 147,
    pregunta: "¿Qué es la mutagénesis sitio-dirigida?",
    opciones: [
      "Una técnica para cambiar una base específica en el ADN.",
      "Una técnica para ver células.",
      "Una técnica de cultivo celular.",
      "Un tipo de fármaco."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 148,
    pregunta: "¿Los genes reporteros producen proteínas detectables?",
    opciones: [
      "Sí.",
      "No.",
      "Solo a veces.",
      "Nunca."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 149,
    pregunta: "¿El ADN condensado es transcripcionalmente activo?",
    opciones: [
      "Generalmente no.",
      "Sí.",
      "Depende de la hora.",
      "Depende del color."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 150,
    pregunta: "¿Qué se entiende por 'respuesta basal'?",
    opciones: [
      "La actividad génica en ausencia de estímulos específicos.",
      "La respuesta máxima.",
      "La respuesta tóxica.",
      "La respuesta inmunológica."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 151,
    pregunta: "¿Qué es la histona?",
    opciones: [
      "Proteína que organiza el ADN.",
      "Un azúcar.",
      "Un nucleótido.",
      "Un tipo de ARN."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 152,
    pregunta: "¿El estudio de El-Sankary ayudó a entender la polifarmacia?",
    opciones: [
      "Sí.",
      "No.",
      "Fue irrelevante.",
      "Fue un fracaso."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 153,
    pregunta: "¿Qué ocurre si se elimina un sitio de unión a un factor de transcripción?",
    opciones: [
      "El gen no responde correctamente a ese factor.",
      "El gen se vuelve inmortal.",
      "El gen se duplica.",
      "No pasa nada."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 154,
    pregunta: "¿La expresión génica es regulada en niveles?",
    opciones: [
      "Sí, cromatina, transcripción, post-traducción, etc.",
      "No, es un solo paso.",
      "Solo en el ADN.",
      "Solo en las proteínas."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 155,
    pregunta: "¿Qué es un compuesto co-administrado?",
    opciones: [
      "Un fármaco administrado junto con otro.",
      "Un fármaco prohibido.",
      "Una vitamina.",
      "Un placebo."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 156,
    pregunta: "¿El C/EBPα es un factor de transcripción?",
    opciones: [
      "Sí.",
      "No.",
      "Es un lípido.",
      "Es un azúcar."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 157,
    pregunta: "¿Los glucocorticoides son hormonas?",
    opciones: [
      "Sí.",
      "No.",
      "Son metales.",
      "Son bacterias."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 158,
    pregunta: "¿Qué es el 'promotor'?",
    opciones: [
      "Región promotora de la transcripción.",
      "El terminador.",
      "El gen completo.",
      "La proteína."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 159,
    pregunta: "¿Puede la toxicidad ser dependiente del genoma?",
    opciones: [
      "Sí.",
      "No.",
      "Es puramente azar.",
      "Solo en la vejez."
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 160,
    pregunta: "¿Cuál es el objetivo final de estudiar la genética en la toxicología?",
    opciones: [
      "Entender y predecir la respuesta tóxica.",
      "Aumentar la toxicidad.",
      "Vender más medicamentos.",
      "Ninguna."
    ],
    respuestaCorrecta: "a"
  }
];

