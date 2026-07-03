import { ProposalConfig } from "@/lib/types";

const acreditacionMineriaPlataformaDocumental: ProposalConfig = {
  slug: "acreditacion-mineria-plataforma-documental",
  client: "Christoff y Luz",
  title:
    "Plataforma Web Multiempresa para Acreditación Documental en Minería",
  mainProblem:
    "el proceso de acreditación documental es mayormente manual, disperso y difícil de escalar, con dependencia de planillas, correos y seguimiento manual para controlar documentos, aprobaciones, rechazos y vencimientos.",
  summary: {
    problem:
      "Hoy la acreditación de empresas contratistas, trabajadores y vehículos se gestiona de forma fragmentada: documentos en correos y planillas, aprobaciones sin trazabilidad clara y vencimientos difíciles de monitorear a escala.",
    solution:
      "Desarrollar una plataforma web multiempresa — herramienta interna para el servicio de acreditación, con portal externo para clientes — que centralice carga documental, revisión humana, estados, vigencias y habilitación operativa, con reglas configurables por cliente o entidad.",
    expectedResult:
      "Saber en todo momento si una empresa, trabajador o vehículo está documentalmente habilitado; reducir gestión manual, mejorar trazabilidad y entregar una solución competitiva frente a plataformas existentes que no cubren completamente sus necesidades.",
  },
  problems: [
    "Proceso de acreditación mayormente manual, disperso y difícil de escalar",
    "Control documental dependiente de planillas, correos y seguimiento manual",
    "Falta de visibilidad unificada sobre aprobaciones, rechazos y vencimientos",
    "Dificultad para saber en tiempo real si un actor está documentalmente habilitado",
    "Plataformas existentes en el mercado no cubren completamente las reglas de negocio del rubro",
    "Complejidad en definir qué documentos se exigen, para quién, cuándo vencen y quién aprueba",
    "Necesidad de trazabilidad entre cliente, equipo acreditador y entidad final en contexto de licitación",
  ],
  modules: [
    {
      title: "Multiempresa y gestión de clientes",
      description:
        "Estructura multiempresa para operar el servicio de acreditación con clientes externos, faenas o entidades finales de forma aislada y configurable.",
      impact:
        "Permite escalar el servicio sin mezclar datos ni procesos entre distintos mandantes.",
    },
    {
      title: "Usuarios, roles y permisos",
      description:
        "Gestión de usuarios internos y externos con perfiles y permisos acordes al flujo acreditador (revisores, administradores, clientes, consulta).",
      impact:
        "Controla quién carga, revisa, aprueba o consulta, reduciendo riesgos operativos.",
    },
    {
      title: "Empresas, trabajadores y vehículos",
      description:
        "Registro y mantención de empresas contratistas, trabajadores y vehículos del rubro minero, vinculados a sus requisitos documentales.",
      impact:
        "Centraliza los actores acreditables en una sola fuente operativa.",
    },
    {
      title: "Carga, almacenamiento y visualización documental",
      description:
        "Subida segura de archivos, almacenamiento en nube y visualización para revisión, con historial de versiones por documento.",
      impact:
        "Elimina dependencia de correos y carpetas compartidas para el intercambio documental.",
    },
    {
      title: "Requisitos documentales configurables",
      description:
        "Definición de tipos de documento, obligatoriedad y reglas por cliente, faena o entidad final, según el paquete elegido.",
      impact:
        "Adapta la plataforma a la lógica real del negocio sin reprogramar por cada mandante.",
    },
    {
      title: "Revisión humana y estados",
      description:
        "Flujo de revisión con estados pendiente, aprobado, rechazado, vencido y observaciones, con trazabilidad de quién revisó y cuándo.",
      impact:
        "Estandariza el criterio de habilitación con validación humana asistida por reglas claras.",
    },
    {
      title: "Control de vigencias y alertas",
      description:
        "Seguimiento de fechas de vencimiento, alertas operativas y visibilidad de documentos próximos a caducar o ya vencidos.",
      impact:
        "Evita habilitaciones expiradas y reduce seguimiento manual de calendarios.",
    },
    {
      title: "Portal cliente",
      description:
        "Acceso externo para que clientes carguen documentos, respondan observaciones y consulten el estado de sus procesos de acreditación.",
      impact:
        "Desacopla la carga documental del equipo interno y mejora la experiencia del mandante.",
    },
    {
      title: "Dashboard e indicadores operativos",
      description:
        "Vistas consolidadas de pendientes, aprobados, rechazados, vencimientos y carga de trabajo del equipo acreditador.",
      impact:
        "Entrega visibilidad diaria para priorizar revisiones y detectar cuellos de botella.",
    },
    {
      title: "Reportes, exportación y auditoría",
      description:
        "Reportes básicos, exportación de datos y bitácora de cargas, revisiones y cambios relevantes para trazabilidad operativa.",
      impact:
        "Apoya respuestas a auditorías, licitaciones y consultas de habilitación documental.",
    },
    {
      title: "API de consulta de habilitación",
      description:
        "API simple para consultar el estado documental de empresas, trabajadores o vehículos, preparada para futuras integraciones.",
      impact:
        "Deja una base técnica para conectar con sistemas de acceso o control operativo en fases posteriores.",
    },
  ],
  timeline: [
    {
      label: "Semanas 1–4",
      title: "MVP Operativo",
      description:
        "Flujo documental end-to-end para un mandante con requisitos fijos acordados en discovery: usuarios y roles básicos, empresas/trabajadores/vehículos, carga documental, revisión humana, estados, vencimientos, portal cliente básico, dashboard operativo y API de consulta simple.",
    },
    {
      label: "Semanas 5–7",
      title: "Multi-mandante",
      description:
        "Motor de requisitos configurables por cliente/faena/entidad, observaciones y flujo de corrección, alertas de vencimiento por mandante, reportes exportables por cliente y soporte.",
    },
    {
      label: "Semana 8",
      title: "Acreditador completo",
      description:
        "Permisos granulares (RBAC fino), auditoría completa de cargas y revisiones, dashboards por rol, API ampliada con documentación para integraciones, capacitación por perfil y marcha blanca asistida.",
    },
  ],
  stack: [
    "Frontend: Next.js + TypeScript",
    "Backend / API: Next.js server-side o NestJS",
    "Base de datos: PostgreSQL",
    "ORM: Prisma",
    "Archivos: Cloudflare R2 o AWS S3",
    "Autenticación y roles: Auth.js / Clerk o solución propia con RBAC",
    "Hosting: Vercel (frontend) + Railway, Render o AWS Lightsail (backend y BD)",
    "Emails y alertas: Resend"
  ],
  methodology: [
    "Sesión de levantamiento técnico al inicio para cerrar tipos de documentos, reglas de vigencia, estados, perfiles y requisitos por cliente/faena",
    "Paquetes diferenciados por capacidad operativa: operar un mandante → atender varios con reglas distintas → escalar con auditoría e integraciones",
    "Validación continua del cliente durante el desarrollo, con demos por hito",
    "Enfoque en validación humana asistida por reglas claras; IA/OCR evaluable en fase posterior",
    "Plazo condicionado a definición oportuna de criterios de aprobación, perfiles y ejemplos reales"
  ],
  pricing: [
    {
      name: "MVP Operativo",
      price: "235 UF + IVA",
      description:
        "**Plazo: 4 semanas.**\n\n**Valor referencial:** $9.594.000 CLP + IVA\n\n**¿Puedo dejar Excel y operar acreditación de punta a punta?**\n\nFlujo documental completo para **un mandante**, con requisitos fijos definidos en discovery (no configurables desde la plataforma). Ideal para salir de planillas y correos con un proceso real en producción.\n\n**Mantención mensual opcional:** Plan Operación **12 UF/mes** ($490.000 CLP) · Plan Operación + ajustes **18 UF/mes** ($735.000 CLP).\n\n\n\n**",
      items: [
        "Estructura multiempresa base (un mandante activo)",
        "Empresas, trabajadores y vehículos",
        "Carga, almacenamiento y visualización documental",
        "Revisión humana con estados y control de vencimientos",
        "Portal cliente básico para carga y seguimiento",
        "Dashboard operativo",
        "API de consulta simple (solo lectura de habilitación)",
        "Ambiente productivo, capacitación básica y puesta en producción",
      ],
    },
    {
      name: "Multi-mandante",
      price: "315 UF + IVA",
      description:
        "**Plazo: hasta 6–7 semanas.**\n\n**Valor referencial:** $12.860.000 CLP + IVA\n\n**¿Puedo atender varios clientes/faenas con reglas distintas?**\n\nIncluye todo el MVP más el **motor de requisitos configurables** — el diferenciador del negocio de acreditación. Su equipo configura mandantes y requisitos desde la plataforma. Opción sugerida para competir en licitación con operación real multi-mandante.\n\n**Mantención mensual:** **15 UF/mes** ($612.000 CLP).\n\n",
      items: [
        "Todo lo incluido en MVP Operativo",
        "Motor de requisitos configurables por cliente, faena o entidad",
        "Observaciones y flujo de corrección documental",
        "Alertas de vencimiento por mandante",
        "Reportes exportables por cliente"
      ],
      featured: true,
    },
    {
      name: "Acreditador completo",
      price: "385 UF + IVA",
      description:
        "**Plazo: hasta 8 semanas.**\n\n**Valor referencial:** $15.718.000 CLP + IVA \n\n**¿Puedo escalar, auditar y conectar con otros sistemas?**\n\nIncluye todo Multi-mandante más control operativo avanzado, trazabilidad para auditorías e integraciones, con marcha blanca asistida y capacitación por perfil.\n\n**Mantención mensual:** **18 UF/mes** ($735.000 CLP).\n\n",
      items: [
        "Todo lo incluido en Multi-mandante",
        "Permisos granulares (RBAC fino por rol y área)",
        "Auditoría completa: cargas, revisiones y cambios",
        "Dashboards por rol (operador, supervisor, gerencia)",
        "API ampliada con documentación para integraciones futuras",
        "Capacitación por perfil y marcha blanca asistida",
        "Garantía por incidencias atribuibles al desarrollo",
      ],
    },
  ],
  includes: [
    "Desarrollo web y diseño funcional orientado a operación acreditadora",
    "Ambiente productivo inicial y puesta en producción",
    "Gestión documental con control de vigencia y estados",
    "Portal externo para clientes (desde MVP Operativo)",
    "Capacitación según paquete elegido",
    "Validación continua con el cliente durante el desarrollo",
  ],
  notIncluded: [
    "Motor de requisitos configurables y operación multi-mandante (incluidos desde paquete Multi-mandante)",
    "Auditoría completa, RBAC fino y API ampliada (incluidos en Acreditador completo)",
    "Integración efectiva con torniquetes, hardware o sistemas externos no definidos",
    "OCR, extracción automática o validación inteligente con IA",
    "Validación legal o semántica automática de documentos",
    "Migración masiva de documentos históricos",
    "Aplicación móvil nativa",
    "SLA enterprise, alta disponibilidad o continuidad crítica",
    "Soporte funcional, mejoras o módulos nuevos posteriores a la entrega"
  ],
  cta: {
    title: "Siguiente paso",
    description:
      "Realizar una sesión de levantamiento técnico para cerrar tipos de documentos, reglas de vigencia, estados, perfiles de usuario, requisitos por cliente/faena, reportes prioritarios y ejemplos de documentos reales. Con eso se valida el paquete elegido, se fija el alcance final y se entrega cronograma con hitos de pago.",
    primaryButton: "Aprobar propuesta",
    secondaryButton: "Agendar levantamiento técnico",
  },
};

export default acreditacionMineriaPlataformaDocumental;
