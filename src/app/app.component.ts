import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  userSkills: SkillsKeyPair[] = [];

  ngOnInit() {
    this.userSkills.push(new SkillsKeyPair('JS', true));
    this.userSkills.push(new SkillsKeyPair('CSS', false));
  }
}

class SkillsKeyPair {
  name: string;
  value: boolean;
  constructor(n: string, v: boolean) {
    this.name = n;
    this.value = v;
  }
}
