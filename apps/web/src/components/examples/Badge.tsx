import { Badge } from 'ui';

export function BadgeColors() {
    return (
        <>
            <h3 className="font-medium">Colors:</h3>
            <div className="flex flex-row gap-4 mb-4 flex-wrap">
                <Badge>Primary</Badge>
                <Badge color="secondary">Secondary</Badge>
                <Badge color="accent">Accent</Badge>
                <Badge color="ghost">Ghost</Badge>
                <Badge outlined={true}>Outlined</Badge>
            </div>
        </>
    );
}

export function BadgeSizes() {
    return (
        <>
            <h3 className="font-medium">Sizes:</h3>
            <div className="flex flex-row items-end gap-3 p-0 mb-4 w-fit">
                <Badge size="large">Large</Badge>
                <Badge size="medium">Medium</Badge>
                <Badge size="small">Small</Badge>
            </div>
        </>
    );
}
