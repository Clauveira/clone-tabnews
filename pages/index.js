function Home() {
  const pageStyle = {
    minHeight: "100vh",
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(135deg, #0f172a 0%, #1f2937 40%, #0ea5e9 100%)",
    color: "#e5e7eb",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    textAlign: "center",
  };

  const cardStyle = {
    padding: "24px 28px",
    background: "rgba(255,255,255,0.06)",
    borderRadius: "16px",
    backdropFilter: "blur(6px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
    maxWidth: "800px",
  };

  const h1Style = {
    margin: 0,
    lineHeight: 1.2,
    fontWeight: 700,
    fontSize: "clamp(22px, 4vw, 44px)",
    textShadow: "0 2px 8px rgba(0,0,0,0.35)",
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={h1Style}>
          Jordana, eu amo você. Se você me ama, dá uma risadinha!!
        </h1>
      </div>
    </div>
  );
}

export default Home;
