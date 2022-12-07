/* eslint-disable @next/next/no-img-element */
import { cva, VariantProps } from 'class-variance-authority';

const avatarStyles = cva('bg-base-200 uppercase', {
    variants: {
        offline: {
            true: 'offline',
        },
        online: {
            true: 'online',
        },
        shape: {
            circle: 'rounded-full',
            square: 'rounded',
            triangle: 'mask-triangle',
            hexagon: 'mask-hexagon',
        },
        size: {
            xsmall: 'w-10 h-10',
            small: 'w-14 h-14',
            medium: 'w-20 h-20',
            large: 'w-24 h-24',
        },
    },
    defaultVariants: {
        shape: 'circle',
        size: 'small',
        offline: false,
        online: false,
    },
});

export interface AvatarProps extends VariantProps<typeof avatarStyles> {
    img?: string;
    placeholder?: string;
}

export const Avatar = ({
    placeholder,
    offline,
    online,
    shape,
    size,
    img,
    ...props
}: AvatarProps) => {
    const isOnline = online ? 'online' : undefined;
    const isOffline = offline ? 'offline' : undefined;
    return (
        <div className={`avatar placeholder ${isOnline} ${isOffline}`}>
            <div {...props} className={avatarStyles({ shape, size })}>
                {placeholder && <span>{placeholder}</span>}
                {img && <img src={img as string} alt="" />}
            </div>
        </div>
    );
};
