import './App.css';
import Card from './components/Card';
import logo from './img/no_icon.png'

function App() {
  return (
    <>
      <Card 
        cardTitle="Card title"
        cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
      >
        <img src={logo} class="card-img-top" alt="..."/>
      </Card>
      <Card 
        cardTitle="Special title treatment"
        cardText="With supporting text below as a natural lead-in to additional content."
      />
    </>
  );
}

export default App;
