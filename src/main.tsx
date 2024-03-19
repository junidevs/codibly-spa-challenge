import React from "react"
import ReactDOM from "react-dom/client"
import "@/index.css"
import App from "@/App"
import AppWrapper from "@/providers/GlobalWrapper"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </React.StrictMode>
)
