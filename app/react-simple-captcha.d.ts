declare module "react-simple-captcha" {
    export function loadCaptchaEnginge(size: number): void;
    export function LoadCanvasTemplate(): JSX.Element;
    export function validateCaptcha(userInput: string): boolean;
  }