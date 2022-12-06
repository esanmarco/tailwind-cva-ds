import { Button } from 'ui';

export function ColorButtons() {
    return (
        <>
            <div className="font-medium">Colors:</div>
            <div className="flex flex-row gap-4 mb-4">
                <Button onClick={() => console.log('clicked')}>Primary Button</Button>
                <Button color="secondary" onClick={() => console.log('clicked')}>
                    Secondary Button
                </Button>
                <Button outlined onClick={() => console.log('clicked')}>
                    Outlined Button
                </Button>
            </div>
        </>
    );
}

export function SizeButtons() {
    return (
        <>
            <div className="font-medium">Sizes:</div>
            <div className="flex flex-row items-end gap-3 p-0 mb-4 w-fit">
                <Button onClick={() => console.log('clicked')} size="large">
                    Large Button
                </Button>
                <Button onClick={() => console.log('clicked')} size="medium">
                    Medium Button
                </Button>
                <Button onClick={() => console.log('clicked')} size="small">
                    Small Button
                </Button>
            </div>
        </>
    );
}
