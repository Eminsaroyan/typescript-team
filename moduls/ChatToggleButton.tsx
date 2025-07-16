import { useState } from "react";
import Chat from "./Chat";
import UserList from "./UserList";

export default function ChatToggle() {
  const [visible, setVisible] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState<string | null>(null);

  const closeChat = () => {
    setRecipientEmail(null);
    setVisible(false);
  };

  return (
    <>
      {!visible && (
        <button
          onClick={() => setVisible(true)}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 1000,
            padding: "15px 15px",
            borderRadius: "50%",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: 20,
          }}
        >
          💬
        </button>
      )}

      {visible && (
        <div
          className="bg-white shadow-xl rounded-[10px] p-2 relative"
          style={{
            position: "fixed",
            bottom: 70,
            right: 20,
            width: 350,
            maxHeight: 500,
            zIndex: 1000,
          }}
        >

          <button
            onClick={closeChat}
            style={{
              position: "absolute",
              top: 35,
              left: 12,
              background: "transparent",
              border: "none",
              fontSize: "20px",
              color: "#999",
              cursor: "pointer",
            }}
            aria-label="Փակել չատը"
          >
            X
          </button>

          <div className="mt-[30px]">
            {recipientEmail ? (
              <Chat recipientEmail={recipientEmail} visible={visible} />
            ) : (
              <UserList onSelect={setRecipientEmail} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
