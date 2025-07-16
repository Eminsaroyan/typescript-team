import { useEffect, useState } from "react";
import { db, auth } from "./firebase";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

interface Message {
  sender: string;
  receiver: string;
  text: string;
  timestamp: any;
}

export default function Chat({
  recipientEmail,
  visible = true,
}: {
  recipientEmail: string;
  visible?: boolean;
}) {

  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const currentUser = auth.currentUser;

  useEffect(() => {
    if (!currentUser?.email) return;

    const messagesRef = collection(db, "messages");
    const q = query(
      messagesRef,
      where("participants", "array-contains", currentUser.email),
      orderBy("timestamp")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const filtered = snapshot.docs
        .map((doc) => doc.data() as Message)
        .filter(
          (msg) =>
            [currentUser.email, recipientEmail].includes(msg.sender) &&
            [currentUser.email, recipientEmail].includes(msg.receiver)
        );
      setMessages(filtered);
    });

    return () => unsubscribe();
  }, [recipientEmail, currentUser?.email]);

  // ✅ Ջնջում ենք input-ը երբ չատը փակվում է
  useEffect(() => {
    if (!visible) {
      setNewMessage("");
    }
  }, [visible]);

  const sendMessage = async () => {
    if (!newMessage.trim() || !currentUser?.email || !recipientEmail) return;

    await addDoc(collection(db, "messages"), {
      sender: currentUser.email,
      receiver: recipientEmail,
      text: newMessage.trim(),
      participants: [currentUser.email, recipientEmail],
      timestamp: serverTimestamp(),
    });

    setNewMessage("");
  };

  return (
    <div className="p-[16px] rounded-[12px] max-w-[500px] mx-auto shadow-[0_4px_12px_rgba(0,0,0,0.1)] bg-[#ffffff]">

      <div className="h-[300px] overflow-y-auto mb-[16px] p-[16px] bg-[#f5f5f5] rounded-[8px]">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-[12px] text-[15px] leading-[20px] ${msg.sender === currentUser?.email
              ? "text-right text-[#1976D2]"
              : "text-left text-[#424242]"
              }`}
          >
            <p className="inline-block bg-[#ffffff] px-[12px] py-[8px] rounded-[6px] shadow-[0_1px_4px_rgba(0,0,0,0.1)] max-w-[80%]">
              <strong>{msg.sender === currentUser?.email ? "Դու" : msg.sender}:</strong> {msg.text}
            </p>
          </div>
        ))}
      </div>

      {/* Մուտքագրման դաշտ */}
      <div className="flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); 
              sendMessage();
            }
          }}
          className="flex-1 px-[12px] py-[10px] rounded-l-[10px] border border-[#1976D2] text-[14px] focus:outline-none"
          placeholder="Գրիր հաղորդագրություն..."
        />

        <button
          onClick={sendMessage}
          className="bg-[#1976D2] border-[#1976D2] hover:bg-[#1565C0] hover:border-[#1565C0]  text-[#ffffff] px-[20px] py-[10px] rounded-r-[10px] text-[14px] font-semibold"
        >
          Ուղարկել
        </button>
      </div>
    </div>

  );
}

