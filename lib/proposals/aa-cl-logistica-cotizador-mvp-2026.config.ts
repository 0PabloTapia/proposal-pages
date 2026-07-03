import { ProposalConfig } from "@/lib/types";

const aaClLogisticaCotizadorMvp2026: ProposalConfig = {
  slug: "aa-cl-logistica-cotizador-mvp-2026",
  client: "Álvaro y Claudio",
  title: "Plataforma de Cotización Logística (MVP)",
  mainProblem:
    "proceso de cotización manual por correo con tiempos de respuesta de horas o hasta 24h, alta carga operativa y baja capacidad de escalar la atención comercial.",
  summary: {
    problem:
      "Hoy la cotización depende de trabajo manual en correo y planillas, lo que ralentiza la respuesta al cliente final y limita la capacidad de absorber mayor volumen de solicitudes.",
    solution:
      "Implementar un MVP con landing comercial, portal cliente y dashboard interno que calcule cotizaciones automáticas con tres alternativas (Económica, Ideal y Rápida), permita descarga PDF y gestione aceptación interna.",
    expectedResult:
      "Reducir el tiempo de cotización a menos de 30 segundos, mejorar velocidad comercial y dejar una base operativa para evolucionar por fases según crecimiento del negocio.",
  },
  problems: [
    "Alta dependencia de trabajo manual para responder cotizaciones",
    "Tiempo de respuesta lento al cliente final (horas o hasta 24h)",
    "Baja escalabilidad para absorber más solicitudes sin crecer proporcionalmente en operación",
    "Baja trazabilidad centralizada entre cotizaciones emitidas y aceptaciones",
  ],
  modules: [
    {
      title: "Landing corporativa + acceso plataforma",
      description:
        "Sitio comercial de la empresa con propuesta de valor clara y accesos a registro/login de la plataforma.",
      impact:
        "Mejora presentación comercial y habilita un punto único de entrada digital para clientes.",
    },
    {
      title: "Portal cliente de cotización",
      description:
        "Registro/autenticación, formulario de cotización (origen, destino, tipo de carga), cálculo automático y entrega de tres alternativas de servicio.",
      impact:
        "Acelera la respuesta comercial y estandariza el proceso de cotización en segundos.",
    },
    {
      title: "Cotización PDF + flujo de aceptación",
      description:
        "Generación de cotización en PDF desde servidor y notificación interna cuando una propuesta es aceptada.",
      impact:
        "Formaliza la oferta y permite seguimiento operativo inmediato sobre oportunidades cerradas.",
    },
    {
      title: "Dashboard interno operativo",
      description:
        "Gestión de usuarios/clientes, carga de tarifas vía Excel e historial de cotizaciones y aceptaciones.",
      impact:
        "Centraliza control de operación comercial y facilita decisiones basadas en historial real.",
    },
    {
      title: "Motor inicial por reglas de negocio",
      description:
        "Tarificación inicial con reglas conocidas y planillas, enfocada en importación FCL desde China durante la fase MVP.",
      impact:
        "Permite salir rápido con mayor precisión inicial y menor complejidad técnica.",
    },
  ],
  timeline: [
    {
      label: "Semanas 1-4",
      title: "MVP operativo",
      description:
        "Construcción de landing, portal cliente, dashboard interno, motor por reglas con carga Excel, cotización en 3 alternativas y salida con PDF para go-live comercial.",
    },
    {
      label: "Semanas 5+",
      title: "Fases evolutivas",
      description:
        "Evolución por etapas: ampliación de cobertura logística, luego agente IA predictivo con data histórica real, y finalmente escala progresiva a AWS según crecimiento del negocio.",
    },
  ],
  stack: [
    "Frontend: Next.js / React",
    "Backend + Base de datos: Supabase (PostgreSQL)",
    "Autenticación + Storage: Supabase",
    "Generación de PDFs: servicio server-side",
    "Escalabilidad: migración gradual a AWS (si aplica)",
  ],
  methodology: [
    "Implementación MVP enfocada en reglas de negocio para acelerar salida y reducir riesgo",
    "Priorización de precisión operativa inicial sobre complejidad técnica innecesaria",
    "Desarrollo iterativo con validaciones funcionales durante cada semana",
    "Evolución a IA solo con histórico real suficiente para entrenamiento confiable",
  ],
  pricing: [
    {
      name: "Opción 1: MVP solicitado",
      price: "$4.000.000 + IVA",
      description:
        "Landing + Portal cliente + Dashboard interno + Carga de tarifas por Excel + 3 alternativas de cotización + PDF. Recomendación comercial para validar rápido y seguro.\n\n**Plazo:** 1-4 semanas.\n\n**Forma de pago:** 50% anticipo al kickoff + 50% contra salida a producción.\n\n**Mantención mensual opcional:** Básico $250.000 + IVA/mes (hosting, respaldos diarios, monitoreo y corrección de bugs críticos) o Pro $450.000 + IVA/mes (incluye todo lo básico + bolsa de horas evolutivas).",
      items: [
        "Registro y login de clientes",
        "Cotizador automático con opciones Económica, Ideal y Rápida",
        "Descarga de cotización en PDF",
        "Notificación interna de aceptación",
        "Gestión interna de usuarios/clientes e historial",
      ],
      featured: true,
    },
    {
      name: "Opción 2: MVP + IA evolutiva",
      price: "$7.000.000 + IVA",
      description:
        "Incluye todo lo de la Opción 1 y agrega fase evolutiva de agente IA una vez exista data histórica suficiente para predicción de tarifas, recomendaciones y optimización.\n\n**Plazo:** 1-4 semanas para MVP inicial + fases evolutivas desde semana 5 según priorización.\n\n**Forma de pago:** 50% anticipo al kickoff + 50% contra salida a producción del MVP (fase IA se planifica por roadmap evolutivo).\n\n**Mantención mensual opcional:** Básico $250.000 + IVA/mes (hosting, respaldos diarios, monitoreo y corrección de bugs críticos) o Pro $450.000 + IVA/mes (incluye todo lo básico + bolsa de horas evolutivas).",
      items: [
        "Todo lo incluido en Opción 1",
        "Diseño de fase de IA predictiva",
        "Recomendaciones proactivas para mejora comercial/operativa",
        "Base para optimización de rutas y márgenes con datos reales",
      ],
    },
  ],
  includes: [
    "MVP funcional para tráfico inicial de importación FCL desde China",
    "Plazo estimado de 1 a 4 semanas para entrega MVP",
    "Forma de pago: 50% anticipo al kickoff y 50% contra salida a producción",
    "Transferencia de propiedad intelectual al cliente con pago 100% completado",
    "Roadmap sugerido de evolución en cuatro fases",
  ],
  notIncluded: [
    "Desarrollo de un modelo IA entrenado y operando en producción en la fase MVP",
    "Escalamiento inmediato a arquitectura AWS (queda para fase de crecimiento)",
    "Costos de infraestructura o servicios de terceros no detallados explícitamente en esta propuesta",
  ],
  cta: {
    title: "Siguiente paso",
    description:
      "Realizar una sesión de levantamiento técnico para cerrar estructura de tarifas y recargos, reglas de vigencia de cotizaciones, estados del flujo comercial, perfiles de usuario, requisitos por tipo de cliente/carga, reportes prioritarios y ejemplos reales de cotizaciones/documentos. Con esto se valida la opción elegida, se fija el alcance final y se entrega cronograma con hitos de pago.",
    primaryButton: "Aprobar Opción 1",
    secondaryButton: "Agendar kickoff",
  },
};

export default aaClLogisticaCotizadorMvp2026;
