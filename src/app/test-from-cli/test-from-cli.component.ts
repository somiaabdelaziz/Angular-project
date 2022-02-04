import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-test-from-cli',
  templateUrl: './test-from-cli.component.html',
  styleUrls: ['./test-from-cli.component.css']
})
export class TestFromCliComponent implements AfterViewInit {
  personName = 'john Doe';
  title = 'test from cli';
  imgScr = 'assets/img/pin.png';
  class = 'new_class';
  number = 3;
  showpassword = false;
  // @ViewChild('inputEl') testvar !: ElementRef;
  //  ngAfterViewInit(): void {
  //   console.log((this.testvarArray.nativeElement as HTMLInputElement).value)
  // }

  @ViewChildren('inputEl') testvarArray !: QueryList<ElementRef>;
  ngAfterViewInit(): void {
    console.log(this.testvarArray)
      
    this.testvarArray.forEach((el) => {
      const elem = el.nativeElement as HTMLInputElement;
      console.log((elem).value);
      elem.classList.add('inp')
    })
  }

  constructor() {
    setInterval((): void => { this.personName = this.personName + '1', this.title = this.title + 't' }
      , 1000)
  }
  testButton(x: HTMLInputElement) {
    console.log(x)
  }


  ngOnInit(): void {
    const mypromise = new Promise((resolve, reject) => {
      
      const x = 5, y = 6;
      if (x + y > 5) {
        console.log('yup')
        resolve('sucess')
      } else {
        console.log('no')
        reject('err')
      }
    });
    mypromise.then(
      (res) => { console.log(res); }
    ).catch(
      (err) => { console.log(err); }
    );
    const myobservable = new Observable((observer) => {
       
      const x = 5, y = 6;
      if (x + y > 5) {
        console.log('yup')
        observer.next('sucess')
      } else {
        console.log('no')
        observer.error('err')
      }
      observer.complete
    });
    
    myobservable.subscribe(
      (res) => { console.log('subres') },
      (err) => { console.log('subres') },
      () => { console.log('subres') }
    )
    let x = 0;
    const mysetinterval = setInterval(() => {
       
      x++;
      console.log(x)
    }, 1000);
     
    // ourOwnInterval (x: number, interPeriod: number){
    //   return new observable((observer) => {
    //     setInterval(() => {
    //       observer.next(x++)
    //     }, interPeriod)
    //   })
     
    // }
    // 
  }
}
  