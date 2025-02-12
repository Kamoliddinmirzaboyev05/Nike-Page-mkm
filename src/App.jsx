import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="logo">
              <img src="/public/logo.svg" alt="" />
            </div>
            <ul className="links">
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Kids</a>
              </li>
              <li>
                <a href="#">Collections</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="hero">
          <div className="container">
            <div className="heroMainImg">
              <img src="/public/mainImg.png" alt="" />
            </div>
            <div className="heroMain">
              <div className="numCol">
                <p className="activeNum">01</p>
                <p>02</p>
                <p>03</p>
              </div>
              <div className="heroText">
                <h1>
                  Nike Air <br /> Max Pre-Day
                </h1>
                <p>
                  Taking the classic look of heritage Nike Running into a new
                  realm, the Nike Air Max Pre-Day brings you a fast-paced look
                  that's ready for today's world.A true nod to the past with a
                  design made from at least 20% recycled material by weight.
                </p>
                <div className="price">
                  <div className="counter">
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                  </div>
                  <button className="addBag">Add to Bag</button>
                  <p>₹11,495.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="heroProducts">
            <div className="container">
              <div className="mainProducts">
                <div className="productImg">
                  <img src="/public/img1.png" alt="" />
                </div>
                <div className="productImg">
                  <img src="/public/img2.png" alt="" />
                </div>
                <div className="productImg">
                  <img src="/public/img3.png" alt="" />
                </div>
              </div>
              <div className="watchVideo">
                <div className="videoIcon">
                  <i class="fa-solid fa-play"></i>
                </div>
                <p>Watch Video</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
