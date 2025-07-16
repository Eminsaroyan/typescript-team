// UserList.tsx
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "./firebase";

interface User {
  email: string;
}

export default function UserList({ onSelect }: { onSelect: (email: string) => void }) {
  const [users, setUsers] = useState<User[]>([]);
  const currentUser = auth.currentUser;

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersData: User[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.email && data.email !== currentUser?.email) {
          usersData.push({ email: data.email });
        }
      });
      setUsers(usersData);
    };

    fetchUsers();
  }, [currentUser?.email]);

  return (
    <div className="p-[16px] max-h-[300px] bg-[#ffffff] rounded-[5px] overflow-y-auto">
      {users.map((user, index) => (
        <div key={index} className="flex justify-between items-center mb-[8px]">
          <span>{user.email}</span>
          <button
            onClick={() => onSelect(user.email)}
            className="bg-[#2196F3] hover:bg-[#2196F3] border-none text-[#ffffff] px-[13px] py-[4px] rounded-[5px]"
          >
            💬
          </button>
        </div>
      ))}
    </div>
  );
}
