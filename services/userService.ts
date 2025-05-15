import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { User } from "@clerk/nextjs/server";

export const syncClerkUserToFirestore = async (clerkUser: {
  id: string;
  fullName: string | null;
  emailAddress: string;
  imageUrl: string;
}) => {
  const userRef = doc(db, "users", clerkUser.id);
  const userSnap = await getDoc(userRef);

  // Solo crea el usuario si no existe
  if (!userSnap.exists()) {
    const newUser = {
      id: clerkUser.id,
      name: clerkUser.fullName,
      email: clerkUser.emailAddress,
      photoUrl: clerkUser.imageUrl,
      purchaseHistory: [],
    } as unknown as User;

    await setDoc(userRef, newUser);
  }
};
