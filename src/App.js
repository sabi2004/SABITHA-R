import './App.css';
// import Navbar from './components/Navbar';
// import Main from './components/Main';
// import Footer from './components/Footer';
//import Counter from './day3/Counter';
// import DynamicRender from './day3/DynamicRender';
//import Cricket from './day3/Cricket';
//import Toggle from './day3/Toggle';
//import Submit from './day3/Submit';
//import Tmessage from './day3/Tmessage';
// import { useState } from "react";
// import Cart from "./day-4/Cart";
// import Menu from "./day-4/Menu";
// import Navbar from "./day-4/Navbar";
// import categories from "./day-4/categories";
import Login from './ project/Login';

function App() {
  return(

<div>
   {/* <Navbar></Navbar>
  <Main></Main>
  <Footer></Footer> 
 <Counter></Counter>
   <DynamicRender></DynamicRender> 
 <Cricket></Cricket>
 <Toggle></Toggle>
<Submit></Submit>
 <Tmessage></Tmessage> */}
 <Login></Login>
  </div>
  );
 }

export default App;




// function App() {
//   const [activeCategory, setActiveCategory] = useState(categories[0]);
//   const [products, setProducts] = useState([]);

//   const handleClick = (index) => {
//     setActiveCategory(categories[index]);
//   };

//   const handleAddToCart = (item) => {
//     setProducts([...products, item]);
//   };

//   return (
//     <div className="space-y-4 my-4 "style={{backgroundImage:`url('https://tse3.explicit.bing.net/th?id=OIP.xl6zruWe9UotXiSxZ9PlwAHaEo&pid=Api&P=0&h=220' )`,backgroundSize:'cover'}}>
//       <Navbar category={categories} handleClick={handleClick} />
//       <Menu activeCategory={activeCategory} handleAddToCart={handleAddToCart} />
//       <Cart products={products} />
//     </div>
//   );
// }

// export default App;