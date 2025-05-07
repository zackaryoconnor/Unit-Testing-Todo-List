import { React, useState } from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'



test('Renders the todo app header', () => {
  const app = render(<App />)
  const heading = app.getByRole('heading')
  expect(heading).toHaveTextContent('Todo App')
})