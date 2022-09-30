import React from "react";

const Blog = () => {
  return (
    <div>
      <section className=" container mx-auto mt-6">
        <h2 className="text-2xl font-bold">How does react work? </h2>
        <p className="text-lg mt-6">
          ReactJS divides the UI into isolated reusable pieces of code known as
          components. React components work similarly to JavaScript functions as
          they accept arbitrary inputs called properties or props. It's possible
          to have as many components as necessary without cluttering your code.
        </p>
      </section>
      <section className=" container mx-auto mt-6">
        <h2 className="text-2xl font-bold">
          What is the difference between props and state?
        </h2>
        <p className="text-lg mt-6">
          <span className="font-bold text-2xl text-blue-800">Props: </span>
          The Data is passed from one component to another. It is Immutable
          cannot be modified.State can be used only with the state
          components/class component (Before 16.0).
        </p>
        <p className="text-lg mt-6">
          <span className="font-bold text-2xl text-blue-800">State: </span>
          The Data is passed within the component only. State can be used only
          with the state components/class component (Before 16.0).It is Mutable
          ( can be modified).
        </p>
      </section>

      <section className=" container mx-auto mt-6">
        <h2 className="text-2xl font-bold">Use of useEffect? </h2>
        <p className="text-lg mt-6">
          The motivation behind the introduction of useEffect Hook is to
          eliminate the side-effects of using class-based components. For
          example, tasks like updating the DOM, fetching data from API
          end-points, setting up subscriptions or timers, etc can be lead to
          unwarranted side-effects.
        </p>
      </section>
    </div>
  );
};

export default Blog;
