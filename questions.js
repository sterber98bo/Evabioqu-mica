/**
 * Banco de preguntas para el Quiz interactivo de Bioquímica.
 * 
 * NOTA PARA EL USUARIO:
 * Guarda tus 130 preguntas en este mismo archivo reemplazando el contenido de 'quizQuestions'.
 * Asegúrate de que el nombre del array sea EXACTAMENTE 'quizQuestions'.
 * 
 * Cada pregunta debe tener este formato:
 * - id: número identificador
 * - question: texto de la pregunta
 * - options: array con las opciones (se recomiendan 4 incisos)
 * - correct: índice de la opción correcta (0 para la primera, 1 para la segunda, etc.)
 */
const quizQuestions = [
  {
    id: 1,
    question: "¿De dónde derivan principalmente los líquidos serosos según la guía?",
    options: ["De la linfa pura concentrada.", "Del plasma sanguíneo como un ultrafiltrado.", "Del líquido intracelular mesotelial."],
    correct: 1
  },
  {
    id: 2,
    question: "¿Qué estructuras delimitan las cavidades corporales donde se encuentran los líquidos serosos?",
    options: ["Una membrana serosa parietal y una visceral.", "Una capa endotelial gruesa y tejido óseo.", "Una membrana mucosa estratificada."],
    correct: 0
  },
  {
    id: 3,
    question: "¿Qué componentes constituyen la membrana serosa?",
    options: ["Tejido muscular liso y microvellosidades neuronales.", "Una capa de tejido conjuntivo con capilares y vasos linfáticos, cubierta por una capa de células mesoteliales.", "Epitelio cilíndrico ciliado con glándulas mucosas."],
    correct: 1
  },
  {
    id: 4,
    question: "¿Cuál es la función principal del líquido seroso en las cavidades?",
    options: ["Nutrir intensamente el tejido óseo adyacente.", "Reducir la fricción entre las membranas parietal y visceral durante el movimiento de los órganos.", "Sintetizar hormonas esteroideas para el control sistémico."],
    correct: 1
  },
  {
    id: 5,
    question: "¿Por qué mecanismos se mantiene el volumen normal de líquido en las cavidades serosas?",
    options: ["Por un equilibrio dinámico entre la filtración capilar (presión hidrostática) y la reabsorción (presión oncótica y drenaje linfático).", "Únicamente por difusión pasiva celular sin participación de presiones.", "Por secreción apocrina continua sin reabsorción alguna."],
    correct: 0
  },
  {
    id: 6,
    question: "¿Qué condición fisiopatológica genera la acumulación patológica de líquido seroso (derrame)?",
    options: ["La disminución drástica de la presión arterial sistólica por debajo de 50 mmHg.", "Una alteración en la dinámica de filtración o reabsorción (desequilibrio de presiones o daño de la membrana).", "La calcificación total de las células mesoteliales."],
    correct: 1
  },
  {
    id: 7,
    question: "¿Cuál de los siguientes factores causa un trasudado por aumento de la presión hidrostática capilar?",
    options: ["Insuficiencia cardíaca congestiva.", "Infección bacteriana directa en la cavidad.", "Neoplasia metastásica con invasión local."],
    correct: 0
  },
  {
    id: 8,
    question: "¿Qué situación clínica produce un trasudado debido a la disminución de la presión oncótica plasmática?",
    options: ["Artritis reumatoide activa.", "Síndrome nefrótico o cirrosis hepática (hipoalbuminemia).", "Infarto agudo de miocardio transmural."],
    correct: 1
  },
  {
    id: 9,
    question: "¿Cuál es el mecanismo fisiopatológico principal que da origen a un exudado?",
    options: ["El aumento de la permeabilidad capilar inducido por mediadores inflamatorios o daño endotelial.", "La disminución de la presión hidrostática en la arteria aorta.", "El aumento de la presión osmótica tisular por deshidratación extrema."],
    correct: 0
  },
  {
    id: 10,
    question: "¿Qué causa la acumulación de líquido seroso por obstrucción del drenaje linfático?",
    options: ["La producción excesiva de líquido cefalorraquídeo.", "Bloqueo de los vasos linfáticos por tumores, infecciones (filariasis) o cirugía/traumatismo.", "La disminución del diámetro de los capilares arteriales exclusivamente."],
    correct: 1
  },
  {
    id: 11,
    question: "¿Cómo se clasifica un líquido seroso acumulado debido a una alteración sistémica no inflamatoria?",
    options: ["Exudado.", "Trasudado.", "Líquido purulento infeccioso."],
    correct: 1
  },
  {
    id: 12,
    question: "¿Cómo se clasifica un líquido acumulado por procesos locales que dañan directamente la membrana o capilares (inflamación, infección, malignidad)?",
    options: ["Trasudado.", "Exudado.", "Líquido mucoso normal."],
    correct: 1
  },
  {
    id: 13,
    question: "¿Qué aspecto macroscópico caracteriza típicamente a un trasudado puro?",
    options: ["Turbio y purulento.", "Claro, límpido, de color amarillo pajizo.", "Hemorrágico denso y viscoso."],
    correct: 1
  },
  {
    id: 14,
    question: "¿Qué aspecto macroscópico suele presentar un exudado?",
    options: ["Siempre es transparente como el agua destilada.", "Turbio, opalescente, purulento, hemorrágico o quiloso debido a la presencia de células, proteínas o lípidos.", "Completamente negro debido a la melanina circulante."],
    correct: 1
  },
  {
    id: 15,
    question: "En los Criterios de Light para líquido pleural, ¿qué valor de la relación de proteínas líquido/suero clasifica al fluido como exudado?",
    options: ["Menor a 0.2.", "Mayor a 0.5.", "Exactamente igual a 0.1."],
    correct: 1
  },
  {
    id: 16,
    question: "Según los Criterios de Light, ¿qué valor de la relación de LDH líquido/suero indica un exudado?",
    options: ["Mayor a 0.6.", "Menor a 0.4.", "Igual a 0.2."],
    correct: 0
  },
  {
    id: 17,
    question: "¿Qué tercer criterio de Light (basado en la LDH del líquido) define un exudado pleural?",
    options: ["LDH del líquido pleural menor a 10 U/L.", "LDH del líquido pleural mayor a las dos terceras partes (2/3) del límite superior normal de la LDH en suero.", "LDH del líquido pleural igual a cero."],
    correct: 1
  },
  {
    id: 18,
    question: "¿Qué es el Gradiente de Albúmina Suero-Ascitis (GASA)?",
    options: ["La multiplicación de la albúmina sérica por la albúmina del líquido ascítico.", "La resta matemática entre la concentración de albúmina en suero y la concentración de albúmina en el líquido ascítico (Albúmina suero - Albúmina líquido).", "El cociente entre la albúmina del líquido y la albúmina del suero."],
    correct: 1
  },
  {
    id: 19,
    question: "¿Qué indica un valor de GASA igual o mayor a 1.1 g/dL en el estudio del líquido ascítico?",
    options: ["Que el derrame es un exudado causado por una infección bacteriana aislada sin hipertensión portal.", "Que el derrame está asociado a hipertensión portal (ej. Cirrosis hepática, insuficiencia cardíaca).", "Que el paciente posee un riñón poliquístico terminal."],
    correct: 1
  },
  {
    id: 20,
    question: "¿Qué indica un valor de GASA menor a 1.1 g/dL en líquido ascítico?",
    options: ["Hipertensión portal severa descompensada.", "Ausencia de hipertensión portal (ej. Carcinomatosis peritoneal, tuberculosis peritoneal, síndrome nefrótico).", "Que el líquido es de origen sinovial exclusivamente."],
    correct: 1
  },
  {
    id: 21,
    question: "¿Cómo se denomina el procedimiento médico para la extracción de líquido de la cavidad pleural?",
    options: ["Paracentesis.", "Toracocentesis.", "Pericardiocentesis."],
    correct: 1
  },
  {
    id: 22,
    question: "¿Cómo se denomina la punción quirúrgica para obtener líquido de la cavidad peritoneal (ascítico)?",
    options: ["Paracentesis (o abdominocentesis).", "Artrocentesis.", "Amniocentesis."],
    correct: 0
  },
  {
    id: 23,
    question: "¿Qué nombre recibe la extracción de líquido de la cavidad pericárdica?",
    options: ["Toracocentesis.", "Pericardiocentesis.", "Punción lumbar."],
    correct: 1
  },
  {
    id: 24,
    question: "¿Qué tipo de tubo o anticoagulante se prefiere para el recuento celular y la fórmula leucocitaria de los líquidos serosos?",
    options: ["Tubo sin anticoagulante para que coagule rápido.", "Tubo con EDTA (tapa morada).", "Tubo con citrato de sodio al 3.8% en exceso."],
    correct: 1
  },
  {
    id: 25,
    question: "¿Qué tubo se utiliza para el análisis bioquímico (glucosa, proteínas, LDH) en líquidos serosos?",
    options: ["Tubo con EDTA para evitar interferencias.", "Tubo seco (sin anticoagulante, tapa roja/amarilla) o con heparina de litio.", "Tubo con fluoruro de sodio únicamente."],
    correct: 1
  },
  {
    id: 26,
    question: "Para el estudio microbiológico (tinción de Gram y cultivo) de líquidos serosos, ¿cómo debe recolectarse la muestra?",
    options: ["En un frasco limpio no estéril de plástico común.", "En un tubo estéril o directamente en frascos de hemocultivo, manteniendo estricta asepsia.", "Mezclado con formol al 10% para fijar las bacterias."],
    correct: 1
  },
  {
    id: 27,
    question: "¿Por qué es fundamental procesar los líquidos serosos de manera inmediata (dentro de la primera hora de extraídos)?",
    options: ["Porque las células sanguíneas (leucocitos) se lisan rápidamente, alterando el recuento celular y la fórmula.", "Porque el líquido se evapora por completo en pocos minutos.", "Porque las proteínas se convierten en glucosa de forma espontánea."],
    correct: 0
  },
  {
    id: 28,
    question: "¿Qué significado clínico tiene un recuento de leucocitos > 1000/µL en líquido pleural o > 500/µL en líquido ascítico?",
    options: ["Es un hallazgo normal sin relevancia clínica.", "Sugiere fuertemente un proceso inflamatorio o infeccioso (Exudado).", "Indica una deshidratación tisular severa."],
    correct: 1
  },
  {
    id: 29,
    question: "¿Qué indica el predominio de neutrófilos (>50%) en la fórmula diferencial de un líquido seroso?",
    options: ["Una infección bacteriana aguda o inflamación aguda (ej. Neumonía, peritonitis bacteriana).", "Una infección viral crónica avanzada.", "Una patología alérgica por parásitos tisulares."],
    correct: 0
  },
  {
    id: 30,
    question: "¿Qué sugiere el predominio de linfocitos (>50%) en un líquido seroso (especialmente pleural)?",
    options: ["Infección bacteriana piógena por Staphylococcus aureus.", "Tuberculosis, pleuritis de origen neoplásico o enfermedades autoinmunes crónicas.", "Una hemorragia masiva reciente."],
    correct: 1
  },
  {
    id: 31,
    question: "¿Qué relevancia tiene medir la glucosa en un líquido seroso en comparación con el suero del paciente?",
    options: ["Los niveles de glucosa en el líquido siempre son el triple que en el suero.", "Niveles bajos de glucosa en el líquido (<60 mg/dL o relación <0.5) sugieren consumo por bacterias o células tumorales (ej. Empiema, tuberculosis, malignidad).", "La glucosa no se consume en los líquidos bajo ninguna circunstancia patológica."],
    correct: 1
  },
  {
    id: 32,
    question: "¿Qué enzima se eleva significativamente en líquido pleural y es un marcador de alta sensibilidad para tuberculosis pleural?",
    options: ["Amilasa pancreática.", "Adenosina deaminasa (ADA).", "Fosfatasa alcalina ósea."],
    correct: 1
  },
  {
    id: 33,
    question: "¿Qué determinación bioquímica en líquido pleural es útil si se sospecha un derrame secundario a pancreatitis o rotura esofágica?",
    options: ["Creatinina y urea.", "Amilasa.", "Colesterol total."],
    correct: 1
  },
  {
    id: 34,
    question: "¿Qué indica el hallazgo de niveles elevados de triglicéridos (>110 mg/dL) y un aspecto lechoso en un líquido seroso?",
    options: ["Un derrame purulento por Pseudomonas.", "Un derrame quiloso (quilotórax o ascitis quilosa) por rotura o bloqueo del conducto torácico/linfático.", "Una contaminación con talco de los guantes."],
    correct: 1
  },
  {
    id: 35,
    question: "¿Qué se sospecha si el nivel de creatinina en líquido ascítico es notablemente superior al sérico?",
    options: ["Insuficiencia hepática fulminante.", "Rotura o perforación de las vías urinarias (uroperitoneo).", "Tuberculosis peritoneal activa."],
    correct: 1
  },
  {
    id: 36,
    question: "¿Qué es el líquido sinovial y dónde se localiza?",
    options: ["Es un ultrafiltrado del plasma acoplado a ácido hialurónico, localizado en las cavidades articulares móviles (diartrosis).", "Es el líquido que baña los alvéolos pulmonares.", "Es un fluido ácido producido por los condrocitos maduros en el hueso compacto."],
    correct: 0
  },
  {
    id: 37,
    question: "¿Qué tipo de células recubren la membrana sinovial y son responsables de sintetizar componentes clave como el hialuronato?",
    options: ["Los sinoviocitos (Tipo A macrófagos y Tipo B fibroblastos).", "Los osteoclastos multinucleados.", "Las células de Schwann mielinizantes."],
    correct: 0
  },
  {
    id: 38,
    question: "¿Cuál es la función principal del líquido sinovial en las articulaciones?",
    options: ["Calcificar los cartílagos para endurecerlos.", "Lubricar la articulación, reducir la fricción y proporcionar nutrientes al cartílago articular avascular.", "Secretar neurotransmisores para el movimiento voluntario."],
    correct: 1
  },
  {
    id: 39,
    question: "¿Qué componente químico le otorga al líquido sinovial su elevada viscosidad característica en estado normal?",
    options: ["El colágeno tipo IV disuelto.", "El ácido hialurónico (hialuronato) de alto peso molecular.", "La albúmina desnaturalizada."],
    correct: 1
  },
  {
    id: 40,
    question: "¿Cómo se clasifica el Líquido Sinovial Grupo I según la guía?",
    options: ["Inflamatorio (ej. Artritis reumatoide).", "No inflamatorio o Mecánico (ej. Artrosis, osteoartritis, trauma leve).", "Séptico o Infeccioso (ej. Artritis bacteriana)."],
    correct: 1
  },
  {
    id: 41,
    question: "¿Qué enfermedades o condiciones se asocian típicamente al Líquido Sinovial Grupo II (Inflamatorio)?",
    options: ["Artrosis degenerativa senil.", "Artritis reumatoide, gota, pseudogota y fiebre reumática.", "Infección bacteriana aguda por Neisseria gonorrhoeae."],
    correct: 1
  },
  {
    id: 42,
    question: "¿Qué caracteriza principalmente al Líquido Sinovial Grupo III (Séptico)?",
    options: ["Ser completamente transparente y con viscosidad muy alta.", "Presencia de infección bacteriana o fúngica activa con recuentos leucocitarios extremadamente elevados (>50,000/µL) y predominio absoluto de neutrófilos.", "Contener únicamente eritrocitos maduros sin glóbulos blancos."],
    correct: 1
  },
  {
    id: 43,
    question: "¿Cómo se define el Grupo IV de líquido sinovial?",
    options: ["Líquido purulento estéril.", "Hemorrágico (presencia masiva de sangre por trauma severo, hemofilia o sinovioma).", "Líquido normal de color azulado."],
    correct: 1
  },
  {
    id: 44,
    question: "¿Cómo se denomina técnicamente el procedimiento de punción para extraer líquido sinovial?",
    options: ["Paracentesis.", "Artrocentesis.", "Toracocentesis."],
    correct: 1
  },
  {
    id: 45,
    question: "¿Qué anticoagulante está ESTRICTAMENTE PROHIBIDO o no recomendado para la recolección de líquido sinovial debido a que forma cristales artificiales que confunden el diagnóstico?",
    options: ["Heparina de litio líquida.", "Oxalato de potasio o EDTA en polvo/cristales gruesos (especialmente oxalato y litio en exceso).", "No se usa ningún tubo de plástico."],
    correct: 1
  },
  {
    id: 46,
    question: "¿Qué tipo de anticoagulante es el ideal y más recomendado para el recuento celular en líquido sinovial?",
    options: ["Heparina de sodio o de litio (o EDTA líquido bien controlado).", "Oxalato de calcio puro.", "Citrato de sodio ácido concentrado."],
    correct: 0
  },
  {
    id: 47,
    question: "¿Por qué es crucial analizar la presencia de cristales en el líquido sinovial inmediatamente después de la extracción?",
    options: ["Porque los cristales de urato monosódico se duplican en tamaño cada 10 minutos al aire libre.", "Porque los cristales pueden disolverse o pueden precipitar nuevos cristales artificiales debido a cambios de temperatura y pH del tubo almacenado.", "Porque el líquido sinovial se solidifica como cemento a temperatura ambiente."],
    correct: 1
  },
  {
    id: 48,
    question: "¿Cuál es el color y aspecto normal del líquido sinovial fresco?",
    options: ["Rojo intenso y opaco.", "Amarillo claro (pajizo) y completamente transparente (claro).", "Verde brillante y turbio."],
    correct: 1
  },
  {
    id: 49,
    question: "¿Cómo se realiza la \"prueba de las gotas\" (test del hilo) para evaluar cualitativamente la viscosidad del líquido sinovial?",
    options: ["Midiendo el tiempo que tarda en hervir el líquido.", "Dejando caer el líquido desde la jeringa; lo normal es que forme un hilo continuo de 3 a 6 cm de largo antes de romperse.", "Observando si el líquido flota sobre el agua destilada."],
    correct: 1
  },
  {
    id: 50,
    question: "¿Qué sucede con la viscosidad del líquido sinovial en procesos inflamatorios o infecciosos agudos?",
    options: ["Aumenta exponencialmente haciendo imposible su aspiración.", "Disminuye notablemente (se vuelve fluido como el agua) debido a la destrucción del ácido hialurónico por enzimas leucocitarias o bacterianas (hialuronidasa).", "Permanece exactamente igual sin ninguna alteración."],
    correct: 1
  },
  {
    id: 51,
    question: "¿En qué consiste la \"Prueba de Coágulo de Mucina\" (Ropes Test)?",
    options: ["En añadir ácido acético diluido al líquido sinovial; la formación de un coágulo firme indica buena calidad y concentración de ácido hialurónico (normal/no inflamatorio).", "En calentar el líquido a 100 °C para ver si coagula la albúmina.", "En mezclar el líquido con alcohol absoluto para medir los lípidos."],
    correct: 0
  },
  {
    id: 52,
    question: "¿Qué tipo de microscopía es la herramienta estándar de oro para la identificación definitiva de cristales en líquido sinovial?",
    options: ["Microscopía electrónica de barrido únicamente.", "Microscopía de luz polarizada con compensador rojo de primer orden.", "Microscopía de campo oscuro para bacterias."],
    correct: 1
  },
  {
    id: 53,
    question: "¿Qué morfología y propiedad optical presentan los cristales de Urato Monosódico (causantes de la Gota)?",
    options: ["Forma de agujas con birrefringencia negativa fuerte (cambian de color según su orientación).", "Forma de romboides con birrefringencia positiva débil.", "Forma de estrellas concéntricas sin birrefringencia."],
    correct: 0
  },
  {
    id: 54,
    question: "¿Qué morfología y propiedad óptica poseen los cristales de Pirofosfato de Calcio Dihidratado (causantes de la Pseudogota)?",
    options: ["Forma de agujas largas con birrefringencia negativa intensa.", "Forma de bastones, prismas o romboides cortos con birrefringencia positiva débil.", "Forma de esferas perfectas que no desvían la luz."],
    correct: 1
  },
  {
    id: 55,
    question: "¿Cuál es el recuento normal de leucocitos en el líquido sinovial según los valores de referencia estándares de la guía?",
    options: ["Mayor a 10,000 células/µL.", "Menor a 200 células/µL (con <25% de neutrófilos).", "Entre 2,000 y 5,000 células/µL."],
    correct: 1
  },
  {
    id: 56,
    question: "¿Qué porcentaje de neutrófilos es característico encontrar en un líquido sinovial del Grupo III (Séptico)?",
    options: ["Menor al 10%.", "Igual o mayor al 75% (frecuentemente >90%).", "Únicamente el 0% de neutrófilos."],
    correct: 1
  },
  {
    id: 57,
    question: "¿Cómo se encuentra habitualmente el nivel de glucosa en el líquido sinovial en una artritis séptica en comparación con la glucemia sérica?",
    options: ["Es idéntico o ligeramente superior al del suero.", "Está significativamente disminuido (marcada caída, a menudo >40 mg/dL por debajo del valor sérico) debido al consumo por bacterias y leucocitos.", "Aumenta notablemente llegando a >300 mg/dL de forma local."],
    correct: 1
  },
  {
    id: 58,
    question: "¿Dónde se produce principalmente el Líquido Cefalorraquídeo (LCR)?",
    options: ["En las vellosidades aracnoideas del sistema linfático.", "En los plexos coroideos de los ventrículos cerebrales (laterales, tercero y cuarto).", "En la duramadre espinal baja."],
    correct: 1
  },
  {
    id: 59,
    question: "¿A través de qué estructuras se reabsorbe el LCR hacia el sistema venoso sanguíneo?",
    options: ["A través de los capilares del espacio epidural.", "A través de las vellosidades (o granulaciones) aracnoideas que drenan en los senos venosos durales.", "Exclusivamente por los túbulos renales colectores."],
    correct: 1
  },
  {
    id: 60,
    question: "¿Cuál es la ruta correcta de circulación del LCR desde su formación hasta su reabsorción?",
    options: ["Ventrículos laterales -> Agujero de Monro -> Tercer ventrículo -> Acueducto de Silvio -> Cuarto ventrículo -> Agujeros de Luschka y Magendie -> Espacio subaracnoideo -> Vellosidades aracnoideas.", "Espacio subdural -> Médula espinal -> Corazón -> Plexos coroideos -> Ventrículos.", "Cerebelo -> Ventrículos laterales -> Seno sagital -> Nervio óptico."],
    correct: 0
  },
  {
    id: 61,
    question: "¿Qué funciones principales cumple el LCR en el sistema nervioso central?",
    options: ["Soporte mecánico (amortiguación de traumatismos), protección biológica, regulación de la presión intracraneal y eliminación de productos metabólicos de desecho.", "Síntesis de glóbulos rojos y almacenamiento de glucógeno muscular.", "Conducción eléctrica directa para los reflejos espinales rápidos."],
    correct: 0
  },
  {
    id: 62,
    question: "¿Qué estructura anatómica funcional actúa como un filtro altamente selectivo, controlando estrictamente el paso de sustancias desde la sangre hacia el LCR?",
    options: ["La barrera hematoencefálica (constituida por células endoteliales con uniones estrechas, pericitos y astrocitos).", "El epitelio escamoso estratificado de la piel.", "El sistema retículo endotelial esplénico."],
    correct: 0
  },
  {
    id: 63,
    question: "¿Qué volumen total aproximado de LCR circula constantemente en un adulto sano y cuánto se produce al día?",
    options: ["Circulan unos 500 mL y se producen 5,000 mL al día.", "Circulan entre 90 y 150 mL, y se producen aproximadamente 500 mL por día (recambio continuo).", "Circulan únicamente 5 mL en total en todo el cuerpo."],
    correct: 1
  },
  {
    id: 64,
    question: "¿Qué alteración patológica se produce cuando hay un desequilibrio entre la producción y la reabsorción del LCR, provocando una acumulación excesiva y aumento de la presión intracraneal?",
    options: ["Meningitis aséptica leve.", "Hidrocefalia.", "Enfermedad de Parkinson idiopática."],
    correct: 1
  },
  {
    id: 65,
    question: "¿Cuál es el sitio anatómico estándar y más común para la realización de una punción lumbar en adultos con el fin de obtener LCR?",
    options: ["Entre las vértebras cervicales C1 y C2.", "Entre los espacios intervertebrales lumbares L3-L4 o L4-L5 (debajo del fin de la médula espinal).", "Directamente en la fosa craneal posterior a través del hueso occipital."],
    correct: 1
  },
  {
    id: 66,
    question: "Durante una punción lumbar exitosa, ¿cuántos tubos se recolectan habitualmente y cuál es el orden secuencial de distribución recomendado para evitar contaminaciones?",
    options: ["Un solo tubo grande para todas las pruebas mezcladas.", "Tres (o cuatro) tubos seriados: Tubo 1 para Química e Inmunología, Tubo 2 para Microbiología, Tubo 3 para Recuento celular y Citología.", "Tubo 1 para Hematología, Tubo 2 para Bioquímica, Tubo 3 para Microbiología (orden inverso)."],
    correct: 1
  },
  {
    id: 67,
    question: "¿Por qué el Tubo 1 (el primero en salir) se destina al análisis bioquímico e inmunológico y NO al recuento celular?",
    options: ["Anular las proteínas si salen al final.", "Porque el primer tubo puede contener sangre de contaminación por trauma de la punción (punción traumática), lo que alteraría falsamente el recuento celular real del paciente.", "Porque el primer tubo siempre sale estéril de forma absoluta para bacterias anaerobias."],
    correct: 1
  },
  {
    id: 68,
    question: "¿Cómo debe ser el transporte y conservación de los tubos de LCR si el procesamiento analítico se demora?",
    options: ["El tubo de microbiología debe congelarse a -20 °C inmediatamente.", "El tubo para recuento celular debe procesarse de inmediato (las células se lisan en 1-2 horas); el tubo de bioquímica se puede congelar/refrigerar y el de microbiología se mantiene a temperatura ambiente para no afectar la viabilidad de ciertos patógenos (ej. Neisseria).", "Todos los tubos deben hervirse durante 5 minutos para fijar los componentes."],
    correct: 1
  },
  {
    id: 69,
    question: "¿Cuál es el aspecto físico normal del LCR (\"agua de roca\")?",
    options: ["Turbio y de color amarillo intenso.", "Completamente límpido, transparente e incoloro.", "Opalescente con coágulos de fibrina densos."],
    correct: 1
  },
  {
    id: 70,
    question: "¿Qué término se utiliza para describir una coloración amarillenta, rosada o anaranjada del sobrenadante del LCR centrifugado, causada por la liberación de hemoglobina/bilirrubina tras una hemorragia subaracnoidea verdadera?",
    options: ["Quilosidad.", "Xantocromía.", "Purulencia mesotelial."],
    correct: 1
  },
  {
    id: 71,
    question: "Al evaluar un LCR con presencia de sangre, ¿cómo se diferencia una \"punción lumbar traumática\" (daño de un vaso durante el procedimiento) de una \"hemorragia subaracnoidea\" verdadera?",
    options: ["En la punción traumática el color rojo disminuye progresivamente del tubo 1 al tubo 3 (\"prueba de los tres tubos\") y el sobrenadante centrifugado es claro; en la hemorragia subaracnoidea el color es uniforme en todos los tubos y el sobrenadante es xantocrómico.", "No hay forma de diferenciarlos en el laboratorio clínico.", "En la hemorragia subaracnoidea el líquido coagula instantáneamente en el tubo 3."],
    correct: 0
  },
  {
    id: 72,
    question: "¿Qué cámara de recuento celular se utiliza clásicamente en el laboratorio para el recuento manual de leucocitos y hematíes en LCR debido a los bajos recuentos normales?",
    options: ["Cámara de Neubauer modificada o Cámara de Fuchs-Rosenthal.", "Cámara de Makler para espermatozoides.", "Placas de agar Petri comunes."],
    correct: 0
  },
  {
    id: 73,
    question: "¿Cuál es el valor de referencia normal para el recuento de leucocitos en LCR de un adulto sano?",
    options: ["De 50 a 100 células/µL.", "De 0 a 5 células/µL (predominio de linfocitos y monocitos).", "Mayor a 1,000 células/µL de forma constante."],
    correct: 1
  },
  {
    id: 74,
    question: "¿Cómo se denomina el aumento patológico del recuento de células (leucocitos) en el LCR?",
    options: ["Leucopenia central.", "Pleocitosis.", "Policitemia raquídea."],
    correct: 1
  },
  {
    id: 75,
    question: "¿Qué tipo de pleocitosis con predominio absoluto de neutrófilos (>80%) es característica de una Meningitis Bacteriana Aguda?",
    options: ["Pleocitosis linfocitaria dens.", "Pleocitosis neutrofílica (polimorfonuclear).", "Pleocitosis eosinofílica severa."],
    correct: 1
  },
  {
    id: 76,
    question: "¿Qué tipo de celularidad predomina típicamente en el LCR en casos de Meningitis Viral (Aséptica) o Meningitis por Tuberculosis?",
    options: ["Predominio de células plasmáticas malignas.", "Predominio de linfocitos (pleocitosis linfocitaria o mononuclear).", "Predominio de cristales de colesterol."],
    correct: 1
  },
  {
    id: 77,
    question: "¿Cuál es el valor de referencia normal de las proteínas totales en el LCR de un adulto y de dónde provienen principalmente?",
    options: ["150 a 400 mg/dL, provenientes del tejido óseo vertebral.", "15 a 45 mg/dL, provenientes principalmente de la filtración selectiva del plasma (predominio de albúmina).", "Siempre da exactamente cero en condiciones de salud."],
    correct: 1
  },
  {
    id: 78,
    question: "¿Qué significa un aumento marcado de las proteínas en LCR (Hiperproteinorraquia) sin aumento de células?",
    options: ["Una contaminación con agua destilada.", "Disociación albúmino-citológica, característica del Síndrome de Guillain-Barré o bloqueos tumorales espinales.", "Un estado de ayuno prolongado."],
    correct: 1
  },
  {
    id: 79,
    question: "¿Cómo se define el término \"Glucorraquia\" y cuál es su valor normal en relación con la glucemia del paciente?",
    options: ["Es la concentración de glucosa en LCR, y su valor normal equivale aproximadamente a las dos terceras partes (60-70%) de la glucemia plasmática concomitante (normalmente 40-70 mg/dL).", "Es el transporte de glucosa hacia el músculo esquelético.", "Es la eliminación de azúcar a través de la orina raquídea."],
    correct: 0
  },
  {
    id: 80,
    question: "¿En qué patología del SNC se observa una marcada disminución de la glucorraquia (Hipoglucorraquia severa, a menudo <40 mg/dL o relación <0.4)?",
    options: ["Meningitis viral pura.", "Meningitis bacteriana aguda, micótica o tuberculosa (debido al consumo de glucosa por los microorganismos y leucocitos).", "Encefalopatía hipertensiva aislada."],
    correct: 1
  },
  {
    id: 81,
    question: "¿Qué parámetro bioquímico (metabolito de la glucólisis anaerobia) aumenta en el LCR en condiciones de hipoxia cerebral o metabolismo bacteriano severo, ayudando a diferenciar la meningitis bacteriana (muy elevado) de la viral (normal o levemente aumentado)?",
    options: ["El ácido úrico conjugado.", "El lactato (ácido láctico).", "La urea nitrogenada."],
    correct: 1
  },
  {
    id: 82,
    question: "¿Qué marcador inmunológico en LCR (bandas detectadas por isoelectroenfoque o electroforesis de alta resolución) es de gran utilidad diagnóstica para confirmar Esclerosis Múltiple?",
    options: ["Bandas oligoclonales de Inmunoglobulina G (IgG).", "Bandas de cadenas pesadas de IgM únicamente.", "Proteína C reactiva cristalizada."],
    correct: 0
  },
  {
    id: 83,
    question: "¿Qué tinción de urgencia en el laboratorio permite visualizar bacterias grampositivas o gramnegativas en el sedimento de LCR en pocos minutos?",
    options: ["Tinción de Wright-Giemsa.", "Tinción de Gram.", "Tinción de Azul de Metileno simple."],
    correct: 1
  },
  {
    id: 84,
    question: "¿Qué tinción microbiológica especial se solicita de forma obligatoria ante la sospecha clínica de Meningitis por Mycobacterium tuberculosis?",
    options: ["Tinción de Gram clásica.", "Tinción de Ziehl-Neelsen (o tinción para bacilos ácido-alcohol resistentes - BAAR).", "Tinción de Lugol concentrado."],
    correct: 1
  },
  {
    id: 85,
    question: "¿Qué examen microscópico directo con reactivo de contraste se utiliza específicamente para identificar las cápsulas prominentes de la levadura Cryptococcus neoformans en LCR?",
    options: ["Examen en fresco con solución salina normal.", "Tinción con Tinta China (examen directo).", "Reacción en cadena de la polimerasa ácida."],
    correct: 1
  },
  {
    id: 86,
    question: "¿Qué prueba inmunológica de aglutinación rápida en látex permite detectar antígenos capsulares bacterianos comunes en LCR, siendo muy útil cuando el paciente ya ha recibido antibióticos previos?",
    options: ["Prueba de aglutinación de látex para antígenos bacterianos (ej. S. pneumoniae, N. meningitidis, H. influenzae).", "Prueba de Coombs directa raquídea.", "Reacción de Widal modificada."],
    correct: 0
  },
  {
    id: 87,
    question: "¿Qué es el líquido amniótico y dónde se encuentra?",
    options: ["Es el fluido que rodea al feto dentro del saco amniótico durante el embarazo.", "Es el líquido secretado por las trompas de Falopio en la menstruación.", "Es un ultrafiltrado de la orina materna almacenado en la placenta exterior."],
    correct: 0
  },
  {
    id: 88,
    question: "¿Cuál es el origen principal del líquido amniótico durante el primer trimestre del embarazo?",
    options: ["La orina fetal densa únicamente.", "Ultrafiltrado del plasma materno a través de la membrana amniótica y transporte transcelular.", "Secreción sebácea de la piel del feto exclusivamente."],
    correct: 1
  },
  {
    id: 89,
    question: "A partir del segundo trimestre (después de las 16 semanas), ¿cuál se convierte en la fuente de producción mayoritaria y fundamental de líquido amniótico?",
    options: ["La saliva fetal rica en moco.", "La orina fetal (el feto orina en la cavidad amniótica).", "La transudación de los vasos sanguíneos del cordón umbilical únicamente."],
    correct: 1
  },
  {
    id: 90,
    question: "¿Cuál es la vía principal por la cual el feto regula y reabsorbe el volumen de líquido amniótico en la segunda mitad del embarazo?",
    options: ["A través de la espiración forzada continua.", "Mediante la deglución fetal (el feto traga el líquido amniótico, el cual se absorbe en su tracto gastrointestinal y pasa a la circulación placentaria).", "Por absorción pasiva a través de las uñas."],
    correct: 1
  },
  {
    id: 91,
    question: "¿Qué funciones vitales cumple el líquido amniótico para el desarrollo correcto del feto?",
    options: ["Amortiguación contra traumatismos externos, mantenimiento de una temperatura constante, permite el movimiento libre para el desarrollo músculo-esquelético y es crucial para el desarrollo de los pulmones fetales.", "Producción de hormonas tiroideas para la madre.", "Actuar como barrera impermeable que impide el crecimiento fetal."],
    correct: 0
  },
  {
    id: 92,
    question: "¿Cómo se denomina técnicamente la deficiencia o volumen patológicamente disminuido de líquido amniótico para la edad gestacional?",
    options: ["Polihidramnios.", "Oligohidramnios.", "Anuria gestacional."],
    correct: 1
  },
  {
    id: 93,
    question: "¿Qué término define al exceso patológico de volumen de líquido amniótico en el saco gestacional?",
    options: ["Oligohidramnios.", "Polihidramnios (o hidramnios).", "Hidrocefalia fetal externa."],
    correct: 1
  },
  {
    id: 94,
    question: "¿Cómo se denomina el procedimiento invasivo mediante el cual un médico especialista extrae una muestra de líquido amniótico a través de la pared abdominal materna?",
    options: ["Cordocentesis.", "Amniocentesis.", "Paracentesis diagnóstica."],
    correct: 1
  },
  {
    id: 95,
    question: "¿A partir de qué semana gestacional se prefiere realizar de forma segura una amniocentesis genética para el estudio de cromosomopatías?",
    options: ["Entre las semanas 5 y 8 de gestación.", "Entre las semanas 15 y 18 (o hasta la 20) de gestación.", "Únicamente durante el trabajo de parto activo a las 40 semanas."],
    correct: 1
  },
  {
    id: 96,
    question: "¿Por qué es fundamental proteger inmediatamente de la luz solar o artificial los tubos que contienen líquido amniótico cuando se sospecha enfermedad hemolítica perinatal?",
    options: ["Porque la luz destruye las proteínas transportadoras de oxígeno.", "Porque la bilirrubina presente en la muestra es altamente fotosensible y se degrada rápidamente por la luz, alterando el resultado del estudio espectrofotométrico.", "Porque el líquido se vuelve inflamable al contacto con fotones."],
    correct: 1
  },
  {
    id: 97,
    question: "¿Qué tipo de contenedor se debe utilizar para recolectar líquido amniótico destinado a estudios citogenéticos (cultivo celular)?",
    options: ["Tubos de vidrio transparente esterilizados al calor seco prolongado.", "Tubos o frascos de plástico estériles (el vidrio puede provocar que las células fetales se adhieran a las paredes, reduciendo el rendimiento del cultivo).", "Bolsas de suero común no estériles."],
    correct: 1
  },
  {
    id: 98,
    question: "¿Qué es el \"Cribado Prenatal del Primer Trimestre\" y qué marcadores bioquímicos séricos maternos incluye principalmente?",
    options: ["Es una evaluación de orina de 24 horas que mide creatinina y urea.", "Es una prueba de tamizaje no invasiva que mide en sangre materna la proteína plasmática A asociada al embarazo (PAPP-A) y la subunidad beta libre de la gonadotropina coriónica humana (fß-hCG), combinada con la ecografía de translucencia nucal.", "Una biopsia hepática de la gestante."],
    correct: 1
  },
  {
    id: 99,
    question: "¿Qué niveles de marcadores en el cribado del primer trimestre sugieren un riesgo aumentado de Trisomía 21 (Síndrome de Down)?",
    options: ["Niveles elevados de PAPP-A y niveles indetectables de hCG.", "Niveles disminuidos de PAPP-A y niveles elevados de fß-hCG libre.", "Ambos marcadores elevados al triple de lo normal de forma simétrica."],
    correct: 1
  },
  {
    id: 100,
    question: "¿Qué componentes integran el \"Triple Screening\" o \"Triple Marcador\" del segundo trimestre realizado en suero materno?",
    options: ["Glucosa, colesterol y triglicéridos fetales.", "Alfa-fetoproteína (AFP), Gonadotropina Coriónica Humana (hCG) y Estriol Libre (uE3).", "Progesterona, prolactina y hormona del crecimiento."],
    correct: 1
  },
  {
    id: 101,
    question: "¿Qué alteración en los niveles del cuádruple screening (añadiendo Inhibina A) se asocia típicamente a un riesgo elevado de Síndrome de Down en el segundo trimestre?",
    options: ["AFP y estriol libre elevados, con hCG e inhibina A disminuidas.", "AFP y estriol libre disminuidos, con hCG e inhibina A elevadas.", "Todos los marcadores disminuidos uniformemente a cero."],
    correct: 1
  },
  {
    id: 102,
    question: "¿Qué significa un hallazgo de Alfa-fetoproteína (AFP) marcadamente ELEVADA tanto en el suero materno como en el líquido amniótico durante el segundo trimestre?",
    options: ["Alto riesgo de Síndrome de Down fetal.", "Defectos abiertos del tubo neural del feto (ej. Anencefalia, espina bífida abierta) o defectos de la pared abdominal (onfalocele).", "Retraso mental idiopático sin daño anatómico."],
    correct: 1
  },
  {
    id: 103,
    question: "¿Qué técnica moderna permite detectar anomalías cromosómicas fetales analizando fragmentos de material genético que circulan en el plasma de la madre a partir de la semana 10?",
    options: ["Cariotipo por bandas G clásico en sangre materna.", "Prueba de ADN fetal libre en sangre materna (cfDNA - Non-Invasive Prenatal Testing - NIPT).", "Reacción inmunoquímica de aglutinación simple."],
    correct: 1
  },
  {
    id: 104,
    question: "¿Cuál es el método tradicional definitivo (Estándar de Oro) para visualizar el mapa de cromosomas fetales completo a partir de células obtenidas por amniocentesis?",
    options: ["Espectrofotometría Delta OD450.", "Cultivo celular y Cariotipo Citogenético Convencional (con bandeo cromosómico).", "Determinación enzimática de la acetilcolinesterasa."],
    correct: 1
  },
  {
    id: 105,
    question: "¿Qué limitación principal posee el cariotipo citogenético clásico en líquido amniótico?",
    options: ["Es una prueba muy económica pero poco específica.", "Requiere cultivo celular prolongado, por lo que los resultados tardan generalmente de 10 a 14 días (tiempo de espera largo).", "No detecta el sexo del feto bajo ninguna circunstancia."],
    correct: 1
  },
  {
    id: 106,
    question: "¿Qué técnica de citogenética molecular (basada en sondas fluorescentes de ADN) permite detectar rápidamente (en 24-48 horas) las trisomías más comunes (13, 18, 21) en células de líquido amniótico sin necesidad de cultivo celular completo?",
    options: ["Electroforesis en gel de poliacrilamida.", "Hibridación in situ con fluorescencia (FISH) o QF-PCR.", "Inmunocomplejos de látex modificado."],
    correct: 1
  },
  {
    id: 107,
    question: "¿Qué diagnóstico genético se confirma al encontrar un cariotipo fetal reportado formalmente como 47, XX, +21?",
    options: ["Síndrome de Turner en un feto femenino.", "Síndrome de Down (Trisomía 21) en un feto femenino.", "Síndrome de Edwards en un feto masculino."],
    correct: 1
  },
  {
    id: 108,
    question: "¿Qué fórmula cromosómica reporta un Cariotipo compatible con el Síndrome de Edwards (Trisomía 18) en un feto masculino?",
    options: ["45, X.", "47, XY, +18.", "47, XX, +13."],
    correct: 1
  },
  {
    id: 109,
    question: "¿Qué alteración molecular o cromosómica se asocia al Síndrome de Patau?",
    options: ["Una monosomía del cromosoma X.", "Una trisomía del cromosoma 13 (47, XX o XY, +13).", "Una deleción del brazo corto del cromosoma 5."],
    correct: 1
  },
  {
    id: 110,
    question: "¿Qué enzima específica del tejido nervioso se mide en líquido amniótico para confirmar un defecto abierto del tubo neural cuando la Alfa-fetoproteína dio un resultado dudoso o elevado?",
    options: ["Lactato deshidrogenasa pancreática.", "Acetilcolinesterasa (AChE).", "Creatina quinasa miocárdica (CK-MB)."],
    correct: 1
  },
  {
    id: 111,
    question: "¿Qué patología fetal cursa con destrucción de eritrocitos fetales por anticuerpos IgG maternos que cruzan la placenta, provocando anemia, ictericia y elevación de bilirrubina en líquido amniótico?",
    options: ["Fibrosis quística transplacentaria.", "Enfermedad Hemolítica del Recién Nacido (Eritroblastosis Fetal) por incompatibilidad Rh o ABO.", "Síndrome de Down descompensado."],
    correct: 1
  },
  {
    id: 112,
    question: "¿Qué método analítico físico se utiliza en líquido amniótico para evaluar la gravedad de la enfermedad hemolítica perinatal midiendo la concentración de bilirrubina?",
    options: ["Espectrofotometría de barrido continuo midiendo la absorbancia a 450 nm (Delta OD450), graficada en el Gráfico de Liley o Queenan.", "Gasometría arterial fetal directa.", "Cromatografía de gases acoplada a masas líquidas."],
    correct: 0
  },
  {
    id: 113,
    question: "¿A qué longitud de onda exacta absorbe la luz de forma máxima el pigmento de la bilirrubina libre en los estudios espectrofotométricos de líquido amniótico?",
    options: ["280 nm.", "450 nm.", "650 nm."],
    correct: 1
  },
  {
    id: 114,
    question: "¿Qué herramienta gráfica clásica divide los resultados de la Delta OD450 en tres zonas (Zona I riesgo bajo, Zona II riesgo moderado, Zona III afectación severa/muerte fetal inminente) según las semanas de gestación?",
    options: ["Gráfico de Criterios de Light modificado.", "Gráfico de Liley.", "Curva de tolerancia a la glucosa de O'Sullivan."],
    correct: 1
  },
  {
    id: 115,
    question: "¿Cuál es el color y aspecto normal del líquido amniótico a término (cercano al parto)?",
    options: ["Completamente negro y espeso.", "Blanquecino, turbio u opalescente debido a la presencia de vernix caseosa (grasa cutánea) y células epiteliales fetales descamadas.", "Rojo brillante con coágulos masivos."],
    correct: 1
  },
  {
    id: 116,
    question: "¿Qué indica una coloración verde oscura y consistencia viscosa en el líquido amniótico (Líquido Meconial)?",
    options: ["Una madurez renal fetal perfecta sin complicaciones.", "Expulsión de meconio (primeras heces fetales), lo que denota sufrimiento fetal agudo (hipoxia) o postmadurez, con riesgo de síndrome de aspiración meconial.", "Presencia de infección masiva por levaduras únicamente."],
    correct: 1
  },
  {
    id: 117,
    question: "¿Qué sugiere una coloración rojo vinoso o marrón oscuro (líquido sanguinolento antiguo o achocolatado) en una amniocentesis?",
    options: ["Feto macrosómico en perfecto estado de salud.", "Muerte fetal intrauterina (feto muerto y macerado).", "Embarazo múltiple normal de primer orden."],
    correct: 1
  },
  {
    id: 118,
    question: "¿Qué se sospecha si el líquido amniótico presenta un aspecto purulento y un olor fétido intenso?",
    options: ["Corioamnionitis (infección intraamniótica bacteriana grave).", "Madurez pulmonar acelerada artificialmente.", "Diabetes gestacional perfectamente controlada."],
    correct: 0
  },
  {
    id: 119,
    question: "¿Por qué es fundamental realizar un diagnóstico bioquímico rápido ante la sospecha de Corioamnionitis?",
    options: ["Para evitar el nacimiento del feto antes de la semana 42 de forma obligatoria.", "Porque la infección pone en riesgo inmediato la vida tanto de la madre (sepsis) como del feto; niveles bajos de glucosa (<14 mg/dL) y cultivo/Gram positivo en líquido amniótico confirman la patología.", "Porque altera el color de los guantes del obstetra de forma irreversible."],
    correct: 1
  },
  {
    id: 120,
    question: "¿Por qué es crucial evaluar la madurez pulmonar fetal en embarazos con riesgo de parto pretérmino?",
    options: ["Para predecir el color de ojos definitivo del neonato.", "Para prevenir el Síndrome de Dificultad Respiratoria (SDR) o Enfermedad de Membrana Hialina, causada por la deficiencia de surfactante pulmonar en alvéolos fetales inmaduros.", "Para asegurar que el feto tenga una deglución normal al nacer."],
    correct: 1
  },
  {
    id: 121,
    question: "¿Qué es el surfactante pulmonar y cuál es su función biofísica principal en los pulmones del recién nacido?",
    options: ["Es una enzima digestiva que degrada las proteínas de la saliva.", "Es una mezcla compleja de fosfolípidos y proteínas que reduce la tensión superficial alveolar, evitando el colapso de los alvéolos durante la espiración.", "Es un anticuerpo circulante de tipo IgM protector contra virus respiratorios."],
    correct: 1
  },
  {
    id: 122,
    question: "¿Cuál es el lípido/fosfolípido surfactante cuantitativamente más abundante y activo en el sistema pulmonar maduro?",
    options: ["Esfingomielina lineal pura.", "Dipalmitoilfosfatidilcolina (Lecitina).", "Colesterol libre cristalizado."],
    correct: 1
  },
  {
    id: 123,
    question: "¿Qué método analítico rápido (Prueba biofísica) evalúa la capacidad del surfactante de mantener una espuma estable en presencia de etanol al 95%?",
    options: ["Recuento de cuerpos lamelares en contador hematológico.", "Prueba de Estabilidad de la Espuma (Test de Foam / Test de Clements).", "Espectrofotometría Delta OD450."],
    correct: 1
  },
  {
    id: 124,
    question: "¿En qué estructuras celulares (almacenamiento concéntrico de surfactante) se basa el recuento analítico automatizado para evaluar la madurez pulmonar fetal utilizando el canal de plaquetas de un contador celular común?",
    options: ["En los quilomicrones de alta densidad circulantes.", "En los Cuerpos Lamelares (secretados por los neumocitos tipo II al líquido amniótico, que poseen un tamaño similar al de las plaquetas).", "En los núcleos expulsados de los eritroblastos."],
    correct: 1
  },
  {
    id: 125,
    question: "¿Qué valor en el recuento de cuerpos lamelares indica una madurez pulmonar fetal adecuada según los consensos bioquímicos?",
    options: ["Un recuento menor a 5,000 cuerpos/µL.", "Un recuento mayor o igual a 30,000 a 50,000 cuerpos/µL.", "Exclusivamente cuando da un valor negativo o cero."],
    correct: 1
  },
  {
    id: 126,
    question: "¿Cómo se diferencia con total certeza analítica el líquido amniótico de la orina materna en casos de sospecha de rotura de membranas?",
    options: ["La orina posee concentraciones extremadamente elevadas de urea y creatinina en comparación con el líquido amniótico; en líquido amniótico la creatinina es generalmente <2 mg/dL, mientras que en la orina la creatinina es > 4 mg/dL.", "Ambos fluidos poseen exactamente los mismos componentes químicos sin distinción.", "Ninguno posee valores medibles de analitos nitrogenados."],
    correct: 0
  },
  {
    id: 127,
    question: "¿Qué dos fosfolípidos se miden en líquido amniótico para evaluar la madurez pulmonar fetal a las 33 semanas?",
    options: ["Triglicéridos y quilomicrones de alta densidad.", "Lecitina y esfingomielina (Relación L/S).", "Ácido úrico y lactato deshidrogenasa."],
    correct: 1
  },
  {
    id: 128,
    question: "¿Qué valor de la relación Lecitina/Esfingomielina (L/S) indica que el sistema pulmonar fetal está maduro?",
    options: ["Una relación menor a 1.0.", "Una relación igual o mayor a 2.0.", "Únicamente cuando la relación da exactamente cero."],
    correct: 1
  },
  {
    id: 129,
    question: "¿Qué otro fosfolípido surfactante promueve la propagación alveolar y aparece en líquido amniótico a las 35 semanas indicando madurez?",
    options: ["El fosfatidilglicerol.", "El colesterol libre cristalizado.", "La bilirrubina conjugada."],
    correct: 0
  },
  {
    id: 130,
    question: "¿Por qué es de suma importancia proteger la muestra de líquido amniótico de la luz cuando se determina bilirrubina para evaluar la enfermedad hemolítica?",
    options: ["Porque la bilirrubina es fotosensible y se destruye rápidamente por la luz, disminuyendo falsamente su valor.", "Porque la luz induce la cristalización instantánea de las proteínas amnióticas.", "Porque la luz provoca la proliferación de bacterias termófilas de forma masiva."],
    correct: 0
  },
  {
    id: 131,
    pregunta: "¿Cuál es el tiempo aproximado necesario para la elaboración y transferencia de espermatozoides antes de la eyaculación?",
    opciones: [
      "1 mes",
      "Casi 3 meses",
      "15 días",
      "6 meses"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 132,
    pregunta: "¿Cuál es el orden correcto de las vías excretoras que recorre el semen tras el canal eyaculador?",
    opciones: [
      "Uretra peneana, membranosa y prostática",
      "Uretra prostática, peneana y membranosa",
      "Uretra prostática, membranosa y peneana",
      "Uretra membranosa, prostática y peneana"
    ],
    respuestaCorrecta: "c"
  },
  {
    id: 133,
    pregunta: "¿Qué glándulas aportan aproximadamente 0.2 ml a la secuencia eyaculadora inicial?",
    opciones: [
      "Vesículas seminales",
      "Próstata",
      "Glándulas de Littré y bulbo-ureterales",
      "Ampolla epididimaria"
    ],
    respuestaCorrecta: "c"
  },
  {
    id: 134,
    pregunta: "¿Cuál es el volumen normal promedio de una muestra de semen obtenida por masturbación?",
    opciones: [
      "1 a 2 ml",
      "3 ml (rango 2 a 6 ml)",
      "10 ml",
      "0.5 a 1.5 ml"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 135,
    pregunta: "¿En qué rango de tiempo se produce normalmente la licuación del semen a temperatura de laboratorio (18 a 25°C)?",
    opciones: [
      "Inmediatamente",
      "Entre 5 y 20 minutos",
      "Después de 1 hora",
      "45 minutos"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 136,
    pregunta: "¿Cuál es la densidad normal del semen según la guía?",
    opciones: [
      "1.000 a 1.002 g/ml",
      "1.010 a 1.020 g/ml",
      "1.002 a 1.004 g/ml",
      "1.050 g/ml"
    ],
    respuestaCorrecta: "c"
  },
  {
    id: 137,
    pregunta: "El pH normal del semen es ligeramente alcalino, situándose entre:",
    opciones: [
      "6.5 y 7.0",
      "7.2 y 7.8",
      "8.0 y 8.5",
      "5.5 y 6.0"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 138,
    pregunta: "¿Cuál es el ion que presenta una elevada concentración en el semen y es de origen exclusivamente prostático?",
    opciones: [
      "Calcio (Ca)",
      "Magnesio (Mg)",
      "Zinc (Zn)",
      "Sodio (Na)"
    ],
    respuestaCorrecta: "c"
  },
  {
    id: 139,
    pregunta: "En comparación con el suero sanguíneo, la concentración de Sodio (Na) en el semen es:",
    opciones: [
      "Mayor",
      "Igual",
      "Menor",
      "El doble"
    ],
    respuestaCorrecta: "c"
  },
  {
    id: 140,
    pregunta: "¿Cuál es el azúcar considerado la principal fuente energética de los espermatozoides?",
    opciones: [
      "Glucosa",
      "Fructosa",
      "Sacarosa",
      "Maltosa"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 141,
    pregunta: "¿Qué tipo de correlación existe entre la concentración de fructosa y la movilidad espermática?",
    opciones: [
      "Correlación positiva",
      "No existe correlación",
      "Correlación negativa",
      "Correlación directa"
    ],
    respuestaCorrecta: "c"
  },
  {
    id: 142,
    pregunta: "¿Qué glándula es the principal responsable de la secreción de citrato (ácido cítrico) en el semen?",
    opciones: [
      "Vesículas seminales",
      "Próstata",
      "Glándula de Littré",
      "Testículos"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 143,
    pregunta: "El valor de referencia del ácido cítrico en el semen es de:",
    opciones: [
      "10 a 50 mg/dl",
      "180 a 840 mg/dl",
      "1000 mg/dl",
      "5 a 15 mg/dl"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 144,
    pregunta: "¿Qué compuesto lipídico participa en la conservación de los espermatozoides y se encuentra en el semen?",
    opciones: [
      "Colesterol",
      "Triglicéridos",
      "Lecitinas",
      "Esfingomielina"
    ],
    respuestaCorrecta: "c"
  },
  {
    id: 145,
    pregunta: "La hidrólisis de la glicerofosforilcolina permite identificar manchas de esperma mediante la formación de:",
    opciones: [
      "Cristales de Charcot",
      "Cristales de Florencia",
      "Cristales de oxalato",
      "Cristales de ácido úrico"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 146,
    pregunta: "¿Qué función principal desempeña la carnitina en el semen?",
    opciones: [
      "Aportar color al semen",
      "Maduración y adquisición de potencial para la movilidad",
      "Actuar como agente oxidante",
      "Regular el pH alcalino"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 147,
    pregunta: "¿Qué cristales se forman espontáneamente por la oxidación de la espermina cuando el semen se deja en un portaobjetos?",
    opciones: [
      "Cristales de Florencia",
      "Cristales de Charcot",
      "Cristales de colesterol",
      "Cristales de fosfato"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 148,
    pregunta: "En casos de patología prostática (prostatitis), ¿qué fracción proteica suele aumentar en la electroforesis?",
    opciones: [
      "Albúmina",
      "Alfa globulinas",
      "Gammaglobulinas",
      "Beta globulinas"
    ],
    respuestaCorrecta: "c"
  },
  {
    id: 149,
    pregunta: "¿Cuál es la vida media de las prostaglandinas en el plasma seminal?",
    opciones: [
      "1 a 3 minutos",
      "1 hora",
      "24 horas",
      "10 a 15 minutos"
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 150,
    pregunta: "¿Qué azúcar es el marcador más específico de la secreción de las vesículas seminales?",
    opciones: [
      "Glucosa",
      "Inositol",
      "Fructosa",
      "Sorbitol"
    ],
    respuestaCorrecta: "c"
  },
  {
    id: 151,
    pregunta: "La presencia de niveles nulos de fructosa y carnitina es indicativo de:",
    opciones: [
      "Prostatitis",
      "Agenesia vesículo-diferencial",
      "Infección bacteriana",
      "Hipertrofia prostática"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 152,
    pregunta: "¿Qué indica la presencia de una \"polinucleosis\" en el eyaculado?",
    opciones: [
      "Alta fertility",
      "Reacción inflamatoria o infección bacteriana",
      "Obstrucción de las vías",
      "Exceso de testosterona"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 153,
    pregunta: "El moco cervical se vuelve filamentoso y penetrable para los espermatozoides bajo la influencia de:",
    opciones: [
      "Progesterona",
      "Estrógenos",
      "Testosterona",
      "Cortisol"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 154,
    pregunta: "¿Qué hormona transforma el moco cervical, espesándolo y provocando la desaparición de su filancia?",
    opciones: [
      "Estradiol",
      "LH",
      "Progesterona",
      "FSH"
    ],
    respuestaCorrecta: "c"
  },
  {
    id: 155,
    pregunta: "La prueba que aprecia la velocidad ascensional de los espermatozoides a través del moco cervical se denomina:",
    opciones: [
      "Prueba de Papanicolaou",
      "Prueba de Sims Hubner",
      "Prueba de Florencia",
      "Técnica de Giemsa"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 156,
    pregunta: "¿Cuál es el pH óptimo del moco cervical para favorecer la migración espermática?",
    opciones: [
      "4.0 a 5.0",
      "7.0 a 8.5",
      "9.0 a 10.0",
      "6.0 a 6.5"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 157,
    pregunta: "¿Qué longitud alcanza habitualmente el \"hilo\" del moco cervical (filosidad) el día de la ovulación?",
    opciones: [
      "1 cm",
      "8 cm",
      "20 cm",
      "3 cm"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 158,
    pregunta: "Gracias a la glucosa en el moco cervical, ¿cuánto tiempo pueden sobrevivir los espermatozoides por término medio?",
    opciones: [
      "2 a 4 horas",
      "12 horas",
      "24 a 48 horas",
      "7 días"
    ],
    respuestaCorrecta: "c"
  },
  {
    id: 159,
    pregunta: "¿Qué proteína del moco cervical tiene la función de proteger la cavidad uterina frente a bacterias?",
    opciones: [
      "Albúmina",
      "Lactoferrina",
      "Mucina",
      "Hemoglobina"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 160,
    pregunta: "Un color rojo o castaño en el semen es indicativo de:",
    opciones: [
      "Piospermia",
      "Hemospermia",
      "Astenozoospermia",
      "Teratozoospermia"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 161,
    pregunta: "El término médico para designar la carencia total de semen es:",
    opciones: [
      "Azoospermia",
      "Hipospermia",
      "Aspermia",
      "Oligospermia"
    ],
    respuestaCorrecta: "c"
  },
  {
    id: 162,
    pregunta: "¿Cuál es la viscosidad (filancia) normal del semen medida con una varilla de vidrio?",
    opciones: [
      "1 a 2 mm",
      "5 a 10 mm",
      "50 mm",
      "0 mm"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 163,
    pregunta: "En el examen microscópico, el Grado 3 de motilidad corresponde a:",
    opciones: [
      "Movimiento inactivo",
      "Movimiento semiactivo",
      "Movimiento activo",
      "Movimiento de balanceo"
    ],
    respuestaCorrecta: "c"
  },
  {
    id: 164,
    pregunta: "Se considera un eyaculado normal cuando el porcentaje de espermatozoides móviles a los 30-60 minutos es del:",
    opciones: [
      "100%",
      "90% (aceptando hasta 70%)",
      "50%",
      "20%"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 165,
    pregunta: "La \"Prueba Vital\" que utiliza Eosina al 5% sirve para teñir:",
    opciones: [
      "Solo los espermatozoides vivos",
      "Solo los espermatozoides muertos",
      "El moco cervical",
      "Las bacterias presentes"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 166,
    pregunta: "¿Qué reactivo se utiliza en la técnica de Mcomber para inmovilizar a los espermatozoides y facilitar su recuento?",
    opciones: [
      "Alcohol al 70%",
      "Formol",
      "Agua destilada pura",
      "Ácido acético"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 167,
    pregunta: "En la medición de cantidad, si se realiza una dilución 1/10 y se cuentan 5 cuadrantes, se debe multiplicar por el Factor:",
    opciones: [
      "1",
      "2",
      "4",
      "10"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 168,
    pregunta: "La disminución de la cantidad de espermatozoides (por debajo de los valores normales) se denomina:",
    opciones: [
      "Azoospermia",
      "Oligozoospermia",
      "Piospermia",
      "Teratozoospermia"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 169,
    pregunta: "¿Cuál de las siguientes tinciones NO se menciona para el estudio de la morfología espermática?",
    opciones: [
      "Giemsa",
      "Papanicolaou",
      "Azul de metileno",
      "Tinción de Gram"
    ],
    respuestaCorrecta: "d"
  },
  {
    id: 170,
    pregunta: "Un espermatozoide normal consta de las siguientes partes:",
    opciones: [
      "Cabeza y cola únicamente",
      "Cabeza ovalada, cuello, segmento intermedio y cola",
      "Cabeza redonda, cuerpo y flagelo",
      "Núcleo y acrosoma solamente"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 171,
    pregunta: "¿Qué anomalía morfológica se describe como un espermatozoide con dos cabezas?",
    opciones: [
      "Macrocefálico",
      "Microcefálico",
      "Bicefálico",
      "Atípico"
    ],
    respuestaCorrecta: "c"
  },
  {
    id: 172,
    pregunta: "En la determinación de la capacidad fecundante, si la fertilidad es óptima, la decoloración del colorante se produce en:",
    opciones: [
      "5 minutos",
      "15 a 30 minutos",
      "60 minutos",
      "2 horas"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 173,
    pregunta: "¿Cuál es el valor de referencia para la Fructosa expresado en 100 ml de semen?",
    opciones: [
      "10 a 20 mg",
      "200 a 400 mg",
      "800 mg",
      "1 a 5 mg"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 174,
    pregunta: "El valor de referencia de la Fosfatasa Ácida en el semen es de:",
    opciones: [
      "100 a 500 U",
      "1000 a 2500 Unidades King Armstrong/mm",
      "0 U",
      "5000 U"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 175,
    pregunta: "¿Cuál es el valor de referencia del Ácido Ascórbico en 100 ml de semen?",
    opciones: [
      "10 a 13 mg",
      "100 mg",
      "1 mg",
      "50 mg"
    ],
    respuestaCorrecta: "a"
  },
  {
    id: 176,
    pregunta: "¿Qué marcador se utiliza para medir el grado de actividad hormonal en el semen?",
    opciones: [
      "Ácido cítrico",
      "Zinc",
      "Fructosa",
      "Magnesio"
    ],
    respuestaCorrecta: "c"
  },
  {
    id: 177,
    pregunta: "La técnica para medir la actividad de la fosfatasa ácida se basa en la liberación de:",
    opciones: [
      "Glucosa",
      "p-nitrofenol",
      "Aminoácidos",
      "Oxígeno"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 178,
    pregunta: "El aspecto del semen recién eyaculado es:",
    opciones: [
      "Homogéneo y transparente",
      "Heterogéneo",
      "Líquido como el agua",
      "Rojo intenso"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 179,
    pregunta: "¿Qué causa adquirida puede provocar azoospermia según el texto?",
    opciones: [
      "Consumo de vitaminas",
      "Procesos inflamatorios por gérmenes (gonococos, colibacilos)",
      "Exceso de ejercicio",
      "Dieta rica en azúcares"
    ],
    respuestaCorrecta: "b"
  },
  {
    id: 180,
    pregunta: "En el recuento total, el número de espermatozoides multiplicado por el volumen en ml da como resultado:",
    opciones: [
      "Espermatozoides por mm",
      "Espermatozoides totales en millones",
      "Porcentaje de movilidad",
      "Grado de viabilidad"
    ],
    respuestaCorrecta: "b"
  }
];

