/* eslint-disable react/no-unescaped-entities */
import { Modal } from 'ui';

export function ModalExample() {
    return (
        <Modal
            id="modal-example"
            submit={() => console.log('submitted')}
            submitColor="info"
            triggerIcon={
                <>
                    <span className="mr-3">Open Modal</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
                        />
                    </svg>
                </>
            }
        >
            <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
            <p className="py-4">
                You've been selected for a chance to get one year of subscription to use
                Wikipedia for free!
            </p>
        </Modal>
    );
}
