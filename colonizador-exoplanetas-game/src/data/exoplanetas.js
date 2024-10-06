const exoplanetas = [
  {
    nombre: "55 Cnc e",
    NumeroDeEstrellas: "2",
    NumeroDeLunas: "0",
    PeriodoOrbital: "0.7365474",
    RadioDelPlaneta: "1.875",
    DensidadDelPlaneta: "6.66",
    FlujoDeInsolacion: "2657.83",
    TermperaturaDeEquilibrio: "1958.0",
    MasaEstelar: "0.91",
    LuminosidadEstelar: "-0.197",
    MovimientoPropioTotal: "539.1329986",
    Distancia: "12.5855",
    imagen: "11_Comae_Berenices b.png",
    probabilidadDeSupervivencia: "Si",
  },
  {
    nombre: "AU Mic b",
    NumeroDeEstrellas: "1",
    NumeroDeLunas: "0",
    PeriodoOrbital: "8.4629991",
    RadioDelPlaneta: "3.957",
    DensidadDelPlaneta: "1.32",
    FlujoDeInsolacion: "21.2",
    TermperaturaDeEquilibrio: "600.0",
    MasaEstelar: "0.5",
    LuminosidadEstelar: "-0.99",
    MovimientoPropioTotal: "456.8630854",
    Distancia: "9.7221",
    imagen: "BD+20_594_b.png",
    probabilidadDeSupervivencia: "No"
  },
  {
    nombre: "AU Mic c",
    NumeroDeEstrellas: "1",
    NumeroDeLunas: "0",
    PeriodoOrbital: "18.858991",
    RadioDelPlaneta: "3.24",
    DensidadDelPlaneta: "1.22",
    FlujoDeInsolacion: "7.3",
    TermperaturaDeEquilibrio: "459.0",
    MasaEstelar: "0.5",
    LuminosidadEstelar: "-0.99",
    MovimientoPropioTotal: "456.8630854",
    Distancia: "9.7221",
    imagen: "GJ 86 b.png",
    probabilidadDeSupervivencia: 60
  },
  {
    nombre: "BD-14 3065 b",
    NumeroDeEstrellas: "3",
    NumeroDeLunas: "0",
    PeriodoOrbital: "4.2889731",
    RadioDelPlaneta: "21.59",
    DensidadDelPlaneta: "2.15",
    FlujoDeInsolacion: "646.76",
    TermperaturaDeEquilibrio: "2001.0",
    MasaEstelar: "1.41",
    LuminosidadEstelar: "1.06",
    MovimientoPropioTotal: "9.0305658",
    Distancia: "589.423",
    imagen: "GJ 504b.png",
    probabilidadDeSupervivencia: 50
  },
  {
    nombre: "CD Cet b",
    NumeroDeEstrellas: "1",
    NumeroDeLunas: "0",
    PeriodoOrbital: "2.2907",
    RadioDelPlaneta: "1.82",
    DensidadDelPlaneta: "3.6",
    FlujoDeInsolacion: "8.6",
    TermperaturaDeEquilibrio: "464.0",
    MasaEstelar: "0.16",
    LuminosidadEstelar: "-2.533",
    MovimientoPropioTotal: "1743.982574",
    Distancia: "8.60715",
    imagen: "GJ_3929_b.png",
    probabilidadDeSupervivencia: 55
  },
  {
    nombre: "CoRoT-1 b",
    NumeroDeEstrellas: "1",
    NumeroDeLunas: "0",
    PeriodoOrbital: "1.5089557",
    RadioDelPlaneta: "16.7",
    DensidadDelPlaneta: "0.38",
    FlujoDeInsolacion: "2852.63",
    TermperaturaDeEquilibrio: "1898.0",
    MasaEstelar: "0.95",
    LuminosidadEstelar: "0.298",
    MovimientoPropioTotal: "6.039454",
    Distancia: "787.909",
    imagen: "GJ_3929_c.png",
    probabilidadDeSupervivencia: 45
  },
  {
    nombre: "CoRoT-11 b",
    NumeroDeEstrellas: "1",
    NumeroDeLunas: "0",
    PeriodoOrbital: "2.99433",
    RadioDelPlaneta: "16.03",
    DensidadDelPlaneta: "0.99",
    FlujoDeInsolacion: "1890.65",
    TermperaturaDeEquilibrio: "1657.0",
    MasaEstelar: "1.27",
    LuminosidadEstelar: "0.378",
    MovimientoPropioTotal: "5.5818875",
    Distancia: "655.037",
    imagen: "HATS-74 A b.png",
    probabilidadDeSupervivencia: 40
  },
  {
    nombre: "CoRoT-12 b",
    NumeroDeEstrellas: "1",
    NumeroDeLunas: "0",
    PeriodoOrbital: "2.828042",
    RadioDelPlaneta: "16.14",
    DensidadDelPlaneta: "0.411",
    FlujoDeInsolacion: "661.13",
    TermperaturaDeEquilibrio: "1442.0",
    MasaEstelar: "1.08",
    LuminosidadEstelar: "0.07",
    MovimientoPropioTotal: "3.8659215",
    Distancia: "1126.37",
    imagen: "HD 56414 b.png",
    probabilidadDeSupervivencia: 65
  },
  {
    nombre: "CoRoT-13 b",
    NumeroDeEstrellas: "1",
    NumeroDeLunas: "0",
    PeriodoOrbital: "4.03519",
    RadioDelPlaneta: "9.92",
    DensidadDelPlaneta: "2.34",
    FlujoDeInsolacion: "546.53",
    TermperaturaDeEquilibrio: "1700.0",
    MasaEstelar: "1.09",
    LuminosidadEstelar: "0.073",
    MovimientoPropioTotal: "3.6450532",
    Distancia: "1148.93",
    imagen: "HD 220074_b.png",
    probabilidadDeSupervivencia: 70
  },
  {
    nombre: "CoRoT-18 b",
    NumeroDeEstrellas: "1",
    NumeroDeLunas: "0",
    PeriodoOrbital: "1.9000693",
    RadioDelPlaneta: "14.68",
    DensidadDelPlaneta: "2.2",
    FlujoDeInsolacion: "823.7",
    TermperaturaDeEquilibrio: "1550.0",
    MasaEstelar: "0.95",
    LuminosidadEstelar: "-0.17",
    MovimientoPropioTotal: "4.0100233",
    Distancia: "764.889",
    imagen: "HD_11977_b.png",
    probabilidadDeSupervivencia: 60
  },
  {
    nombre: "CoRoT-19 b",
    NumeroDeEstrellas: "1",
    NumeroDeLunas: "0",
    PeriodoOrbital: "3.89713",
    RadioDelPlaneta: "14.46",
    DensidadDelPlaneta: "0.71",
    FlujoDeInsolacion: "1103.81",
    TermperaturaDeEquilibrio: "2000.0",
    MasaEstelar: "1.21",
    LuminosidadEstelar: "0.544",
    MovimientoPropioTotal: "7.6938008",
    Distancia: "790.663",
    imagen: "HD_69830_b.png",
    probabilidadDeSupervivencia: 55
  },
  {
    nombre: "CoRoT-2 b",
    NumeroDeEstrellas: "2",
    NumeroDeLunas: "0",
    PeriodoOrbital: "1.7429935",
    RadioDelPlaneta: "16.432",
    DensidadDelPlaneta: "1.47",
    FlujoDeInsolacion: "932.91",
    TermperaturaDeEquilibrio: "1521.0",
    MasaEstelar: "0.96",
    LuminosidadEstelar: "-0.131",
    MovimientoPropioTotal: "11.4550454",
    Distancia: "213.283",
    imagen: "HD_73583_b.png",
    probabilidadDeSupervivencia: 72
  },
  {
    nombre: "CoRoT-20 b",
    NumeroDeEstrellas: "1",
    NumeroDeLunas: "0",
    PeriodoOrbital: "9.24285",
    RadioDelPlaneta: "9.416",
    DensidadDelPlaneta: "8.87",
    FlujoDeInsolacion: "180.87",
    TermperaturaDeEquilibrio: "1024.0",
    MasaEstelar: "1.14",
    LuminosidadEstelar: "0.17",
    MovimientoPropioTotal: "2.8157236",
    Distancia: "844.061",
    imagen: "HD_73583_c.png",
    probabilidadDeSupervivencia: 50
  },
  {
    nombre: "CoRoT-4 b",
    NumeroDeEstrellas: "1",
    NumeroDeLunas: "0",
    PeriodoOrbital: "9.20205",
    RadioDelPlaneta: "13.34",
    DensidadDelPlaneta: "0.525",
    FlujoDeInsolacion: "203.95",
    TermperaturaDeEquilibrio: "1074.0",
    MasaEstelar: "1.16",
    LuminosidadEstelar: "0.185",
    MovimientoPropioTotal: "5.3458377",
    Distancia: "726.412",
    imagen: "HR 8799b.png",
    probabilidadDeSupervivencia: 62
  },
  {
    nombre: "CoRoT-5 b",
    NumeroDeEstrellas: "1",
    NumeroDeLunas: "0",
    PeriodoOrbital: "4.0378962",
    RadioDelPlaneta: "15.558",
    DensidadDelPlaneta: "0.217",
    FlujoDeInsolacion: "786.29",
    TermperaturaDeEquilibrio: "1438.0",
    MasaEstelar: "1.0",
    LuminosidadEstelar: "0.18",
    MovimientoPropioTotal: "8.8293871",
    Distancia: "882.472",
    imagen: "url_a_la_imagen_de_CoRoT-5b",
    probabilidadDeSupervivencia: 58
  },
  {
    nombre: "CoRoTID 223977153 b",
    NumeroDeEstrellas: "1",
    NumeroDeLunas: "0",
    PeriodoOrbital: "6.71837",
    RadioDelPlaneta: "6.389",
    DensidadDelPlaneta: "1.1",
    FlujoDeInsolacion: "132.26",
    TermperaturaDeEquilibrio: "938.0",
    MasaEstelar: "1.08",
    LuminosidadEstelar: "-0.155",
    MovimientoPropioTotal: "4.6600247",
    Distancia: "576.683",
    imagen: "k2-53_b.png",
    probabilidadDeSupervivencia: 66
  },
  {
    nombre: "EPIC 211822797 b",
    NumeroDeEstrellas: "1",
    NumeroDeLunas: "0",
    PeriodoOrbital: "21.1701963",
    RadioDelPlaneta: "1.92",
    DensidadDelPlaneta: "3.38",
    FlujoDeInsolacion: "3.5",
    TermperaturaDeEquilibrio: "431.0",
    MasaEstelar: "0.62",
    LuminosidadEstelar: "-1.153",
    MovimientoPropioTotal: "37.9241885",
    Distancia: "186.197",
    imagen: "K2-141_b.png",
    probabilidadDeSupervivencia: 75
  },
  {
    nombre: "EPIC 211945201 b",
    NumeroDeEstrellas: "1",
    NumeroDeLunas: "0",
    PeriodoOrbital: "19.49221",
    RadioDelPlaneta: "5.76",
    DensidadDelPlaneta: "0.65",
    FlujoDeInsolacion: "31.91",
    TermperaturaDeEquilibrio: "817.0",
    MasaEstelar: "1.17",
    LuminosidadEstelar: "0.373",
    MovimientoPropioTotal: "61.7731533",
    Distancia: "181.69",
    imagen: "K2-141_c.png",
    probabilidadDeSupervivencia: 68
  },
  {
    nombre: "EPIC 220674823 b",
    NumeroDeEstrellas: "1",
    NumeroDeLunas: "0",
    PeriodoOrbital: "0.571292",
    RadioDelPlaneta: "1.725",
    DensidadDelPlaneta: "8.77",
    FlujoDeInsolacion: "4670.0",
    TermperaturaDeEquilibrio: "2300.0",
    MasaEstelar: "0.95",
    LuminosidadEstelar: "-0.119",
    MovimientoPropioTotal: "61.004017",
    Distancia: "244.59",
    imagen: "kepler-68_b.png",
    probabilidadDeSupervivencia: 40
  },
  {
    nombre: "EPIC 220674823 c",
    NumeroDeEstrellas: "1",
    NumeroDeLunas: "0",
    PeriodoOrbital: "13.3397",
    RadioDelPlaneta: "2.836",
    DensidadDelPlaneta: "2.12",
    FlujoDeInsolacion: "70.0",
    TermperaturaDeEquilibrio: "805.0",
    MasaEstelar: "0.95",
    LuminosidadEstelar: "-0.119",
    MovimientoPropioTotal: "61.004017",
    Distancia: "244.59",
    imagen: "Kepler-102_b.png",
    probabilidadDeSupervivencia: 42
  },
  {
    nombre: "EPIC 229004835 b",
    NumeroDeEstrellas: "1",
    NumeroDeLunas: "0",
    PeriodoOrbital: "16.141132",
    RadioDelPlaneta: "2.332",
    DensidadDelPlaneta: "4.49",
    FlujoDeInsolacion: "69.7",
    TermperaturaDeEquilibrio: "804.0",
    MasaEstelar: "0.97",
    LuminosidadEstelar: "0.03",
    MovimientoPropioTotal: "133.5434698",
    Distancia: "121.971",
    imagen: "Kepler-1029_b.png",
    probabilidadDeSupervivencia: 67
  },
  {
    nombre: "EPIC 246851721 b",
    NumeroDeEstrellas: "2",
    NumeroDeLunas: "0",
    PeriodoOrbital: "6.180235",
    RadioDelPlaneta: "11.781",
    DensidadDelPlaneta: "3.1",
    FlujoDeInsolacion: "642.0",
    TermperaturaDeEquilibrio: "1401.0",
    MasaEstelar: "1.32",
    LuminosidadEstelar: "0.526",
    MovimientoPropioTotal: "13.2641483",
    Distancia: "372.632",
    imagen: "Kepler-1049_b.png",
    probabilidadDeSupervivencia: 61
  },
  {
    nombre: "EPIC 249893012 b",
    NumeroDeEstrellas: "1",
    NumeroDeLunas: "0",
    PeriodoOrbital: "3.5951",
    RadioDelPlaneta: "1.95",
    DensidadDelPlaneta: "6.39",
    FlujoDeInsolacion: "1037.0",
    TermperaturaDeEquilibrio: "1616.0",
    MasaEstelar: "1.05",
    LuminosidadEstelar: "0.356",
    MovimientoPropioTotal: "36.8679057",
    Distancia: "321.296",
    imagen: "kepler-1136B.png",
    probabilidadDeSupervivencia: 69
  },
  {
    nombre: "GJ 1002 b",
    NumeroDeEstrellas: "1",
    NumeroDeLunas: "0",
    PeriodoOrbital: "10.3465",
    RadioDelPlaneta: "1.03",
    DensidadDelPlaneta: "5.43",
    FlujoDeInsolacion: "0.67",
    TermperaturaDeEquilibrio: "231.0",
    MasaEstelar: "0.12",
    LuminosidadEstelar: "-2.852",
    MovimientoPropioTotal: "2059.5072713",
    Distancia: "4.84867",
    imagen: "BD+20_594_b.png",
    probabilidadDeSupervivencia: 65
  }
];

export default exoplanetas;