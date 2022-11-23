export class ApiError extends Error {
  status: number;
  type: string;
  code: string;
  property: string;
  message: string;

  constructor(status: number, message: string, code?: string, type?: string, property?: string) {
    super(message);
    this.code = code;
    this.status = status;
    this.type = type;
    this.property = property;

  }
}
