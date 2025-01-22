import { useEffect, useRef, useState } from "react";
import { PostCard } from "../components/ItiernaryCard";
import { SkeletonCard } from "../components/SkeletonCard";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import { auth } from "../firebase/config"; // Assuming `auth` is already configured for Firebase authentication

export const UserDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // For showing skeletons while fetching data
  const userId = auth.currentUser?.uid; // Get the current user's ID
  const postRef = useRef(collection(db, "posts"));

  useEffect(() => {
    async function getUserPosts() {
      if (!userId) return; 

      setLoading(true);
      const q = query(postRef.current, where("author.id", "==", userId));
      const data = await getDocs(q);
      setPosts(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
      setLoading(false);
    }
    getUserPosts();
  }, [userId]);

  return (
    <section className=" p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {loading
        ? new Array(2).fill(false).map((_, index) => <SkeletonCard key={index} />)
        : posts.map((post) => <PostCard key={post.id} post={post} />)}
      {!loading && posts.length === 0 && (
        <p className="text-center col-span-full text-gray-600">
          No itineraries created by you yet.
        </p>
      )}
    </section>
  );
};
