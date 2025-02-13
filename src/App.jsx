import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const imgs = ["/img1.svg", "/img2.svg", "/img3.svg"];
  const [count, setCount] = useState(1);
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count > 1 ? count - 1 : count);
  };
  const [orderImg, setOrderImg] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mainImg, setMainImg] = useState(imgs[2]);
  // Next img function
  const nextImg = () => {
    setOrderImg(orderImg < 2 ? orderImg + 1 : 0);
    console.log(orderImg);
  };

  const firstActive = () => {
    setOrderImg(0);
    setIsActive(true);
    setMainImg(imgs[orderImg]);
  };
  const secondActive = () => {
    setOrderImg(1);
    setIsActive(true);
    setMainImg(imgs[orderImg]);
  };
  const thirdActive = () => {
    setOrderImg(2);
    setIsActive(true);
    setMainImg(imgs[orderImg]);
  };
  const closeModal = () => {
    setIsActive(false);
  };
  return (
    <>
      <header>
        <div className={isActive ? "modalBack modalActive" : "modalBack"}>
          <div className="leftBtn">
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="imgModal">
            <img src={mainImg} alt="" />
          </div>

          <div
            onClick={() => {
              closeModal();
            }}
            className="closeModalBtn"
          >
            <i className="fa-solid fa-x"></i>
          </div>

          <div
            onClick={() => {
              nextImg();
            }}
            className="leftBtn"
          >
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <nav>
          <div className="container">
            <div className="logo">
              <img src="/logo.svg" alt="" />
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
              <img src="/mainImg.png" alt="" />
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
                    <button
                      onClick={() => {
                        minus();
                      }}
                    >
                      -
                    </button>
                    <p>{count}</p>
                    <button
                      onClick={() => {
                        plus();
                      }}
                    >
                      +
                    </button>
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
                <div
                  onClick={() => {
                    firstActive();
                  }}
                  className="productImg"
                >
                  <img src="/img1.svg" alt="" />
                </div>
                <div
                  onClick={() => {
                    secondActive();
                  }}
                  className="productImg"
                >
                  <img src="/img2.svg" alt="" />
                </div>
                <div
                  onClick={() => {
                    thirdActive();
                  }}
                  className="productImg"
                >
                  <img src="/img3.svg" alt="" />
                </div>
              </div>
              <div className="watchVideo">
                <div className="videoIcon">
                  <i className="fa-solid fa-play"></i>
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
