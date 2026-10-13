import React, { createContext, useContext, useState } from "react";
const MessageContext = createContext(null);
export function MessageProvider({ children }) {
  const [message, setMessage] = useState("");
  function notify(text) { setMessage(text); }
  return <MessageContext.Provider value={{ notify }}>
    {children}
    {message && <div className="toast" role="status">{message}<button onClick={() => setMessage("")}>×</button></div>}
  </MessageContext.Provider>;
}
export function useMessage() { return useContext(MessageContext); }