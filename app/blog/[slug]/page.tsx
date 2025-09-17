type Params = {
  params: {
    slug: string;
  };
};

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page() {
  return <h1>Slug: </h1>;
}
