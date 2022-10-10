import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer() {


  function handleAddSushi() {

  }

  return (
    <div className="belt">
      <Sushi />
      <MoreButton onClickMore={handleAddSushi}/>
    </div>
  );
}

export default SushiContainer;
