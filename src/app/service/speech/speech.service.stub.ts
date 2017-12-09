import { Observable } from "rxjs/Observable";

export class SpeechServiceStub {
    recognize(): Observable<string> {
        return Observable.of('Next');
    }
}