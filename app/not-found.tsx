export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, system-ui, sans-serif",
        background: "#f8fafc",
        color: "#0f172a",
        gap: "1rem",
      }}
    >
      <h1 style={{ fontSize: "4rem", margin: 0 }}>404</h1>
      <p style={{ color: "#64748b", fontSize: "1.1rem" }}>Page not found.</p>
      <a
        href="/"
        style={{
          background: "linear-gradient(110deg, #0ea5e9, #8b5cf6)",
          color: "white",
          padding: "0.6rem 1.4rem",
          borderRadius: "999px",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Go Home
      </a>
    </div>
  );
}
