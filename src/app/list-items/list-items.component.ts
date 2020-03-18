import {HttpClient} from '@angular/common/http';
import {Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

import {MessengerService} from '.././messenger.service';
export interface MoviesInterface {
	id: number;
	title: string;
	rank: number;
    type:string;
}

const MOVIES_DATA:MoviesInterface[] = [
    {id :1, title: 'The Shawshank Redemption',rank: 1, type:"movie"},
    {id:2, title: 'The Godfather',rank: 2, type:"movie"},
    {id:3, title: 'The Godfather: Part II',rank: 3, type:"movie"},
    {id:4, title: 'Pulp Fiction',rank: 4, type:"movie"},
    {id:5, title: 'The Good, the Bad and the Ugly',rank: 5, type:"movie"},
    {id:6, title: 'The Dark Knight',rank: 6, type:"movie"},
    {id:7, title: '12 Angry Men',rank: 7, type:"movie"},
    {id:8, title: 'Schindlers List',rank: 8, type:"movie"},
    {id:9, title: 'The Lord of the Rings: The Return of the King',rank: 9, type:"movie"},
    {id: 10, title: 'Fight Club',rank: 10, type:"tvseries"},
    {id: 11, title: 'Star Wars: Episode V - The Empire Strikes Back',rank: 11, type:"tvseries"},
    {id: 12, title: 'The Lord of the Rings: The Fellowship of the Ring',rank: 12, type:"tvseries"},
    {id: 13, title: 'One Flew Over the Cuckoos Nest',rank: 13, type:"tvseries"},
    {id: 14, title: 'Inception',rank: 14, type:"tvseries"},
    {id: 15, title: 'Goodfellas',rank: 15, type:"tvseries"},
    {id: 16, title: 'Star Wars',rank: 16, type:"tvseries"},
    {id: 17, title: 'Seven Samurai',rank: 17, type:"tvseries"},
    {id: 18, title: 'Forrest Gump',rank: 18, type:"tvseries"},
    {id: 19, title: 'The Matrix',rank: 19, type:"tvseries"},
    {id: 20, title: 'The Lord of the Rings: The Two Towers',rank: 20, type:"tvseries"},
    {id: 21, title: 'City of God',rank: 21, type:"tvseries"},
    {id: 22, title: 'Se7en',rank: 22, type:"tvseries"},
    {id: 23, title: 'The Silence of the Lambs',rank: 23, type:"tvseries"},
    {id: 24, title: 'Once Upon a Time in the West',rank: 24, type:"tvseries"},
    {id: 25, title: 'Casablanca',rank: 25, type:"tvseries"},
    {id: 26, title: 'The Usual Suspects',rank: 26, type:"tvseries"},
    {id: 27, title: 'Raiders of the Lost Ark',rank: 27, type:"movie"},
    {id: 28, title: 'Rear Window',rank: 28, type:"movie"},
    {id: 29, title: 'Its a Wonderful Life',rank: 29, type:"movie"},
    {id: 30, title: 'Psycho',rank: 30, type:"movie"},
    {id: 31, title: 'Léon: The Professional',rank: 31, type:"movie"},
    {id: 32, title: 'Sunset Blvd.',rank: 32, type:"movie"},
    {id: 33, title: 'American History X',rank: 33, type:"movie"},
    {id: 34, title: 'Apocalypse Now',rank: 34, type:"movie"},
    {id: 35, title: 'Terminator 2: Judgment Day',rank: 35, type:"movie"},
    {id: 36, title: 'Saving Private Ryan',rank: 36, type:"movie"},
    {id: 37, title: 'Memento',rank: 37, type:"movie"},
    {id: 38, title: 'City Lights',rank: 38, type:"movie"},
    {id: 39, title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',rank: 39, type:"movie"},
    {id: 40, title: 'Alien',rank: 40, type:"movie"},
    {id: 41, title: 'Modern Times',rank: 41, type:"movie"},
    {id: 42, title: 'Spirited Away',rank: 42, type:"movie"},
    {id: 43, title: 'North by Northwest',rank: 43, type:"movie"},
    {id: 44, title: 'Back to the Future',rank: 44, type:"movie"},
    {id: 45, title: 'Life Is Beautiful',rank: 45, type:"movie"},
    {id: 46, title: 'The Shining',rank: 46, type:"movie"},
    {id: 47, title: 'The Pianist',rank: 47, type:"movie"},
    {id: 48, title: 'Citizen Kane',rank: 48, type:"movie"},
    {id: 49, title: 'The Departed',rank: 49, type:"movie"},
    {id: 50, title: 'M',rank: 50, type:"tvseries"}
];

/**
* @title Basic use of `<table mat-table>`
*/
@Component({
	selector: 'app-list-items',
	templateUrl: './list-items.component.html',
	styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit,AfterViewInit
{
	displayedColumns: string[] = ['title', 'rank', 'buttons'];
	@ViewChild(MatPaginator) paginator: MatPaginator;
	public dataSource;


    constructor(private _messengerService:MessengerService){}

	ngOnInit(){
		this.dataSource = new MatTableDataSource(MOVIES_DATA);

        if(!this._messengerService.listInitFlag)
        {
            this._messengerService.listInitFlag=true;
            this._messengerService.movieListMessage$.subscribe(data=>{
                data["id"] = (new Date()).getTime();
                this.dataSource.data.unshift(data);
                //push kullanabilirdim liste sonuna gitmesin diye unshift yaptım.
            });            
        }

	}
    ngAfterViewInit() {
         this.dataSource.paginator = this.paginator;
    }


	OnClickRankUp(id)
	{
       let index = this.findWithAttr(this.dataSource.data,"id", id)
       if(index!=-1)
       {
            this.dataSource.data[index].rank=parseInt(this.dataSource.data[index].rank)+1;
       }
	}

	OnClickRankDown(id)
	{
       let index = this.findWithAttr(this.dataSource.data,"id", id)
       if(index!=-1)
       {
            if(this.dataSource.data[index].rank > 1)
            {
                this.dataSource.data[index].rank=parseInt(this.dataSource.data[index].rank)-1;
            }
       }
	}


    OnClickRemove(id)
    {
       let index = this.findWithAttr(this.dataSource.data,"id", id)
       console.log(index);
       if(index!=-1)
       {
            this.dataSource.data.splice(index,1);
            this.dataSource.data = this.dataSource.data;
       }
    }

    findWithAttr(array, attr, value) {
        for(var i = 0; i < array.length; i += 1) {
            if(array[i][attr] === value) {
                return i;
            }
        }
        return -1;
    }

}
