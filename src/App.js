import {useState} from 'react'
import './App.css';
import Home from "./pages/home";
import Navbar from './components/navbar/navbar';
import {VERCEL_API} from "./general";

function App() {
  
  const [products, setproducts] = useState([]);
  const [category, setCategory] = useState("");

  async function handelClick(){
    try {
      const res = await fetch(`${VERCEL_API}res?` + new URLSearchParams({
        cat: category
      }));

      const data = await res.json();
      console.log(data);
      data.length > 0 ? setproducts(data) : alert("❌ Try a different keyword ❌")

    } catch (error) {
      console.log(error);
    }

  }


  return (
    <div className="App">
      <Navbar setCategory={setCategory} handelClick={handelClick}/>
      <Home setproducts={setproducts} products={products}/>
    </div>
  );
}

export default App;
