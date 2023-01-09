import { Button } from 'ui';
import { Menu } from 'ui';

const items = [
    { label: 'Item 1', onClick: () => console.log('Item 1 clicked') },
    { label: 'Item 2', onClick: () => console.log('Item 2 clicked') },
    { label: 'Item 3', onClick: () => console.log('Item 3 clicked') },
];

export function MenuExamples() {
    return (
        <>
            <Menu
                align="start"
                trigger={<Button color="secondary">Open Menu</Button>}
                items={items}
            />
        </>
    );
}
