import Post from "../post";

export default function PostGroup({ posts }) {
  return (
    <div>
      <H2 className={["text-2xl font-semibold py-2"]}>Posts</H2>
      <Div className={["flex gap-2 items-center overflow-x-auto"]}>
        {posts?.map((post, index) => (
          <Post {...post} key={index} />
        ))}
      </Div>
    </div>
  );
}
