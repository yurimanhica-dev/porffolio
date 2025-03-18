import About from "./components/about";
import Experiences from "./components/experience";
import Header from "./components/header";
import Main from "./components/main";
import Techs from "./components/techs";

function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Experiences />
      <Techs />
      {/* <Projects /> */}
      <About />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
