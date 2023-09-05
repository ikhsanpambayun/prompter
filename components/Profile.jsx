import React from "react";
import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleDelete, handleEdit }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Profile</span>
      </h1>
      <h3 className="mt-5 text-3xl font-bold text-left">
        <span className="orange_gradient">{name}</span>
      </h3>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post.id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
