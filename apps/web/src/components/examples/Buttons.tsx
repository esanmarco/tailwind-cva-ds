import { Button } from 'ui';

const buttonAction = () => console.log('button clicked');

export function ColorButtons() {
    return (
        <>
            <h3 className="font-medium">Colors:</h3>
            <div className="flex flex-row gap-4 mb-4">
                <Button onClick={buttonAction}>Primary Button</Button>
                <Button color="secondary" onClick={buttonAction}>
                    Secondary Button
                </Button>
                <Button color="active" onClick={buttonAction}>
                    Active Button
                </Button>
            </div>
            <div className="flex flex-row gap-4 mb-4">
                <Button color="success" onClick={buttonAction}>
                    Success Button
                </Button>
                <Button color="info" onClick={buttonAction}>
                    Info Button
                </Button>
                <Button color="error" onClick={buttonAction}>
                    Error Button
                </Button>
            </div>
            <div className="flex flex-row gap-4 mb-4">
                <Button outlined onClick={buttonAction}>
                    Outlined Button (any color)
                </Button>
                <Button disabled onClick={buttonAction}>
                    Disabled Button
                </Button>
            </div>
        </>
    );
}

export function SizeButtons() {
    return (
        <>
            <h3 className="font-medium">Sizes:</h3>
            <div className="flex flex-row items-end gap-3 p-0 mb-4 w-fit">
                <Button onClick={buttonAction} size="large">
                    Large Button
                </Button>
                <Button onClick={buttonAction} size="medium">
                    Medium Button
                </Button>
                <Button onClick={buttonAction} size="small">
                    Small Button
                </Button>
            </div>
        </>
    );
}
