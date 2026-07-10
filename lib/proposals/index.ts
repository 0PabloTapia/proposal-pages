import { ProposalConfig } from "@/lib/types";
import taskrabbitApp from "./taskrabbit-app.config";
import isoDrive from "./iso-drive.config";
import agronomerAsesorSaas from "./agronomer-asesor-saas.config";
import carlosAlvaradoSaludDomicilio from "./carlos-alvarado-salud-domicilio.config";
import importadoraAltamiraControlInventario from "./importadora-altamira-control-inventario.config";
import candimaniaDigital from "./candimania-digital.config";
import amstelappRioSpa from "./amstelapp-rio-spa.config";
import plataformaAgentesIaMulticlienteMvp from "./plataforma-agentes-ia-multicliente-mvp.config";
import mauryJaimeComunicacionOfflineB2g from "./maury-jaime-comunicacion-offline-b2g.config";
import drToothSistemaGestionInteligente from "./dr-tooth-sistema-gestion-inteligente.config";
import rodrigoGomezAcademiaMulticlase from "./rodrigo-gomez-academia-multiclase.config";
import acreditacionMineriaPlataformaDocumental from "./acreditacion-mineria-plataforma-documental.config";
import aaClLogisticaCotizadorMvp2026 from "./aa-cl-logistica-cotizador-mvp-2026.config";
import carnesOhigginsTrazabilidadProduccion from "./carolina-salinas-trazabilidad-produccion.config";

/**
 * Registry of all available proposals.
 * To add a new proposal:
 *   1. Create a new file: lib/proposals/your-slug.config.ts
 *   2. Import it here and add it to the array below.
 */
const proposals: ProposalConfig[] = [
  taskrabbitApp,
  isoDrive,
  agronomerAsesorSaas,
  carlosAlvaradoSaludDomicilio,
  importadoraAltamiraControlInventario,
  candimaniaDigital,
  amstelappRioSpa,
  plataformaAgentesIaMulticlienteMvp,
  mauryJaimeComunicacionOfflineB2g,
  drToothSistemaGestionInteligente,
  rodrigoGomezAcademiaMulticlase,
  acreditacionMineriaPlataformaDocumental,
  aaClLogisticaCotizadorMvp2026,
  carnesOhigginsTrazabilidadProduccion,
];

export function getProposalBySlug(slug: string): ProposalConfig | undefined {
  return proposals.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return proposals.map((p) => p.slug);
}

export default proposals;
