import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import App from 'App'

function setup(jsx: React.ReactElement) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  }
}

describe('App test', () => {
  test('should render App', () => {
    render(<App />)

    expect(screen.getByText('Hello, dear fellow!')).toBeVisible()
  })
})
