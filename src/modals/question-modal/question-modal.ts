import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Prompt } from '../../providers/questions/prompt';

@Component({
    templateUrl: 'question-modal.html',
    selector: 'question-modal'
})

export class QuestionModal {
    prompt: Prompt;
    answer_class: string = "";
    question_class: string = "hidden"
    answered: boolean = false

    constructor(
        public viewCtrl: ViewController,
        public params: NavParams,
    ) {
        this.prompt = params.get('prompt')
        console.log("got the prompt", this.prompt)

    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    toggleExit() {
        this.answer_class = 'animated bounceOutLeft'
        this.question_class = 'animated bounceInRight'
        setTimeout(() => {
            this.answered = true;
        }, 500)
    }
} 
