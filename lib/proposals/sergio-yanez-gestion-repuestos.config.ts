import { ProposalConfig } from "@/lib/types";

const sergioYanezGestionRepuestos: ProposalConfig = {
  slug: "sergio-yanez-gestion-repuestos",
  client: "Sergio Yáñez",
  title: "Sistema de gestión de repuestos",
  mainProblem:
    "un mismo repuesto compatible con muchos vehículos y varias publicaciones de Mercado Libre, sin que la boleta, la etiqueta y el stock coincidan con lo que el cliente compró",
  summary: {
    problem:
      "Hoy cerca del 90% de las ventas sale por Mercado Libre y el resto en mesón. Un repuesto tiene un solo SKU y muchas compatibilidades, pero el sistema actual obliga a un nombre genérico: la boleta no dice el modelo comprado, la caja muestra otro vehículo compatible y el etiquetado se tipea a mano al despachar.",
    solution:
      "Desarrollar un sistema a medida para administrar productos, compatibilidades, pares y juegos, publicar y sincronizar Mercado Libre, emitir el documento con el nombre exacto de la venta, imprimir la etiqueta en la Zebra al despachar e ingresar las compras de proveedor sin perder el avance.",
    expectedResult:
      "Menos reclamos por nombre o modelo, menos digitación en bodega y en facturación, y una operación diaria que se pueda atender por vehículo, por publicación y por compra sin rehacer el mismo trabajo a mano.",
  },
  problems: [
    "Un SKU es compatible con varios vehículos, y el documento tributario sale con un nombre genérico que no corresponde a la publicación comprada.",
    "En Mercado Libre existen varias publicaciones del mismo producto físico. Sincronizar solo por SKU no conserva el título de la venta.",
    "La caja del repuesto muestra un modelo compatible distinto al que vio el cliente, y eso genera devoluciones. La etiqueta correcta se escribe a mano en cada despacho.",
    "En mesón el cliente pide por marca, modelo, motor y año, no por código. Los códigos OEM existen, pero cuesta usarlos en la atención.",
    "Los pares (derecho e izquierdo) y los juegos (bujías de 4, 6 u 8) obligan a recalcular cantidades y precios al recibir mercadería.",
    "La factura del proveedor se revisa en PDF y el ingreso a stock, el alta de producto y el precio se cargan aparte. Si el proceso se interrumpe, hay que empezarlo de nuevo.",
    "El catálogo actual tiene 3.255 SKU y puede crecer hacia unos 6.000 al separar pares y juegos. Entre 600 y 700 ventas al mes pasan por este flujo.",
  ],
  modules: [
    {
      title: "Productos, OEM y compatibilidades",
      description:
        "Alta de productos con códigos, precios y stock. Cada repuesto guarda sus códigos OEM y las aplicaciones por marca, modelo, motor y año.",
      impact:
        "Un solo producto físico concentra la información que hoy queda repartida entre el sistema y las publicaciones.",
    },
    {
      title: "Búsqueda para atención en mesón",
      description:
        "Consulta de repuestos por vehículo para responder en el local sin depender de recordar el SKU.",
      impact:
        "La venta presencial usa la misma ficha de compatibilidades que la publicación.",
    },
    {
      title: "Pares, juegos y stock calculado",
      description:
        "Productos de unidad, par y juego. Al recibir unidades, el sistema calcula el stock disponible del conjunto.",
      impact:
        "Recibir dos derechos y dos izquierdos, o 40 bujías, deja de exigir un recálculo manual de cantidades y precios.",
    },
    {
      title: "Mercado Libre",
      description:
        "Conexión con la cuenta, importación de publicaciones actuales, alta y actualización desde el sistema, sincronización de precio y stock, y recepción de ventas. Varias publicaciones pueden apuntar al mismo producto físico.",
      impact:
        "La publicación, la venta y el stock dejan de vivir como listas separadas del mismo repuesto.",
    },
    {
      title: "Boleta y factura con el nombre comprado",
      description:
        "Integración con el proveedor de facturación electrónica que contrate el cliente. El documento usa el nombre exacto del producto de esa venta.",
      impact:
        "La boleta o factura coincide con lo que la persona vio en Mercado Libre.",
    },
    {
      title: "Etiquetas de despacho",
      description:
        "Al recibir la venta se genera la etiqueta con el nombre correcto y se imprime en la impresora Zebra del cliente, para pegarla al embalar.",
      impact:
        "El cliente abre el paquete y ve el mismo modelo de la compra, sin tipear la etiqueta a mano.",
    },
    {
      title: "Recepción de compras",
      description:
        "Ingreso de mercadería desde la factura del proveedor: crear productos nuevos, actualizar stock y costos, y guardar el avance si el proceso se corta.",
      impact:
        "Una factura con muchas líneas se confirma por pasos, sin rehacer el ingreso desde cero.",
    },
    {
      title: "Movimientos y panel operativo",
      description:
        "Consulta de entradas, salidas y movimientos, más un panel de ventas, productos, stock y operación.",
      impact:
        "El día a día se revisa en un solo lugar, con el detalle que corresponda al plan elegido.",
    },
  ],
  timeline: [
    {
      label: "Semanas 1–2",
      title: "Levantamiento y modelo operativo",
      description:
        "Se cierra el flujo real de publicación, venta, despacho, mesón y recepción de compras. Se define cómo se modelan compatibilidades, pares, juegos y el vínculo entre publicación y producto físico.",
    },
    {
      label: "Semanas 3–4",
      title: "Catálogo, búsqueda y conjuntos",
      description:
        "Productos, códigos OEM, compatibilidades, búsqueda por vehículo y cálculo de stock de pares y juegos, con movimientos de inventario.",
    },
    {
      label: "Semanas 5–6",
      title: "Mercado Libre",
      description:
        "Conexión, importación de publicaciones, relación de varias fichas con un mismo producto, sincronización de precio y stock, y recepción automática de ventas.",
    },
    {
      label: "Semanas 7–8",
      title: "Documentos, etiquetas, compras y salida",
      description:
        "Nombre exacto en boleta o factura, impresión en la Zebra, ingreso de facturas de proveedor con guardado de avance, migración según el plan, panel y puesta en producción. Plazo estimado total: 45 a 60 días.",
    },
  ],
  stack: [
    "Aplicación web: Next.js + TypeScript",
    "API: Node.js + TypeScript",
    "Base de datos: PostgreSQL",
    "Mercado Libre: API de publicaciones, stock, precios y ventas",
    "Etiquetas: integración con la impresora Zebra del cliente",
    "Facturación electrónica: proveedor autorizado contratado por el cliente",
    "Infraestructura operada por Qubo: servidores, base de datos, almacenamiento, respaldos y dominio",
  ],
  methodology: [
    "Software a medida para esta operación. El alcance se implementa según el plan elegido.",
    "Plazo estimado de 45 a 60 días. El Plan Integral usa más de ese plazo en migración, orden de datos y controles.",
    "Entregas quincenales con demo para validar compatibilidades, Mercado Libre, documentos y despacho sobre casos reales.",
    "La implementación se paga por hitos según el avance del proyecto.",
    "Los primeros 3 meses posteriores a la puesta en producción incluyen soporte y acompañamiento, sin costo adicional.",
    "Qubo integra y mantiene la conexión con el proveedor de facturación electrónica. El costo de ese proveedor lo paga el cliente directamente.",
  ],
  pricing: [
    {
      name: "Plan Profesional",
      price: "$7.000.000 + IVA",
      description:
        "Sistema completo para centralizar y agilizar la operación diaria del negocio.\n\n**Inversión inicial:** $7.000.000 + IVA. Pago por hitos según avance del proyecto.\n\n**Después del lanzamiento:** los primeros 3 meses de soporte y acompañamiento están incluidos, sin costo adicional. Luego, **$360.000 + IVA mensuales**. Esa mensualidad incluye alojamiento y funcionamiento, servidores, base de datos, almacenamiento, respaldos automáticos, dominio, monitoreo, soporte ante fallas, corrección de errores, mantención de la integración con Mercado Libre, revisión de impresión y procesos automáticos, mantención de la conexión con el proveedor de facturación electrónica, actualizaciones técnicas para mantener el sistema operativo y ajustes menores del funcionamiento normal.\n\nNuevas funcionalidades, módulos o cambios importantes se cotizan por separado.",
      items: [
        "Crear y administrar productos, códigos, precios y stock.",
        "Registrar códigos OEM de los repuestos.",
        "Indicar para qué vehículos sirve cada producto.",
        "Buscar repuestos por marca, modelo, motor y año.",
        "Conectar el sistema con Mercado Libre.",
        "Importar y organizar las publicaciones actuales.",
        "Crear nuevas publicaciones desde el sistema.",
        "Actualizar publicaciones existentes.",
        "Mantener sincronizados precios y stock con Mercado Libre.",
        "Recibir automáticamente las ventas realizadas en Mercado Libre.",
        "Relacionar varias publicaciones de Mercado Libre con un mismo producto físico.",
        "Utilizar en la boleta o factura el nombre exacto del producto que compró el cliente.",
        "Conectar el sistema con un proveedor de facturación electrónica.",
        "Generar etiquetas de despacho con el nombre correcto del producto.",
        "Integración con la impresora Zebra utilizada por el cliente.",
        "Manejar productos vendidos individualmente, en pares o en juegos.",
        "Calcular automáticamente el stock disponible de pares y juegos.",
        "Ingresar mercadería nueva a partir de las facturas de proveedores.",
        "Crear nuevos productos mientras se ingresa una compra.",
        "Actualizar stock y costos durante la recepción de mercadería.",
        "Guardar automáticamente el avance para evitar perder trabajo si el proceso se interrumpe.",
        "Consultar entradas, salidas y movimientos de inventario.",
        "Panel general para revisar ventas, productos, stock y operaciones.",
        "Migración inicial de productos y publicaciones actuales, sujeta a la información disponible.",
        "3 meses de soporte y acompañamiento posterior a la puesta en producción.",
      ],
      featured: true,
    },
    {
      name: "Plan Integral",
      price: "$10.000.000 + IVA",
      description:
        "Incluye todo el Plan Profesional y agrega un trabajo más profundo de automatización, migración, control y orden de la operación existente.\n\n**Inversión inicial:** $10.000.000 + IVA. Pago por hitos según avance del proyecto.\n\n**Después del lanzamiento:** los primeros 3 meses de soporte y acompañamiento están incluidos, sin costo adicional. Luego, **$480.000 + IVA mensuales**. Esa mensualidad incluye la infraestructura y el soporte del Plan Profesional, más supervisión de respaldos, mantención de alertas y controles automáticos, actualizaciones técnicas por cambios en servicios externos y mayor seguimiento ante incidentes que afecten ventas, stock, publicaciones o procesos automáticos.\n\nNuevas funcionalidades, módulos o cambios importantes se cotizan por separado.",
      items: [
        "Todo lo incluido en el Plan Profesional.",
        "Migración más completa de productos, publicaciones, compatibilidades y configuraciones actuales.",
        "Revisión y orden de información antigua o mal estructurada.",
        "Detección de productos repetidos.",
        "Detección de publicaciones de Mercado Libre que no estén correctamente relacionadas con un producto.",
        "Detección de diferencias o errores de stock.",
        "Herramientas para corregir inconsistencias de información.",
        "Organización más completa de las compatibilidades entre vehículos y repuestos.",
        "Mayor automatización al crear productos.",
        "Mayor automatización al generar publicaciones de Mercado Libre.",
        "Mayor automatización al recibir mercadería nueva.",
        "Registro del historial de costos de los productos.",
        "Mayor control sobre las compras realizadas a proveedores.",
        "Punto de venta más completo para las ventas realizadas directamente en el local.",
        "Avisos cuando exista un problema con Mercado Libre.",
        "Avisos cuando una boleta o factura no pueda procesarse correctamente.",
        "Avisos cuando existan diferencias o problemas de stock.",
        "Avisos cuando una publicación quede sin sincronizar.",
        "Registro de quién realizó cambios importantes dentro del sistema.",
        "Mayor detalle sobre ventas, compras, productos y movimientos.",
        "Herramientas administrativas para detectar problemas antes de que afecten la operación.",
        "Sistema reforzado de respaldos y recuperación de información.",
        "3 meses de soporte y acompañamiento posterior a la puesta en producción.",
      ],
      featured: false,
    },
  ],
  includes: [
    "Desarrollo a medida del plan elegido",
    "Uso del sistema para la operación de Sergio Yáñez",
    "Integración con Mercado Libre y con la impresora Zebra del cliente",
    "Integración con el proveedor de facturación electrónica que contrate el cliente",
    "Migración de productos y publicaciones según el alcance del plan",
    "3 meses de soporte y acompañamiento después de la puesta en producción",
    "Alojamiento, base de datos, respaldos y dominio durante esos 3 meses y, después, dentro de la mensualidad del plan",
    "Pago de la implementación por hitos según avance del proyecto",
  ],
  notIncluded: [
    "El costo del proveedor de facturación electrónica. El cliente contrata por su cuenta boletas, facturas, notas de crédito y otros documentos tributarios. Referencia aproximada: desde $36.000 hasta $125.000 + IVA mensuales, según proveedor y nivel de facturación. Ese valor se paga directo al proveedor. Qubo realiza y mantiene la integración.",
    "Nuevas funcionalidades, módulos o cambios importantes posteriores al alcance del plan elegido",
    "Compra o reposición de impresoras, lectores u otro hardware",
    "En el Plan Profesional: orden profundo de datos antiguos, detección de duplicados y de publicaciones mal relacionadas, historial de costos, alertas operativas, auditoría de cambios y punto de venta ampliado. Eso corresponde al Plan Integral.",
    "Proyección de compras y reposición automática de stock",
    "Canales de venta distintos de Mercado Libre y de la atención en el local",
    "Recuperación de respaldos contables de sistemas anteriores que ya no están disponibles",
  ],
  cta: {
    title: "¿Avanzamos con el sistema de repuestos?",
    description:
      "En la próxima reunión revisamos el Plan Profesional y el Plan Integral, confirmamos el proveedor de facturación electrónica y dejamos definido el hito de inicio.",
    primaryButton: "Aprobar propuesta",
    secondaryButton: "Agendar reunión",
  },
};

export default sergioYanezGestionRepuestos;
