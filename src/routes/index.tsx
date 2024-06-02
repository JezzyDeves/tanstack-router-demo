import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Page,
});

function Page() {
  return (
    <>
      <h1>Hello from Index!</h1>
      <Link to="/about/$id" params={{ id: crypto.randomUUID() }}>
        About
      </Link>
    </>
  );
}
