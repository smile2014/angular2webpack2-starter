import './polyfills.browser.aot';
import './rxjs.imports';

import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './compiled/app/app.module.ngfactory';

if ('production' === ENV) {
  enableProdMode();
}

export function main() {
  platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
    .catch(err => console.log(err));
}

export function bootstrapDomReady() {
  document.addEventListener('DOMContentLoaded', main);
}

bootstrapDomReady();
