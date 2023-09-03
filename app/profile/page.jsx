"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const ProfilePage = () => {
  const router = useRouter();

  const { data: session, status } = useSession();

  const [posts, setPosts] = useState([]);

  const handleEdit = (post) => {
    router.push("/update-prompt?id=" + post._id);
  };

  const handleDelete = async (post) => {
    const confirmed = confirm("Are you sure you want to delete this prompt?");

    if (confirmed) {
      try {
        const url = "/api/prompt/" + post._id.toString();
        await fetch(url, {
          method: "DELETE",
        });

        const newPosts = posts.filter((p) => p._id !== post._id);
        setPosts(newPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const url = "/api/users/" + session?.user.id + "/posts";
      const respose = await fetch(url);
      const res = await respose.json();
      setPosts(res);
    };
    if (session?.user.id) {
      fetchPosts();
    }
  }, [session?.user.id]);

  return (
    <Profile
      name="Me"
      desc="desc"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default ProfilePage;
