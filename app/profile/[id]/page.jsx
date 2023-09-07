"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const ProfileIdPage = ({ params }) => {
  const [posts, setPosts] = useState([]);
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const email = searchParams.get("email");

  useEffect(() => {
    const fetchPosts = async () => {
      const url = "/api/users/" + params.id + "/posts";
      const respose = await fetch(url);
      const res = await respose.json();
      setPosts(res);
    };

    fetchPosts();
  }, []);

  return (
    <Profile
      name={name}
      email={email}
      desc={
        "Welcome to " +
        name +
        " profile page. These are the prompts " +
        name +
        " have created."
      }
      data={posts}
    />
  );
};

export default ProfileIdPage;
