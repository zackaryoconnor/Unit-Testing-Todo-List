import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'




test('Renders the todo app heading', () => {
  render(<App />)
  expect(screen.getByRole('heading')).toHaveTextContent('Todo App')
})


test('Renders the input field', () => {
  render(<App />)
  expect(screen.getByPlaceholderText('Add new todo')).toBeInTheDocument()
})


test('Renders the add button', () => {
  render(<App />)
  expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument()
})


test('Renders added todo items', () => {
  render(<App />)
  const input   = screen.getByPlaceholderText('Add new todo')
  const button  = screen.getByRole('button', { name: 'Add' } )
  
  fireEvent.change(input, { target: { value: 'Buy an apple pie!' } })
  fireEvent.click(button)

  expect(screen.getByText('Buy an apple pie!')).toBeInTheDocument()
})


