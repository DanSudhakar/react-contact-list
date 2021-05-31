import { Provider } from "react-redux";
import "./App.css";
import "./appStyles.css";
import Header from "./components/Header";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer numOfCakes={10}></CakeContainer> */}
        {/* <AxiosEg></AxiosEg> */}
        <Header></Header>
      </div>
    </Provider>
  );
}

export default App;
