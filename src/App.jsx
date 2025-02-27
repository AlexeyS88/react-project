import Header from './components/Header/Header.jsx'
import TeachingSection from "./components/TeachingSection.jsx";
import DifferencesSection from "./components/DifferencesSection.jsx";
import IntroSection from "./components/IntroSection.jsx";
import TabsSection from "./components/TabsSection.jsx";
import FeedbackSection from "./components/FeedbackSection.jsx";
import {useState} from "react";

function App() {
    const [tab, setTab] = useState('main')
  return (
      <>
          <Header />
          <TabsSection  active={tab} onChange={(current) => setTab(current)}/>
          <main>
              {tab === 'main' && (
                  <>
                  <IntroSection />
                  <h1>Hello React!</h1>
                  <TeachingSection />
                  <DifferencesSection />
                  </>
              )}
              {tab === 'feedback' && (
                  <FeedbackSection />
              )}
          </main>
      </>
  )
}

export default App
