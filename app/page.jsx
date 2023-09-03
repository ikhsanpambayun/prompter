import React from "react";
import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> Ai-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nobis
        cumque enim dolorum vitae ex atque ratione, dolore ipsa a odio ipsam
        eaque? Voluptate pariatur, ab vitae quis earum laudantium?
      </p>

      <Feed></Feed>
    </section>
  );
};

export default Home;
