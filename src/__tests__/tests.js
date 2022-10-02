import ErrorRepository from '../js/ErrorRepository';

describe('Класс ErrorRepository', () => {
  const repository = new ErrorRepository();

  test('Определён', () => {
    expect(ErrorRepository).toBeDefined();
  });
  test('Создаёт экземпляр класса Error Repository с нужными параметрами', () => {
    expect(repository).toBeInstanceOf(ErrorRepository);
    expect(Array.from(repository.errors)).toEqual([
      [1, 'Ошибка ввода'],
      [2, 'Ошибка доступа'],
      [3, 'Страница отсутствует'],
    ]);
  });
  test('работает метод translate(code) у экземпляра класса ErrorRepository', () => {
    expect(repository.translate(2)).toBe('Ошибка доступа');
  });
  test('Выдает ошибку translate(code)', () => {
    function errorTranslate() {
      repository.translate(5);
    }
    expect(errorTranslate).toThrowError(new Error('Unknown error'));
  });
});
