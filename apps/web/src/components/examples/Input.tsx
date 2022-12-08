import { Input } from 'ui';

export function InputSizeExamples() {
    return (
        <>
            <h3 className="font-medium">Sizes:</h3>
            <div className="flex flex-col w-full gap-6">
                <Input size="large" placeholder="Large Input" />
                <Input placeholder="Medium Input (default)" />
                <Input size="small" placeholder="Small Input" />
                <Input
                    color="error"
                    helperText="You must enter a value"
                    placeholder="Input w/helper text"
                />
            </div>
        </>
    );
}

export function InputColorExamples() {
    return (
        <>
            <h3 className="font-medium">Colors:</h3>
            <div className="flex flex-col gap-4">
                <Input placeholder="Default Color" />
                <Input color="info" placeholder="Info Color" />
                <Input color="success" placeholder="Success Color" />
                <Input color="warning" placeholder="Warning Color" />
                <Input color="error" placeholder="Error Color" />
            </div>
        </>
    );
}
