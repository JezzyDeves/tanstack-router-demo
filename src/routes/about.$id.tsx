import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/$id")({
  component: Page,
});

function Page() {
  const { id } = Route.useParams();

  return (
    <>
      <h1>Hello this is about with the id of: {id}</h1>
      <Link to="/">Home</Link>
    </>
  );
}
