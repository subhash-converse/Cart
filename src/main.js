import React from "react";
import { useState } from "react";
import Book from "./book.123.jpg";

function Main() {
  return (
    <div className="main-div">
      <div className="header-div">
        <div></div>
        <div></div>
        <div className="icon-div">
          <i className="icon-kart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cart icon-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <span class="badge-cart">#</span>
          </i>
        </div>
      </div>

      <div className="gap-1"></div>

      <div className="sec-header">
        <div></div>
        <div className="sec-2header">
          <h1>Cart A Page</h1>
          <h3>
            Home<span>&gt;</span>
            Pages<span>&gt;</span>
            Cart Pages
          </h3>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>

      <div className="content-main-1">
        <div className="content-main">
          <div className="content-sub-1 content-header-1">
            <div className="cell-tab"></div>
            <div className="cell-tab"></div>
            <div className="cell-tab">
              <span>Product Name</span>
            </div>
            <div className="cell-tab">
              <span>Price</span>
            </div>
            <div className="cell-tab">
              <span>Quantity</span>
            </div>
            <div className="cell-tab">
              <span>Subtotal</span>
            </div>
          </div>
          
          <div className="content-sub-1">
            <div className="cell-tab">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x-lg"
                  viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </span>
            </div>
            <div className="cell-tab">
              <img className="book-img" src={Book} alt="book" />
            </div>
            <div className="cell-tab">
              <span>Natural Science Project</span>
            </div>
            <div className="cell-tab">
              <span className="dollor-sym">&#x24;&nbsp;</span>70.30
            </div>
            <div className="cell-tab">
              <div>
                <button>-</button>
                <span className="button-val">0</span>
                <button>+</button>
              </div>
            </div>
            <div className="cell-tab" id="book-1"></div>
          </div>
          <div className="content-sub-1">
            <div className="cell-tab">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x-lg"
                  viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </span>
            </div>
            <div className="cell-tab">
              <img className="book-img" src={Book} alt="book" />
            </div>
            <div className="cell-tab">
              <span>The King of Drugs</span>
            </div>
            <div className="cell-tab">
              <span className="dollor-sym">&#x24;&nbsp;</span>70.00
            </div>
            <div className="cell-tab"></div>
            <div className="cell-tab" id="book-2"></div>
          </div>
          <div className="content-sub-1">
            <div className="cell-tab">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x-lg"
                  viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>{" "}
              </span>
            </div>
            <div className="cell-tab">
              <img className="book-img" src={Book} alt="book" />
            </div>
            <div className="cell-tab">
              <span>The Siver Chair</span>
            </div>
            <div className="cell-tab">
              <span className="dollor-sym">&#x24;&nbsp;</span>70.00
            </div>
            <div className="cell-tab"></div>
            <div className="cell-tab" id="book-3"></div>
          </div>
        </div>
      </div>

      <div className="gap"></div>

      <div className="btn-coopn">
      <div className="content-main-2">
        <div className="input-main">
                <input className="input-1" type="text"  placeholder="Copen code..."/>
                <i className="icon-i"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right icon-arrow" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></i>
        </div>
        <div></div>
        <div>
            <button className="input-1" type="button">Update Cart <i><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right arrrow " viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></i></button>
        </div>
      </div>
      </div>
      <div className="gap"></div>
      
    </div>
  );
}
export default Main;
