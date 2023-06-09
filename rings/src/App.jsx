
import { BrowserRouter} from "react-router-dom";
import Routing from "./routes/Routing";

function App() {

  return (
    <div className="app">
      <BrowserRouter> 
          <Routing/>
      </BrowserRouter>
    </div>
  );
}

export default App;
