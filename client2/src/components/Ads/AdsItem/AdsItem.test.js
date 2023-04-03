import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { AdsItem } from './AdsItem';
import { BrowserRouter } from 'react-router-dom';

describe('Ads Item Component', () => {
    test('Show title', () => {
        const title = 'Test Title';

        render(
            <BrowserRouter>
                <AdsItem _id={'id'} title={title} />
            </BrowserRouter>
        );

        expect(screen.getByText(title)).toBeInTheDocument()
    });

    test('Click on details', async () => {
        global.window = { location: { pathname: null } };
        const itemId = 'id';

        render(
            <BrowserRouter>
                <AdsItem _id={itemId} />
            </BrowserRouter>
        );

        await userEvent.click(screen.queryByText('Details'));

        expect(global.window.location.pathname).toContain(`/ads/${itemId}`);
    });

});