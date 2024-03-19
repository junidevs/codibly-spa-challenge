import React from "react"
import ReactDOM from "react-dom/client"
import "@/index.css"
import App from "@/App"
import AppWrapper from "@/providers/GlobalWrapper"
import WelcomeModal from "@/components/molecules/WelcomeModal/WelcomeModal"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppWrapper>
      <>
        <WelcomeModal />
        <App />
      </>
    </AppWrapper>
  </React.StrictMode>
)
