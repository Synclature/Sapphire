import React from "react";
import CountUp from "react-countup";

const Widgets = (props) => {
  return (
    <React.Fragment>
      <div className="col-xl-12">
        <div className="card stats-widget shadow card-animate">
          <div className="card-body p-0">
            <div className="row g-0 p-2 w-100">
              <h5 className=" text-uppercase fs-18 mb-3">{props.title}</h5>
              {props.data.map((widget, index) => (
                <div className="col" key={index}>
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <h2 className="mb-0">
                        <span
                          className="counter-value fs-bold"
                          data-target="197"
                        >
                          <CountUp
                            start={0}
                            prefix={widget.prefix}
                            suffix={widget.suffix}
                            separator={widget.separator}
                            end={widget.counter}
                            decimals={widget.decimals}
                            duration={1}
                            className={`text-opacity-75 ${
                              index === 0 ? "text-success" : "text-danger"
                            }`}
                          />
                        </span>
                      </h2>
                    </div>
                  </div>
                  <p className="text-secondary text-uppercase fs-12 mb-0">
                    <strong>{widget.label}</strong>
                  </p>
                </div>
              ))}
            </div>
            <div className="stats-icon bg-primary bg-gradient">
              <i className={props.icon + " display-6 text-white"}></i>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Widgets;
