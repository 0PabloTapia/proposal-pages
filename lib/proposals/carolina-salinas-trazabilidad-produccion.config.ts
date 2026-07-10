import { ProposalConfig } from "@/lib/types";

/**
 * Referencia cambiaria (09-10 jul 2026):
 * UF = $40.844,79 CLP | Dólar observado = $935,71 CLP
 * 1 UF ≈ USD 43,65
 */
const carnesOhigginsTrazabilidadProduccion: ProposalConfig = {
  slug: "carolina-salinas-trazabilidad-produccion",
  client: "Carnes O'Higgins",
  title: "Sistema de Trazabilidad y Control de Producción para Planta Cárnica",
  mainProblem:
    "Hoy el control de materia prima, cámaras frías, sala de procesos y despacho se lleva en Excel, sin trazabilidad completa ni conexión con balanzas e impresoras de tarjas, lo que genera riesgo de mermas, errores de pesaje y pérdida de control del ciclo productivo.",
  summary: {
    problem:
      "Después de dejar de usar Rhino, Carnes O'Higgins gestiona recepción, inventario en cámara, órdenes de trabajo, procesamiento y despacho con planillas. Eso no permite seguir un lote desde el proveedor hasta el cliente, ni automatizar el pesaje y el etiquetado en planta.",
    solution:
      "Desarrollar un sistema a medida con opciones escalables: desde el control base de inventario y cámaras, pasando por la automatización de la sala de procesos con balanzas y tarjas, hasta llegar a un ERP cárnico con costeo e integración con Nubox.",
    expectedResult:
      "Visibilidad del stock en cámara, trazabilidad de punta a punta, menos errores manuales en pesaje y etiquetado, y una base sólida para conectar la operación con la facturación cuando lo necesiten.",
  },
  problems: [
    "El control diario de recepción, cámaras y despacho depende de Excel, con alto riesgo de errores y descuadres.",
    "No existe trazabilidad completa desde la materia prima del proveedor hasta el producto terminado entregado al cliente.",
    "La sala de procesos no está conectada al sistema: el peso de la balanza y la tarja no se generan de forma automática.",
    "Es difícil asociar cajas, bolsas y costos reales a cada lote procesado.",
    "Sin un flujo digital de órdenes de trabajo, despacho y proceso no tienen una sola fuente de verdad operativa.",
  ],
  modules: [
    {
      title: "Recepción e inventario en cámaras frías",
      description:
        "Registro de ingreso de materia prima, stock por cámara, control de vida útil (5 a 7 días) y asociación de empaques (cajas y bolsas primarias).",
      impact:
        "Saber qué hay en cámara, cuánto dura y qué se puede procesar o despachar sin depender de planillas.",
    },
    {
      title: "Órdenes de trabajo y sala de procesos",
      description:
        "El jefe de despacho asigna producto a proceso; en sala se trabaja sobre la orden, se registra la transformación y se genera la tarja del producto terminado.",
      impact:
        "Ordena el flujo real de la planta: qué entra a proceso, qué sale y a qué cliente o destino va.",
    },
    {
      title: "Pesaje, pistoleo e impresión de tarjas",
      description:
        "Conexión con balanzas en red e impresora TSC TTP244 Pro, más lectura de códigos de barras para ingreso rápido en PC o pantalla touch.",
      impact:
        "Menos digitación manual, menos errores de peso y etiquetas listas al momento de procesar.",
    },
    {
      title: "Trazabilidad de punta a punta",
      description:
        "Seguimiento del lote desde el proveedor, pasando por cámara y proceso, hasta el despacho al cliente.",
      impact:
        "Responder con claridad de dónde vino cada producto y por qué etapas pasó.",
    },
    {
      title: "Costeo, reportes e integración Nubox",
      description:
        "Cálculo de costos y mermas, paneles para jefatura y conexión con Nubox para alinear operación con facturación.",
      impact:
        "Pasar del control operativo al control de costos y administración sin romper el flujo de planta.",
    },
  ],
  timeline: [
    {
      label: "Semanas 1–2",
      title: "Levantamiento en planta y diseño",
      description:
        "Visita presencial para mapear el flujo real de recepción, cámaras, sala de procesos y despacho. Se define el diseño exacto de las tarjas, las pantallas touch y los flujos de usuario. Sin esta etapa no se escribe código.",
    },
    {
      label: "Semanas 3–5",
      title: "Módulo de inventario y cámaras frías",
      description:
        "Desarrollo del control de recepción, stock en cámara, vida útil, órdenes de trabajo y gestión de usuarios. Al final de esta etapa el equipo puede dejar de usar Excel para el inventario.",
    },
    {
      label: "Semanas 6–8",
      title: "Sala de procesos y conexión de hardware",
      description:
        "Desarrollo de la interfaz touch para operarios, integración TCP/IP con balanzas, protocolo de impresión con la TSC TTP244 Pro y soporte para pistoleo de códigos de barras.",
    },
    {
      label: "Semana 9",
      title: "Pruebas de hardware en planta (presencial)",
      description:
        "Visita presencial para validar la conexión real con balanzas e impresoras en la red de la planta. Se hacen pesajes y tarjas de prueba hasta confirmar que el flujo completo funciona sin errores.",
    },
    {
      label: "Semanas 10–11",
      title: "Puesta en marcha y capacitación",
      description:
        "Carga del inventario inicial, capacitación presencial al jefe de despacho y operarios, y lanzamiento oficial del sistema en producción. El equipo de Qubo acompaña el primer día de operación real.",
    },
  ],
  stack: [
    "Aplicación web en la nube",
    "Base de datos segura con respaldos",
    "Conexión a balanzas e impresoras por red local",
    "Pantallas touch y lectores de código de barras",
  ],
  methodology: [
    "Levantamiento del flujo real de planta (recepción, cámara, proceso y despacho)",
    "Desarrollo por entregas utilizables, no un solo gran lanzamiento al final",
    "Pruebas tempranas con balanzas e impresora TSC en la red de la planta",
    "Capacitación a jefatura de despacho y equipo de proceso",
    "Acompañamiento en la puesta en marcha",
  ],
  pricing: [
    {
      name: "Plan 1 — Control de Inventario y Trazabilidad",
      price: "UF 850",
      description:
        "Referencia aprox. $35.000.000 CLP + IVA (UF $40.844,79). Resuelve el desorden del Excel y centraliza la información, pero la operación en planta sigue siendo manual y dependiente de digitación.",
      items: [
        "- Módulo de Recepción y Cámaras Frías: Ingreso de guías, creación de lotes de materia prima y asignación de ubicación.",
        "- Control de Vida Útil: Alertas automatizadas de caducidad (FIFO/FEFO) para evitar mermas en cámara.",
        "- Gestión de Órdenes de Trabajo (OT): Panel para jefatura donde se asigna materia prima a proceso, bloqueando el stock.",
        "- Trazabilidad Base: Seguimiento del lote desde el proveedor hasta la salida, con ingreso manual de pesos y datos.",
        "- Catálogos Centralizados: Gestión de proveedores, productos, cortes y empaques (cajas/bolsas primarias).",
        "- Capacitación Inicial: Entrenamiento al equipo administrativo y jefatura de despacho para el uso del inventario.",
      ],
    },
    {
      name: "Plan 2 — Automatización de Planta (Recomendado)",
      price: "UF 1.225",
      description:
        "Referencia aprox. $50.000.000 CLP + IVA (UF $40.844,79). El sistema completo para la operación. Elimina el error humano en la sala de procesos al conectar las máquinas directamente al software.",
      items: [
        "- Todo lo incluido en el Plan 1 (Inventario, OT y Trazabilidad).",
        "- Conexión TCP/IP con Balanzas: Captura del peso exacto desde la balanza hacia el sistema web en tiempo real, sin teclear.",
        "- Integración con Impresoras TSC TTP244 Pro: Generación automática de código para imprimir la tarja al instante del pesaje.",
        "- Interfaz Touch de Procesos: Pantalla de botones grandes optimizada para uso rápido por operarios en la sala.",
        "- Soporte para Pistoleo: Ingreso rápido escaneando códigos de barras de materia prima y producto terminado.",
        "- Trazabilidad End-to-End Automatizada: Motor que vincula el lote original con cada caja generada sin intervención humana.",
        "- Reportes Operativos: Vistas en tiempo real de kilos procesados por turno, mermas por OT y stock actual.",
        "- Puesta en Marcha en Planta: Pruebas de hardware in situ y acompañamiento durante el primer día de uso en vivo.",
      ],
      featured: true,
    },
    {
      name: "Plan 3 — ERP Cárnico Integral",
      price: "UF 1.590",
      description:
        "Referencia aprox. $65.000.000 CLP + IVA (UF $40.844,79). Conecta la planta automatizada con la administración financiera y gerencial, permitiendo costear cada producto con exactitud.",
      items: [
        "- Todo lo incluido en el Plan 2 (Automatización total de hardware y planta).",
        "- Integración Bidireccional con Nubox: Sincronización automática de facturación, notas de crédito, clientes y proveedores.",
        "- Módulo de Costeo Dinámico: Cálculo exacto del costo del producto terminado (materia prima + mermas + horas + empaques).",
        "- Dashboards Gerenciales: Paneles de Inteligencia de Negocios (BI) con rentabilidad por producto y rendimiento de planta.",
        "- Auditoría Avanzada: Registro histórico de qué usuario realizó cada acción, pesaje o modificación en el sistema.",
        "- Carga de Stock Inicial: Migración y cuadratura del inventario físico para el día oficial de lanzamiento (Go-Live).",
      ],
    },
    {
      name: "Mantención y soporte mensual",
      price: "UF 15 - 25 / mes",
      description:
        "Referencia aprox. $612.671 CLP - $1.021.119 CLP / mes + IVA (UF $40.844,79). Servicio continuo para mantener el sistema operativo, seguro y disponible para la planta.",
      items: [
        "- Hosting Cloud de Alta Disponibilidad: Servidores optimizados y seguros para operación industrial.",
        "- Respaldos Georeplicados: Copias de seguridad diarias de toda la base de datos de trazabilidad.",
        "- Soporte Técnico Especializado: Atención directa a jefatura en horario hábil para resolución de dudas.",
        "- Monitoreo de Hardware: Alertas si las balanzas o impresoras pierden conexión con el servidor.",
        "- Mantenimiento Correctivo: Solución sin costo adicional de cualquier falla de software (bug) detectada.",
      ],
    },
  ],
  includes: [
    "Desarrollo completo según el Plan seleccionado",
    "Diseño de pantallas para PC y touch de sala de procesos",
    "Conexión con balanzas en red e impresora TSC TTP244 Pro (Planes 2 y 3)",
    "Capacitación a jefatura de despacho y equipo de proceso",
    "Despliegue en la nube con respaldos",
  ],
  notIncluded: [
    "Compra de hardware (balanzas, impresoras, pantallas, pistolas o cables)",
    "Instalación o ampliación de puntos de red físicos en la planta",
    "Migración masiva de historial antiguo desde Excel (se cotiza aparte si se requiere)",
    "Integración con Nubox (Solo incluida en el Plan 3)",
  ],
  cta: {
    title: "¿Damos el siguiente paso con Carnes O'Higgins?",
    description:
      "Podemos agendar la reunión de presentación para revisar los planes, validar el flujo de planta y definir con cuál opción prefieren iniciar.",
    primaryButton: "Aprobar propuesta",
    secondaryButton: "Agendar reunión",
  },
};

export default carnesOhigginsTrazabilidadProduccion;
