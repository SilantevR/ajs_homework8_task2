export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Ошибка ввода'],
      [2, 'Ошибка доступа'],
      [3, 'Страница отсутствует'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    throw new Error('Unknown error');
  }
}
