const exoplanetas = [
//Primer lote de 4: 3 con alta supervivencia y el último con baja supervivencia (14%)
    {
        nombre: "11 Comae Berenices B",
        imagen: "11_Comae_Berenices b.png",
        consistencia: "Mayormente Gas Gigante",
        temperatura: "≈ -40°C", // Gigantes gaseosos suelen tener bajas temperaturas en su atmósfera superior
        liquido: "Posiblemente no", // Debido a su naturaleza gaseosa, no se espera líquido en la superficie
        propAdmosfericas: "Hidrógeno y Helio", // Los gigantes gaseosos suelen tener atmósferas dominadas por hidrógeno y helio
        campMagnetico: "Fuerte", // Gigantes gaseosos tienden a tener campos magnéticos considerables
        masaRadio: "15.464 veces la masa de Júpiter", // Basado en la masa dada
        distanciaTierra: "304 años luz",
        lunas: "1-10 ", 
        distanciaASuSol: "1.178 AU", // Información proporcionada
        OrbitaSol: "323.2 días",
        probSupervivencia: 59
      }
      ,
      {
        nombre: "BD+20 594 b",
        imagen: "BD+20_594_b.png", 
        consistencia: "Mayormente parecido a la tierra",
        temperatura: "≈ 15°C", 
        liquido: "Posiblemente si",
        propAdmosfericas: "Hidrógeno, Helio, Metano", 
        campMagnetico: "Moderado", 
        masaRadio: "22.2481 veces la masa de la Tierra",
        distanciaTierra: "585 años luz", 
        lunas: "0-5",
        distanciaASuSol:  "0.241 AU", // Proporcionado
        OrbitaSol: "41.7 días",
        probSupervivencia: 98 
      },
      {
        nombre: "DP Leonis b",
        imagen: "DP_Leonis_b.png",
        consistencia: "Mayormente Tierra",
        temperatura: "≈ -16°C",
        liquido: "Posiblemente",
        propAdmosfericas: "Hidrógeno y Helio",
        campMagnetico: "Moderado",
        masaRadio: "6.28 veces la masa de Júpiter",
        distanciaTierra: "997 años luz",
        lunas: "1-10",
        distanciaASuSol: "8.19 AU",
        OrbitaSol: "28 años",
        probSupervivencia: 72
      }
      ,
      {
        nombre: "GJ 86 b",
        imagen: "GJ 86 b.png",
        consistencia: "Mayormente Gas Gigante",
        temperatura: "≈ 150°C",
        liquido: "Posiblemente no",
        propAdmosfericas: "Hidrógeno y Helio",
        campMagnetico: "Moderado",
        masaRadio: "4.42 veces la masa de Júpiter",
        distanciaTierra: "35 años luz",
        lunas: "1-5",
        distanciaASuSol: "0.11 AU",
        OrbitaSol: "15.8 días",
        probSupervivencia: 14
      },
//Segundo lote 3 supervivencia alta y uno baja
      {
        nombre: "GJ 504 b",
        imagen: "GJ 504b.png",
        consistencia: "Parecido a Marte",
        temperatura: "≈ 70°C",
        liquido: "Posiblemente no",
        propAdmosfericas: "Hidrógeno, Helio y Vapor de Agua",
        campMagnetico: "Desconocido",
        masaRadio: "4.5 veces la masa de Júpiter",
        distanciaTierra: "57 años luz",
        lunas: "0-3",
        distanciaASuSol: "43.5 AU",
        OrbitaSol: "2.3 años",
        probSupervivencia: 69
      },
      {
        nombre: "GJ 3929 b",
        imagen: "GJ_3929_b.png",
        consistencia: "Mayormente Rocoso",
        temperatura: "≈ 70°C", // Temperatura aproximada adecuada para la vida en la zona habitable
        liquido: "Posiblemente sí", // Podría haber agua líquida en la superficie
        propAdmosfericas: "Nitrógeno y Oxígeno", // Composición atmosférica estimada
        campMagnetico: "Desconocido", // No se tiene información clara sobre el campo magnético
        masaRadio: "1.75 veces la masa de la Tierra", 
        distanciaTierra: "52 años luz",
        lunas: "1-3", // Estimación basada en su masa y características
        distanciaASuSol: "0.0252 AU", 
        OrbitaSol: "2.6 días",
        probSupervivencia: 90 
      },
    {
        nombre: "HD 220074 b",
        imagen: "HD 220074_b.png", 
        consistencia: "Mayormente Gas Gigante",
        temperatura: "≈ -130°C", // Un gigante gaseoso a 1.6 AU de un M-type star probablemente será frío
        liquido: "Posiblemente no", // Similar a otros gigantes gaseosos, no se espera que tenga líquidos en la superficie
        propAdmosfericas: "Hidrógeno y Helio", // Típico en gigantes gaseosos
        campMagnetico: "Fuerte", // Gigantes gaseosos tienden a tener campos magnéticos notables
        masaRadio: "16.64 veces la masa de Júpiter", // Basado en la información proporcionada
        distanciaTierra: "1058 años luz", // No se menciona, pero estimo cientos de años luz
        lunas: "1-10",
        distanciaASuSol: "1.6 AU", // Proporcionado
        OrbitaSol: "1.8 años", 
        probSupervivencia: 15
      },
        {
        nombre: "GJ 3929 c",
        imagen: "GJ_3929_c.png",
        consistencia: "Mayormente parecido a Neptuno",
        temperatura: "≈ -150°C", 
        liquido: "Posiblemente no", 
        propAdmosfericas: "Hidrógeno, Helio y Metano", 
        campMagnetico: "Moderado", 
        masaRadio: "5.71 veces la masa de la Tierra", 
        distanciaTierra: "52 años luz",
        lunas: "0-5", 
        distanciaASuSol: "0.081 AU", 
        OrbitaSol: "15 días",
        probSupervivencia: 28 
      },
//Tercer lote: los primeros 2 son supervivencia alta y los últimos 2 con baja
        {
            nombre: "HATS-74 A b",
            imagen: "HATS-74 A b.png",
            consistencia: "Mayormente Gas Gigante",
            temperatura: "≈ -200°C",
            liquido: "Posiblemente no", 
            propAdmosfericas: "Hidrógeno y Helio", 
            campMagnetico: "Fuerte", 
            masaRadio: "1.46 veces la masa de Júpiter", 
            distanciaTierra: "976 años luz",
            lunas: "0-3", 
            distanciaASuSol: "0.02384 AU", 
            OrbitaSol: "1.7 días",
            probSupervivencia: 3 
      },
      {
        nombre: "HD 56414 b",
        imagen: "HD 56414 b.png",
        consistencia: "Mayormente parecido a la Tierra",
        temperatura: "≈ -13°C", 
        liquido: "Posiblemente", 
        propAdmosfericas: "Hidrógeno, Helio, Oxigeno", 
        campMagnetico: "Moderado", 
        masaRadio: "13.3 veces la masa de la Tierra",
        distanciaTierra: "888 años luz",
        lunas: "0-5", 
        distanciaASuSol: "0.229 AU", 
        OrbitaSol: "29 días",
        probSupervivencia: 98 
    },
    {
        nombre: "HD 11977 b",
        imagen: "HD_11977_b.png",
        consistencia: "Mayormente Gas Gigante",
        temperatura: "≈ -110°C", 
        liquido: "Posiblemente no", 
        propAdmosfericas: "Hidrógeno y Helio", 
        campMagnetico: "Fuerte", 
        masaRadio: "6.54 veces la masa de Júpiter",
        distanciaTierra: "222 años luz",
        lunas: "1-10", 
        distanciaASuSol: "1.93 AU", 
        OrbitaSol: "1.9 años",
        probSupervivencia: 46
    },

    {
        nombre: "HD 69830 b",
        imagen: "HD_69830_b.png",
        consistencia: "Mayormente parecido a Neptuno",
        temperatura: "≈ -140°C", 
        liquido: "Posiblemente no", 
        propAdmosfericas: "Hidrógeno, Helio y Metano", 
        campMagnetico: "Moderado", 
        masaRadio: "10.2 veces la masa de la Tierra",
        distanciaTierra: "41 años luz",
        lunas: "0-5", 
        distanciaASuSol: "0.0785 AU", 
        OrbitaSol: "8.7 días",
        probSupervivencia: 2
    },
// cuarto lote: 2 con supervivencia alta y 2 baja, intercalado
    {
        nombre: "HD 73583 b",
        imagen: "HD_73583_b.png",
        consistencia: "Mayormente parecido a Marte",
        temperatura: "≈ -50°C", 
        liquido: "Posiblemente no", 
        propAdmosfericas: "Hidrógeno, Helio y Metano", 
        campMagnetico: "Moderado", 
        masaRadio: "10.2 veces la masa de la Tierra",
        distanciaTierra: "103 años luz",
        lunas: "0-5", 
        distanciaASuSol: "0.0604 AU", 
        OrbitaSol: "6.4 días",
        probSupervivencia: 70
    },
    {
        nombre: "HD 73583 c",
        imagen: "HD_73583_c.png",
        consistencia: "Mayormente Super Tierra",
        temperatura: "≈ 20°C", 
        liquido: "Posiblemente sí", 
        propAdmosfericas: "Nitrógeno y Oxígeno", 
        campMagnetico: "Moderado", 
        masaRadio: "9.7 veces la masa de la Tierra",
        distanciaTierra: "103 años luz",
        lunas: "1-3", 
        distanciaASuSol: "0.1242 AU", 
        OrbitaSol: "18.9 días",
        probSupervivencia: 99
    },
    {
        nombre: "HR 8799 b",
        imagen: "HR 8799b.png",
        consistencia: "Mayormente Gas Gigante",
        temperatura: "≈ -200°C", 
        liquido: "Posiblemente no", 
        propAdmosfericas: "Hidrógeno y Helio", 
        campMagnetico: "Fuerte", 
        masaRadio: "7 veces la masa de Júpiter",
        distanciaTierra: "135 años luz",
        lunas: "0-5", 
        distanciaASuSol: "68.0 AU", 
        OrbitaSol: "465.8 años",
        probSupervivencia: 6
    },
    // k2-53 JOSH
{
    nombre: "K2-53 b",
    imagen: "k2-53_b.png",
    consistencia: "Mayormente gaseoso (Super-Neptuno)",
    temperatura: "≈ 800°C",
    liquido: "Posiblemente no",
    propAdmosfericas: "Hidrógeno, Helio, posiblemente metales vaporizados",
    campMagnetico: "Moderado",
    masaRadio: "7.94 veces la masa de la Tierra, 3.77 veces el radio de la Tierra",
    distanciaTierra: "316 años luz",
    lunas: "0-3",
    distanciaASuSol: "0.0654 AU",
    OrbitaSol: "6.06 días",
    probSupervivencia: 5
  },
  //Quinto lote: 2 altos 2 bajas
  {
    nombre: "K2-141 b",
    imagen: "K2-141_b.png",
    consistencia: "Rocoso (Super-Tierra)",
    temperatura: "≈ 2000°C",
    liquido: "Posiblemente océanos de lava",
    propAdmosfericas: "Vapores de roca y metal",
    campMagnetico: "Débil",
    masaRadio: "5.08 veces la masa de la Tierra, 1.51 veces el radio de la Tierra",
    distanciaTierra: "202 años luz",
    lunas: "0",
    distanciaASuSol: "0.00716 AU",
    OrbitaSol: "0.28 días",
    probSupervivencia: 0
  },
  {
    nombre: "K2-141 c",
    imagen: "K2-141_c.png",
    consistencia: "Posiblemente rocoso (Super-Tierra)",
    temperatura: "≈ 60°C",
    liquido: "Posiblemente no",
    propAdmosfericas: "Delgada, posiblemente CO2, vapor de agua",
    campMagnetico: "Débil a moderado",
    masaRadio: "7.4 veces la masa de la Tierra",
    distanciaTierra: "202 años luz",
    lunas: "0-1",
    distanciaASuSol: "0.0712 AU",
    OrbitaSol: "7.75 días",
    probSupervivencia: 70
  },
  {
    nombre: "Kepler-68 b",
    imagen: "kepler-68_b.png",
    consistencia: "Rocoso (Super-Tierra)",
    temperatura: "≈ 1000°C",
    liquido: "Posiblemente no",
    propAdmosfericas: "Delgada, posiblemente CO2, vapores metálicos",
    campMagnetico: "Débil",
    masaRadio: "5.97 veces la masa de la Tierra, 2.32 veces el radio de la Tierra",
    distanciaTierra: "435 años luz",
    lunas: "0-1",
    distanciaASuSol: "0.0617 AU",
    OrbitaSol: "5.4 días",
    probSupervivencia: 32
  },
  {
    nombre: "Kepler-102 b",
    imagen: "Kepler-102_b.png",
    consistencia: "Rocoso (Tierra)",
    temperatura: "≈ 50°C",
    liquido: "Posiblemente no",
    propAdmosfericas: "Delgada, posiblemente CO2",
    campMagnetico: "Débil",
    masaRadio: "0.41 veces la masa de la Tierra, 0.47 veces el radio de la Tierra",
    distanciaTierra: "353 años luz",
    lunas: "0",
    distanciaASuSol: "0.055 AU",
    OrbitaSol: "5.29 días",
    probSupervivencia: 77
  },
  //Sexto lote: 1 alta y los demás no
  {
    nombre: "Kepler-1029 b",
    imagen: "Kepler-1029_b.png",
    consistencia: "Posiblemente rocoso (Super-Tierra)",
    temperatura: "≈ 300°C",
    liquido: "Posiblemente no",
    propAdmosfericas: "Desconocidas, posiblemente similares a Venus",
    campMagnetico: "Moderado",
    masaRadio: "Desconocida, 1.56 veces el radio de la Tierra",
    distanciaTierra: "1191 años luz",
    lunas: "0-2",
    distanciaASuSol: "0.304 AU",
    OrbitaSol: "82.2 días",
    probSupervivencia: 10
  },
  {
    nombre: "Kepler-1049 b",
    imagen: "Kepler-1049_b.png",
    consistencia: "Posiblemente rocoso (Super-Tierra)",
    temperatura: "≈ 200°C",
    liquido: "Posiblemente agua en estado gaseoso",
    propAdmosfericas: "Desconocidas, posiblemente CO2 y vapor de agua",
    campMagnetico: "Débil a moderado",
    masaRadio: "Desconocida, 1.65 veces el radio de la Tierra",
    distanciaTierra: "441 años luz",
    lunas: "0-2",
    distanciaASuSol: "0.186 AU",
    OrbitaSol: "39.6 días",
    probSupervivencia: 15
  },
  {
    nombre: "Kepler-1136 b",
    imagen: "kepler-1136B.png",
    consistencia: "Posiblemente gaseoso (Neptune-like)",
    temperatura: "≈ -50°C",
    liquido: "Posiblemente no en la superficie",
    propAdmosfericas: "Hidrógeno, Helio, posiblemente metano",
    campMagnetico: "Moderado a fuerte",
    masaRadio: "Desconocida, 3.19 veces el radio de la Tierra",
    distanciaTierra: "1825 años luz",
    lunas: "0-5",
    distanciaASuSol: "0.409 AU",
    OrbitaSol: "131.7 días",
    probSupervivencia: 20
  },
  {
    nombre: "Kepler-1423 b",
    imagen: "Kepler-1423 b.png",
    consistencia: "Posiblemente rocoso (Super-Tierra)",
    temperatura: "≈ 40°C",
    liquido: "Posiblemente",
    propAdmosfericas: "Desconocidas, posiblemente similares a Martes",
    campMagnetico: "Débil a moderado",
    masaRadio: "Desconocida, 1.82 veces el radio de la Tierra",
    distanciaTierra: "2598 años luz",
    lunas: "0-2",
    distanciaASuSol: "0.129 AU",
    OrbitaSol: "23.7 días",
    probSupervivencia: 86
  },
//Septimo lote
  {
    nombre: "Kepler-1448 b",
    imagen: "Kepler-1448_b.png",
    consistencia: "Posiblemente gaseoso",
    temperatura: "≈ 100°C",
    liquido: "Posiblemente no en la superficie",
    propAdmosfericas: "Hidrógeno, Helio, posiblemente agua y metano",
    campMagnetico: "Moderado",
    masaRadio: "Desconocida, 3.17 veces el radio de la Tierra",
    distanciaTierra: "1186 años luz",
    lunas: "0-5",
    distanciaASuSol: "0.378 AU",
    OrbitaSol: "95.1 días",
    probSupervivencia: 25
  },
  {
    nombre: "Kepler-1313 b",
    imagen: "Kepler-1313_b.png",
    consistencia: "Posiblemente rocoso (Super-Tierra)",
    temperatura: "≈ 300°C",
    liquido: "Posiblemente no",
    propAdmosfericas: "Desconocidas, posiblemente CO2 y vapor de agua",
    campMagnetico: "Débil a moderado",
    masaRadio: "Desconocida, 1.82 veces el radio de la Tierra",
    distanciaTierra: "2723 años luz",
    lunas: "0-2",
    distanciaASuSol: "0.206 AU",
    OrbitaSol: "46.1 días",
    probSupervivencia: 19
  },
  {
    nombre: "MOA-2008-BLG-379L b",
    imagen: "MOA-2008-BLG-379L b.png",
    consistencia: "Probablemente gaseoso (Júpiter frío)",
    temperatura: "≈ -220°C",
    liquido: "Posiblemente no en la superficie",
    propAdmosfericas: "Hidrógeno y Helio principalmente",
    campMagnetico: "Probablemente fuerte",
    masaRadio: "4.1 veces la masa de Júpiter",
    distanciaTierra: "3000 años luz",
    lunas: "Desconocido, posiblemente varias",
    distanciaASuSol: "2.7 AU",
    OrbitaSol: "≈ 3.3 años",
    probSupervivencia: 55
  },
  {
    nombre: "MOA-2013-BLG-605L b",
    imagen: "MOA-2013-BLG-605L b.png",
    consistencia: "Probablemente rocoso (Super-Tierra)",
    temperatura: "Desconocida, probablemente fría",
    liquido: "Desconocido",
    propAdmosfericas: "Desconocidas",
    campMagnetico: "Desconocido",
    masaRadio: "3.2 veces la masa de la Tierra",
    distanciaTierra: "Desconocida, varios miles de años luz",
    lunas: "Desconocido",
    distanciaASuSol: "1.5 AU",
    OrbitaSol: "Desconocido",
    probSupervivencia: 77
  },
  //octavo
  {
    nombre: "MWC 758 c",
    imagen: "MWC_758_c.png",
    consistencia: "Probablemente gaseoso (Júpiter caliente)",
    temperatura: "≈ 1000°C",
    liquido: "Posiblemente no en la superficie",
    propAdmosfericas: "Hidrógeno, Helio, posiblemente metales vaporizados",
    campMagnetico: "Probablemente fuerte",
    masaRadio: "6.29 veces la masa de Júpiter",
    distanciaTierra: "489 años luz",
    lunas: "Desconocido, probablemente ninguna debido a la proximidad a su estrella",
    distanciaASuSol: "1.5 AU",
    OrbitaSol: "≈ 2 años",
    probSupervivencia: 0
  },
  {
    nombre: "OGLE-2011-BLG-0251L b",
    imagen: "OGLE-2011-BLG-0251L b.png",
    consistencia: "Gaseoso (Similar a Saturno)",
    temperatura: "≈ -150°C",
    liquido: "Posiblemente no en la superficie",
    propAdmosfericas: "Hidrógeno y Helio principalmente",
    campMagnetico: "Probablemente moderado",
    masaRadio: "0.53 veces la masa de Júpiter",
    distanciaTierra: "4090 años luz",
    lunas: "Desconocido, posiblemente varias",
    distanciaASuSol: "2.72 AU",
    OrbitaSol: "≈ 4.9 años",
    probSupervivencia: 33
  },
  {
    nombre: "PSR B1257+12 b",
    imagen: "PSR_B1257+12B.png",
    consistencia: "Probablemente rocoso",
    temperatura: "Desconocida, probablemente  fría",
    liquido: "Probablemente",
    propAdmosfericas: "Probablemente sin atmósfera significativa",
    campMagnetico: "Débil",
    masaRadio: "0.02 veces la masa de la Tierra",
    distanciaTierra: "2300 años luz",
    lunas: "0",
    distanciaASuSol: "0.19 AU",
    OrbitaSol: "25.3 días",
    probSupervivencia: 87
  },
  {
    nombre: "PSR B1257+12 c",
    imagen: "PSR_B1257+12C.png",
    consistencia: "Probablemente rocoso",
    temperatura: "Desconocida, probablemente muy fría",
    liquido: "Probablemente no",
    propAdmosfericas: "Probablemente tenue, si existe",
    campMagnetico: "Débil a moderado",
    masaRadio: "4.3 veces la masa de la Tierra",
    distanciaTierra: "2300 años luz",
    lunas: "0-1",
    distanciaASuSol: "0.36 AU",
    OrbitaSol: "66.5 días",
    probSupervivencia: 22
  },
//Noveno lote
  {
    nombre: "PSR B1257+12 d",
    imagen: "PSR_B1257+12D.png",
    consistencia: "Probablemente rocoso",
    temperatura: "Desconocida, probablemente muy fría",
    liquido: "Probablemente no",
    propAdmosfericas: "Probablemente tenue, si existe",
    campMagnetico: "Débil a moderado",
    masaRadio: "3.9 veces la masa de la Tierra",
    distanciaTierra: "2300 años luz",
    lunas: "0-1",
    distanciaASuSol: "0.46 AU",
    OrbitaSol: "98.2 días",
    probSupervivencia: 10
  },
  {
    nombre: "TOI 700",
    imagen: "TOI_700.png",
    consistencia: "Probablemente rocoso",
    temperatura: "≈ -15°C (estimado)",
    liquido: "Posiblemente agua líquida",
    propAdmosfericas: "Desconocidas, posiblemente similares a la Tierra",
    campMagnetico: "Desconocido",
    masaRadio: "1.72 veces el radio de la Tierra",
    distanciaTierra: "101.4 años luz",
    lunas: "Desconocido",
    distanciaASuSol: "0.163 AU",
    OrbitaSol: "37.4 días",
    probSupervivencia: 89
  },
  {
    nombre: "TOI-5634 A b",
    imagen: "TOI-5634 A b.png",
    consistencia: "Rocoso (Super-Tierra)",
    temperatura: "≈ 350°C",
    liquido: "Probablemente no",
    propAdmosfericas: "Desconocidas, posiblemente similar a Venus",
    campMagnetico: "Desconocido, probablemente débil",
    masaRadio: "4.9 veces la masa de la Tierra, 2.06 veces el radio de la Tierra",
    distanciaTierra: "55.2 años luz",
    lunas: "Desconocido, probablemente 0",
    distanciaASuSol: "0.04936 AU",
    OrbitaSol: "5.95 días",
    probSupervivencia: 44
  },
  {
    nombre: "NY Virginis b",
    imagen: "NY virginis b.png",
    consistencia: "Mayormente Gas Gigante",
    temperatura: "≈ -100°C", 
    liquido: "Posiblemente no", 
    propAdmosfericas: "Hidrógeno y Helio", 
    campMagnetico: "Fuerte", 
    masaRadio: "2.3 veces la masa de Júpiter",
    distanciaTierra: "1774 años luz",
    lunas: "0-5", 
    distanciaASuSol: "3.3 AU", 
    OrbitaSol: "8.7 años",
    probSupervivencia: 1 
}

      
  ];
  
  export default exoplanetas;
  