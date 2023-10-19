import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text_center">
        Discover & share
        <br className="max-md: hidden" />
        <span className="blue_gradient text_center">Your experience of Companies</span>
      </h1>

      <p className="desc text-center">
      The open experience community is a platform where individuals come together to share their valuable insights and experiences on how to succeed in the corporate world. Members exchange tips, challenges, and stories, creating a supportive space to crack the code to professional achievement. It's a collaborative journey towards career excellence.
      </p>

      <Feed/>
    </section>
  );
};

export default Home;



