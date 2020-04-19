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
  activeSkill : string;

constructur(){ }


ngOnInit(){

  // Lax
  window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}

}

 openSkill(skill){
   this.skillreset();
  this.element = document.getElementById("skillstext");
  this.element.style.display = "block";
  this.activeSkill = skill;
  switch(skill){
    case "HTML": this.element = document.getElementById("text-html");
    break;
    case "CSS": this.element = document.getElementById("text-css");
    break;
    case "JAVASCRIPT": this.element = document.getElementById("text-js");
    break;
    case "ANGULAR": this.element = document.getElementById("text-angular");
    break;
  }
  this.element.style.display = "block";

}

closeSkill(){
  this.element = document.getElementById("skillstext");
  this.element.style.display = "none";
  this.activeSkill = "";
}

skillreset(){
  this.element = document.getElementById("text-html");
  this.element.style.display = "none";
  this.element = document.getElementById("text-css");
  this.element.style.display = "none";
  this.element = document.getElementById("text-js");
  this.element.style.display = "none";
  this.element = document.getElementById("text-angular");
  this.element.style.display = "none";
}
}
