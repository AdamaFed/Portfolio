import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Ebenfalls erfahren mit</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Figma</h3>
              {/* <span className="skills__level">Intermediate</span> */}
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Material UI</h3>
              {/* <span className="skills__level">Basic</span> */}
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Bootstrap</h3>
              {/* <span className="skills__level">Intermediate</span> */}
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">git</h3>
              {/* <span className="skills__level">Intermediate</span> */}
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Github</h3>
              {/* <span className="skills__level">Intermediate</span> */}
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            {/* <div>
              <h3 className="skills__name">SQL</h3>
              <span className="skills__level">Intermediate</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
