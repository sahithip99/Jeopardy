import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Prompt } from "./prompt";
/*
  Generated class for the QuestionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuestionsProvider {


  constructor(public http: HttpClient) {
    console.log('Hello QuestionsProvider Provider');

  }

  loadFile(filePath: string): Observable<any> {
    return this.http.get(filePath)
  }

  loadQuestions() {
    let filePath = 'assets/questions/questions.json'
    return this.loadFile(filePath)
  }

  getCategories(): Promise<Array<string>> {
    return this.loadQuestions()
      .toPromise()
      .then(data => {
        let categories = Object.keys(data[0])
        return categories
      })
  }


  /**
   * 
   * @param index 0 to 4, corresponds to what category you want them to be in
   */
  getAnswersAndQuestions(cats: Array<string>, index: number): Promise<Array<Prompt>> {
    let arr = []
    let getData = this.loadQuestions().toPromise()

    let getPrompts = getData.then(data => {
     
      //Get the category at the index
      let category = cats[index] 
      console.log('category', category)

      //Loop through data to get the right prompts
      for (let i = 0; i<data.length;i++) {
        let prompts = data[i]
        let prompt = prompts[category]
        if (prompt && prompt.indexOf("A:") > -1 && prompt.indexOf("Q:") > -1) {
          let parsedPrompt = this.parseAnswersAndQuestions(prompt)
          arr.push(parsedPrompt)

        }
        // console.log('prompt', prompt)
      }
      return arr
      
    })
    return getPrompts
  }

  parseAnswersAndQuestions(prompt: string): Prompt {
    let answerIndex = prompt.indexOf("A:")
    let questionIndex = prompt.indexOf("Q:")
    let answer = ""
    let question = ""
    if (answerIndex > questionIndex) {
      //Answer comes after
      question = prompt.substring(questionIndex, answerIndex);
      answer = prompt.substring(answerIndex)

    }
    else {
      question = prompt.substring(questionIndex)
      answer = prompt.substring(answerIndex, questionIndex);
    }
    let parsedPrompt = new Prompt(answer, question)
    return parsedPrompt
  }

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  

  

}

