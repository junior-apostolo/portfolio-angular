import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge',
      alt: 'Icone de conhecimento de html5'
    },
    {
      src: 'assets/icons/knowledge',
      alt: 'Icone de conhecimento de css'
    },
    {
      src: 'assets/icons/knowledge',
      alt: 'Icone de conhecimento de javascript'
    },
  ])
}
