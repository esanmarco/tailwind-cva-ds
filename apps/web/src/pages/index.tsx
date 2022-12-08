import Head from 'next/head';
import {
    AvatarExample,
    AvatarMasks,
    AvatarOnlineStatus,
    AvatarSizes,
} from '../components/examples/Avatar';
import { ColorButtons, SizeButtons } from '../components/examples/Buttons';
import { ModalExample } from '../components/examples/Modal';
import { BadgeColors, BadgeSizes } from '../components/examples/Badge';
import { AlertColors } from '../components/examples/Alert';
import { SelectColors, SelectExamples } from '../components/examples/Select';
import { MenuExamples } from '../components/examples/Menu';
import { InputColorExamples, InputSizeExamples } from '../components/examples/Input';

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
                            </div>
                            <div className="w-full lg:w-1/2">
                                <SelectColors />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="p-8 shadow-lg card bg-base-200/[0.25]">
                        <h2>Input:</h2>
                        <div className="flex flex-row justify-between gap-10">
                            <div className="w-full lg:w-1/2">
                                <InputSizeExamples />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <InputColorExamples />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-full gap-10 p-8 lg:flex-row">
                <div className="flex flex-col">
                    <div className="p-8 shadow-lg card bg-base-200/[0.25]">
                        <h2 className="mt-0">Avatar:</h2>
                        <AvatarExample />
                        <AvatarSizes />
                        <AvatarOnlineStatus />
                        <AvatarMasks />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="p-8 shadow-lg card bg-base-200/[0.25]">
                        <h2>Modal:</h2>
                        <div className="flex flex-row justify-between gap-10">
                            <ModalExample />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="p-8 shadow-lg card bg-base-200/[0.25]">
                        <h2>Badge:</h2>
                        <div className="flex flex-col justify-between gap-10">
                            <BadgeColors />
                            <BadgeSizes />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-full gap-10 p-8 lg:flex-row">
                <div className="flex flex-col">
                    <div className="p-8 w-80 shadow-lg card bg-base-200/[0.25]">
                        <h2>Alert:</h2>
                        <div className="mx-auto">
                            <AlertColors />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="p-8 w-80 shadow-lg card bg-base-200/[0.25]">
                        <h2>Dropdown Menu:</h2>
                        <div className="mx-auto">
                            <MenuExamples />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
