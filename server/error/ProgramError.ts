class ProgramError extends Error {
  message: string;

  constructor(message: string) {
    super();
    this.message = message;
  }

  static objectUndefined(objectName: string) {
    return new ProgramError(`Объект ${objectName} имеет тип undefined`);
  }
}

export { ProgramError };
