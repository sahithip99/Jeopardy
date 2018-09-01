export class Prompt {
    question: string = ""
    answer: string = ""
    constructor(answer: string, question: string) {
      this.question = question
      this.answer = answer
    }
  }