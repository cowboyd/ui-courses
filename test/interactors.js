import { createInteractor, App } from '@bigtest/interactor';
import { bigtestGlobals } from '@bigtest/globals';
import localforage from 'localforage';

export const Accordion = createInteractor('Accordion')({
  selector: 'section[class^=accordion]',
  defaultLocator: element => element.querySelector('[class^=labelArea]').textContent.trim(),
  actions: {
    toggle: element => element.querySelector('button').click(),
    select(element, value) {
      for (const option of element.querySelectorAll('[class^=optionSegment]')) {
        if (option.textContent.trim() === value) {
          option.click();
          return;
        }
      }
      const error = new Error(`no such option ${value}`);
      error.name = 'NoSuchElementError';
      throw error;
    }
  }
});

export const Card = createInteractor('Card')({
  selector: 'div[class^=card]',
  defaultLocator: element => element.querySelector('[class^=headerStart]').textContent.trim()
});

export const Input = createInteractor('Input')({
  selector: 'input',
  defaultLocator: (elem) => elem.name,
  locators: {
    byAriaLabel: element => element.ariaLabel
  },
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
  defaultLocator: element => element.ariaLabel || element.innerText.trim(),
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

export const Key = createInteractor('Key')({
  selector: '[class^=kvRoot]',
  defaultLocator: element => element.querySelector('[class^=kvLabel]').textContent.trim(),
  filters: {
    value: element => element.querySelector('[class^=kvValue]').textContent.trim()
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

export const Pane = createInteractor('Pane')({
  selector: 'section[class^=pane]',
  defaultLocator(element) {
    const title = element.querySelector('[class^=paneTitle]');
    return title ? title.textContent.trim() : '';
  },
  filters: {
    subtitle(element) {
      const subtitle = element.querySelector('[class^=paneSub]');
      return subtitle ? subtitle.textContent.trim() : '';
    }
  }
});

export const Table = createInteractor('table')({
  selector: '[class^=mclContainer]',
  locators: {
    byId: element => element.id
  },
  filters: {
    length: element => [...element.querySelectorAll('[class^=mclRow-]')].length
  }
});

export const TableCell = createInteractor('TableCell')({
  selector: '[role=gridcell]',
  actions: {
    click: element => element.click()
  }
});

export function Authenticate(username, password) {
  bigtestGlobals.defaultInteractorTimeout = 10000;
  return async () => {
    await localforage.removeItem('okapiSess');
    await App.visit('/');
    await Input('username').focus();
    await Input('username', { hasFocus: true }).type(username);
    await Input('password', { hasFocus: true }).type(password);
    await Button('Log in').click();
  };
}
