import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="text-center">
        <h1 className="text-3xl font-semibold mt-12 mb-4">
          Welcome to support ticket system
        </h1>
        <p>Sign in to submit a ticket</p>
      </main>
    </>
  );
}
