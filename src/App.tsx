import Navbar from "@component/ui/navbar";
import HeaderHero from "@component/pages/headerHero";
import Footer from "@component/pages/footer";
import MainSection from "@component/pages/mainSection";

import "./App.css";

function App() {
  return (
    <div>
      <header>
        <Navbar />
        <HeaderHero />
      </header>
      <main>
        <MainSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
