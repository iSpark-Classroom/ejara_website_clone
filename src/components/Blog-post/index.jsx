import React from "react";
import Recentpost from "./Recentpost";
import Catchup from "./Catchup";
import SaaS from "./SaaS";
import Week from "./Week";
import Just from "./Just";
import SignUp from "./SignUp";

const BlogPost = () => {
  return (
    <div
      className="blog-post"
      style={{
        backgroundColor: "#F5F5F5",
        padding: "50px 0",
        marginTop: "50px",
      }}
    >
      <Catchup />
      <Recentpost />
      <Week />
      <SaaS />
      <Just />
      <SignUp />
    </div>
  );
};

export default BlogPost;
