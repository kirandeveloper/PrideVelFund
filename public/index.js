import React from 'react';
import ReactDOM from 'react-dom';

const myelement = (
        /* navbar */
          <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">Payment</a>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul class="navbar-nav mt-2 mt-lg-0 ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item dropdown dmenu">
                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                  User
                </a>
                <div class="dropdown-menu sm-menu">
                  <a class="dropdown-item" href="#">Wallet</a>
                  <a class="dropdown-item borderbottom" href="#">Settings</a>
                  <a class="dropdown-item" href="#">Logout</a>
                </div>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#">My Account</a>
                </li>
              </ul>
            </div>
        </nav>
        /* navbar */
        /* container */
        <section class="container-fluid">
          <div class="clearfix">
            <span class="float-left mt-4"><h3>Funds</h3></span>
            <span class="float-right mt-4"><button type="button" class="btn btn-dark">Create Fund</button></span>
          </div>
        </section>
        <section class="container-fluid">
          <div class="row">
            /* card */
            <div class="col-lg-4 col-sm-12 mt-3">
                <div class="card">
                  <div class="card-body">
                      <h3>PrideVel Fund</h3>
                      <p>With supporting text below as a natural lead-in to additional content.</p>
                      <div class="dropdown-divider"></div>
                      <p class="text-center">Price</p>
                      <p class="text-center text-success priceamt">$103.34</p>
                      <div class="dropdown-divider"></div>
                      <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            Returns
                        </div>
                        <div class="col-lg-6 col-sm-12 text-right">
                           6m&nbsp;&nbsp;1m&nbsp;&nbsp; 7d
                        </div>
                      </div>
                      <p class="text-center text-dark priceamt">12.25%</p>
                      <div class="dropdown-divider"></div>
                      <div class="col-sm-12 p-0 pt-2">
                          <button type="button" class="btn btn-primary">Buy</button>
                          <button type="button" class="btn btn-primary ml-3">Sell</button>
                          <button type="button" class="btn btn-primary ml-3">More..</button>
                      </div>
                  </div>
                </div>
            </div>
            /* card */
            /* card */
            <div class="col-lg-4 col-sm-12 mt-3">
                <div class="card">
                  <div class="card-body">
                      <h3>PrideVel Fund</h3>
                      <p>With supporting text below as a natural lead-in to additional content.</p>
                      <div class="dropdown-divider"></div>
                      <p class="text-center">Price</p>
                      <p class="text-center text-success priceamt">$103.34</p>
                      <div class="dropdown-divider"></div>
                      <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            Returns
                        </div>
                        <div class="col-lg-6 col-sm-12 text-right">
                           6m&nbsp;&nbsp;1m&nbsp;&nbsp; 7d
                        </div>
                      </div>
                      <p class="text-center text-dark priceamt">12.25%</p>
                      <div class="dropdown-divider"></div>
                      <div class="col-sm-12 p-0 pt-2">
                          <button type="button" class="btn btn-primary">Buy</button>
                          <button type="button" class="btn btn-primary ml-3">Sell</button>
                          <button type="button" class="btn btn-primary ml-3">More..</button>
                      </div>
                  </div>
                </div>
            </div>
            /* card */
            /* card */
            <div class="col-lg-4 col-sm-12 mt-3">
                <div class="card">
                  <div class="card-body">
                      <h3>PrideVel Fund</h3>
                      <p>With supporting text below as a natural lead-in to additional content.</p>
                      <div class="dropdown-divider"></div>
                      <p class="text-center">Price</p>
                      <p class="text-center text-success priceamt">$103.34</p>
                      <div class="dropdown-divider"></div>
                      <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            Returns
                        </div>
                        <div class="col-lg-6 col-sm-12 text-right">
                           6m&nbsp;&nbsp;1m&nbsp;&nbsp; 7d
                        </div>
                      </div>
                      <p class="text-center text-dark priceamt">12.25%</p>
                      <div class="dropdown-divider"></div>
                      <div class="col-sm-12 p-0 pt-2">
                          <button type="button" class="btn btn-primary">Buy</button>
                          <button type="button" class="btn btn-primary ml-3">Sell</button>
                          <button type="button" class="btn btn-primary ml-3">More..</button>
                      </div>
                  </div>
                </div>
            </div>
            /* card */
            /* card */
            <div class="col-lg-4 col-sm-12 mt-3">
                <div class="card">
                  <div class="card-body">
                      <h3>PrideVel Fund</h3>
                      <p>With supporting text below as a natural lead-in to additional content.</p>
                      <div class="dropdown-divider"></div>
                      <p class="text-center">Price</p>
                      <p class="text-center text-success priceamt">$103.34</p>
                      <div class="dropdown-divider"></div>
                      <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            Returns
                        </div>
                        <div class="col-lg-6 col-sm-12 text-right">
                           6m&nbsp;&nbsp;1m&nbsp;&nbsp; 7d
                        </div>
                      </div>
                      <p class="text-center text-dark priceamt">12.25%</p>
                      <div class="dropdown-divider"></div>
                      <div class="col-sm-12 p-0 pt-2">
                          <button type="button" class="btn btn-primary">Buy</button>
                          <button type="button" class="btn btn-primary ml-3">Sell</button>
                          <button type="button" class="btn btn-primary ml-3">More..</button>
                      </div>
                  </div>
                </div>
            </div>
            /* card */
          </div>
        </section>
        /* container */
        /* navbar */
        <footer class="container-fluid">
            <center>@payment app</center>
        </footer>
        /* navbar */

);

ReactDOM.render(myelement, document.getElementById('root'));