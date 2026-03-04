import React from "react";
import "../../styles/Blog-post/Recentpost.css";

const Recentpost = () => {
  return (
    <section className="stutext">
      <div className="student">
        <h2>Recent Post (08)</h2>

        <img
          src="/images/Ejara-assets/images_blogpost/student-849821_1920.jpg"
          alt="A lady using her laptop"
        />
      </div>

      {/* {container for text} */}
      <div className="text">
        <h2>How remote work drastically improved my design skills </h2>
        <p>
          Remote work has drastically improve my design skills by giving me
          freedom to experiment,focus and learn at my own pace without the daily
          commute and office distractions, i found more time for deep,
          uninterpreted work,allowing me to refine my design techniques and
          creativity,collaborating with a global team challenged me.{" "}
        </p>
      </div>
    </section>
  );
};

export default Recentpost;
