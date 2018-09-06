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
    doesAnswerContainImage: boolean = false;
    doesQuestionContainImage: boolean = false;
    imgSrc: string = "assets/questions/imgs/"
    questionImgSrc: string = "assets/questions/imgs/"

    constructor(
        public viewCtrl: ViewController,
        public params: NavParams,
    ) {
        this.prompt = params.get('prompt')
        console.log("got the prompt", this.prompt)

        //Detect whether prompt contains image
        let index1 = this.prompt.answer.indexOf("[")
        let index2 = this.prompt.answer.indexOf("]")
        if (index1 > -1 && index2 > -1) {
            this.doesAnswerContainImage = true;
            this.imgSrc += this.prompt.answer.substring(index1+1, index2)
        }

        let index3 = this.prompt.question.indexOf("[")
        let index4 = this.prompt.question.indexOf("]")
        if (index3 > -1 && index4 > -1) {
            this.doesQuestionContainImage = true;
            this.questionImgSrc += this.prompt.question.substring(index3+1, index4)
            console.log("questionImgSrc", this.questionImgSrc)
            this.prompt.question = this.prompt.question.substring(0, index3)
        }


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
