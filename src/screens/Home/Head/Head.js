import Text from "./Text";
import Node from "../threejs/node";
import Header1 from "../../../components/Header1/Header1";

function Head(props) {
  return (
    <Header1 className="Header1-shadow">
      <Text />
      <div className="Header1-nucleo">
        <Node />
      </div>
    </Header1>
  );
}

export default Head;