const LoadingSpinner = () => (
  <div
    style={{
      border: "4px solid rgba(0, 0, 0, 0.1)",
      borderTop: "4px solid #3498db",
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      animation: "spin 1s linear infinite",
      margin: "20px auto",
    }}
  ></div>
);

export default LoadingSpinner;
