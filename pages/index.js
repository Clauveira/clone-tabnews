import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <style jsx global>{`
        html, body, #__next {
          height: 100%;
        }
        * { box-sizing: border-box; }
        body {
          margin: 0;
          overflow: hidden;
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #074124ff 0%, #065f46 40%, #10b981 100%)",
          color: "#e5e7eb",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          textAlign: "center",
        }}
      >
        <div
          style={{
            padding: "24px 28px",
            margin: "10vw",
            background: "rgba(255,255,255,0.06)",
            borderRadius: "16px",
            backdropFilter: "blur(6px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            maxWidth: "800px",
          }}
        >
          <h1
            style={{
              margin: 0,
              lineHeight: 1.2,
              fontWeight: 700,
              fontSize: "clamp(22px, 4vw, 44px)",
              textShadow: "0 2px 8px rgba(0,0,0,0.35)",
            }}
          >
            Jordana, eu amo você.
            <br />
            Se você me ama, dá uma risadinha!
          </h1>
        </div>
      </div>
    </>
  );
}

export default Home;
