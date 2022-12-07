import { cva, VariantProps } from 'class-variance-authority';
import { Button } from './Button';

const modalStyles = cva('select w-full select-bordered', {
    variants: {},
    defaultVariants: {},
});

export interface ModalProps extends VariantProps<typeof modalStyles> {
    id: string;
    children: React.ReactNode;
    triggerText?: string;
    triggerIcon?: React.ReactNode;
    submit?: (data: any) => void | Promise<void>;
    submitText?: string;
    submitColor?: 'primary' | 'info' | 'success' | 'warning' | 'error';
}

export const Modal = ({
    id,
    children,
    submit,
    submitColor,
    submitText,
    triggerText,
    triggerIcon,
}: ModalProps) => {
    return (
        <>
            <label
                htmlFor={id}
                className={`m-0 hover:bg-transparent btn btn-active btn-ghost h-fit w-fit ${
                    triggerIcon ? 'rounded-full' : ''.trim()
                }`}
            >
                {triggerIcon ? triggerIcon : triggerText ? triggerText : 'Open'}
            </label>
            <input type="checkbox" id={id} className="modal-toggle" />
            <label htmlFor={id} className="cursor-pointer modal">
                <label className="relative modal-box" htmlFor="">
                    {children}
                    {submit && (
                        <div className="modal-action">
                            <Button onClick={submit} color={submitColor ?? 'primary'}>
                                {submitText ?? 'submit'}
                            </Button>
                        </div>
                    )}
                </label>
            </label>
        </>
    );
};
