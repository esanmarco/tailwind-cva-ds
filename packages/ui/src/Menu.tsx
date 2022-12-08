import { cva, VariantProps } from 'class-variance-authority';

interface Items {
    label: string;
    onClick: (data: any) => void;
}

const menuStyles = cva('dropdown', {
    variants: {
        align: {
            start: 'dropdown-start',
            end: 'dropdown-end',
        },
    },
    defaultVariants: {
        align: 'end',
    },
});

export interface menuProps extends VariantProps<typeof menuStyles> {
    items: Array<{
        label: string;
        onClick: (data: any) => void;
    }>;
    trigger: React.ReactDOM;
}

export const Menu = ({ items, trigger, ...props }: menuProps) => {
    return (
        <div className={menuStyles({})} {...props}>
            <label tabIndex={0}>{trigger}</label>
            <ul
                tabIndex={0}
                className="w-full p-0 m-1 shadow dropdown-content menu rounded-box bg-base-100 w-52"
            >
                {items.map((i: Items, index: number) => (
                    <li
                        className="px-4 w-52 py-2 m-0 cursor-pointer hover:bg-base-200/[0.5]"
                        onClick={i.onClick}
                        key={`item-${index}`}
                    >
                        {i.label}
                    </li>
                    // <p>test</p>
                ))}
            </ul>
        </div>
    );
};
