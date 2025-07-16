import { useParams } from "react-router-dom";
import Chat from "./Chat";

export default function ChatPage() {
  const { email } = useParams<{ email: string }>();

  console.log("ChatPage.tsx ստացված email:", email);

  if (!email) {
    return <p>Օգտագործողի էլփոստը նշված չէ։</p>;
  }

  return <Chat recipientEmail={email} />;
}