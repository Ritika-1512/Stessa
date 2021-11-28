import { LightningElement ,track} from 'lwc';

export default class ConditionalRenderingCalculator extends LightningElement {
   @track First
   @track second
   @track result
   
   doSum(){
       this.result=Number(this.First)+Number(this.second)
   }
   doSub(){
    this.result=Number(this.First)-Number(this.second)
   }
   doDiv(){ 
    this.result=Number(this.First)/Number(this.second)
   }
   doMul(){
    this.result=Number(this.First)*Number(this.second)
   }
   doclr(){
     this.first=null
     this.second=null 
    this.result=null
   }

   handleNum1(event){
    this.First= event.target.value
   }
   handleNum2(event){
    this.second= event.target.value
   }

}