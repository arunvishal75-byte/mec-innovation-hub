import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Initialize Firebase (analytics is browser-guarded inside the module)
import "./firebase";

createRoot(document.getElementById("root")!).render(<App />);
