import { Avatar } from 'ui';

export function AvatarExample() {
    return (
        <>
            <h3 className="mb-0 font-medium">Types:</h3>
            <div className="flex flex-row gap-8 mb-8">
                <div className="flex flex-col items-center">
                    Image
                    <Avatar img="https://placeimg.com/192/192/people" />
                </div>
                <div className="flex flex-col items-center">
                    Placeholder
                    <Avatar placeholder="esm" />
                </div>
            </div>
        </>
    );
}

export function AvatarSizes() {
    return (
        <>
            <h3 className="mb-0 font-medium">Sizes:</h3>
            <div className="flex flex-row items-start gap-4 w-fit">
                <div className="flex flex-col items-center">
                    xsmall:
                    <Avatar size="xsmall" />
                </div>
                <div className="flex flex-col items-center">
                    small:
                    <Avatar offline />
                </div>
                <div className="flex flex-col items-center">
                    medium:
                    <Avatar online size="medium" />
                </div>
                <div className="flex flex-col items-center">
                    large:
                    <Avatar size="large" />
                </div>
            </div>
        </>
    );
}

export function AvatarMasks() {
    return (
        <>
            <h3 className="mb-0 font-medium">Shapes:</h3>
            <div className="flex flex-row items-center gap-4 w-fit">
                <div className="flex flex-col items-center">
                    Default:
                    <Avatar />
                </div>
                <div className="flex flex-col items-center">
                    Square:
                    <Avatar shape="square" />
                </div>
                <div className="flex flex-col items-center">
                    Triangle:
                    <Avatar shape="triangle" />
                </div>
                <div className="flex flex-col items-center">
                    Hexagon:
                    <Avatar shape="hexagon" />
                </div>
            </div>
        </>
    );
}
