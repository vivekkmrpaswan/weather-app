const Error = ({ message }) => {
  return (
    <div className="error">
      <p style={{ color: "red" }}>❌ {message}</p>
    </div>
  );
};

export default Error;
