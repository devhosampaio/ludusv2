import { useEffect, useMemo, useState } from "react";
import "./DeveloperElementInspector.css";

const names = {
  "LP-001": "Página inteira", "LP-002": "Textura de fundo", "LP-003": "Primeira dobra",
  "LP-004": "Conteúdo principal", "LP-005": "Logotipo", "LP-006": "Demonstração visual",
  "LP-007": "Card de avaliação em destaque", "LP-008": "Avaliação flutuante",
  "LP-020": "Seção de avaliações recentes", "LP-020A": "Cabeçalho das avaliações",
  "LP-021": "Avaliação — Hollow Knight", "LP-022": "Avaliação — Celeste", "LP-023": "Avaliação — Outer Wilds",
  "LP-030": "Seção de resenhas", "LP-031": "Resenha — Disco Elysium", "LP-032": "Resenha — Journey",
  "LP-040": "Seção de listas", "LP-041": "Lista — jogos para sentir",
  "LP-042": "Lista — mundos para perder a hora", "LP-043": "Lista — pequenas obras-primas",
  "LP-050": "Seção de funcionalidades", "LP-051": "Avaliar", "LP-052": "Escrever",
  "LP-053": "Conectar", "LP-054": "Organizar", "LP-055": "Sobre o LUDUS",
  "LP-056": "Rodapé", "LP-061": "Fundo do modal", "LP-062": "Modal de autenticação"
};

export default function DeveloperElementInspector() {
  const [enabled, setEnabled] = useState(false);
  const [showLabels, setShowLabels] = useState(true);
  const [selected, setSelected] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const keyHandler = (event) => {
      if (event.altKey && event.shiftKey && event.key.toLowerCase() === "l") {
        event.preventDefault();
        setEnabled((value) => !value);
      }
      if (event.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.querySelectorAll("[data-inspector-selected]").forEach((node) => node.removeAttribute("data-inspector-selected"));
      setSelected(null);
      setMarkers([]);
      return;
    }
    let frame;
    const refresh = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setMarkers([...document.querySelectorAll("[data-ui-id]")].map((node) => {
          const rect = node.getBoundingClientRect();
          return { id: node.dataset.uiId, top: rect.top, left: rect.left, width: rect.width, height: rect.height };
        }).filter((item) => item.width && item.height));
      });
    };
    const clickHandler = (event) => {
      if (event.target.closest(".dei-panel")) return;
      const node = event.target.closest("[data-ui-id]");
      if (!node) return;
      event.preventDefault();
      event.stopPropagation();
      document.querySelectorAll("[data-inspector-selected]").forEach((item) => item.removeAttribute("data-inspector-selected"));
      node.setAttribute("data-inspector-selected", "true");
      const id = node.dataset.uiId;
      setSelected({ id, name: node.dataset.uiName || names[id] || node.getAttribute("aria-label") || node.tagName.toLowerCase(), file: "src/pages/LandingPage.jsx" });
    };
    document.addEventListener("click", clickHandler, true);
    window.addEventListener("resize", refresh);
    window.addEventListener("scroll", refresh, true);
    const observer = new MutationObserver(refresh);
    observer.observe(document.querySelector(".landing-page") || document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["class", "data-ui-id"] });
    refresh();
    return () => {
      document.removeEventListener("click", clickHandler, true);
      window.removeEventListener("resize", refresh);
      window.removeEventListener("scroll", refresh, true);
      observer.disconnect();
      cancelAnimationFrame(frame);
      document.querySelectorAll("[data-inspector-selected]").forEach((node) => node.removeAttribute("data-inspector-selected"));
    };
  }, [enabled]);

  const visibleMarkers = useMemo(() => showLabels ? markers : [], [markers, showLabels]);
  if (!import.meta.env.DEV) return null;

  return (
    <>
      {enabled && visibleMarkers.map((marker) => (
        <span className="dei-marker" key={marker.id} style={{ top: Math.max(4, marker.top + 3), left: Math.max(4, marker.left + 3) }}>{marker.id}</span>
      ))}
      <aside className={"dei-panel" + (enabled ? " dei-panel--active" : "")} aria-label="Modo de identificação de elementos">
        <div className="dei-panel__top">
          <span className="dei-panel__status"><i /> {enabled ? "modo ativo" : "modo de identificação"}</span>
          <button type="button" className="dei-panel__toggle" onClick={() => setEnabled((value) => !value)}>{enabled ? "desativar" : "ativar"}</button>
        </div>
        {enabled && <>
          <label className="dei-panel__labels"><input type="checkbox" checked={showLabels} onChange={(event) => setShowLabels(event.target.checked)} /> mostrar etiquetas</label>
          {selected ? <div className="dei-panel__details">
            <strong>{selected.id}</strong><span>{selected.name}</span><small>{selected.file}</small>
            <button type="button" onClick={() => navigator.clipboard?.writeText(selected.id)}>copiar código</button>
          </div> : <p className="dei-panel__hint">Toque ou clique em um elemento identificado para ver seus detalhes.</p>}
          <span className="dei-panel__shortcut">Atalho: Alt + Shift + L · Esc limpa seleção</span>
        </>}
      </aside>
    </>
  );
}
