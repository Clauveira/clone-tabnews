function Home() {
  const pageStyle = {
    height: "100vh",
    width: "100vw",
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(135deg, #083112ff 0%, #065f46 40%, #10b981 100%)",
    color: "#e5e7eb",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    textAlign: "center",
    overflow: "hidden",
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
