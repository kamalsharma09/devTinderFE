import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import ConnectionRequests from "./components/ConnectionRequests";
import store from "./store/store"
import { Provider } from "react-redux";

function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/connectionRequests" element={<ConnectionRequests />} />
        </Route>
      </Routes>
   </BrowserRouter>
   </Provider>
    </>
  )
}

export default App
