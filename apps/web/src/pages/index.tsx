import Head from "next/head";
import { ColorButtons, SizeButtons } from "../components/examples/Buttons";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-4 min-w-screen">
      <Head>
        <title>TailwindCSS + CVA UI Components</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full p-8 px-4 prose">
        <h1 className="mb-0">Component Examples:</h1>
        <div className="flex flex-col">
          <div>
            <h2>Buttons:</h2>

            <ColorButtons />
            <SizeButtons />
          </div>
        </div>
      </main>
    </div>
  );
}
