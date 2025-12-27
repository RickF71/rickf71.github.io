import React, { useState } from "react";
import "./Jodi.css";

/* ---------------------------------
   Layout constants
---------------------------------- */
const THUMB_SIZE = 64;
const THUMB_ROW_GAP = 20;
const THUMB_ROW_BOTTOM = 20;

/* ---------------------------------
   Image data
---------------------------------- */
const IMAGES = [
  { id: 1, src: "/images/jodi_rick_est78-01.jpg", alt: "Age: 3?" },
  { id: 2, src: "/images/jodi_rick_02.jpg", alt: "San Francisco" },
  { id: 3, src: "/images/jodi_fam.jpg", alt: "Family" },
];

export default function Jodi() {
  const [opened, setOpened] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const activeSrc =
    IMAGES.find((img) => img.id === activeImage)?.src;

  return (
    <div className="jodi-page">
      <div
        className={`jodi-card ${opened ? "is-open" : ""}`}
        onClick={() => setOpened(!opened)}
      >
        {/* FRONT */}
        <div className="jodi-face jodi-front">
          <div className="jodi-frontInner">
            <div className="jodi-kicker">Happy 50th</div>
            <h1 className="jodi-name">Sis</h1>
            <div className="jodi-tapHint">tap to open</div>
          </div>
        </div>

        {/* BACK */}
        <div className="jodi-face jodi-back">
          {/* Popup image */}
          {activeImage && (
            <div
              className="jodi-popupFrame"
              style={{
                bottom:
                  THUMB_SIZE + THUMB_ROW_GAP + THUMB_ROW_BOTTOM,
              }}
            >
              <img
                src={activeSrc}
                alt=""
                draggable={false}
                className="jodi-popupImg"
              />
            </div>
          )}

          {/* Message */}
          <div
            className="jodi-message"
            style={{ opacity: activeImage ? 0.45 : 1 }}
          >
            <div className="jodi-headingFrame">
              <h2 className="jodi-heading">Happy 50th Jodi!</h2>
            </div>

            <p className="jodi-text">
              We all have different expectations for our 50th. For me
              it was the year I finally became an adult.
              A real grown up. HAHA, j/k.
            </p>

            <p className="jodi-text">
              I’ve been rediscovering my love for making things,
              so I made you this little interactive card.
              Hover or tap the photos below — some favorite
              memories of us growing up together.
            </p>

            <p className="jodi-signature">
              Love,<br />
              Rick
            </p>
          </div>

          {/* Thumbnails */}
          <div
            className="jodi-imageStrip"
            style={{ bottom: THUMB_ROW_BOTTOM }}
          >
            {IMAGES.map((img) => (
              <Thumb
                key={img.id}
                img={img}
                onEnter={() => setActiveImage(img.id)}
                onLeave={() => setActiveImage(null)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------
   Thumbnail
---------------------------------- */
function Thumb({ img, onEnter, onLeave }) {
  return (
    <div
      className="jodi-thumb"
      style={{ backgroundImage: `url(${img.src})` }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onTouchStart={onEnter}
      onTouchEnd={onLeave}
      aria-label={img.alt}
    />
  );
}
