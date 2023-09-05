"use client";

import React from "react";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard key={post.id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    const search_input = e.target.value;
    setSearchText(search_input);

    if (search_input == "") {
      const fetchPosts = async () => {
        const respose = await fetch("/api/prompt");
        const data = await respose.json();

        setPosts(data);
      };

      fetchPosts();
    } else {
      const fetchPosts = async () => {
        const url = "/api/prompt/find/" + search_input;
        const respose = await fetch(url);
        const data = await respose.json();

        setPosts(data);
      };

      fetchPosts();
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const respose = await fetch("/api/prompt");
      const data = await respose.json();

      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form action="" className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={posts} handleTagClick={() => {}}></PromptCardList>
    </section>
  );
};

export default Feed;
