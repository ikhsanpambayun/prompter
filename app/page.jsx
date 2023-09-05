import React from "react";
import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          {" "}
          Interesting Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Prompter is a simple project to create, discover, and share interesting
        and inspiring quotes in the form of prompts.
      </p>

      <Feed></Feed>
    </section>
  );
};

export default Home;
