import React, { createContext, useContext, useState } from "react";

// Create a context for the imageUrl
const ImageUrlContext = createContext();

// Create a custom hook to access the imageUrl from the context
export const useImageUrl = () => useContext(ImageUrlContext);

// Create a context provider component to manage the imageUrl state
export const ImageUrlProvider = ({ children }) => {
  const [imageUrl, setImageUrl] = useState("");

  // You can update the imageUrl state using a function like setImageUrl

  return (
    <ImageUrlContext.Provider value={imageUrl}>
      {children}
    </ImageUrlContext.Provider>
  );
};
