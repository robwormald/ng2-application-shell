import {bootstrap} from 'angular2/platform/browser';
import {platform, provide} from 'angular2/core';
import {AuthService} from './services/Auth';
import {Backend, BackendConfig} from './services/Backend';
import {Nav} from './services/Nav';

const FIREBASE_URL = 'https://ng2-forum-demo.firebaseio.com';

import {App} from './app/app';

bootstrap(App,[AuthService, Backend, provide(BackendConfig, {useValue: {url: FIREBASE_URL }})]);

