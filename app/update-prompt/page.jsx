"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const EditPrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");
  const [post, setPost] = useState({ prompt: "", tag: "" });

  useEffect(() => {
    const getPromptDetails = async () => {
      const url = "/api/prompt/" + promptId;
      const response = await fetch(url);
      const data = await response.json();
      setPost({ prompt: data.prompt, tag: data.tag });
    };

    if (promptId) getPromptDetails();
  }, [promptId]);

  const editPrompt = async (e) => {
    e.preventDefault();

    try {
      const url = "/api/prompt/" + promptId;
      const res = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (res.ok) {
        router.push("/profile");
      }
    } catch (error) {
      console.log(error);
      router.push("/");
    }
  };

  return (
    <Form
      handleSubmit={editPrompt}
      type="Edit"
      post={post}
      setPost={setPost}
    ></Form>
  );
};

export default EditPrompt;
