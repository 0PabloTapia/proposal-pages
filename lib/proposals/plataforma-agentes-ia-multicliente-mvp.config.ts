import { ProposalConfig } from "@/lib/types";

const plataformaAgentesIaMulticlienteMvp: ProposalConfig = {
  slug: "plataforma-agentes-ia-multicliente-mvp",
  client: "Gian Raineri",
  title: "Plataforma propia de agentes IA multi-cliente (MVP por fases)",
  mainProblem:
    "dependencia de una plataforma SaaS externa con bugs y limitaciones, lo que afecta el control operativo, la estabilidad y la capacidad de escalar por etapas",
  summary: {
    problem:
      "Hoy la operación depende de una suscripción SaaS externa tipo BuildMyAgent. Eso permite salir rápido, pero mantiene al negocio atado a decisiones, estabilidad y límites de un tercero.",
    solution:
      "Qubo propone construir una plataforma propia (in-house) por fases, con estructura owner + subcuentas por cliente, agentes por subcuenta y dashboard operativo separado.",
    expectedResult:
      "Mayor control del activo tecnológico, menor dependencia de terceros, mejor trazabilidad por cliente y una base escalable para crecer desde los 6-7 clientes actuales.",
  },
  problems: [
    "Dependencia tecnológica de un SaaS externo con bugs reportados",
    "Baja capacidad de control sobre roadmap, estabilidad y prioridades de producto",
    "Necesidad de separar operación matriz (owner) y clientes (subcuentas) con aislamiento lógico",
    "Riesgo de crecimiento desordenado sin arquitectura multi-cliente propia",
    "Necesidad de diferenciar inversión en desarrollo propio vs pago recurrente por suscripción de terceros",
  ],
  modules: [
    {
      title: "Estructura Multi-cuenta (Owner + Subcuentas)",
      description:
        "Implementación de una cuenta owner (matriz) con hasta 5 subcuentas, cada una con aislamiento lógico para operar clientes/proyectos de forma separada.",
      impact:
        "Ordena la operación multi-cliente desde el inicio y facilita escalar sin mezclar datos ni gestión.",
    },
    {
      title: "Gestión de Usuarios y Roles",
      description:
        "Roles Owner, Admin Subcuenta y Operador, con hasta 3 usuarios por subcuenta como marco referencial en esta fase.",
      impact:
        "Define responsabilidades claras y mejora el control operativo por cliente.",
    },
    {
      title: "Gestor de Agentes IA",
      description:
        "Hasta 3 agentes por subcuenta (15 referenciales), con nombre, prompt, instrucciones, mensaje inicial y control de activación/desactivación.",
      impact:
        "Permite estandarizar operación de agentes y ajustar respuesta por cliente sin depender de terceros.",
    },
    {
      title: "Modelos IA por Agente",
      description:
        "Habilitación de 2 modelos (1 económico + 1 alternativo) con selección por agente, sin routing/fallback avanzado en esta fase.",
      impact:
        "Balancea costo y desempeño en un MVP funcional y medible.",
    },
    {
      title: "Canal Principal de Atención",
      description:
        "Implementación de 1 canal principal inicial (Widget Web o WhatsApp), según priorización de negocio definida en cierre.",
      impact:
        "Permite salir a producción con foco, menor complejidad y mejor velocidad de validación.",
    },
    {
      title: "Base de Conocimiento Inicial",
      description:
        "Scraping web básico (1 dominio por subcuenta), carga de documentos PDF/TXT/DOCX con límites y reindexación manual.",
      impact:
        "Mejora calidad de respuesta de agentes con control sobre contenido y actualización.",
    },
    {
      title: "Dashboard Operativo Básico",
      description:
        "Vista de conversaciones recientes, métricas base (volumen de conversaciones/mensajes/actividad) y filtro por agente.",
      impact:
        "Entrega trazabilidad operativa para tomar decisiones sin depender de reporting externo.",
    },
    {
      title: "Infraestructura y Exportación Inicial",
      description:
        "Deploy cloud inicial, backups básicos, monitoreo/logs básicos y exportación CSV de conversaciones.",
      impact:
        "Asegura continuidad mínima de operación y facilita control de datos desde el día uno.",
    },
  ],
  timeline: [
    {
      label: "Fase 1",
      title: "Definición y diseño operativo",
      description:
        "Levantamiento final de alcance, definición de canal principal, modelo owner/subcuentas, roles y diseño funcional del MVP.",
    },
    {
      label: "Fase 2",
      title: "Construcción núcleo multi-cliente",
      description:
        "Desarrollo de estructura de cuentas, usuarios/roles, gestión de agentes, selección de modelos IA y base de conocimiento inicial.",
    },
    {
      label: "Fase 3",
      title: "Canal, dashboard y estabilización",
      description:
        "Integración del canal principal, dashboard básico, exportación CSV, despliegue cloud inicial y validaciones operativas.",
    },
    {
      label: "Fase 4",
      title: "Salida productiva y acompañamiento",
      description:
        "Puesta en marcha según opción comercial elegida, ajustes iniciales y transición a esquema de mantención mensual.",
    },
  ],
  stack: [
    "Supabase",
    "Vercel (o similar)",
    "Redis / colas",
    "Monitoreo con Sentry / logs",
  ],
  methodology: [
    "Desarrollo por fases con entregables funcionales",
    "Lenguaje de avance orientado a negocio (no técnico)",
    "Priorización de un canal principal para reducir complejidad inicial",
    "Validación operativa temprana con clientes reales",
    "Separación clara entre desarrollo, mantención e infraestructura",
    "Escalamiento posterior según datos de uso y tracción",
  ],
  pricing: [
    {
      name: "Opción 1 - Starter Express",
      price: "USD 2,500 + IVA",
      description:
        "**Plazo: 2-3 semanas**\n\nObjetivo: demo funcional para validar rápido.\n\nForma de pago: 100% al iniciar.\n\nCapacidad incluida: cuenta Owner: 1 / subcuentas: hasta 3 / usuarios: hasta 2 por subcuenta (6 + Owner) / agentes: hasta 2 por subcuenta (6 total).\n\nMantención mensual: USD 200/mes (monitoreo básico, corrección de bugs menores, hasta 4 horas/mes de soporte, 1 despliegue menor mensual).\n\nInfraestructura mensual estimada: base USD 120-300/mes y con mayor uso USD 220-650/mes (cloud + consumo variable IA/canales). Se cobra por separado.",
    },
    {
      name: "Opción 2 - MVP Operativo",
      price: "USD 5,000",
      description:
        "**Plazo: 4-6 semanas**\n\nObjetivo: operar clientes reales con estabilidad inicial.\n\nForma de pago: 40% al iniciar / 40% al hito funcional (canal + agentes + knowledge base) / 20% en entrega productiva.\n\nCapacidad incluida: cuenta Owner: 1 / subcuentas: hasta 5 / usuarios: hasta 3 por subcuenta (15 + Owner) / agentes: hasta 3 por subcuenta (15 total).\n\nMantención mensual: USD 500/mes (monitoreo y alertas básicas, corrección priorizada de bugs, hasta 10 horas/mes, 2 despliegues mensuales).\n\nInfraestructura mensual estimada: base USD 250-600/mes y con mayor uso USD 450-1,300/mes (cloud + consumo variable IA/canales). Se cobra por separado.",
      featured: true,
    },
    {
      name: "Opción 3 - Growth",
      price: "USD 7,500",
      description:
        "**Plazo: 8-10 semanas**\n\nObjetivo: escalar operación multi-cliente con mayor control.\n\nForma de pago: 30% al iniciar / 30% hito técnico 1 / 30% hito técnico 2 / 10% cierre-handover.\n\nCapacidad incluida: cuenta Owner: 1 / subcuentas: hasta 10 / usuarios: hasta 5 por subcuenta (50 + Owner) / agentes: hasta 5 por subcuenta (50 total).\n\nMantención mensual: USD 900/mes (soporte operativo extendido, hasta 20 horas/mes para bugs + mejoras menores, 4 despliegues mensuales, optimización mensual de costos/uso, hardening continuo básico).\n\nInfraestructura mensual estimada: base USD 500-1,200/mes y con mayor uso USD 1,000-3,000/mes (cloud + consumo variable IA/canales). Se cobra por separado.",
    },
  ],
  includes: [
    "Propuesta por fases con foco consultivo y lenguaje claro para negocio",
    "Estructura 1 cuenta owner + hasta 5 subcuentas con aislamiento lógico",
    "Roles Owner, Admin Subcuenta y Operador",
    "Hasta 3 agentes por subcuenta (15 referenciales) con configuración base",
    "Selección de 2 modelos IA por agente (sin routing/fallback avanzado en esta fase)",
    "1 canal principal inicial (Widget Web o WhatsApp, según priorización)",
    "Scraping web básico (1 dominio por subcuenta)",
    "Carga de documentos PDF/TXT/DOCX con límites y reindexación manual",
    "Dashboard básico con conversaciones recientes y métricas operativas",
    "Exportación CSV de conversaciones",
    "Deploy cloud inicial + backups y monitoreo/logs básicos",
    "Aclaración financiera: mantención mensual (servicio del equipo) e infraestructura mensual (costos de terceros) son conceptos independientes y se cobran por separado",
  ],
  notIncluded: [
    "Paridad completa con BuildMyAgent en esta fase",
    "Integraciones avanzadas simultáneas (Shopify + ManyChat + Meta + Calendar + etc.)",
    "Billing SaaS completo por planes o créditos",
    "White-label avanzado",
    "Analítica avanzada tipo BI",
    "Hardening enterprise (HA, multi-región, observabilidad avanzada)",
  ],
  cta: {
    title: "Siguiente paso recomendado",
    description:
      "Agendemos una reunión de cierre de 45 minutos con Qubo para confirmar la opción comercial (1, 2 o 3), definir el canal principal inicial (Widget vs WhatsApp) y validar cronograma final con fecha de kick-off.",
    primaryButton: "Revisar opciones",
    secondaryButton: "Agendar cierre",
  },
};

export default plataformaAgentesIaMulticlienteMvp;
