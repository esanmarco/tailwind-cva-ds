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
            <div className="flex flex-col w-full gap-6">
                <Select
                    size="large"
                    options={[{ value: '', label: 'Large Select' }, ...options]}
                />
                <Select
                    options={[
                        { value: '', label: 'Medium Select (default)' },
                        ...options,
                    ]}
                />
                <Select
                    size="small"
                    options={[{ value: '', label: 'Small Select' }, ...options]}
                />
                <Select
                    options={[{ value: '', label: 'Helper Text Select' }, ...options]}
                    label="must be a valid email address"
                    color="error"
                />
            </div>
        </>
    );
}

export function SelectColors() {
    return (
        <>
            <h3 className="font-medium">Colors:</h3>
            <div className="flex flex-col gap-4">
                <Select
                    options={[{ value: 'error', label: 'Default Color' }, ...options]}
                />
                <Select
                    color="info"
                    options={[{ value: 'info', label: 'Info Color' }, ...options]}
                />
                <Select
                    color="success"
                    options={[{ value: 'success', label: 'Success Color' }, ...options]}
                />
                <Select
                    color="error"
                    options={[{ value: 'error', label: 'Error Color' }, ...options]}
                />
                <Select
                    color="warning"
                    options={[{ value: 'Warning', label: 'Warning Color' }, ...options]}
                />
            </div>
        </>
    );
}
