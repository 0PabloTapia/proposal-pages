import { ProposalConfig } from "@/lib/types";

const drToothSistemaGestionInteligente: ProposalConfig = {
  slug: "dr-tooth-sistema-gestion-inteligente",
  client: "Dr. Luis Alejandro Saucedo Rivas — Dr. Tooth",
  title: 'Sistema de Gestión Inteligente "Dr. Tooth"',
  mainProblem:
    "la clínica opera con Dental Link, que cubre solo agenda y presupuestos, sin visibilidad real de rentabilidad por caso, eficiencia por doctora ni seguimiento integral de tratamientos complejos de 2–3 años",
  summary: {
    problem:
      "Hoy no se puede responder con certeza cuánto se gana por paciente/caso, cuánto tarda cada doctora por procedimiento ni cómo evoluciona un tratamiento multietapa. La información clínica y financiera queda fragmentada.",
    solution:
      "Qubo propone una plataforma a medida alineada al documento del proyecto: CRM clínico con rentabilidad por caso, core financiero con cobranza automatizada e integración con el agente de IA propietario del cliente, desplegada por módulos con entregables verificables en cada etapa.",
    expectedResult:
      "Control operativo y financiero del instituto, trazabilidad completa del tratamiento, KPIs de rentabilidad accionables e integración del agente de diagnóstico sin ceder la propiedad intelectual clínica.",
  },
  problems: [
    "Dental Link no responde a la lógica clínica ni a la rentabilidad real de tratamientos largos",
    "Imposibilidad de saber cuánto se gana por caso cuando intervienen 100+ citas, materiales y financiamiento",
    "Sin medición de eficiencia por doctora ni tiempos reales por tipo de cita",
    "Seguimiento de tratamientos multietapa sin visibilidad de fase, retrasos ni próximos pasos",
    "Cobranza y financiamiento sin automatización ni alertas proactivas",
    "Calidad de servicio sin encuestas objetivas post-atención",
    "Agente de diagnóstico en desarrollo propio sin plataforma integrada que lo consuma",
    "Necesidad de arquitectura segura, modular y con protección de propiedad intelectual",
  ],
  modules: [
    {
      title: "M1 Pro — CRM clínico, seguimiento, guía y rentabilidad",
      description:
        "Fundación y operación clínica (agenda de 6 sillones, expediente, odontograma, archivos), CRM multietapa con timeline y alertas, contenedor de guía de ejecución vía API del cliente, y motor de rentabilidad con KPIs por doctora y margen por caso.",
      impact:
        "Reemplaza Dental Link y responde cuánto se gana realmente por paciente, en qué fase está cada tratamiento y qué casos conviene priorizar.",
    },
    {
      title: "M2 — Core financiero y cobranza automatizada",
      description:
        "Calculadora de financiamiento, planes de pago, cartera por paciente, integración con pasarela de pagos recurrentes, motor de cobranza con reglas automatizadas y WhatsApp para cobranza y encuestas post-cita.",
      impact:
        "Convierte la operación financiera en un micro-financiamiento controlado con flujo de caja predecible y feedback objetivo del paciente.",
    },
    {
      title: "M3 — Capa de inteligencia artificial",
      description:
        "API Gateway seguro hacia el servidor privado del cliente, copiloto clínico en el expediente, copiloto de ventas según estado financiero y tratamiento sugerido, y renderizado de respuestas del agente propietario.",
      impact:
        "Integra el diferenciador estratégico del instituto sin que Qubo desarrolle el motor de diagnóstico ni los protocolos clínicos.",
    },
    {
      title: "M4 — Inventario y escala (opcional)",
      description:
        "Stock de materiales vinculado a procedimientos, consultas operativas sobre pacientes/casos, auditoría avanzada y preparación para multi-sede o modelo SaaS. Mencionado en la reunión inicial; no forma parte del documento base de tres módulos.",
      impact:
        "Cierra el ciclo operativo y deja la plataforma lista para crecer en volumen o comercializarse a futuro.",
    },
  ],
  timeline: [
    {
      label: "Fase 1",
      title: "Fundación + operación clínica · 5–6 sem",
      description:
        "NDA, discovery, arquitectura API-first, auth y roles. Agenda, pacientes, citas, expediente, odontograma y adjuntos clínicos. Entregable: plataforma en producción que reemplaza Dental Link. Mín. con dependencia del cliente: 4 sem.",
    },
    {
      label: "Fase 2",
      title: "CRM clínico y seguimiento · 6–8 sem",
      description:
        "Tratamientos multietapa, línea de tiempo, notas de evolución, alertas, tareas y guía de ejecución vía API del cliente. Entregable: ciclo de vida completo del paciente. Mín. con dependencia del cliente: 5 sem.",
    },
    {
      label: "Fase 3",
      title: "Rentabilidad y KPIs · 5–6 sem",
      description:
        "Tiempos por doctora/procedimiento, costeo por cita y caso, márgenes, clasificación de casos y dashboards. Entregable: respuesta a cuánto se gana por paciente. Mín. con dependencia del cliente: 4 sem.",
    },
    {
      label: "Fase 4",
      title: "Core financiero y cobranza · 6–7 sem",
      description:
        "Planes de pago, cartera, reglas de cobranza e integración con procesador recurrente (Openpay/Stripe). Entregable: motor financiero operativo. Mín. con dependencia del cliente: 5 sem.",
    },
    {
      label: "Fase 5",
      title: "WhatsApp automatizado · 5–7 sem",
      description:
        "Encuestas post-cita, recordatorios y alertas de cobranza vía WhatsApp Business API. Entregable: feedback objetivo y cobranza proactiva. Mín. con dependencia del cliente: 5 sem.",
    },
    {
      label: "Fase 6",
      title: "Integración de IA · 5–8 sem",
      description:
        "API Gateway, copiloto clínico, copiloto de ventas y logs de consultas hacia el servidor privado del cliente. Entregable: plataforma conectada al agente propietario. Mín. con dependencia del cliente: 4 sem.",
    },
    {
      label: "Fase 7",
      title: "Inventario y escala (opcional) · 4–5 sem",
      description:
        "Stock de materiales, consultas operativas, auditoría avanzada y preparación multi-sede/SaaS. Entregable: operación integral ampliada. Módulo M4 opcional al cierre.",
    },
  ],
  stack: [
    "Next.js + React (web administrativa y clínica)",
    "API REST/GraphQL modular — API-first (Node.js o Python, a confirmar en discovery)",
    "PostgreSQL (datos clínicos y financieros)",
    "Almacenamiento seguro de archivos clínicos (S3 / R2)",
    "WhatsApp Business API vía BSP",
    "Pasarela de pagos recurrentes (Openpay / Stripe / PayPal)",
    "API Gateway hacia servidor privado de IA del cliente",
  ],
  methodology: [
    "Desarrollo por módulos alineados al documento del proyecto, con entregables y demo al cierre de cada fase",
    "Sprints de 2 semanas; cada fase estimada en 4–6 semanas de calendario (hasta 8 en integraciones o validación clínica)",
    "M2 y M3 requieren M1 Pro operativo; M4 es opcional al cierre",
    "NDA y separación estricta de propiedad intelectual clínica (IA y protocolos del cliente)",
    "Plazos se extienden si el cliente no entrega insumos acordados en 5 días hábiles",
    "Pago por fase: 40% inicio / 30% hito intermedio / 30% entrega",
  ],
  pricing: [
    {
      name: "PDF completo — M1 Pro + M2 + M3 (recomendado)",
      price: "USD 28,500",
      description:
        "**Tiempo estimado: 7–9 meses (32–42 semanas secuenciales)**\n\nIncluye los tres módulos del documento del proyecto (M1 Pro, M2 y M3).\n\nEnfoque: plataforma integral alineada al documento del Dr. Tooth, con trazabilidad clínica, rentabilidad por caso, cobranza automatizada e integración con su agente de IA propietario.\n\nEstructura de pago sugerida: 30% firma / 25% CRM live / 25% finanzas live / 20% cierre M3.",
      items: [
        "Fase 1 — Fundación + operación clínica: USD 5,500 · 5–6 sem",
        "Fase 2 — CRM clínico y seguimiento: USD 7,000 · 6–8 sem",
        "Fase 3 — Rentabilidad y KPIs: USD 5,000 · 5–6 sem",
        "Fase 4 — Core financiero y cobranza: USD 5,500 · 6–7 sem",
        "Fase 5 — WhatsApp automatizado: USD 3,500 · 5–7 sem",
        "Fase 6 — Integración de IA: USD 5,000 · 5–8 sem",
      ],
      featured: true,
    },
    {
      name: "Plataforma ampliada — PDF completo + M4 (inventario y escala)",
      price: "USD 33,000",
      description:
        "**Tiempo estimado: 8–10 meses (36–47 semanas secuenciales)**\n\nIncluye todo el PDF completo más el módulo opcional M4 (stock de materiales, consultas operativas, auditoría avanzada y preparación multi-sede/SaaS).\n\nAhorro vs. contratar fases sueltas: USD 2,000.\n\nEstructura de pago sugerida: 30% firma / 25% CRM live / 25% finanzas live / 20% cierre final.",
    },
    {
      name: "Por módulo — contratación escalonada",
      price: "Desde USD 16,000",
      description:
        "**M1 Pro (CRM + rentabilidad): USD 16,000** · 16–20 sem\nFases 1 + 2 + 3. Reemplazo operativo de Dental Link con visibilidad de rentabilidad por caso.\n\n**M2 (financiero + WhatsApp): USD 8,500** · 11–14 sem\nFases 4 + 5. Requiere M1 Pro operativo.\n\n**M3 (integración IA): USD 4,500** · 5–8 sem\nFase 6. Requiere M1 Pro operativo.\n\n**M4 opcional (inventario y escala): USD 3,500** · 4–5 sem\nFase 7.\n\n**Desglose por fases (tope USD 35,000 sin descuento):** F1 USD 5,500 · F2 USD 7,000 · F3 USD 5,000 · F4 USD 5,500 · F5 USD 3,500 · F6 USD 5,000 · F7 USD 3,500.",
    },
  ],
  includes: [
    "Arquitectura modular API-first documentada",
    "Plataforma web responsive para operación clínica y administrativa",
    "CRM de seguimiento de casos multietapa con timeline y alertas",
    "Contenedor de guía de ejecución conectado a la API del cliente",
    "Motor de rentabilidad y KPIs por doctora y por caso",
    "Core financiero con financiamiento y cobranza automatizada",
    "Integración WhatsApp (encuestas post-cita y cobranza)",
    "Integración técnica con API de IA del cliente (gateway y copilotos UI)",
    "Logs, auditoría y lineamientos de seguridad de datos sensibles",
    "NDA y separación de propiedad intelectual clínica",
    "Capacitación y demo al cierre de cada fase",
  ],
  notIncluded: [
    "Desarrollo del agente de diagnóstico, prompts, bases de conocimiento o protocolos clínicos (propiedad del cliente)",
    "Cómputo, GPU y tokens del servidor de IA del cliente",
    "Costos de infraestructura cloud (estimado USD 180–315/mes plataforma completa)",
    "Mantenimiento humano post-entrega (estimado 12–15 h/mes)",
    "Comisiones por transacción de pasarelas de pago (% por cargo)",
    "Costos de WhatsApp Business / BSP más allá del alcance acordado",
    "Migración histórica completa desde Dental Link (cotizable aparte)",
    "App móvil nativa (web responsive en alcance actual)",
    "M4 (inventario y escala) salvo contratación explícita",
    "Certificaciones regulatorias formales fuera del alcance acordado",
    "Funcionalidades no aprobadas en el alcance de cada fase",
  ],
  cta: {
    title: "Siguiente paso",
    description:
      "Firmar NDA, validar el paquete PDF completo (USD 28,500) en la segunda reunión con el equipo técnico de Qubo, confirmar dependencias (pasarela, WhatsApp, API de IA) y coordinar kick-off de Fase 1.",
    primaryButton: "Revisar propuesta",
    secondaryButton: "Agendar segunda reunión",
  },
};

export default drToothSistemaGestionInteligente;
