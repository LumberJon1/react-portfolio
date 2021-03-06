import React, {useState} from "react";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  const [currentPage, setCurrentPage] = useState('About');

  // Conditionals to decide which page to render
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  // Page change handler for onClick events to any of the navbar links
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <header className="mb-2">
        <Navbar
          className=""
          currentPage={currentPage}
          handlePageChange={handlePageChange}>
        </Navbar>
      </header>
      <main>
        {renderPage()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
