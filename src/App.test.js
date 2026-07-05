import { render, screen } from '@testing-library/react';
import Cookies from 'js-cookie';
import App from './App';

beforeEach(() => {
  Cookies.remove('jwt_token');
  global.fetch = jest.fn();
});

test('redirects unauthenticated users away from home without calling the API', () => {
  render(<App />);

  expect(screen.getByText(/sign in to open your referral dashboard/i)).toBeInTheDocument();
  expect(global.fetch).not.toHaveBeenCalled();
});
