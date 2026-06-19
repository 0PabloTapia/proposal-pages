import { ProposalConfig } from "@/lib/types";

const rodrigoGomezAcademiaMulticlase: ProposalConfig = {
  slug: "rodrigo-gomez-academia-multiclase",
  client: "Rodrigo Gómez — Academia multiclase (México)",
  title: "Sistema integral de gestión para academia multiclase",
  mainProblem:
    "las soluciones estándar de academias no encajan con una operación donde los alumnos toman varias clases distintas el mismo día, con precios y esquemas de pago distintos por disciplina y maestro, y donde hoy dependen de Glide + Excel con fallas cuando se cae internet",
  summary: {
    problem:
      "Rodrigo opera ~23–24 disciplinas (no solo baile), con alumnos que toman 2–3 clases distintas el mismo día, precios distintos por clase, tres esquemas con maestros y ~80% de cobros en efectivo. Las apps genéricas y el no-code actual no resuelven accesos, monedero interno, tienda y reportes en un solo flujo.",
    solution:
      "Qubo propone una plataforma a medida con monedero prepago interno, tarjetas físicas/digitales (QR), cobro por clase al escaneo del maestro, tienda interna y reportes operativos — online en Fase 1, dimensionada para crecer de ~50–60 alumnos hacia 200+ y prepararse para 500+.",
    expectedResult:
      "Certeza de que el dinero recargado ya está en poder de la academia antes de consumirse, maestros que registran entrada sin ver montos recolectados, tienda integrada al mismo saldo y reportes de afluencia y crecimiento por maestro.",
  },
  problems: [
    "Alumnos toman 2–3 clases distintas el mismo día con precios y mensualidades diferentes por disciplina",
    "Tres esquemas distintos con maestros: pago por clase, 50/50 por alumnos o renta de espacio",
    "No aplica torniquete, pase único ni estandarización forzada de precios",
    "Glide + Excel de respaldo fallan cuando se cae internet o hay cortes en el local",
    "Apps genéricas traen estructuras predefinidas que no cubren wallet interno + tienda + accesos por clase",
    "Necesidad de escalar rápido (~200 alumnos este año, meta 500+) sin volver a quedarse corto",
    "Operación con ~80% efectivo: no requiere pasarela bancaria ni facturación SAT/CFDI integrada",
  ],
  modules: [
    {
      title: "Identificación con tarjeta física y/o digital (QR)",
      description:
        "Tarjeta con foto, fecha de nacimiento y QR generado server-side. Prioridad QR sobre NFC; impresión de tarjetas físicas a cargo del cliente.",
      impact:
        "Identifica al alumno de forma rápida en recepción, clase y tienda sin depender de torniquetes.",
    },
    {
      title: "Monedero prepago interno",
      description:
        "Recepción recarga saldo en efectivo (ej. “ponme 100/200”); el saldo funciona como débito interno antes de consumir clases o productos.",
      impact:
        "Asegura que el dinero ya está en poder de la academia antes de que el alumno lo gaste.",
    },
    {
      title: "Control de acceso y cobro por clase",
      description:
        "Maestro escanea QR al entrar (sin control de salida); descuenta automáticamente el precio de su clase según su login y disciplina.",
      impact:
        "Automatiza cobro por clase con precios distintos por disciplina, sin que el maestro vea montos recolectados.",
    },
    {
      title: "Roles: recepción, maestros, tienda y alumnos",
      description:
        "Administración/recepción gestiona recargas y usuarios; maestros registran asistencia; tienda cobra productos; alumnos consultan saldo según permisos.",
      impact:
        "Separa responsabilidades operativas y protege información sensible de cobros agregados.",
    },
    {
      title: "Tienda interna",
      description:
        "Cobro de snacks y bebidas (agua, refresco, jugo, botanas) descontando del mismo saldo prepago, con rol “tienda” independiente.",
      impact:
        "Centraliza consumo interno en el mismo monedero sin caja paralela ni doble registro.",
    },
    {
      title: "Reportes operativos",
      description:
        "Asistencia por maestro, crecimiento temporal (1/2/3 meses), consumo, recargas vs gasto y gráficas de actividad general.",
      impact:
        "Entrega visibilidad de afluencia y desempeño por maestro para decisiones de crecimiento.",
    },
    {
      title: "App para maestros y operación en recepción",
      description:
        "Escaneo desde celular vía PWA/web responsive o desde computadora en recepción; online con tolerancia a cortes breves en Fase 1.",
      impact:
        "Evita costos de App Store/Play Store en la primera fase y acelera adopción del equipo.",
    },
  ],
  timeline: [
    {
      label: "Fase 1 (MVP)",
      title: "Wallet online, clases, tienda y reportes",
      description:
        "Monedero prepago, recargas en recepción, cobro por clase con QR, tienda interna, roles, motor de precios por disciplina, reportes básicos y despliegue en producción. Camino recomendado; plazo exacto por confirmar en reunión de cierre.",
    },
    {
      label: "Fase 2 (opcional)",
      title: "Resiliencia ante cortes",
      description:
        "Reconexión, cola local limitada y modo degradado ante cortes de luz/internet. Se evalúa tras validar operación real de Fase 1.",
    },
    {
      label: "Postergado",
      title: "Sync offline completo",
      description:
        "Descarga manual de base de datos al cierre del día u offline robusto. Alta complejidad; no recomendado como arquitectura principal en esta etapa.",
    },
  ],
  stack: [
    "Frontend + API en Vercel (o similar)",
    "Supabase o Neon + almacenamiento liviano (R2/S3) para fotos",
    "PWA / web responsive para maestros y tienda",
    "QR generado server-side",
    "Infraestructura dimensionada para 200–500+ alumnos",
  ],
  methodology: [
    "Fase 1 online-first: suficiente para escala proyectada sin sobreingeniería inicial",
    "Prioridad QR sobre NFC; torniquetes y pase único fuera de alcance",
    "Maestros registran entrada y cobran su clase sin visibilidad de montos recolectados",
    "Separación clara entre entrada de desarrollo (USD 1,000) y mensualidad operativa (USD 400/mes)",
    "La mensualidad incluye hosting, soporte, mantenimiento y ajustes menores — no es solo infraestructura",
    "Fase 2 y módulos avanzados se cotizan aparte tras validar operación real",
  ],
  pricing: [
    {
      name: "Fase 1 — MVP operativo (recomendado)",
      price: "USD 1,000 setup + USD 399/mes",
      description:
        "**Entrada / setup:** USD 1,000 (pago único al firmar e iniciar — 100% al arrancar).\n\n**Mensualidad operativa:** USD 400/mes desde el go-live de Fase 1 (sistema en producción con usuarios reales).\n\nMoneda USD. IVA / impuestos locales según aplique en facturación final.\n\nLa mensualidad no es solo infraestructura: incluye hosting gestionado, monitoreo, backups, corrección de bugs, soporte en horario laboral, mantenimiento técnico, hasta 4 h/mes de ajustes menores y 1 despliegue menor/mes.",
      items: [
        "Diseño funcional y arquitectura (wallet prepago + roles)",
        "Panel administración / recepción (recargas de saldo)",
        "Interfaz maestros (escaneo QR + descuento automático por clase)",
        "Módulo tienda interna (cobro por saldo, rol tienda)",
        "Gestión alumnos y tarjetas (foto, fecha nacimiento, QR)",
        "Motor de precios por clase/disciplina",
        "Reportes básicos (asistencia, recargas vs consumo, crecimiento)",
        "Despliegue en producción y capacitación básica (1 sesión)",
      ],
      featured: true,
    },
    {
      name: "Fase 2 — Resiliencia operativa (opcional)",
      price: "Cotización tras Fase 1",
      description:
        "Reconexión automática, cola local limitada y modo degradado ante cortes de luz o internet en el local.\n\nSe recomienda evaluar después de operar Fase 1 en condiciones reales.",
    },
    {
      name: "Extensiones futuras (fuera de Fase 1)",
      price: "Cotización aparte",
      description:
        "Offline robusto con sync manual, NFC, app nativa en stores, facturación SAT/CFDI, pasarela de tarjetas bancarias o licencia para revender el sistema a otras academias.",
    },
  ],
  includes: [
    "Tarjetas QR físicas/digitales con foto y datos básicos del alumno",
    "Recarga de saldo en recepción (efectivo → saldo interno)",
    "Cobro automático de clase por escaneo del maestro al entrar",
    "Tienda interna con descuento del mismo saldo prepago",
    "Roles: recepción/administración, maestros, tienda",
    "Motor de precios distintos por clase/disciplina",
    "Reportes de asistencia, recargas vs consumo y métricas por maestro",
    "Sistema online con base de datos en la nube",
    "Infraestructura dimensionada para crecimiento a 200–500+ alumnos",
    "Capacitación básica inicial para Rodrigo, recepción y maestros (1 sesión)",
  ],
  notIncluded: [
    "Facturación SAT / CFDI",
    "Cobro con tarjeta bancaria / pasarela de pagos",
    "Torniquetes o control de salida de clases",
    "Visibilidad de montos recolectados para maestros",
    "App nativa en App Store / Play Store (salvo decisión posterior)",
    "NFC / lectores dedicados (prioridad baja vs QR en Fase 1)",
    "Sync offline robusto o descarga manual de BD al cierre del día",
    "Hardware del local (celulares, tablets, laptop, impresora, internet)",
    "Impresión física de tarjetas y consumibles",
    "Nuevos módulos o Fase 2+ dentro del setup de USD 1,000",
    "Horas extra de desarrollo más allá de 4 h/mes de ajustes menores",
    "Capacitación adicional recurrente para personal nuevo",
    "Licencia para que el cliente revenda el sistema a otras academias",
    "Costos de terceros fuera del alcance acordado en mensualidad",
  ],
  cta: {
    title: "Siguiente paso",
    description:
      "Coordinar segunda reunión para presentar alcance, tiempos y presupuesto de desarrollo. Qubo (Pedro → Pablo y Felipe) puede crear grupo de WhatsApp con Rodrigo — opcionalmente incluir a su esposa (contacto operativo de registros). Rodrigo integraría a su esposa en la reunión si la propuesta es viable.",
    primaryButton: "Revisar propuesta",
    secondaryButton: "Agendar segunda reunión",
  },
};

export default rodrigoGomezAcademiaMulticlase;
