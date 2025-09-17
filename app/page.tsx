export const metadata = {
  title: "App Router",
};

export default function Page() {
  return <h1>Welcome to VTI academy!!!!</h1>;
}

export async function generateMetadata() {
  return [
    { slug: "hello-world" },
    { slug: "nextjs-cicd" },
    { slug: "my-second-post" },
  ];
}