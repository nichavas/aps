import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class MessengerService 
{
	listInitFlag = false;
	private _movieListSource = new Subject<object>();
	movieListMessage$ = this._movieListSource.asObservable();
  	constructor() { }

  	sendData(data: object)
  	{
  		this._movieListSource.next(data);
  	}
}
