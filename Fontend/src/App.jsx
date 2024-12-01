import Header from "./components/Header";

export default function App() {
  return (
    <div className="px-40 ">
      {/* header */}
      <Header />
      {/* main */}
      <div className="main">
        {/* hero */}
        <div className="hero py-20  text-[#374151]">
          <h1 className="text-6xl">JSON Placeholder</h1>
          <h3 className="text-3xl mt-10">
            Free Fake and reliable API for testing and prototyping.
          </h3>
          <p class="text-3xl mt-5">
            Powered by
            <a href="https://github.com/typicode/json-server">JSON Server</a>+
            <a href="https://github.com/typicode/lowdb">LowDB</a>.
          </p>
          <p className="font-bold mt-5 text-lg">
            Serving ~3 billion requests each month.
          </p>
        </div>

        {/* sponsor */}
        <div>
          <h1 className="text-4xl mb-5">Sponsors</h1>
          <p className="mb-5">
            JSONPlaceholder is supported by the following companies and Sponsors
            on GitHub, check them out 💖
          </p>
          <img
            src="/assets/images/mockend.svg"
            className="object-contain w-1/2 my-10"
            alt="mockend"
          />
          <img src="/assets/images/img1.png" alt="zuplo" />
        </div>

        {/* try it */}
      </div>
      <div className="footer"></div>
    </div>
  );
}
