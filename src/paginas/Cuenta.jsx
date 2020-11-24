import React from "react";
import { Link } from "react-router-dom";

class Cuenta extends React.Component {
  render() {
    return (
      <div>
        <div className="card">
          <nav>
            <ul>
              <li>
                {" "}
                <Link to="/cuenta">Maestros</Link>
                <ul class="children">
                  <li>
                    {" "}
                    <Link to="/grupos">Revisión</Link>
                  </li>

                  <li>
                    {" "}
                    <Link to="/home">Cerar Sesion</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Cuenta;
