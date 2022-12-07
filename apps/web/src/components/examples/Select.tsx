import { Select } from 'ui';

const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4' },
    { value: '5', label: 'Option 5' },
];

export function SelectExamples() {
    return (
        <>
            <h3 className="font-medium">Sizes:</h3>
            <div className="flex flex-col w-full gap-4 mb-8">
                <div>
                    large:
                    <Select size="large" options={options} />
                </div>
                <div>
                    medium (default):
                    <Select options={options} />
                </div>
                <div>
                    small:
                    <Select size="small" options={options} />
                </div>
            </div>
        </>
    );
}

export function SelectWithLabel() {
    return (
        <>
            With Label:
            <Select
                options={options}
                label="must be a valid email address"
                color="error"
            />
        </>
    );
}

export function SelectColors() {
    return (
        <>
            <h3 className="font-medium">Colors:</h3>
            <Select
                color="primary"
                options={[{ value: 'error', label: 'Primary Select' }, ...options]}
            />
            <br />
            <Select
                color="info"
                options={[{ value: 'info', label: 'Info Select' }, ...options]}
            />
            <br />
            <Select
                color="success"
                options={[{ value: 'success', label: 'Success Select' }, ...options]}
            />
            <br />
            <Select
                color="error"
                options={[{ value: 'error', label: 'Error Select' }, ...options]}
            />
            <br />
            <Select
                color="warning"
                options={[{ value: 'Warning', label: 'Warning Select' }, ...options]}
            />
        </>
    );
}
