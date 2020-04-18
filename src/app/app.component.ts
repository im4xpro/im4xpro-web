import { Component } from '@angular/core';
import lax from 'lax.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'im4xpro-web';
  titleword: string = "design";
  element : any;
  activeSkill : any;
ngOnInit(){
  window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}

}

openSkill(){
  

}

closeSkill(){
  this.element = document.getElementById("skillstext");
  this.element.style.display = "none";
  this.activeSkill = "";
}
}
