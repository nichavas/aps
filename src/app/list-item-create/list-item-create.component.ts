import { Component, OnInit } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import {MessengerService} from '.././messenger.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-list-item-create',
	templateUrl: './list-item-create.component.html',
	styleUrls: ['./list-item-create.component.scss']
})
export class ListItemCreateComponent implements OnInit {

	name;
	rank;
	typeOfData;
	constructor(private _messengerService: MessengerService, private router: Router ) { }

	ngOnInit(): void {
		if(!this._messengerService.listInitFlag)
		{
			//this._messengerService.listInitFlag =true;
			this.router.navigate(['']);
		}
	}

	sendForm()
	{
		if(this.name===undefined ||this.rank===undefined ||this.typeOfData===undefined)
		{
			alert("Formda boşluklar bulunmakta");
		}
		else
		{
			this._messengerService.sendData({id:null, title:this.name,rank:this.rank, type:this.typeOfData});
			alert("Kaydedildi, yönlendiriliyor.");

			let timeoutPromise = setTimeout(()=>
			{
				clearTimeout(timeoutPromise);
				this.router.navigate(['']);
			},3000);
		}
	}
}
