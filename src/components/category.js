import React from "react";
import veg3 from "./img/veg3.png"
import seafood from "./img/seafood.png"
import milk from "./img/milk.png"
import meat from "./img/meat.png"
import fruit1 from "./img/fruit1.png"
import frozen from "./img/frozen.png"
import bread from "./img/bread.png"
import org from "./img/org.png"

const category=() => {
    return (
      <div className="osahan-body">
        <div className="p-3 osahan-categories">
          <h6 className="mb-2">What do you looking for?</h6>
          <div className="row m-0">
            <div className="col pl-0 pr-1 py-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <a href="/listing">
                  <img src={veg3} className="img-fluid px-2" />
                  <p className="m-0 pt-2 text-muted text-center">Vegetables</p>
                </a>
              </div>
            </div>
            <div className="col p-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <a href="/listing">
                  <img src= {fruit1} className="img-fluid px-2" />
                  <p className="m-0 pt-2 text-muted text-center">Fruits</p>
                </a>
              </div>
            </div>
            <div className="col p-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <a href="/listing">
                  <img src={meat} className="img-fluid px-2" />
                  <p className="m-0 pt-2 text-muted text-center">Meat</p>
                </a>
              </div>
            </div>
            <div className="col pr-0 pl-1 py-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <a href="/listing">
                  <img src={seafood} className="img-fluid px-2" />
                  <p className="m-0 pt-2 text-muted text-center">Seafood</p>
                </a>
              </div>
            </div>
          </div>
          <div className="row m-0">
            <div className="col pl-0 pr-1 py-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <a href="/listing">
                  <img src={milk} className="img-fluid px-2" />
                  <p className="m-0 pt-2 text-muted text-center">
                    Milk &amp; Egg
                  </p>
                </a>
              </div>
            </div>
            <div className="col p-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <a href="/listing">
                  <img src={bread} className="img-fluid px-2" />
                  <p className="m-0 pt-2 text-muted text-center">Bread</p>
                </a>
              </div>
            </div>
            <div className="col p-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <a href="/listing">
                  <img src= {frozen} className="img-fluid px-2" />
                  <p className="m-0 pt-2 text-muted text-center">Frozen</p>
                </a>
              </div>
            </div>
            <div className="col pr-0 pl-1 py-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <a href="/listing">
                  <img src={org} className="img-fluid px-2" />
                  <p className="m-0 pt-2 text-muted text-center">Organic</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default category;