import type { Project } from "@/data/projects";

export default function ProjectPreview({ variant }: { variant: Project["preview"] }) {
  switch (variant) {
    case "nxrent":
      return (
        <div className="preview-ui preview-nxrent">
          <div className="preview-sidebar" />
          <div className="preview-main">
            <div className="preview-bar" />
            <div className="preview-cards">
              <span /><span /><span />
            </div>
            <div className="preview-chart" />
          </div>
        </div>
      );
    case "itnx":
      return (
        <div className="preview-ui preview-itnx">
          <div className="preview-nav" />
          <div className="preview-hero-block" />
          <div className="preview-tiles">
            <span /><span /><span />
          </div>
        </div>
      );
    case "fleet":
      return (
        <div className="preview-ui preview-fleet">
          <div className="preview-map" />
          <div className="preview-list">
            <span /><span /><span /><span />
          </div>
        </div>
      );
    case "printer":
      return (
        <div className="preview-ui preview-printer">
          <div className="preview-toolbar" />
          <div className="preview-rows">
            <span /><span /><span /><span /><span />
          </div>
        </div>
      );
    case "kiosk":
      return (
        <div className="preview-ui preview-kiosk">
          <div className="preview-feed" />
          <div className="preview-status" />
        </div>
      );
    default:
      return (
        <div className="preview-ui preview-web">
          <div className="preview-browser">
            <span /><span /><span />
          </div>
          <div className="preview-site-grid">
            <span /><span />
          </div>
        </div>
      );
  }
}
