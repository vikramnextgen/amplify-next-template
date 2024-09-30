// app/error/page.js
export default function ErrorPage() {
  throw new Error("Simulated 500 Error");

  return <div>Should not reach here</div>;
}
