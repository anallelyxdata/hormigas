import { useState } from "react";
import { AppRouter } from "./AppRouter";
import { ImageUrlProvider } from "./pages/ImageUrlContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ImageUrlProvider>
      <AppRouter />
    </ImageUrlProvider>
  );
}

export default App;
