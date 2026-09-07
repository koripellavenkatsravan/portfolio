import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import WordReveal from "./WordReveal";
import Magnetic from "./Magnetic";

export default function Publications() {
  return (
    <section
      id="publications"
      data-testid="publications-section"
      className="pubs-panel"
      data-dark="true"
    >
      <div className="wrap">
        <div className="section-head">
          <WordReveal
            as="h2"
            className="section-h2"
            style={{ color: "#f5f5f7" }}
            parts={[{ t: "Publications." }]}
          />
          <Reveal delay={120}>
            <p className="section-sub">
              Peer-reviewed research, published by Taylor &amp; Francis.
            </p>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <article className="pub-card" data-testid="pub-card">
            <span className="pub-year">2025 · Journal Article</span>
            <h3 className="pub-title">
              Liver Cancer Detection Using Butterfly Optimised Strip Dilated
              Convolutional Neural Network
            </h3>
            <p className="pub-abstract">
              Proposed a deep learning framework for detecting liver carcinoma
              stages using CT images. The system combines Multi-scale Adaptive
              Retinex preprocessing, Reverse Edge Attention Network
              segmentation, Butterfly Optimization for feature selection, and a
              Strip Dilated Convolutional Neural Network (Std-Net) for
              classification. The model achieved 99.56% detection accuracy,
              outperforming architectures such as AlexNet, DenseNet, and
              ResNet.
            </p>
            <p className="pub-credit">
              <b>Authors:</b> Padmajothi V., Jaya T., Poornima Ramamoorthy A.,
              Venkat Sravan K., Kumarraja A., Kannan R.
              <br />
              <b>Journal:</b> Australian Journal of Electrical and Electronics
              Engineering (Taylor &amp; Francis) · Published online 23 July 2025
            </p>
            <div className="pub-actions">
              <Magnetic>
                <a
                  data-testid="pub-read-btn"
                  href="https://www.tandfonline.com/doi/full/10.1080/1448837X.2025.2515304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Read the paper <ArrowUpRight size={15} />
                </a>
              </Magnetic>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
