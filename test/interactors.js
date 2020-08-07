import { createInteractor, App } from "@bigtest/interactor";
import { bigtestGlobals } from "@bigtest/globals";

import localForage from 'localforage';

export const Input = createInteractor('Input')({
  selector: 'input',
  defaultLocator: (elem) => elem.name,
  actions: {
    type: (elem, val) => {
      let evt = new FocusEvent('focus');
      elem.dispatchEvent(evt);
      const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      setter.call(elem, val);
      evt = new Event('input', { bubbles: true });
      elem.dispatchEvent(evt);
    },
    focus: (elem) => elem.focus()
  }
});

export const Button = createInteractor('Button')({
  selector: "button, a[role='button']",
  defaultLocator: element => element.arialLabel || element.innerText.trim(),
  filters: {
    enabled: {
      apply: (element) => !element.disabled,
      default: true
    },
    value: (element) => element.value
  },
  actions: {
    click: (elem) => elem.click(),
    focus: (elem) => elem.focus()
  }
});

export const NavButton = createInteractor('Navigation Item')({
  selector: 'li a',
  defaultLocator: element => element.ariaLabel,
  actions: {
    click: element => element.click()
  }
});

export const Heading = createInteractor('Heading')({
  selector: 'h1, h2, h3, h4, h5, h6',
  defaultLocator: (elem) => elem.innerText.trim(),
  actions: {
    click: (elem) => elem.click()
  }
});

export function Authenticate(username, password) {
  bigtestGlobals.defaultInteractorTimeout = 10000;
  return async () => {
    await localForage.removeItem('okapiSess');
    await App.visit('/');
    await Input('username').focus();
    await Input('username', { hasFocus: true }).type(username);
    await Input('password', { hasFocus: true }).type(password);
    await Button('Log in').click();
  };
}
