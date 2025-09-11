import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import { Navbar } from "./pages/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store";

function TestApp() {
  const client = new QueryClient(); //can give {defaultOptions:{}} inside QueryClient
  return (
    <div>
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<h1>PAGE DOESNT EXIST</h1>} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default TestApp;
