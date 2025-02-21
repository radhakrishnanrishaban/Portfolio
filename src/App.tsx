import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Resume from "./components/sections/Resume";
function App() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Resume />
      <About />
      <Contact />
    </Layout>
  );
}

export default App;
