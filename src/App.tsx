import { Routes, Route } from "react-router-dom";

import PageNotFound from "./pages/page-not-found/page-not-found.component";
import QuizAppMenu from "./components/menu/menu.component";
import Register from "./pages/register/register.component";
import Test from "./pages/test/test.component";

function App() {
  return (
    <div className="App">
      <QuizAppMenu />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Register />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
