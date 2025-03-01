import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './HomePage';

/**
 * getBy - Должен обязательно найти какой-то элемент.
 * Если элемент не находится, то пробрасывается ошибка и тест падает.
 * queryBy - Не выбрасывает ошибку, если элемент не находится,
 * то есть этот селектор можно использовать для доказательства
 * отсутствия элемента на странице.
 * findBy - В отличии от get возвращает не сам объект, а Promise<T[]>,
 * то есть используется для работы с ассинхронным кодом. 
 */

/**
 * fireEvent - is used to simulate onClick, onChange, onInput.
 * fireEvent.input(inputElem, {
 * 	target: { value: '123' },
 * });
 * expect(screen.getByTestId('value-elem')).toContainHtml('123');
 * 
 * Также есть модуль userEvent - воспроизводит действия пользователя
 * userEvent.type(input, '123');
 */

describe('react component test', () => {
	test('Renders Vite + React header', () => {
		render(<HomePage />);
		const headerElement = screen.getByText(/vite \+ react/i);
		expect(headerElement).toBeInTheDocument();
	});

	test('Renders button and link', () => {
		render(<HomePage />);
		const button = screen.getByRole('button');
		const links = screen.getAllByRole('link');
		expect(button).toBeInTheDocument();
		screen.debug();
		expect(links).toHaveLength(2);
		// expect(button).toMatchSnapshot();
	});

	test("Displays data test in 100 ms after render", async () => {
		render(<HomePage />);
		screen.debug();
		const dataElem = await screen.findByText(/data/i);
		screen.debug();
		expect(dataElem).toBeInTheDocument();
	});

	test("Click on the btn increments counter by 1", () => {
		render(<HomePage />);
		const button = screen.getByRole('button');
		fireEvent.click(button);
		expect(button).toHaveTextContent("count is 1");
		fireEvent.click(button);
		expect(button).toHaveTextContent("count is 2");
	});
});

