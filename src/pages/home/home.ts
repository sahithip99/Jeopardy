import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { QuestionsProvider } from '../../providers/questions/questions';
import { Prompt } from '../../providers/questions/prompt';
import { QuestionModal } from '../../modals/question-modal/question-modal';
import { Location } from '@angular/common';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categories: string[] = []
  prices: string[] = []
  colors: string[] = ['#cfa4f3fa', 'red', 'green', 'orange', 'blue']
  shuffledPrompts: Prompt[][] = []
  


  constructor(
    public navCtrl: NavController,
    public questionsPvdr: QuestionsProvider,
    public modalCtrl: ModalController,
    public location:Location,
  ) {

    this.loadCategories();

    // this.prices = ['$100', '$200', '$300', '$400']
  

    //TODO: change prices back to $500 once we have more questions
    this.prices = ['$100', '$200', '$300', '$400', '$500']
    
  }

  loadCategories() {
    this.questionsPvdr.getCategories().then((categories: Array<string>) => {
      this.categories = categories;
      this.loadPrompts(this.categories).then(shuffled => {
        this.shuffledPrompts = shuffled;
        console.log('this.shuffledPrompts', this.shuffledPrompts)
      })
    })
  }
  refreshPage(){
      window.location.reload();


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

  goToModal(prompt: Prompt) {
    setTimeout(() => {
      let modal = this.modalCtrl.create(QuestionModal, {prompt: prompt}, {
        // enterAnimation: 'animated '
      })
      modal.present();
    }, 400)
  }

  // getPrompt(catIndex: number) {
  //   this.questionsPvdr.getAnswersAndQuestions(catIndex).then(arr => console.log('arr', arr))
  // }
}
