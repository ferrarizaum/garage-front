import Navbar from "./components/NavBar";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <body>
        <div style={{ display: "flex" }}>
          <Card title={"Maverick"} description={"Nice American 302"} />
          <Card title={"Opala"} description={"Wild Brazilian 6 inline"} />
          <Card title={"Charger"} description={"Dodge is crazy bro"} />
          <Card title={"Mustang"} description={"Mustang is a mustang"} />
        </div>
      </body>
    </div>
  );
}

export default App;
