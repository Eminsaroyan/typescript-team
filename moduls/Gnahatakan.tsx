import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface StarsProps {
    rating?: number;
    color?: string;
    size?: string;
}

interface AppData {
    appName: string;
    imageUrl: string;
    appStoreRating: number;
    googlePlayRating: number;
    appStoreLink: string;
    googlePlayLink: string;
}


interface AppByIdProps {
    collectionName: string;
    documentId: string;
}


function Stars({ rating = 0, color = "text-yellow-400", size = "text-[30px]" }: StarsProps) {
    const safeRating = typeof rating === "number" && !isNaN(rating) ? rating : 0;
    const fullStars = Math.floor(safeRating);
    const decimal = safeRating - fullStars;
    const hasHalf = decimal >= 0.25 && decimal < 0.75;
    const fullExtra = decimal >= 0.75 ? 1 : 0;
    const emptyStars = Math.max(0, 5 - fullStars - (hasHalf ? 1 : 0) - fullExtra);

    return (
        <div className={`flex ${color} ${size}`}>
            {[...Array(fullStars)].map((_, i) => (
                <FaStar key={`full-${i}`} />
            ))}
            {hasHalf && <FaStarHalfAlt />}
            {[...Array(fullExtra)].map((_, i) => (
                <FaStar key={`extra-${i}`} />
            ))}
            {[...Array(emptyStars)].map((_, i) => (
                <FaRegStar key={`empty-${i}`} />
            ))}
        </div>
    );
}


export default function AppById({ collectionName, documentId }: AppByIdProps) {
    const [app, setApp] = useState<AppData | null>(null);

    useEffect(() => {
        async function fetchApp() {
            try {
                const docRef = doc(db, collectionName, documentId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setApp(docSnap.data() as AppData);
                    console.log("Fetched app:", docSnap.data());
                } else {
                    console.log("No such document!");
                    setApp(null);
                }
            } catch (error) {
                console.error("Error loading app:", error);
                setApp(null);
            }
        }

        if (collectionName && documentId) {
            fetchApp();
        }
    }, [collectionName, documentId]);

    if (!app) return null;

    const { appName, imageUrl, appStoreRating, googlePlayRating, appStoreLink, googlePlayLink } = app;

    return (
        <div className="max-w-[1230px] m-auto mb-[50px] mx-auto">
            <h1 className="mb-[30px]">{appName}</h1>
            <div className="flex">
                <img src={imageUrl} alt={appName} className="h-[290px] rounded-[15px] mr-[20px]" />
                <div className="flex flex-col">
                    <div className="flex mb-[15px] text-[#FFFF00]">
                        <a href={appStoreLink} target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://www.telecomarmenia.am/img/redesign/app_store.png"
                                alt="App Store"
                                className="mb-[15px] mr-[30px]"
                            />
                        </a>
                        <Stars rating={appStoreRating} />
                        <span className="text-[20px] text-[#000000] ml-[12px]">{appStoreRating}</span>
                    </div>

                    <div className="flex text-[#FFFF00]">
                        <a href={googlePlayLink} target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://www.telecomarmenia.am/img/redesign/google_play.png"
                                alt="Google Play"
                                className="mb-[15px] mr-[30px] hover:opacity-90 transition"
                            />
                        </a>
                        <Stars rating={googlePlayRating} />
                        <span className="text-[25px] text-[#000000] ml-3">{googlePlayRating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
