import React, { useState } from "react";

/* ---------------------------------
   Layout constants (single source)
---------------------------------- */
const THUMB_SIZE = 64;
const THUMB_ROW_GAP = 20;
const THUMB_ROW_BOTTOM = 20;
const PROJECTION_HEIGHT = 180;

/* ---------------------------------
   Image data
---------------------------------- */
const IMAGES = [
  { id: 1, src: "/images/jodi_rick_est78-01.jpg", alt: "Age 3?" },
  { id: 2, src: "/images/jodi_rick_02.jpg", alt: "San Francisco" },
  { id: 3, src: "/images/jodi_fam.jpg", alt: "Family" },
];

export default function Jodi() {
  const [opened, setOpened] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const projecting = activeImage !== null;
  const activeSrc =
    IMAGES.find((img) => img.id === activeImage)?.src;

  return (
    <>
      {/* Safe, local keyframes */}
      <style>
        {`
          @keyframes lift {
            from {
              transform: translateY(16px) scaleY(0.92);
              opacity: 0;
            }
            to {
              transform: translateY(0) scaleY(1);
              opacity: 1;
            }
          }
        `}
      </style>

      <div style={styles.page}>
        <div
          style={{
            ...styles.card,
            transform: opened ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
          onClick={() => setOpened(!opened)}
        >
          {/* FRONT */}
          <div style={{ ...styles.face, ...styles.front }}>
            <div style={styles.frontInner}>
              <div style={styles.kicker}>Happy 50th</div>
              <h1 style={styles.name}>Sis</h1>
              <div style={styles.tapHint}>tap to open</div>
            </div>
          </div>

          {/* BACK */}
          <div style={{ ...styles.face, ...styles.back }}>
            {/* Projected image (ABOVE thumbnails) */}
            {projecting && (
              <div
                style={{
                  ...styles.projectedImage,
                  backgroundImage: `url(${activeSrc})`,
                }}
              />
            )}

            {/* Message */}
            <div
              style={{
                ...styles.message,
                opacity: projecting ? 0.4 : 1,
              }}
            >
              <h2 style={styles.heading}>It's Your Birthday!</h2>

              <p style={styles.text}>
                We all have different expectations for our 50th. For me
                it was the year I finally became an adult.
                A real grown up. HAHA, j/k.
              </p>

              <p style={styles.text}>
                I made you this little interactive card — a few moments
                that mean a lot to me, tucked inside.
              </p>

              <p style={styles.signature}>
                Love,<br />
                Rick
              </p>
            </div>

            {/* Thumbnail row */}
            <div style={styles.imageStrip}>
              {IMAGES.map((img) => (
                <Thumb
                  key={img.id}
                  img={img}
                  active={activeImage === img.id}
                  onEnter={() => setActiveImage(img.id)}
                  onLeave={() => setActiveImage(null)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------------------------------
   Thumbnail
---------------------------------- */
function Thumb({ img, active, onEnter, onLeave }) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onTouchStart={onEnter}
      onTouchEnd={onLeave}
      aria-label={img.alt}
      style={{
        ...styles.thumb,
        backgroundImage: `url(${img.src})`,
        filter: active ? "grayscale(0%)" : "grayscale(90%)",
      }}
    />
  );
}

/* ---------------------------------
   Styles
---------------------------------- */
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    background:
      "linear-gradient(135deg, #fde7e9 0%, #f7efe5 50%, #eef2f7 100%)",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Inter, Segoe UI, sans-serif",
  },

  card: {
    width: "100%",
    maxWidth: 380,
    height: "min(85vh, 560px)",
    position: "relative",
    transformStyle: "preserve-3d",
    transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
  },

  face: {
    position: "absolute",
    inset: 0,
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: 22,
    boxShadow: "0 24px 50px rgba(87, 50, 80, 0.18)",
  },

  front: {
    background:
      "linear-gradient(160deg, #5b2d4c 0%, #3a1f32 100%)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  back: {
    background:
      "linear-gradient(180deg, #fffaf7 0%, #f6eeea 100%)",
    color: "#2e2a2c",
    transform: "rotateY(180deg)",
    padding: 24,
    paddingBottom:
      PROJECTION_HEIGHT + THUMB_SIZE + THUMB_ROW_GAP + THUMB_ROW_BOTTOM,
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
  },

  frontInner: {
    textAlign: "center",
  },

  kicker: {
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    fontSize: 12,
    opacity: 0.75,
    marginBottom: 12,
  },

  name: {
    fontSize: 44,
    fontWeight: 600,
    margin: 0,
  },

  tapHint: {
    marginTop: 20,
    fontSize: 12,
    opacity: 0.6,
  },

  message: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    transition: "opacity 0.35s ease",
    position: "relative",
    zIndex: 1,
  },

  heading: {
    fontSize: 22,
    marginBottom: 14,
  },

  text: {
    fontSize: 15,
    lineHeight: 1.6,
    marginBottom: 14,
  },

  signature: {
    marginTop: "auto",
    fontSize: 14,
    opacity: 0.85,
  },

  imageStrip: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: THUMB_ROW_BOTTOM,
    height: THUMB_SIZE,
    display: "flex",
    justifyContent: "space-between",
    zIndex: 2,
  },

  thumb: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: 12,
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "0 8px 18px rgba(0,0,0,0.18)",
    cursor: "zoom-in",
    transition:
      "filter 0.35s ease, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)",
  },

  projectedImage: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: THUMB_SIZE + THUMB_ROW_GAP + THUMB_ROW_BOTTOM,
    height: PROJECTION_HEIGHT,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 18,
    zIndex: 3,
    pointerEvents: "none",
    transformOrigin: "bottom center",
    animation: "lift 420ms cubic-bezier(0.34, 1.56, 0.64, 1)",
    boxShadow: "0 26px 52px rgba(0,0,0,0.28)",
  },
};
