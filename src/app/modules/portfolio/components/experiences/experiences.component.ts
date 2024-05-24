import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperience[]>([
    {
      summary: {
        strong: "",
        p: ""
      },
      text: ''
    },
    {
      summary: {
        strong: "",
        p: ""
      },
      text: ''
    },
    {
      summary: {
        strong: "",
        p: ""
      },
      text: ''
    },
  ])
}
