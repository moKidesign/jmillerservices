import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      CALL US FOR A FREE ESTIMATE{' '}
      <a href="tel://+12193159477">(219) 315-9477</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="#">moKi™</a>.
        </span>
      </div>
    </footer>
  </div>
)
