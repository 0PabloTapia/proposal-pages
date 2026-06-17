import { ProposalConfig } from "@/lib/types";

const amstelappRioSpa: ProposalConfig = {
  slug: "amstelapp-rio-spa",
  client: "Rio SpA / Ricardo Ahumada",
  title: "Plataforma Web Modular AmstelApp",
  mainProblem:
    "La gestión operacional y administrativa de los proyectos de Rio SpA está descentralizada entre la oficina y el terreno, con procesos manuales, doble digitación y sin integración entre sistemas clave.",
  summary: {
    problem:
      "Información dispersa entre la oficina y el terreno, procesos manuales de presupuestos, compras y personas, y falta de integración con Talana y el SII generan ineficiencias y doble digitación.",
    solution:
      "Desarrollar AmstelApp, una plataforma web modular con automatización por IA para lectura de cotizaciones en PDF y facturas del SII, integración con Talana, y control integral de 11 módulos operacionales entregados en 3 fases de alto impacto.",
    expectedResult:
      "Un sistema completo entregado en 12 semanas con arquitectura robusta, sin doble digitación, con trazabilidad de punta a punta y Time-to-Market significativamente menor al estándar de mercado.",
  },
  problems: [
    "Información descentralizada entre la oficina y el terreno",
    "Doble digitación en la gestión de personas, compras y presupuestos",
    "Sin automatización para lectura de facturas del SII ni cotizaciones PDF",
    "Falta de integración con Talana para sincronizar datos del personal",
    "Sin trazabilidad de calidad, riesgo y control documental en obra",
    "Las metodologías de control de proyecto (Last Planner) se gestionan fuera del sistema",
  ],
  modules: [
    {
      title: "Home / Administración",
      description:
        "Base transversal de la plataforma: login, gestión de usuarios, roles y perfiles diferenciados entre Oficina y Terreno.",
      impact:
        "Establece la seguridad y el acceso estructurado a la plataforma según el rol de cada usuario.",
    },
    {
      title: "Presupuesto",
      description:
        "Creación de presupuestos de venta y control ítem por ítem, control de disponibilidad y seguimiento de desviaciones.",
      impact:
        "Permite un control financiero detallado y la detección temprana de sobrecostos.",
    },
    {
      title: "Logística y Abastecimiento",
      description:
        "Gestión de requerimientos de terreno, control de bodega, despachos y stock de materiales.",
      impact:
        "Optimiza la cadena de suministro interna y asegura la disponibilidad de materiales en obra.",
    },
    {
      title: "Automatización con IA",
      description:
        "Lectura automática de cotizaciones en formato PDF mediante Inteligencia Artificial y generación de Órdenes de Compra (OC) a partir de los datos extraídos.",
      impact:
        "Elimina la digitación manual de cotizaciones y reduce errores en la generación de OC.",
    },
    {
      title: "Recursos Humanos",
      description:
        "Solicitudes de contratación, control de dotación y gestión de acreditaciones del personal.",
      impact:
        "Centraliza la gestión de personas y mantiene el control de dotación actualizado por proyecto.",
    },
    {
      title: "Integración Talana",
      description:
        "Conexión vía API con Talana para sincronizar automáticamente los datos del personal y evitar el doble ingreso de información.",
      impact:
        "Elimina la doble digitación en la gestión de personas y mantiene los sistemas siempre sincronizados.",
    },
    {
      title: "Calidad y Control Documental",
      description:
        "Plan de calidad, inspecciones, protocolos, No Conformidades, versionado de documentos, aprobaciones de planos, RFI y trazabilidad documental.",
      impact:
        "Asegura el cumplimiento de estándares y mantiene un historial claro de la documentación del proyecto.",
    },
    {
      title: "Riesgo",
      description:
        "Matrices de riesgo, registro de incidentes y control de EPP por tarea.",
      impact:
        "Mitiga riesgos laborales y mantiene el cumplimiento normativo de seguridad en obra.",
    },
    {
      title: "Finanzas e Integración SII",
      description:
        "Control financiero por proyecto con conexión automática al SII para lectura de facturas XML y cruce con Órdenes de Compra.",
      impact:
        "Automatiza la conciliación financiera y agiliza el control de gastos sin intervención manual.",
    },
    {
      title: "Medio Ambiente",
      description:
        "Seguimiento de hallazgos ambientales y control de residuos generados en obra.",
      impact:
        "Asegura el cumplimiento de las obligaciones ambientales y deja trazabilidad de los hallazgos.",
    },
    {
      title: "Control de Proyecto y Aprobaciones",
      description:
        "Seguimiento de avance físico vs financiero, implementación digital interactiva de la metodología Last Planner (Lookahead) para reuniones de obra, y bandeja centralizada de aprobaciones con trazabilidad de firmas y tiempos.",
      impact:
        "Proporciona visibilidad en tiempo real del estado del proyecto y agiliza la toma de decisiones.",
    },
  ],
  timeline: [
    {
      label: "Mes 1 (Semanas 1–4)",
      title: "Fase 1: MVP Financiero y Compras",
      description:
        "Home / Administración — Base transversal, login, usuarios y roles.\nPresupuesto — Creación de presupuestos de venta y control ítem por ítem.\nLogística y Abastecimiento — Requerimientos, control de bodega y stock.\nAutomatización con IA e Integración SII — Lectura automática de cotizaciones PDF, generación de OC y cruce automático con facturas XML del SII.",
    },
    {
      label: "Mes 2 (Semanas 5–8)",
      title: "Fase 2: Gestión de Personas y Aprobaciones",
      description:
        "Recursos Humanos — Solicitudes de contratación, control de dotación y acreditaciones.\nIntegración Talana — Conexión vía API para sincronizar datos del personal y eliminar el doble ingreso.\nAprobaciones — Bandeja centralizada de firmas con trazabilidad de tiempos por usuario.",
    },
    {
      label: "Mes 3 (Semanas 9–12)",
      title: "Fase 3: Terreno, Control y Consolidación",
      description:
        "Calidad — Plan de calidad, inspecciones, protocolos y No Conformidades.\nControl Documental — Versionado de documentos, aprobaciones de planos y RFI.\nRiesgo y Medio Ambiente — Matrices de riesgo, incidentes, EPP y control de residuos.\nControl de Proyecto — Seguimiento de avance físico vs financiero e implementación digital de planificación Lookahead (Last Planner).",
    },
  ],
  stack: [
    "Next.js (App Router) — Frontend web",
    "AWS API Gateway — Capa REST / entrada unificada al backend",
    "AWS Lambda — Lógica de negocio serverless y event-driven",
    "Amazon SQS + EventBridge — Mensajería y orquestación de eventos asincrónicos",
    "Amazon RDS (PostgreSQL) — Base de datos relacional administrada",
    "Amazon S3 — Almacenamiento de documentos, PDFs y archivos",
    "AWS Cognito — Autenticación, sesiones y gestión de usuarios",
    "OpenAI API (vía Lambda) — Extracción de datos desde cotizaciones PDF",
    "API SII (vía Lambda + EventBridge) — Lectura automática de facturas XML",
    "API Talana (vía Lambda + SQS) — Sincronización asíncrona de personal",
    "AWS CloudWatch — Monitoreo, logs y alertas",
    "GitHub Actions + AWS CDK — CI/CD y provisión de infraestructura como código",
  ],
  methodology: [
    "Desarrollo acelerado impulsado por Inteligencia Artificial",
    "3 fases de alto impacto con entregables validables al cierre de cada fase",
    "Demos funcionales con el equipo de Rio SpA al cierre de cada sprint",
    "Modalidad de pago por fases: 50% al inicio (Kick-off) · 50% contra entrega y validación de esta fase",
    "Código fuente 100% propiedad de Rio SpA al finalizar el proyecto",
  ],
  pricing: [
    {
      name: "MVP Financiero y Compras",
      price: "150 UF",
      description:
        "Semanas 1–4. Precio preferencial de validación. Resuelve el dolor más grande: la triple digitación de facturas y órdenes de compra.\n\n**Valor referencial:** ~$5.700.000 CLP + IVA.\n\n**Mantención mensual opcional:** Plan Cloud & Security 15 UF/mes · Plan Evolutivo 35 UF/mes.\n\nEstructura de pago: 50% al inicio (Kick-off) · 50% contra entrega y salida a producción.",
      featured: true,
      items: [
        "Home / Administración: login, usuarios y roles",
        "Presupuesto: venta, control ítem a ítem y desviaciones",
        "Logística y Abastecimiento: bodega, despachos y stock",
        "Automatización con IA: lectura de cotizaciones PDF y generación de OC",
        "Finanzas e Integración SII: facturas XML cruzadas automáticamente con OC",
        "— Siguientes pasos —",
        "Una vez validado el MVP, puedes habilitar el desarrollo de los módulos restantes (Personas y Terreno) a tu propio ritmo.",
      ],
    },
    {
      name: "ERP Integral (11 Módulos)",
      price: "690 UF",
      description:
        "Semanas 1–12. La plataforma completa desarrollada de forma continua en un solo ciclo, con descuento por contratación integral.\n\n**Valor referencial:** ~$26.220.000 CLP + IVA.\n\n**Mantención mensual opcional:** Plan Cloud & Security 15 UF/mes · Plan Evolutivo 35 UF/mes.\n\nEstructura de pago: 30% al inicio (Kick-off) · 40% al Mes 2 · 30% contra entrega y salida a producción.",
      items: [
        "Todo lo incluido en el MVP Financiero y Compras",
        "Recursos Humanos e Integración Talana (sin doble digitación)",
        "Aprobaciones: bandeja centralizada de firmas con trazabilidad",
        "Calidad, Riesgo y Medio Ambiente: inspecciones, incidentes y residuos",
        "Control Documental: versionado, planos y RFI",
        "Control de Proyecto: avance físico vs financiero y Last Planner (Lookahead)",
        "Garantía técnica de 3 meses (90 días) sin costo",
        "Código fuente 100% propiedad de Rio SpA",
        "Arquitectura 'SaaS Ready' lista para comercializar a terceros",
      ],
    },
  ],
  includes: [
    "Desarrollo completo de 11 módulos funcionales",
    "Plataforma 100% Web Responsive (adaptable a celulares)",
    "Automatización con IA para lectura de cotizaciones PDF",
    "Integración con API del SII para lectura de facturas XML",
    "Integración con API de Talana para sincronización de personal",
    "Carga inicial de datos históricos mediante planillas Excel",
    "Código fuente 100% propiedad de Rio SpA al finalizar el proyecto",
  ],
  notIncluded: [
    "Desarrollo de App Móvil nativa (iOS/Android)",
    "Integración contable profunda con Defontana (evaluable para una fase posterior)",
    "Migración automática de datos históricos desde otros sistemas",
  ],
  cta: {
    title: "Próximos pasos",
    description:
      "Revisión de esta propuesta, reunión técnica final con Pablo y Felipe para despejar dudas de arquitectura, firma de acuerdo y Kick-off de la Fase 1.",
    primaryButton: "Aprobar propuesta",
    secondaryButton: "Agendar reunión técnica",
  },
};

export default amstelappRioSpa;
