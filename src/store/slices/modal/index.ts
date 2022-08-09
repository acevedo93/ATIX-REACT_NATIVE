export * from './modalSlice';
export * from './thunks';

export enum CustomModals {
  signInError_userNotAllowed = 'signInError_userNotAllowed',
  signInError_userNotFound = 'signInError_userNotFound',
  signUpError_emailNotVerified = 'signUpError_emailNotVerified',
  signUpError_emailAlreadyExists = 'signUpError_emailAlreadyExists',
  signUpError_usernameAlreadyExists = 'signUpError_usernameAlreadyExists',

  signUpSuccess = 'signUpSuccess',
  error_serverError = 'error_serverError',
  genericModal = 'genericModal',
}
