import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionsProvider } from '../../providers/questions/questions';
import { Prompt } from '../../providers/questions/prompt';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categories: string[] = []
  prices: string[] = []


  constructor(
    public navCtrl: NavController,
    public questionsPvdr: QuestionsProvider
  ) {

    this.loadCategories();
    this.prices = ['$100', '$200', '$300', '$400', '$500']
  }

  loadCategories() {
    this.questionsPvdr.getCategories().then((categories: Array<string>) => {
      this.categories = categories;
      this.loadPrompts(this.categories).then(shuffled => {
        console.log('shuffled', shuffled)
      })
    })
  }

  async loadPrompts(categories: Array<string>): Promise<Prompt[][]> {
    let prompts: Prompt[][] = []

    for (let i = 0; i < categories.length; i++) {
      let arr: Array<Prompt> = []
      await this.questionsPvdr.getAnswersAndQuestions(categories, i)
        .then((unshuffled: Array<Prompt>) => {
          let shuffled = this.questionsPvdr.shuffleArray(unshuffled)
          prompts.push(shuffled)
        })
      
    }

    return prompts

  
  }

  // getPrompt(catIndex: number) {
  //   this.questionsPvdr.getAnswersAndQuestions(catIndex).then(arr => console.log('arr', arr))
  // }
}
