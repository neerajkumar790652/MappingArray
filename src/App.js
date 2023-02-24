import "./styles.css";

export default function App() {
  function p(n) {
    var i,
      flag = true;
    // n = parseInt(n)
    if (n < 2) return false;
    for (i = 2; i <= n - 1; i++)
      if (n % i === 0) {
        flag = false;
        break;
      }
    if (flag === true) return true;
  }
  return (
    <>
    <h1 style={{textAlign:"center"}}>30 Days of React</h1>
    <h3 style={{textAlign:"center"}}>Number Generator</h3>
    <div style={{ display: "flex", flexWrap: "wrap" ,alignItems:"center",justifyContent:"center"}}>
      {Array(32)
        .fill("")
        .map((e, i) => {
          return (
            <div
              style={{
                width: "50px",
                height: "50px",
                border: "1px solid black",
                background: p(i) ? "red" : i % 2 === 0 ? "green" : "yellow"
              }}
            >
              {i}
            </div>
          );
        })}
    </div>
    </>
  );
}
