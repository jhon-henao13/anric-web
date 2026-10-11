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
  }
];

export const categories = ['Todos', 'Patines Hidráulicos', 'Patines Alta Capacidad', 'Patines Especiales', 'Patines Cama Baja'];

export const WHATSAPP_NUMBER = '525548619200';