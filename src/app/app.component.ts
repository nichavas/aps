import { Component} from '@angular/core';
import {  Router,NavigationEnd } from '@angular/router';
import { Location } from "@angular/common";
import { ListItemsComponent } from './list-items/list-items.component';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent{
	typeSelectedValue: String;
	sortSelectedValue: String;
	currentUrl;
	currentClass;
	themBoxState = true;
	constructor(private router: Router)
	{
		router.events.subscribe(event => {
			if(event instanceof NavigationEnd) {
				this.currentUrl = this.router.url;
			}
		});

		this.currentClass ="theme-brown";;
	}

	changeColor(themeClass)
	{
		console.log(themeClass)
		this.currentClass=themeClass;
	}

}
