import Header from './components/Header'
import TeachingSection from "./components/TeachingSection.jsx";
import DifferencesSection from "./components/DifferencesSection.jsx";

function App() {

  return (
      <>
          <Header />
          <main>
              <h1>Hello React!</h1>
              <TeachingSection />
              <DifferencesSection />
          </main>
      </>
  )
}

export default App
