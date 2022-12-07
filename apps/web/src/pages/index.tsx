import Head from 'next/head';
import { AvatarExample, AvatarSizes } from '../components/examples/Avatar';
import { ColorButtons, SizeButtons } from '../components/examples/Buttons';
import { ModalExample } from '../components/examples/Modal';
import {
    SelectColors,
    SelectExamples,
    SelectWithLabel,
} from '../components/examples/Select';

export default function Home() {
    return (
        <div className="flex flex-col w-screen min-w-full min-h-screen py-4 prose">
            <Head>
                <title>TailwindCSS + CVA UI Components</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="px-8 pt-4 m-0">Component Examples:</h1>
            <div className="flex flex-col w-full gap-10 p-8 lg:flex-row">
                <div className="flex flex-col">
                    <div className="p-8 shadow-lg card bg-base-200/[0.25]">
                        <h2 className="mt-0">Buttons:</h2>
                        <ColorButtons />
                        <SizeButtons />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="p-8 shadow-lg card bg-base-200/[0.25]">
                        <h2>Select:</h2>
                        <div className="flex flex-row justify-between gap-10">
                            <div className="w-full lg:w-1/2">
                                <SelectExamples />
                                <SelectWithLabel />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <SelectColors />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-full gap-10 p-8 lg:flex-row">
                <div className="flex flex-col">
                    <div className="p-8 shadow-lg card bg-base-200/[0.25]">
                        <h2>Avatar:</h2>
                        <AvatarExample />
                        <AvatarSizes />
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="p-8 w-80 shadow-lg card bg-base-200/[0.25]">
                        <h2>Modal:</h2>
                        <div className="mx-auto">
                            <ModalExample />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
