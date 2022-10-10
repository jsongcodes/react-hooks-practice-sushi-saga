import React from "react";

function Sushi(props) {

function handleClick(){
  <></>
}

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={/* Give me an image source! */ null}
            alt={/* Give me a name! */ "Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {/* Give me a name! */} - ${/* Give me a price! */}
      </h4>
    </div>
  );
}

export default Sushi;
