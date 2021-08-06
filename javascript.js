let tamMark=document.getElementById('tam-mark');
let engMark=document.getElementById('eng-mark');
let matMark=document.getElementById('mat-mark');
let phyMark=document.getElementById('phy-mark');
let cheMark=document.getElementById('che-mark');
let csMark=document.getElementById('cs-mark');
let mark=document.getElementById('total');
let cutOffC=document.getElementById('cut-off');
function sum(params) {
   a=Number(tamMark.value)+Number(engMark.value)+Number(matMark.value)+Number(phyMark.value)+Number(cheMark.value)+Number(csMark.value);
   mark.textContent="Total: "+a;
   
}
//cutoff calcs
function cutOff(params) {
   co=Number(matMark.value)+Number(phyMark.value/2)+Number(cheMark.value/2);
   cutOffC.textContent="CUTOFF:"+co;
   
}
