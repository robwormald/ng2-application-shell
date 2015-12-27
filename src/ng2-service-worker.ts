import 'reflect-metadata';
import {Injector, Injectable, provide} from 'angular2/src/core/di';

class SWLogger {
	log(...args: any[]) {
		console.log(...['[service-worker]', ...args]);
	}
}


const SW_EVENTS = {
	INSTALL: 'install',
	FETCH: 'fetch',
	ACTIVATE: 'activate'
}

abstract class SWContext {
	addEventListener(event, handler) { }
}


@Injectable()
class NgServiceWorker {
	constructor(serviceWorkerContext: SWContext, private _logger: SWLogger) {
		serviceWorkerContext.addEventListener(SW_EVENTS.ACTIVATE, (ev) => this.onActivate(ev));
		serviceWorkerContext.addEventListener(SW_EVENTS.INSTALL, (ev) => this.onInstall(ev));
		serviceWorkerContext.addEventListener(SW_EVENTS.FETCH, (ev) => this.onFetch(ev));
	}

	bootstrap() {
		this._logger.log('bootstrap');
	}

	onInstall(installEvent) {
		installEvent.waitUntil(this._onInstall());
	}

	onActivate(activateEvent) {
		this._logger.log('activate', activateEvent);
	}
	
	onFetch(fetchEvent) {
		this._logger.log('fetch', fetchEvent.request.url);
	}
	
	private _onInstall() {
		return Promise.resolve('ready');
	}
}


const SW_PROVIDERS = [
	SWLogger,
	provide(SWContext, { useValue: self }),
  NgServiceWorker,
];

Injector
	.resolveAndCreate(SW_PROVIDERS)
	.get(NgServiceWorker)
	.bootstrap();
