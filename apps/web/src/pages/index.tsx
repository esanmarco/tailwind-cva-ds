import Head from 'next/head';
import { AvatarExample, AvatarSizes } from '../components/examples/Avatar';
import { ColorButtons, SizeButtons } from '../components/examples/Buttons';

export default function Home() {
    return (
        <div className="flex flex-col w-screen min-w-full min-h-screen py-4 prose">
            <Head>
                <title>TailwindCSS + CVA UI Components</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="px-8 pt-4 m-0">Component Examples:</h1>
            <main className="grid w-full grid-cols-1 p-8 lg:grid-cols-2 xl:grid-cols-3">
                <div className="flex flex-col">
                    <div>
                        <h2>Buttons:</h2>
                        <ColorButtons />
                        <SizeButtons />
                    </div>
                </div>

                <div className="flex flex-col">
                    <div>
                        <h2>Avatar:</h2>
                        <AvatarExample />
                        <AvatarSizes />
                    </div>
                </div>
            </main>
        </div>
    );
}
