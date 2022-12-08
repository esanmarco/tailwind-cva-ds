import { cva, VariantProps } from 'class-variance-authority';

const inputStyles = cva('input input-bordered w-full', {
    variants: {
        size: {
            small: 'input-sm',
            medium: '',
            large: 'input-lg',
        },
        color: {
            info: 'input-info',
            success: 'input-success',
            warning: 'input-warning',
            error: 'input-error',
        },
    },
    defaultVariants: {
        size: 'medium',
    },
});

export interface InputProps extends VariantProps<typeof inputStyles> {
    placeholder?: string;
    type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
    value?: string | number;
    defaultValue?: string | number;
    helperText?: string;
}

export const Input = ({
    type,
    placeholder,
    value,
    defaultValue,
    helperText,
    color,
    size,
    ...props
}: InputProps) => {
    return (
        <div>
            <input
                {...(props as any)}
                type={type}
                placeholder={placeholder}
                className={inputStyles({ color, size })}
                value={value}
                defaultValue={defaultValue}
            />
            {helperText && (
                <label className="label" style={{ color: 'currentcolor' }}>
                    <span className="label-text-alt">{helperText}</span>
                </label>
            )}
        </div>
    );
};
