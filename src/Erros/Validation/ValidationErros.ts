export class CustomError extends Error {
    constructor(title: string) {
      super(title);
      this.name = this.constructor.name;
    }
  }
  
  export class EmailValidationError extends CustomError {
    constructor(title: string = "Email already exists") {
      super(title);
    }
  }
  
  export class PasswordValidationError extends CustomError {
    constructor(title: string = "Password already exists") {
      super(title);
    }
  }
  
  export class UserAlreadyExistsError extends CustomError {
    constructor(title: string = "User already exists") {
      super(title);
    }
  }
  
  export class DiligenceAlreadyExistsError extends CustomError {
    constructor(title: string = "Already was created a diligence with this N° Proccess") {
      super(title);
    }
  }
  
  export class LoginCreatedWithSuccess extends CustomError {
    constructor(title: string = "Login created with success") {
      super(title);
    }
  }
  