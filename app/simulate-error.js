// pages/simulate-error.js
export async function getServerSideProps() {
  try {
    // Simulate some server-side logic error
    throw new Error("Simulated server-side error");

  } catch (error) {
    return {
      props: {},
      notFound: false, // This indicates a server error, not a 404
      statusCode: 500, // You can set the status code here
    };
  }
}

export default function SimulateErrorPage() {
  return <h1>An internal server error occurred</h1>;
}
