import { Component ,OnInit, EventEmitter, Output} from '@angular/core';


@Component({
	selector : 'app-header',
	templateUrl : 'header.component.html'
})

export class HeaderComponent implements OnInit{

	ngOnInit(){

	}
	@output() featureSelected = new EventEmitter<string>();
	onSelect(feature: string){
		alert(feature);
		this.featureSelected.emit(feature);
	}
}