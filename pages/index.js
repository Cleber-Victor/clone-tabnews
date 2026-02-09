function Home() {
  const styles = {
    container: {
      backgroundColor: "#0a1428",
      color: "#f0e6d2",
      textAlign: "center",
      fontFamily: "sans-serif",
      // Ocupa a tela inteira
      width: "100vw",
      minHeight: "100vh",
      // Centralização perfeita
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    title: {
      fontSize: "2.5rem",
      margin: "0 0 10px 0",
      textTransform: "uppercase",
      letterSpacing: "2px",
    },
    subtitle: {
      fontSize: "1.2rem",
      fontWeight: "normal",
      maxWidth: "600px",
      opacity: 0.8,
      margin: 0,
    },
  };

  return (
    <div style={styles.container}>
      {/* Remove as margens padrão do navegador sem usar arquivo .css externo */}
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          background-color: #0a1428;
        }
      `}</style>

      <h1 style={styles.title}>Em Construção</h1>
      <h2 style={styles.subtitle}>
        Vem aí o melhor fórum para reunir a Comunidade Brasileira de League of
        Legends.
      </h2>
    </div>
  );
}

export default Home;
