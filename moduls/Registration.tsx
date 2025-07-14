// Registration.tsx
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Պահում ենք Firestore-ում
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        createdAt: new Date(),
      });

      alert("Գրանցումը հաջող է։ Այժմ կարող եք մուտք գործել։");
      navigate("/login");
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        alert("Այս էլ․ հասցեն արդեն գրանցված է։");
      } else if (error.code === "auth/weak-password") {
        alert("Գաղտնաբառը պետք է լինի առնվազն 6 նիշ։");
      } else {
        alert("Սխալ։ Խնդրում ենք փորձել նորից։");
      }
    }
  };

  return (
        <form onSubmit={handleRegister} className="flex flex-col max-w-[380px] m-auto mt-[80px] gap-[16px]">
            <label htmlFor="email">Օգտանուն</label>
            <input
                type="email"
                placeholder="Մուտքագրեք ձեր էլ. հասցեն"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[25px] border border-[#E0E0E0] rounded-[20px] p-[8px]"
                required
            />

            <label htmlFor="password">Գաղտնաբառ</label>
            <input
                type="password"
                placeholder="Մուտքագրեք գաղտնաբառը"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-[25px] border border-[#E0E0E0] rounded-[20px] p-[8px]"
                required
            />

            <button
                type="submit"
                className="w-full bg-[#f04d4d] border-none text-[#ffffff] text-[20px] font-[800] py-[15px] rounded-[20px]"
            >
                Մուտք
            </button>

            <Link
                to="/login"
                className="w-full bg-white border border-[#f04d4d] no-underline text-[#f04d4d] text-[20px] font-[800] py-[15px] rounded-[20px] text-center  hover:bg-[#f04d4d] hover:text-[#ffffff] transition duration-200"
            >
                Չեղարկել
            </Link>
        </form>
  );
}
