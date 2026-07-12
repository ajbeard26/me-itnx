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
