import React, { useState } from "react";
import Code from "./components/Code";
import Header from "./components/Header";

export default function App() {
  const [runScript, setRunScript] = useState(false);

  const handleBtn = () => {
    setRunScript(true);
  };

  return (
    <div className="px-4 sm:px-8 lg:px-40">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="main">
        {/* Hero Section */}
        <div className="hero py-10 lg:py-20 text-[#374151] text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl">MockAPI-Platform</h1>
          <h3 className="text-xl sm:text-2xl lg:text-3xl mt-5 lg:mt-10">
            Free Fake and Reliable API for Testing and Prototyping.
          </h3>
          <p className="text-lg sm:text-xl lg:text-2xl mt-5">
            Powered by{" "}
            <a href="#" className="text-blue-500 underline">
              JSON Server
            </a>{" "}
            +{" "}
            <a href="#" className="text-blue-500 underline">
              LowDB
            </a>
            .
          </p>
          <p className="font-bold mt-5 text-md sm:text-lg">
            Serving ~3 billion requests each month.
          </p>
        </div>

        {/* Sponsor Section */}
        <div className="py-20 ">
          <h1 className="text-3xl sm:text-4xl mb-5">Sponsors</h1>
          <p className="mb-5">
            MockAPI-Platform is supported by the following companies and
            Sponsors on GitHub, check them out 💖
          </p>
          <img
            src="/assets/images/mockend.svg"
            className="object-contain w-full sm:w-3/4 lg:w-1/2  my-10"
            alt="mockend"
          />
          <img
            src="/assets/images/img1.png"
            className="w-full sm:w-3/4 lg:w-1/2 "
            alt="zuplo"
          />
        </div>

        {/* Try It Section */}
        <div>
          <h1 className="text-3xl sm:text-4xl mb-5">Try it</h1>
          <p className="mb-5 ">
            Run this code here, in a console or from any site:
          </p>
          <Code
            codeTxt={`fetch('https://https://mock-api-platform.vercel.app/')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.error('Error:', error));`}
          />
          <div className="btn my-5 ">
            <button
              className="text-white bg-black px-4 py-2 rounded-lg font-bold hover:bg-[#374151]"
              onClick={handleBtn}
            >
              Run script
            </button>
          </div>
          <Code codeTxt={`{}`} runScript={runScript} />
          <p className="my-5 ">
            Congrats! You've made your first call to MockAPI-Platform. 😃 🎉
          </p>
        </div>

        {/* When to Use Section */}
        <div className="py-20 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl mb-5">When to Use</h1>
          <p className="mb-5">
            MockAPI-Platform is a free online REST API that you can use whenever
            you need some fake data. It can be in a README on GitHub, for a demo
            on CodeSandbox, in code examples on Stack Overflow, ...or simply to
            test things locally.
          </p>
        </div>

        {/* Resources Section */}
        <div className="py-20  lg:text-left">
          <h1 className="text-3xl sm:text-4xl mb-5">Resources</h1>
          <p className="mb-5">
            MockAPI-Platform comes with a set of 6 common resources:
          </p>
          <table className="w-full sm:w-3/4 lg:w-1/2  border-collapse ">
           
            <tbody>
              <tr>
                <td>
                  <a href="https://mock-api-platform.vercel.app/posts">/posts</a>
                </td>
                <td>100 posts</td>
              </tr>
              <tr>
                <td>
                  <a href="https://mock-api-platform.vercel.app/comments">/comments</a>
                </td>
                <td>500 comments</td>
              </tr>
              <tr>
                <td>
                  <a href="https://mock-api-platform.vercel.app/albums">/albums</a>
                </td>
                <td>100 albums</td>
              </tr>
              <tr>
                <td>
                  <a href="https://mock-api-platform.vercel.app/photos">/photos</a>
                </td>
                <td>5000 photos</td>
              </tr>
              <tr>
                <td>
                  <a href="https://mock-api-platform.vercel.app/todos">/todos</a>
                </td>
                <td>200 todos</td>
              </tr>
              <tr>
                <td>
                  <a href="https://mock-api-platform.vercel.app/users">/users</a>
                </td>
                <td>10 users</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-5">
            <b>Note:</b> Resources have relations. For example: posts have many
            comments, albums have many photos, ... see the guide for the full
            list.
          </p>
        </div>

        {/* Routes Section */}
        <div className="py-20">
          <h1 className="text-3xl sm:text-4xl mb-5">Routes</h1>
          <p className="mb-5">
            All HTTP methods are supported. You can use http or https for your
            requests.
          </p>
          <table className="w-full sm:w-3/4 lg:w-1/2  border-collapse ">
            <tbody>
              <tr>
                <td>GET</td>
                <td>
                  <a href="https://mock-api-platform.vercel.app/posts">
                    /posts
                  </a>
                </td>
              </tr>
              <tr>
                <td>GET</td>
                <td>
                  <a href="https://mock-api-platform.vercel.app/posts/1">
                    /posts/1
                  </a>
                </td>
              </tr>
              <tr>
                <td>GET</td>
                <td>
                  <a href="https://mock-api-platform.vercel.app/posts/1/comments">
                    /posts/1/comments
                  </a>
                </td>
              </tr>
              <tr>
                <td>GET</td>
                <td>
                  <a href="https://mock-api-platform.vercel.app/comments?postId=1">
                    /comments?postId=1
                  </a>
                </td>
              </tr>
              <tr>
                <td>POST</td>
                <td>/posts</td>
              </tr>
              <tr>
                <td>PUT</td>
                <td>/posts/1</td>
              </tr>
              <tr>
                <td>PATCH</td>
                <td>/posts/1</td>
              </tr>
              <tr>
                <td>DELETE</td>
                <td>/posts/1</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-5">
            <b>Note:</b> See the guide for usage examples.
          </p>
        </div>

        {/* Use Your Own Data Section */}
        <div className="py-20 ">
          <h1 className="text-3xl sm:text-4xl mb-5">Use Your Own Data</h1>
          <p>
            With our sponsor Mockend and a simple GitHub repo, you can have your
            own fake online REST server in seconds.
          </p>
        </div>

        {/* Footer */}
        <div className="footer  text-center py-10 border-t">
          <p>Made with ❤️ by Majid © 2024</p>
        </div>
      </div>
    </div>
  );
}
