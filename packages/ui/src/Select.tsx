import { cva, VariantProps } from 'class-variance-authority';

const selectStyles = cva('select w-full select-bordered', {
    variants: {
        size: {
            small: 'select-sm',
            medium: '',
            large: 'select-lg',
        },
        outlined: {
            true: 'select-bordered',
        },
        color: {
            primary: 'select-primary',
            info: 'select-info',
            success: 'select-success',
            warning: 'select-warning',
            error: 'select-error',
        },
    },
    defaultVariants: {},
});

export interface SelectProps extends VariantProps<typeof selectStyles> {
    options: Array<{
        value: string;
        label: string;
    }>;
    label?: string;
    labelPosition?: 'start' | 'end';
    disabled?: boolean;
}

export const Select = ({
    options,
    color,
    size,
    outlined,
    disabled,
    label,
    ...props
}: SelectProps) => {
    const labelColor = 'text-' + color;
    return (
        <div className={`${label ? 'form-control w-full' : ''}`}>
            <select
                disabled={disabled ?? false}
                {...props}
                className={selectStyles({ color, size, outlined })}
            >
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            {label && (
                <div className={`label items-end`}>
                    <label className={`text-xs ${labelColor}`}>{label}</label>
                </div>
            )}
        </div>
    );
};
