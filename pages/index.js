import { useState } from "react";
import Head from "next/head";

function Home() {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <style jsx global>{`
        html,
        body,
        #__next {
          height: 100%;
        }
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          overflow: hidden;
        }

        .scene {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }

        .card {
          width: 70%;
          max-width: 800px;
          height: auto;
          aspect-ratio: 3/2;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.8s;
          cursor: pointer;
        }

        .card.flipped {
          transform: rotateY(180deg);
        }

        .card-face {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 28px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          backdrop-filter: blur(6px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
          backface-visibility: hidden;
          text-align: center;
        }

        .card-face h1 {
          margin: 0;
          line-height: 1.2;
          font-weight: 700;
          font-size: clamp(22px, 4vw, 44px);
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
        }

        .card-back {
          transform: rotateY(180deg);
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "linear-gradient(135deg, #070635ff 0%, #092d79ff 40%, #cf8413ff 100%)",
          color: "#e5e7eb",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        }}
      >
        <div className="scene">
          <div
            className={`card ${flipped ? "flipped" : ""}`}
            onClick={() => setFlipped(!flipped)}
          >
            <div className="card-face card-front">
              <h1>A jornada mais longa começa com um único passo.</h1>
            </div>
            <div className="card-face card-back">
              <h1>
                Projeto clone-tabnews.
                <br />
                Página em construção.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
