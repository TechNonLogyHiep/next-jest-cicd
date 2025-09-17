export async function generateMetadata() {
  return { title: `Post` };
}

export default function Page() {
  return <h1>Slug: </h1>;
}

export async function generateStaticParams() {
  // Ở đây bạn phải trả về toàn bộ slug có thể build
  return [
    { slug: "hello-world" },
    { slug: "nextjs-ci-cd" },
    { slug: "my-second-post" },
  ];
}