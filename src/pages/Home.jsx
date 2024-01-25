import Navbar from "../components/NavBar";
import Card from "../components/Card";

function Home() {
  return (
    <div style={{ backgroundColor: "#000000", height: "100vh" }}>
      <div>
        <Navbar />
      </div>
      <div style={{ display: "flex" }}>
        <Card title={"Maverick"} description={"Nice American 302"} />
        <Card title={"Opala"} description={"Wild Brazilian 6 inline"} />
        <Card title={"Charger"} description={"Dodge is crazy bro"} />
        <Card title={"Mustang"} description={"Mustang is a mustang"} />
      </div>
    </div>
  );
}

export default Home;
