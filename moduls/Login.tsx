import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase"; 
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                email: user.email,
                lastLogin: new Date(),
            }, { merge: true }); 

            navigate("/"); 
        } catch (error) {
            alert("Սխալ տվյալներ․ փորձեք նորից");
        }
    };

    return (
        <form onSubmit={handleLogin} className="flex flex-col max-w-[380px] m-auto mt-[80px] gap-[16px]">
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

            <p className="text-center text-sm text-gray-600 mt-2">Մոռացե՞լ եք գաղտնաբառը</p>

            <Link
                to="/registration"
                className="w-full bg-white border border-[#f04d4d] no-underline text-[#f04d4d] text-[20px] font-[800] py-[15px] rounded-[20px] text-center  hover:bg-[#f04d4d] hover:text-[#ffffff] transition duration-200"
            >
                Գրանցվել
            </Link>
        </form>

    )
}
