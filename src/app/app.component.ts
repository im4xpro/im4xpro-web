import { Component } from '@angular/core';
import lax from 'lax.js';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'im4xpro-web';
  titleword: string = "designe";
  titlewords = ["designe", "entwickle", "bestimme", "realisiere", "hol mir"];
  titlenum : number = 0;
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
this.changeText();
}

 openSkill(skill){
   this.skillreset();
  this.element = document.getElementById("skillstext");
  this.element.style.display = "block";
  this.activeSkill = skill;
  switch(skill){
    case "HTML": this.element = document.getElementById("text-html"); this.element.innerHTML = document.getElementById("htmlsrc").innerHTML;
    break;
    case "CSS": this.element = document.getElementById("text-css"); this.element.innerHTML = document.getElementById("csssrc").innerHTML;
    break;
    case "JAVASCRIPT": this.element = document.getElementById("text-js"); this.element.innerHTML = document.getElementById("jssrc").innerHTML;
    break;
    case "ANGULAR": this.element = document.getElementById("text-angular"); this.element.innerHTML = document.getElementById("angularsrc").innerHTML;
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
  this.element.innerHTML = "";
  this.element = document.getElementById("text-css");
  this.element.style.display = "none";
  this.element.innerHTML = "";
  this.element = document.getElementById("text-js");
  this.element.style.display = "none";
  this.element.innerHTML = "";
  this.element = document.getElementById("text-angular");
  this.element.style.display = "none";
  this.element.innerHTML = "";
}


changeText(){
this.titleword = this.titlewords[this.titlenum];
if(this.titlenum == 4){
  this.titlenum = 0;
}else{
  this.titlenum++;
}
}
}
