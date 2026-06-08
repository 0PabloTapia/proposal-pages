import { ProposalConfig } from "@/lib/types";

const mauryJaimeComunicacionOfflineB2g: ProposalConfig = {
  slug: "maury-jaime-comunicacion-offline-b2g",
  client: "Maury y Jaime",
  title: "Aplicación de Comunicación Offline-First + Botón de Pánico B2G",
  mainProblem:
    "proveer comunicación funcional en escenarios sin internet (sin datos ni Wi-Fi) y resolver la sincronización con gobierno cuando los dispositivos vuelven a tener conectividad",
  summary: {
    problem:
      "La propuesta debe funcionar donde no hay internet: mensajería, alertas y voz local en terreno. Además, debe resolver una tensión clave: reportar al gobierno de forma oportuna aunque el evento ocurra offline.",
    solution:
      "Qubo propone un MVP robusto offline-first con apps móviles ciudadanas, backend/API e infraestructura en AWS del cliente/gobierno, combinando comunicación local, almacenamiento en dispositivo y sincronización oportunista.",
    expectedResult:
      "Validación técnica y comercial de un producto B2G licenciado a entidades públicas, con base escalable para contratos de largo plazo y soberanía de datos en infraestructura gubernamental.",
  },
  problems: [
    "La ciudadanía puede quedar sin conexión y perder acceso a comunicación crítica.",
    "El gobierno requiere trazabilidad y recepción de eventos sin depender de conectividad constante del usuario final.",
    "Existe contradicción entre operación offline y necesidad de reportes en tiempo cercano a real.",
    "Las capacidades P2P reales (20-50 metros con obstáculos) limitan expectativas de cobertura de voz local.",
    "El modelo B2G exige infraestructura controlada por la contraparte estatal por soberanía de datos.",
    "Existen bloqueantes no técnicos: revisión de tiendas, permisos institucionales y fricción legal de privacidad.",
  ],
  modules: [
    {
      title: "Botón de Pánico Híbrido (Datos + SMS invisible)",
      description:
        "Activación de emergencia con envío por canal de datos cuando exista internet y fallback por SMS invisible cuando no haya conectividad.",
      impact:
        "Aumenta probabilidad de entrega de alerta en escenarios críticos de desconexión.",
    },
    {
      title: "Mensajería Mesh Local (Bluetooth)",
      description:
        "Mensajería local dispositivo-a-dispositivo por Bluetooth para continuidad operativa en campo sin internet.",
      impact:
        "Permite comunicación básica ciudadana en zonas sin cobertura móvil o Wi-Fi.",
    },
    {
      title: "Buzón de Comunicados Institucionales",
      description:
        "Canal oficial para publicación de comunicados desde autoridad, con descarga y lectura desde app ciudadana.",
      impact:
        "Ordena la comunicación institucional y reduce desinformación en eventos de contingencia.",
    },
    {
      title: "Llamadas de Voz P2P Offline",
      description:
        "Llamadas de voz peer-to-peer usando Wi-Fi Aware/Direct y WebRTC con códec Opus, acotadas a alcance físico real.",
      impact:
        "Agrega continuidad de voz local para coordinación inmediata entre personas cercanas.",
    },
    {
      title: "Sincronización Oportunista",
      description:
        "Guardado local de eventos y sincronización diferida por contagio entre dispositivos y/o cuando uno recupere internet.",
      impact:
        "Resuelve la brecha offline-online con trazabilidad sin exigir conexión permanente.",
    },
    {
      title: "API Gubernamental y Backend Propio",
      description:
        "Backend/API documentado para interoperar con sistemas públicos, alojado en infraestructura AWS del cliente/gobierno.",
      impact:
        "Facilita integración institucional y cumplimiento de soberanía de información pública.",
    },
  ],
  timeline: [
    {
      label: "Opción A (Meses 1-5)",
      title: "Proyecto integral",
      description:
        "Implementación completa del MVP robusto (apps + backend/API + infraestructura), incluyendo validación cruzada offline entre Android e iOS 26.",
    },
    {
      label: "Opción B - Fase 1 (Meses 1-3)",
      title: "MVP Base",
      description:
        "Botón híbrido, mensajería local, buzón institucional, backend/API base, despliegue inicial y pruebas técnicas de campo.",
    },
    {
      label: "Opción B - Fase 2 (Meses 4-5)",
      title: "Voz + Sincronización",
      description:
        "Incorporación de voz P2P offline y sincronización oportunista para robustecer continuidad operativa.",
    },
  ],
  stack: [
    "React Native o Flutter con módulos nativos de bajo nivel",
    "Wi-Fi Aware iOS 26 / Android API 26+",
    "CoreBluetooth",
    "WebRTC + Opus para voz",
    "Node.js + PostgreSQL",
    "AWS (entorno del cliente/gobierno)",
    "FCM (Google) y APNs (Apple)",
  ],
  methodology: [
    "Desarrollo por fases para reducir riesgo de adopción y proteger viabilidad comercial B2G.",
    "Validación técnica temprana en dispositivos físicos Android/iOS y pruebas en exteriores.",
    "Diseño offline-first: almacenar local, sincronizar después y priorizar continuidad operativa.",
    "Arquitectura preparada para operar en cloud del cliente/gobierno por soberanía de datos.",
    "Comunicación consultiva con foco en factibilidad real y límites técnicos explícitos.",
  ],
  pricing: [
    {
      name: "Opción A - Desarrollo Integral",
      price: "USD 30,000",
      description:
        "**Plazo:** 3 meses.\n\nImplementación integral del proyecto (apps móviles ciudadanas + backend/API + infraestructura).\n\n**Mantención mensual:** USD 2,500/mes.",
      items: [
        "Aplicaciones móviles iOS y Android",
        "Backend y API documentada",
        "Infraestructura en nube del cliente/gobierno",
        "Backoffice técnico interno para pruebas",
        "QA físico en exteriores con distintos dispositivos",
      ],
    },
    {
      name: "Opción B - Desarrollo por fases",
      price: "Fase 1: USD 15,000 / Fase 2: USD 18,000",
      description:
        "**Fase 1 (1.5-2 meses):** MVP Base + mantención USD 1,200/mes.\n\n**Fase 2 (+1 mes):** Voz y sincronización + mantención USD 1,300/mes.\n\nModelo recomendado para reducir riesgo de inversión inicial y proteger avance comercial por hitos.",
      items: [
        "Fase 1: botón híbrido, mesh local, buzón institucional, backend/API base",
        "Fase 2: llamadas P2P offline y sincronización oportunista",
        "Infraestructura en entorno del cliente/gobierno",
      ],
      featured: true,
    },
    {
      name: "Módulos adicionales",
      price: "Spike 1500 USD (Investigación técnica) / Spike + Portal Web: USD 10,000",
      description:
        "Líneas para desarrollo de Portal Web Gubernamental (Fase 3).",
      items: [
        "Spikes de factibilidad (offline, tiendas, interoperabilidad)",
        "Portal visual para funcionarios como fase separada",
      ],
    },
  ],
  includes: [
    "Aplicaciones móviles ciudadanas para iOS y Android",
    "Botón de pánico híbrido (datos + SMS)",
    "Mensajería mesh local por Bluetooth",
    "Buzón de comunicados institucionales",
    "Llamadas de voz P2P offline (según alcance técnico real)",
    "Sincronización oportunista con almacenamiento local",
    "Backend propio y API gubernamental documentada",
    "Despliegue en infraestructura cloud del cliente/gobierno",
    "Backoffice técnico interno para pruebas y operación técnica inicial",
    "QA físico en exteriores con distintos dispositivos",
    "Investigación e implementación de estándares Wi-Fi Aware",
  ],
  notIncluded: [
    "Portal web visual/dashboard interactivo para funcionarios (opcional Fase 3)",
    "Costos mensuales de terceros (AWS, SMS/Twilio, servicios de push, etc.)",
    "Gestión burocrática de permisos institucionales para publicación en App Store/Google Play",
    "Garantía de aprobación en tiendas restringidas a gobiernos reales",
    "Resolución legal formal de privacidad o normativa pública (requiere asesoría especializada del cliente)",
  ],
  cta: {
    title: "Siguiente paso sugerido",
    description:
      "Contactar a través de WhatsApp para avanzar con reunión de cierre, definir modalidad (Opción A o B), confirmar bloqueantes críticos y alinear fecha de kick-off.",
    primaryButton: "Contactar por WhatsApp",
    secondaryButton: "Coordinar cierre",
  },
};

export default mauryJaimeComunicacionOfflineB2g;
