// Importaciones locales de imágenes (Vite)
import imgPatin3t          from '../assets/equipos/products/patin-h-3t.jpg';
import imgPatinYellow3t    from '../assets/equipos/products/patin-h-yellow3t.jpg';
import imgPatinFreno       from '../assets/equipos/products/patin-freno.jpg';
import imgPatin5t          from '../assets/equipos/products/patin-h-5t.jpg';
import imgPatin7t          from '../assets/equipos/products/patin-h-7t.jpg';
import imgPatinAcero2t     from '../assets/equipos/products/patin-h-acero2t.jpg';
import imgPatin3tPoli      from '../assets/equipos/products/patin-h-3tpoliuretano.jpg';
import imgPatinBatman3t    from '../assets/equipos/products/patin-h-batman3t.jpg';
import imgPatinBatmanCB3t  from '../assets/equipos/products/patin-h-batman-camabaja3t.jpg';
import imgPatinCB2t        from '../assets/equipos/products/patin-h-batman-camabaja2t.jpg';
import imgPatinExtraBaja   from '../assets/equipos/products/patin-h-batman-cama-extrabaja.jpg';
import imgPatinImpresora   from '../assets/equipos/products/patin-h-impresora.jpg';
import imgPatinExtraAng    from '../assets/equipos/products/patin-h-extra-angosto3t.jpg';
import imgPatinGalv25t     from '../assets/equipos/products/patin-h-galvanizado2-5t.jpg';
import imgPatinLargo2t     from '../assets/equipos/products/patin-h-largo2t.jpg';
import imgPatinMini25t     from '../assets/equipos/products/patin-h-mini2-5t.jpg';
import imgPatinTijera15t   from '../assets/equipos/products/patin-h-tijera1-5t.jpg';
import imgPatinTodoTerreno from '../assets/equipos/products/patin-h-todo-terreno.jpg';
import imgPatinTambos      from '../assets/equipos/products/patin-tambos.jpg';

import imgPatinElectrico       from '../assets/equipos/products/patines-electricos/patin-electrico.jpg';
import imgPatinTijeraElectrico from '../assets/equipos/products/patines-electricos/patin-tijera-electrico.jpg';

import imgApiladorAncho160     from '../assets/equipos/products/apiladores/apilador-ancho-1-60.jpg';
import imgApiladorAngosto16    from '../assets/equipos/products/apiladores/apilador-angosto-1-6.jpg';
import imgApiladorAngosto3m    from '../assets/equipos/products/apiladores/apilador-angosto-3m.jpg';
import imgApiladorLigero       from '../assets/equipos/products/apiladores/apilador-ligero.jpg';
import imgApiladorAncho3m      from '../assets/equipos/products/apiladores/apilador-ancho-3m.jpg';

// Montacargas
import imgMontacargasCombustion from '../assets/equipos/products/montacargas/montacargas-combustion.jpg';
import imgMontacargasElectrico  from '../assets/equipos/products/montacargas/montacargas-electrico.jpg';

// Mesas de elevación
import imgMesaElevacion1T       from '../assets/equipos/products/mesas-elevacion/mesa-elevacion-1t.jpg';
import imgMesaElevacion350      from '../assets/equipos/products/mesas-elevacion/mesa-elevacion-350kg.jpg';
import imgMesaElectrica350      from '../assets/equipos/products/mesas-elevacion/mesa-electrica-350kg.jpg';
import imgMesaElectrica800      from '../assets/equipos/products/mesas-elevacion/mesa-electrica-800kg.jpg';

export const products = [
  {
    id: 1, page: 1, name: 'Angosto y Estándar 3T Patín Hidráulico',
    category: 'Patines Hidráulicos', price: 6200.00, tonnage: 3, image: imgPatin3t,
    description: 'Manejo sencillo de control de mandos. Con dispositivo de retorno de aceite y válvula de seguridad. Mejor fuerza y resistencia por su barra sólida.',
    specs: [
      { label: 'Modelo Red Power', value: 'WTC' },
      { label: 'Patín Hidráulico', value: 'Estándar' },
      { label: 'Capacidad', value: '3,000 kg' },
      { label: 'Ancho de Horquillas (B5)', value: '27 in (68.5 cm)' },
      { label: 'Largo de Horquillas (L)', value: '48 in (122 cm)' },
      { label: 'Rueda Direccional', value: '7×3 in (180×70 mm) PU' },
      { label: 'Rodillo de carga', value: '80×60 Nylon' },
      { label: 'Elevación H3', value: '19.8 cm' },
      { label: 'Longitud total L1', value: '1,590 mm' },
      { label: 'Peso del equipo', value: '100 kg' }
    ]
  },
  {
    id: 2, page: 1, name: 'Angosto y Estándar Amarillo 3T',
    category: 'Patines Hidráulicos', price: 6200.00, tonnage: 3, image: imgPatinYellow3t,
    description: 'El patín hidráulico o traspaleta es la ayuda ideal para el almacenamiento. Su manipulación es amigable para el usuario en tareas manuales a distancias cortas. Adecuado para camiones, almacenes y mercados. Presentación física en color amarillo.',
    specs: [
      { label: 'Modelo Red Power', value: 'LFAC30-1' },
      { label: 'Patín Hidráulico', value: 'Estándar / Angosto' },
      { label: 'Capacidad', value: '3,000 kg' },
      { label: 'Ancho de Horquillas (B5)', value: '27 in (68.5 cm) / 20½ in (52 cm)' },
      { label: 'Largo de Horquillas (L)', value: '48 in (122 cm)' },
      { label: 'Altura mínima (H1)', value: '8.3 cm' },
      { label: 'Medida de rueda (A)', value: '7×2 in' },
      { label: 'Rodillos de carga (C)', value: '2.76 in (7 cm)' },
      { label: 'Rodamientos', value: 'Nylon / PU' },
      { label: 'Sistema', value: 'Tándem' }
    ]
  },
  {
    id: 3, page: 1, name: 'Patín con Freno',
    category: 'Patines Especiales', price: 10580.00, tonnage: 3, image: imgPatinFreno,
    description: 'Manejo sencillo de control de mandos. Cuenta con dispositivo de retorno de aceite y válvula de seguridad. Sistema de freno integrado para bloquear el equipo durante carga o descarga.',
    specs: [
      { label: 'Marca', value: 'Red Power' },
      { label: 'Capacidad', value: '3,000 kg' },
      { label: 'Altura de horquillas', value: '20" (68.5 cm)' },
      { label: 'Largo de horquillas', value: '48" (122 cm)' },
      { label: 'Altura mínima', value: '8.5 cm' },
      { label: 'Altura máxima', value: '19.5 cm' },
      { label: 'Medida de rueda', value: '7×2 in' },
      { label: 'Rodillos de carga', value: '2.76 in (7 cm)' },
      { label: 'Rodamientos', value: 'Nylon / PU' },
      { label: 'Sistema', value: 'Tándem' }
    ]
  },
  {
    id: 4, page: 1, name: 'Patín Hidráulico 5T',
    category: 'Patines Alta Capacidad', price: 16750.00, tonnage: 5, image: imgPatin5t,
    description: 'Solución económica y fácil para la carga y descarga de mercancías muy pesadas. Estructura de acero de alta resistencia y bomba con poderoso pistón grande para reducir los esfuerzos de operación.',
    specs: [
      { label: 'Modelo Red Power', value: 'CBY-AC' },
      { label: 'Capacidad', value: '5,000 kg' },
      { label: 'Ancho de Horquillas (B)', value: '27 in (68.5 cm) / 20½ in (52 cm)' },
      { label: 'Largo de Horquillas (L1)', value: '48 in (122 cm)' },
      { label: 'Altura mínima (H1)', value: '8.5 cm' },
      { label: 'Altura máxima (H2)', value: '19.5 cm' },
      { label: 'Medida de rueda (A)', value: '7×2 in' },
      { label: 'Rodillos de carga (C)', value: '2.76 in (7 cm)' },
      { label: 'Sistema', value: 'Tándem' },
      { label: 'Peso del equipo', value: '123 kg / 120 kg' }
    ]
  },
  {
    id: 5, page: 1, name: 'Patín Hidráulico 7T',
    category: 'Patines Alta Capacidad', price: 21130.00, tonnage: 7, image: imgPatin7t,
    description: 'Solución económica y fácil para la carga y descarga de mercancías muy pesadas. Estructura de acero de alta resistencia y bomba con poderoso pistón grande para reducir los esfuerzos de operación.',
    specs: [
      { label: 'Modelo Red Power', value: 'CBY-AC' },
      { label: 'Capacidad', value: '7,000 kg' },
      { label: 'Ancho de Horquillas (B)', value: '27 in (68.5 cm) / 20½ in (52 cm)' },
      { label: 'Largo de Horquillas (L1)', value: '48 in (122 cm)' },
      { label: 'Altura mínima (H1)', value: '8.5 cm' },
      { label: 'Altura máxima (H2)', value: '19.5 cm' },
      { label: 'Medida de rueda (A)', value: '7×2 in' },
      { label: 'Rodillos de carga (C)', value: '2.76 in (7 cm)' },
      { label: 'Sistema', value: 'Tándem' },
      { label: 'Peso del equipo', value: '123 kg / 120 kg' }
    ]
  },
  {
    id: 6, page: 1, name: 'Patín Hidráulico Acero Inoxidable 2T',
    category: 'Patines Especiales', price: 40550.00, tonnage: 2, image: imgPatinAcero2t,
    description: 'Diseñado para entornos donde la higiene es primordial, o cuando el patín entra en contacto con sustancias corrosivas como agua salada, ácidos y productos químicos.',
    specs: [
      { label: 'Modelo Red Power', value: 'CDY-T' },
      { label: 'Material', value: 'Acero Inoxidable' },
      { label: 'Capacidad', value: '2,500 kg' },
      { label: 'Ancho de Horquillas (B)', value: '27 in (68.5 cm) / 21 in (53.34 cm)' },
      { label: 'Largo de Horquillas (L1)', value: '48 in (122 cm)' },
      { label: 'Altura mínima (H1)', value: '8.5 cm' },
      { label: 'Altura máxima (H2)', value: '19.5 cm' },
      { label: 'Medida de rueda (A)', value: '7×2 in' },
      { label: 'Rodillos de carga', value: '2.76 in (7 cm)' },
      { label: 'Peso del equipo', value: '80 kg' }
    ]
  },
  {
    id: 7, page: 1, name: 'Patín Hidráulico Angosto y Estándar 3T Poliuretano',
    category: 'Patines Hidráulicos', price: 6700.00, tonnage: 3, image: imgPatin3tPoli,
    description: 'El patín hidráulico o traspaleta es la ayuda ideal para el almacenamiento. Ruedas de poliuretano que protegen pisos delicados sin dejar marcas.',
    specs: [
      { label: 'Modelo Red Power', value: 'LFAC30-1' },
      { label: 'Patín Hidráulico', value: 'Estándar / Angosto' },
      { label: 'Capacidad', value: '3,000 kg' },
      { label: 'Ancho de Horquillas (B5)', value: '27 in (68.5 cm) / 20½ in (52 cm)' },
      { label: 'Largo de Horquillas (L)', value: '48 in (122 cm)' },
      { label: 'Altura mínima (H1)', value: '8.3 cm' },
      { label: 'Medida de rueda (A)', value: '7×2 in' },
      { label: 'Rodillos de carga (C)', value: '2.76 in (7 cm)' },
      { label: 'Rodamientos', value: 'Poliuretano' },
      { label: 'Sistema', value: 'Tándem' }
    ]
  },
  {
    id: 8, page: 1, name: 'Patín Hidráulico Batman 3T',
    category: 'Patines Hidráulicos', price: 11310.00, tonnage: 3, image: imgPatinBatman3t,
    description: 'El patín hidráulico o traspaleta es la ayuda ideal para el almacenamiento. Su manipulación es amigable para el usuario en tareas manuales a distancias cortas.',
    specs: [
      { label: 'Patín Hidráulico', value: 'Batman' },
      { label: 'Capacidad', value: '3,000 kg' },
      { label: 'Altura de Horquillas (B)', value: '33 in (33.8 cm)' },
      { label: 'Largo de Horquillas (L1)', value: '48 in (122 cm)' },
      { label: 'Altura mínima (H1)', value: '8.5 cm / 6.5 cm' },
      { label: 'Altura máxima (H2)', value: '19.5 cm / 17.5 cm' },
      { label: 'Medida de rueda (A)', value: '7×2 in / 6×2 in' },
      { label: 'Rodillos de carga (C)', value: '2.76 in (7 cm)' },
      { label: 'Rodamientos', value: 'Nylon / PU' },
      { label: 'Sistema', value: 'Tándem' }
    ]
  },
  {
    id: 9, page: 1, name: 'Patín Hidráulico Batman Cama Baja 3T',
    category: 'Patines Cama Baja', price: 12090.00, tonnage: 3, image: imgPatinBatmanCB3t,
    description: 'Combina la maniobrabilidad del diseño Batman con una cama extra baja que permite acceder a tarimas de perfil bajo y equipos especiales.',
    specs: [
      { label: 'Patín Hidráulico', value: 'Batman Cama Baja' },
      { label: 'Capacidad', value: '3,000 kg' },
      { label: 'Altura de Horquillas (B)', value: '33 in (33.8 cm)' },
      { label: 'Largo de Horquillas (L1)', value: '48 in (122 cm)' },
      { label: 'Altura mínima (H1)', value: '8.5 cm / 6.5 cm' },
      { label: 'Altura máxima (H2)', value: '19.5 cm / 17.5 cm' },
      { label: 'Medida de rueda (A)', value: '7×2 in / 6×2 in' },
      { label: 'Rodillos de carga (C)', value: '2.76 in (7 cm)' },
      { label: 'Rodamientos', value: 'Nylon / PU' },
      { label: 'Sistema', value: 'Tándem' }
    ]
  },
  {
    id: 10, page: 2, name: 'Patín Hidráulico Cama Baja 2T',
    category: 'Patines Cama Baja', price: 10310.00, tonnage: 2, image: imgPatinCB2t,
    description: 'Diseñado para maniobrar tarimas de altura reducida y contenedores especiales. Su horquilla baja permite insertarse donde otros patines no llegan.',
    specs: [
      { label: 'Patín Hidráulico', value: 'Cama Baja' },
      { label: 'Capacidad', value: '2,000 kg' },
      { label: 'Altura mínima', value: '55 mm' },
      { label: 'Altura máxima', value: '170 mm' },
      { label: 'Rodamientos', value: 'Nylon reforzado' },
      { label: 'Bomba', value: 'Hidráulica manual' }
    ]
  },
  {
    id: 11, page: 2, name: 'Patín Hidráulico Cama Extra Baja',
    category: 'Patines Cama Baja', price: 14740.00, tonnage: 1.5, image: imgPatinExtraBaja,
    description: 'La altura más baja de nuestra línea. Ideal para mover maquinaria sobre bases metálicas de perfil mínimo y equipos con espacio de acceso muy limitado.',
    specs: [
      { label: 'Patín Hidráulico', value: 'Cama Extra Baja' },
      { label: 'Capacidad', value: '1,500 kg' },
      { label: 'Altura mínima', value: '35 mm' },
      { label: 'Altura máxima', value: '145 mm' },
      { label: 'Rodamientos', value: 'Acero / Nylon' },
      { label: 'Bomba', value: 'Hidráulica manual' }
    ]
  },
  {
    id: 12, page: 2, name: 'Patín Hidráulico con Impresora',
    category: 'Patines Especiales', price: 45175.00, tonnage: 2, image: imgPatinImpresora,
    description: 'Patín hidráulico con báscula e impresora integrada. Permite pesar y registrar automáticamente la carga transportada. Ideal para control de inventario y logística.',
    specs: [
      { label: 'Patín Hidráulico', value: 'con Impresora' },
      { label: 'Capacidad', value: '2,000 kg' },
      { label: 'Báscula', value: 'Digital con impresora térmica' },
      { label: 'Altura mínima', value: '85 mm' },
      { label: 'Altura máxima', value: '195 mm' },
      { label: 'Rodamientos', value: 'Nylon reforzado' }
    ]
  },
  {
    id: 13, page: 2, name: 'Patín Hidráulico Extra Angosto 3T',
    category: 'Patines Hidráulicos', price: 9840.00, tonnage: 3, image: imgPatinExtraAng,
    description: 'La horquilla más angosta del mercado. Diseñado para maniobrar tarimas especiales y equipos en pasillos ultra reducidos.',
    specs: [
      { label: 'Patín Hidráulico', value: 'Extra Angosto' },
      { label: 'Capacidad', value: '3,000 kg' },
      { label: 'Ancho de horquilla', value: '330 mm' },
      { label: 'Altura mínima', value: '85 mm' },
      { label: 'Altura máxima', value: '195 mm' },
      { label: 'Rodamientos', value: 'Nylon reforzado' }
    ]
  },
  {
    id: 14, page: 2, name: 'Patín Hidráulico Galvanizado 2.5T',
    category: 'Patines Especiales', price: 12390.00, tonnage: 2.5, image: imgPatinGalv25t,
    description: 'Acabado galvanizado por inmersión en caliente que brinda alta resistencia a la corrosión. Ideal para ambientes húmedos, exteriores y cámaras frigoríficas.',
    specs: [
      { label: 'Patín Hidráulico', value: 'Galvanizado' },
      { label: 'Capacidad', value: '2,500 kg' },
      { label: 'Acabado', value: 'Galvanizado por inmersión' },
      { label: 'Altura mínima', value: '85 mm' },
      { label: 'Altura máxima', value: '195 mm' },
      { label: 'Rodamientos', value: 'Nylon reforzado' }
    ]
  },
  {
    id: 15, page: 2, name: 'Patín Hidráulico Largo 2T',
    category: 'Patines Hidráulicos', price: 13090.00, tonnage: 2, image: imgPatinLargo2t,
    description: 'Horquilla extendida para cargas sobredimensionadas. Ideal para transportar tablones, perfiles metálicos y materiales de gran longitud.',
    specs: [
      { label: 'Patín Hidráulico', value: 'Largo' },
      { label: 'Capacidad', value: '2,000 kg' },
      { label: 'Largo de horquilla', value: '1,800 mm' },
      { label: 'Altura mínima', value: '85 mm' },
      { label: 'Altura máxima', value: '195 mm' },
      { label: 'Rodamientos', value: 'Nylon reforzado' }
    ]
  },
  {
    id: 16, page: 2, name: 'Patín Hidráulico Mini 2.5T',
    category: 'Patines Hidráulicos', price: 7615.00, tonnage: 2.5, image: imgPatinMini25t,
    description: 'Compacto y ligero. Perfecto para espacios reducidos, camiones de reparto y uso en interiores con pasillos estrechos.',
    specs: [
      { label: 'Patín Hidráulico', value: 'Mini' },
      { label: 'Capacidad', value: '2,500 kg' },
      { label: 'Largo de horquilla', value: '900 mm' },
      { label: 'Altura mínima', value: '80 mm' },
      { label: 'Altura máxima', value: '190 mm' },
      { label: 'Rodamientos', value: 'Nylon reforzado' }
    ]
  },
  {
    id: 17, page: 2, name: 'Patín Hidráulico Tijera 1.5T',
    category: 'Patines Especiales', price: 17400.00, tonnage: 1.5, image: imgPatinTijera15t,
    description: 'Plataforma elevadora tipo tijera con capacidad de 1.5T. Permite elevar y trasladar cargas a mayor altura que un patín convencional.',
    specs: [
      { label: 'Patín Hidráulico', value: 'Tijera' },
      { label: 'Capacidad', value: '1,500 kg' },
      { label: 'Altura máxima', value: '800 mm' },
      { label: 'Plataforma', value: '800 × 500 mm' },
      { label: 'Ruedas', value: 'Nylon con freno' },
      { label: 'Bomba', value: 'Hidráulica manual' }
    ]
  },
  {
    id: 18, page: 2, name: 'Patín Hidráulico Todo Terreno',
    category: 'Patines Especiales', price: 28665.00, tonnage: 2, image: imgPatinTodoTerreno,
    description: 'Ruedas neumáticas de gran diámetro que permiten operar en terrenos irregulares, grava, tierra y superficies no pavimentadas.',
    specs: [
      { label: 'Patín Hidráulico', value: 'Todo Terreno' },
      { label: 'Capacidad', value: '2,000 kg' },
      { label: 'Ruedas', value: 'Neumáticas 400 mm' },
      { label: 'Altura mínima', value: '100 mm' },
      { label: 'Altura máxima', value: '220 mm' },
      { label: 'Bomba', value: 'Hidráulica manual' }
    ]
  },
  {
    id: 19, page: 3, name: 'Patín Para Tambos',
    category: 'Patines Especiales', price: 16670.00, tonnage: 0.5, image: imgPatinTambos,
    description: 'Diseñado específicamente para el manejo de tambos de 200 L. Permite levantar, transportar y verter tambos de forma segura.',
    specs: [
      { label: 'Patín Hidráulico', value: 'Para Tambos' },
      { label: 'Capacidad', value: '500 kg' },
      { label: 'Compatibilidad', value: 'Tambos 200 L' },
      { label: 'Altura de elevación', value: '400 mm' },
      { label: 'Rodamientos', value: 'Nylon reforzado' },
      { label: 'Bomba', value: 'Hidráulica manual' }
    ]
  },


    // ==================== PATINES ELÉCTRICOS ====================
  {
    id: 20, page: 4, name: 'Patín Eléctrico 1.5T',
    category: 'Patines Eléctricos', price: 167655.00, tonnage: 1.5, image: imgPatinElectrico,
    description: 'Cargador de batería con regulador de corriente. Timón fácil y cómodo de usar, control de avance y reversa. Plataforma plegable para mayor confort. Cuenta con dos botones de emergencia: uno desconecta inmediatamente la alimentación y aplica el freno, el otro invierte la dirección de desplazamiento para impedir que un operador quede atrapado. Perfil bajo de 7.5 cm (altura mínima).',
    specs: [
      { label: 'Modelo Red Power', value: 'Patín Eléctrico' },
      { label: 'Variante', value: 'Eléctrico 1.5 T' },
      { label: 'Capacidad', value: '1,500 kg' },
      { label: 'Altura de elevación total', value: '20 cm' },
      { label: 'Centro de carga Q', value: '60 cm' },
      { label: 'Dimensiones de horquillas L', value: '1.20 × 0.16 × 0.5 m' },
      { label: 'Longitud total L2 / L3', value: '1.94 / 2.28 m' },
      { label: 'Ancho B', value: '72 cm' },
      { label: 'Ancho total de uñas B1', value: '60 cm – 26½"' },
      { label: 'Batería', value: '2V × 12 / 210 AH' },
      { label: 'Cargador de batería', value: 'DC24V / 40A' },
      { label: 'Peso del equipo', value: '540 kg' }
    ]
  },
  {
    id: 21, page: 4, name: 'Patín Eléctrico 2T',
    category: 'Patines Eléctricos', price: 167655.00, tonnage: 2, image: imgPatinElectrico,
    description: 'Cargador de batería con regulador de corriente. Timón fácil y cómodo de usar, control de avance y reversa. Plataforma plegable para mayor confort. Cuenta con dos botones de emergencia: uno desconecta inmediatamente la alimentación y aplica el freno, el otro invierte la dirección de desplazamiento para impedir que un operador quede atrapado. Perfil bajo de 7.5 cm (altura mínima).',
    specs: [
      { label: 'Modelo Red Power', value: 'Patín Eléctrico' },
      { label: 'Variante', value: 'Eléctrico 2 T' },
      { label: 'Capacidad', value: '2,000 kg' },
      { label: 'Altura de elevación total', value: '20 cm' },
      { label: 'Centro de carga Q', value: '60 cm' },
      { label: 'Dimensiones de horquillas L', value: '1.20 × 0.16 × 0.5 m' },
      { label: 'Longitud total L2 / L3', value: '1.94 / 2.28 m' },
      { label: 'Ancho B', value: '72 cm' },
      { label: 'Ancho total de uñas B1', value: '60 cm – 26½"' },
      { label: 'Batería', value: '2V × 12 / 210 AH' },
      { label: 'Cargador de batería', value: 'DC24V / 40A' },
      { label: 'Peso del equipo', value: '600 kg' }
    ]
  },
  {
    id: 22, page: 4, name: 'Patín Eléctrico 2.5T',
    category: 'Patines Eléctricos', price: 167655.00, tonnage: 2.5, image: imgPatinElectrico,
    description: 'Cargador de batería con regulador de corriente. Timón fácil y cómodo de usar, control de avance y reversa. Plataforma plegable para mayor confort. Cuenta con dos botones de emergencia: uno desconecta inmediatamente la alimentación y aplica el freno, el otro invierte la dirección de desplazamiento para impedir que un operador quede atrapado. Perfil bajo de 7.5 cm (altura mínima).',
    specs: [
      { label: 'Modelo Red Power', value: 'Patín Eléctrico' },
      { label: 'Variante', value: 'Eléctrico 2.5 T' },
      { label: 'Capacidad', value: '2,500 kg' },
      { label: 'Altura de elevación total', value: '20 cm' },
      { label: 'Centro de carga Q', value: '60 cm' },
      { label: 'Dimensiones de horquillas L', value: '1.20 × 0.16 × 0.5 m' },
      { label: 'Longitud total L2 / L3', value: '1.94 / 2.28 m' },
      { label: 'Ancho B', value: '72 cm' },
      { label: 'Ancho total de uñas B1', value: '60 cm – 26½"' },
      { label: 'Batería', value: '2V × 12 / 210 AH' },
      { label: 'Cargador de batería', value: 'DC24V / 40A' },
      { label: 'Peso del equipo', value: '600 kg' }
    ]
  },
  {
    id: 23, page: 4, name: 'Patín de Tijera Eléctrico',
    category: 'Patines Eléctricos', price: 47580.00, tonnage: 1, image: imgPatinTijeraElectrico,
    description: 'Los estabilizadores ajustables se extienden al suelo automáticamente cuando las horquillas alcanzan una altura de 420 mm para garantizar estabilidad máxima y frenado óptimo. El mango vuelve automáticamente a su posición vertical cuando se suelta.',
    specs: [
      { label: 'Patín Tijera Eléctrico', value: 'Estándar / Angosto' },
      { label: 'Capacidad', value: '1,000 kg' },
      { label: 'Altura mínima', value: '86 mm' },
      { label: 'Altura máxima', value: '800 mm' },
      { label: 'Ancho de horquilla', value: '620 mm' },
      { label: 'Longitud de horquilla', value: '1,140 / 1,500 mm' },
      { label: 'Voltaje entrada/salida de carga', value: '220-240 / 12 V' },
      { label: 'Voltaje de batería', value: '12 V / 63 A·h' },
      { label: 'Peso neto', value: '140 / 165 kg' },
      { label: 'Tamaño del embalaje', value: '210 × 50 × 71 cm' }
    ]
  },

  // ==================== APILADORES ====================
  {
    id: 24, page: 5, name: 'Apilador Ancho 1.60',
    category: 'Apiladores', price: 31990.00, tonnage: 2, image: imgApiladorAncho160,
    description: 'Diseñados con patas estabilizadoras para mayor seguridad. Permite que el apilador sea usado para introducir la tarima entre estabilizadores de la base. Fácil de maniobrar, con frenado de seguridad. La ayuda económica para el trabajo móvil. Compacto y ahorro de espacio de almacenamiento.',
    specs: [
      { label: 'Modelo Red Power', value: 'CTY-EW' },
      { label: 'Tipo', value: 'Apilador Extra Ancho' },
      { label: 'Aplicación', value: 'Tarima Cerrada / Tarima Abierta' },
      { label: 'Capacidad', value: '2,000 kg / 1,500 kg' },
      { label: 'Altura máxima de elevación (A)', value: '1.60 m / 3 m' },
      { label: 'Altura de piso a estructura (D)', value: '2.8 m' },
      { label: 'Altura de piso a las uñas (G)', value: '9 cm' },
      { label: 'Largo de uñas (E)', value: '90 cm' },
      { label: 'Largo total del equipo (B)', value: '1.47 m' },
      { label: 'Ancho ajustable de las uñas (J)', value: '30 – 120 cm' },
      { label: 'Ancho de las patas estabilizadoras (M)', value: '1.40 m' },
      { label: 'Ancho del equipo (C)', value: '1.40 m' },
      { label: 'Peso del equipo', value: '220 kg / 250 kg' }
    ]
  },
  {
    id: 25, page: 5, name: 'Apilador Angosto 1.6',
    category: 'Apiladores', price: 28900.00, tonnage: 2, image: imgApiladorAngosto16,
    description: 'El apilador hidráulico manual proporciona un manejo rentable tanto para la carga como para las áreas de producción. El manejo es muy sencillo y no se requiere experiencia. Su mantenimiento es fácil y de bajo costo.',
    specs: [
      { label: 'Modelo Red Power', value: 'CTY-D' },
      { label: 'Tipo', value: 'Apilador Angosto' },
      { label: 'Aplicación', value: 'Para tarima abierta' },
      { label: 'Capacidad', value: '2,000 kg' },
      { label: 'Altura máxima de elevación (A)', value: '1.60 m' },
      { label: 'Altura de piso a estructura (D)', value: '2.05 m' },
      { label: 'Altura de piso a las uñas (G)', value: '8.5 cm' },
      { label: 'Largo de uñas (E)', value: '90 cm' },
      { label: 'Largo total del equipo (B)', value: '1.48 m' },
      { label: 'Ancho ajustable de las uñas (J)', value: '24 – 68 cm' },
      { label: 'Ancho de las patas estabilizadoras (M)', value: '69 cm' },
      { label: 'Ancho del equipo (C)', value: '74 cm' },
      { label: 'Peso del equipo', value: '240 kg' }
    ]
  },
  {
    id: 26, page: 5, name: 'Apilador Angosto 3M',
    category: 'Apiladores', price: 39370.00, tonnage: 2, image: imgApiladorAngosto3m,
    description: 'Para trabajo pesado, fabricado en acero en forma de C para su resistencia y rigidez con horquillas forjadas. Circuito integrado y acabado de pintura resistente a la corrosión. Horquillas ajustables para diferentes tamaños de carga. Dirección ligera y fácil con freno de pie. Una solución económica para levantar y mover.',
    specs: [
      { label: 'Modelo Red Power', value: 'CTY-EH' },
      { label: 'Tipo', value: 'Apilador Manual a 3 m' },
      { label: 'Capacidad', value: '2,000 kg' },
      { label: 'Altura máxima de elevación (A)', value: '3 m' },
      { label: 'Altura baja de horquillas (D)', value: '9 cm / 90 mm' },
      { label: 'Longitud del tenedor (E)', value: '90 cm / 900 mm' },
      { label: 'Tenedor ajustable (J)', value: '34/75 cm / 340/750 mm' },
      { label: 'Ancho exterior patas delanteras (M)', value: '69 cm / 690 mm' },
      { label: 'Rueda delantera', value: '3" × 2.5" / 75 × 70 mm' },
      { label: 'Rueda trasera', value: '7" × 2" / 180 × 50 mm' },
      { label: 'Medidas del equipo (D×C×B)', value: '2.15 × 0.785 × 1.47 m' },
      { label: 'Peso del equipo', value: '280 kg' }
    ]
  },
  {
    id: 27, page: 5, name: 'Apilador Ligero',
    category: 'Apiladores', price: 14280.00, tonnage: 0.4, image: imgApiladorLigero,
    description: 'Fácil de transportar. Práctico para carga y descarga ligera.',
    specs: [
      { label: 'Modelo Red Power', value: 'CTY-EW' },
      { label: 'Tipo', value: 'Apilador Ligero' },
      { label: 'Capacidad', value: '400 kg' },
      { label: 'Ancho', value: '550 mm' },
      { label: 'Altura de elevación', value: '1.42 m' }
    ]
  },
  {
    id: 28, page: 5, name: 'Apilador Ancho a 3M',
    category: 'Apiladores', price: 42790.00, tonnage: 2, image: imgApiladorAncho3m,
    description: 'Diseñados con patas estabilizadoras para mayor seguridad. Permite que el apilador sea usado para introducir la tarima entre estabilizadores de la base. Fácil de maniobrar, con frenado de seguridad. La ayuda económica para el trabajo móvil. Compacto y ahorro de espacio de almacenamiento.',
    specs: [
      { label: 'Tipo', value: 'Apilador Extra Ancho' },
      { label: 'Aplicación', value: 'Tarima Abierta' },
      { label: 'Capacidad', value: '2,000 kg' },
      { label: 'Altura máxima de elevación (A)', value: '3 m' },
      { label: 'Altura de piso a estructura (D)', value: '2.8 m' },
      { label: 'Altura de piso a las uñas (G)', value: '9 cm' },
      { label: 'Largo de uñas (E)', value: '90 cm' },
      { label: 'Largo total del equipo (B)', value: '1.47 m' },
      { label: 'Ancho ajustable de las uñas (J)', value: '30 – 120 cm' },
      { label: 'Ancho de las patas estabilizadoras (M)', value: '1.40 m' },
      { label: 'Ancho del equipo (C)', value: '1.40 m' },
      { label: 'Peso del equipo', value: '250 kg' }
    ]
  },


    // ==================== MONTACARGAS ====================
  {
    id: 29, page: 6, name: 'Montacargas de Combustión Gas / Gasolina',
    category: 'Montacargas', price: 586140.00, tonnage: 3, image: imgMontacargasCombustion,
    description: 'Sistema de transmisión de potencia, guardia y marco tipo camión con estructura de doble suspensión, lo cual debilita la vibración transferida de ruedas. Sistema de alimentación, palanca de control y seguridad diseñados para mayor comodidad del operador. Pantalla LCD de alta definición que amplía el campo visual y facilita el monitoreo del estado de trabajo. Disponible con mástil de dos etapas de elevación libre o tres etapas, cabina cerrada de lujo, neumático sólido, desplazamiento lateral, pinza para bobinas y horquillas no estándar.',
    specs: [
      { label: 'Altura de elevación', value: '3,000 mm' },
      { label: 'Tamaño de las uñas', value: '1,2020 × 150 × 60 mm' },
      { label: 'Cilindros', value: '6' },
      { label: 'Ancho total', value: '2,010 mm' },
      { label: 'Altura del mástil plegado', value: '2,500 mm' },
      { label: 'Altura de piso a techo', value: '2,470 mm' },
      { label: 'Radio de giro mínimo', value: '2,415 mm' },
      { label: 'Volante', value: '480 mm' },
      { label: 'Longitud total', value: '3,450 mm' },
      { label: 'Motor', value: 'MITSUBISHI' },
      { label: 'Tipo de transmisión', value: 'Automática' },
      { label: 'Peso del equipo', value: '9,150 kg' }
    ]
  },
  {
    id: 30, page: 6, name: 'Montacargas Eléctrico',
    category: 'Montacargas', price: 680000.00, tonnage: 3, image: imgMontacargasElectrico,
    description: 'Sistema de transmisión de potencia, guardia y marco tipo camión con estructura de doble suspensión, lo cual debilita la vibración transferida de ruedas. Sistema de alimentación, palanca de control y seguridad diseñados para mayor comodidad del operador. Pantalla LCD de alta definición que amplía el campo visual y facilita el monitoreo del estado de trabajo.',
    specs: [
      { label: 'Altura de elevación', value: '3,000 mm' },
      { label: 'Tamaño de las uñas', value: '1,2020 × 150 × 60 mm' },
      { label: 'Cilindros', value: '6' },
      { label: 'Ancho total', value: '2,010 mm' },
      { label: 'Altura del mástil plegado', value: '2,500 mm' },
      { label: 'Altura de piso a techo', value: '2,470 mm' },
      { label: 'Radio de giro mínimo', value: '2,415 mm' },
      { label: 'Volante', value: '480 mm' },
      { label: 'Longitud total', value: '3,450 mm' },
      { label: 'Motor', value: 'MITSUBISHI' },
      { label: 'Tipo de transmisión', value: 'Automática' },
      { label: 'Peso del equipo', value: '9,150 kg' }
    ]
  },

  // ==================== MESAS DE ELEVACIÓN ====================
  {
    id: 31, page: 7, name: 'Mesa de Elevación 1T · Altura 1M',
    category: 'Mesas de Elevación', price: 12800.00, tonnage: 1, image: imgMesaElevacion1T,
    description: 'Las mesas elevadoras de tijera proporcionan una solución ergonómica para levantar, colocar y transportar cargas pesadas.',
    specs: [
      { label: 'Capacidad', value: '1,000 kg / 1 T' },
      { label: 'Altura mínima (H1)', value: '0.40 m (400 mm)' },
      { label: 'Altura máxima (H2)', value: '1 m' },
      { label: 'Peso del equipo', value: '105 kg' },
      { label: 'Dimensiones de la mesa', value: '1.00 × 0.51 × 0.05 m (1000 × 510 × 50 mm)' },
      { label: 'Dimensiones totales', value: '1.30 × 0.51 × 1.00 m (1300 × 510 × 1000 mm)' }
    ]
  },
  {
    id: 32, page: 7, name: 'Mesa de Elevación 350 kg',
    category: 'Mesas de Elevación', price: 12400.00, tonnage: 0.35, image: imgMesaElevacion350,
    description: 'Las mesas elevadoras de tijera proporcionan una solución ergonómica para levantar, colocar y transportar cargas pesadas.',
    specs: [
      { label: 'Modelo Red Power', value: 'Mesa de Elevación' },
      { label: 'Capacidad', value: '350 kg' },
      { label: 'Altura mínima (H1)', value: '0.35 m' },
      { label: 'Altura máxima (H2)', value: '1.5 m' },
      { label: 'Peso del equipo', value: '105 kg' },
      { label: 'Dimensiones de la mesa', value: '0.90 × 0.51 × 0.05 m' },
      { label: 'Dimensiones totales', value: '1.25 × 0.51 × 0.96 m' }
    ]
  },
  {
    id: 33, page: 7, name: 'Mesa Eléctrica 350 kg',
    category: 'Mesas de Elevación', price: 43520.00, tonnage: 0.35, image: imgMesaElectrica350,
    description: 'Con freno de seguridad para facilitar el mantenimiento. Los productos se utilizan ampliamente en las industrias de fabricación y mantenimiento.',
    specs: [
      { label: 'Tipo', value: 'Mesa Eléctrica 350 kg' },
      { label: 'Capacidad de carga', value: '350 kg' },
      { label: 'Altura mínima', value: '360 mm' },
      { label: 'Altura máxima', value: '1,500 mm' },
      { label: 'Dimensiones de la mesa', value: '905 × 500 × 50 mm' },
      { label: 'Diámetro de la rueda', value: '125 mm' },
      { label: 'Voltaje (V/kW)', value: '12 / 0.8' },
      { label: 'Batería', value: '60 Ah' },
      { label: 'Cargador de entrada', value: '220 V' },
      { label: 'Peso neto', value: '140 kg' }
    ]
  },
  {
    id: 34, page: 7, name: 'Mesa Eléctrica 800 kg',
    category: 'Mesas de Elevación', price: 45100.00, tonnage: 0.8, image: imgMesaElectrica800,
    description: 'Con freno de seguridad para facilitar el mantenimiento. Los productos se utilizan ampliamente en las industrias de fabricación y mantenimiento.',
    specs: [
      { label: 'Modelo Red Power', value: 'Mesa Eléctrica 800 kg' },
      { label: 'Capacidad', value: '800 kg' },
      { label: 'Altura mínima', value: '410 mm' },
      { label: 'Altura máxima', value: '1,000 mm' },
      { label: 'Diámetro de la rueda', value: '150 mm' },
      { label: 'Dimensiones del equipo', value: '1,016 × 510 × 50 mm' },
      { label: 'Peso del equipo', value: '150 kg' },
      { label: 'Voltaje (V/kW)', value: '12 / 0.8' },
      { label: 'Batería', value: '80 Ah' },
      { label: 'Cargador de entrada', value: '220 V' }
    ]
  },


];

export const categories = [
  'Todos',
  'Patines Hidráulicos',
  'Patines Alta Capacidad',
  'Patines Especiales',
  'Patines Cama Baja',
  'Patines Eléctricos',
  'Apiladores',
  'Montacargas',
  'Mesas de Elevación'
];

export const WHATSAPP_NUMBER = '525548619200';