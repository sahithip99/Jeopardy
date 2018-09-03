import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Prompt } from '../../providers/questions/prompt';

@Component({
    templateUrl: 'question-modal.html',
    selector: 'question-modal'
})

export class QuestionModal {
    prompt: Prompt;

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
}

