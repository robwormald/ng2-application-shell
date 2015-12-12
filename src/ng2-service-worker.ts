import 'reflect-metadata';
import {Injector, Injectable, provide} from 'angular2/src/core/di';

class SWLogger {
	log(...args: any[]) {
		console.log.apply(console, ['[service-worker]'].concat(args));
	}
}


const SW_EVENTS = {
	INSTALL: 'install',
	FETCH: 'fetch',
	ACTIVATE: 'activate'
}

class SWContext {
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
		this._logger.log('bootstrap')
	}

	onInstall(installEvent) {
		installEvent.waitUntil(this._onInstall());
	}

	private _onInstall() {
		return Promise.resolve('ready');
	}

	onActivate(activateEvent) {
		this._logger.log('activate', activateEvent);
	}
	onFetch(fetchEvent) {
		this._logger.log('fetch', fetchEvent.request.url);
	}
}



Injector
	.resolveAndCreate([
		SWLogger,
		provide(SWContext, { useValue: self }),
		NgServiceWorker, ])
	.get(NgServiceWorker)
	.bootstrap();