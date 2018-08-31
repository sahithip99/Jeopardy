import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QuestionsProvider} from '../providers/questions/questions';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    questionsPvdr: QuestionsProvider,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    questionsPvdr.loadQuestions().subscribe(cats => console.log('cats', cats))
    // questionsPvdr.getAnswersAndQuestions(3).then(ans => {
    //   console.log('ans', ans)
    //   let firstPrompt = ans[0]
    //   let parsed = questionsPvdr.parseAnswersAndQuestions(firstPrompt);
    //   console.log(parsed)
    // })

  }


}

