var number1=document.getElementById("row1");
var number2=document.getElementById("row4");
var operation=document.getElementById("row2");
var butt11=document.getElementById("btn11");
var butt12=document.getElementById("btn12");
var butt13=document.getElementById("btn13");
var butt21=document.getElementById("btn21");
var butt22=document.getElementById("btn22");
var butt23=document.getElementById("btn23");
var butt31=document.getElementById("btn31");
var butt32=document.getElementById("btn32");
var butt33=document.getElementById("btn33");
var butt41=document.getElementById("btn41");
var butt42=document.getElementById("btn42");
var butt43=document.getElementById("btn43");
var butt51=document.getElementById("btn51");
var butt52=document.getElementById("btn52");
var butt53=document.getElementById("btn53");
var butt61=document.getElementById("btn61");
var butt62=document.getElementById("btn62");
var butt63=document.getElementById("btn63");
var bool=true;
butt11.addEventListener("click",()=>{
        number1.value="";
        number2.value="";
        document.getElementById("input3").value="";
  
});
butt31.addEventListener("click",()=>{
        if(bool==true){
                var number=number1.innerHTML;
                number1.innerHTML=number+""+1;
        }else{
                var number=number2.innerHTML;
                number2.innerHTML=number+""+1;  
        }
});
butt32.addEventListener("click",()=>{
        if(bool==true){
                var number=number1.innerHTML;
                number1.innerHTML=number+2;
        }else{
                var number=number2.innerHTML;
                number2.innerHTML=number+2;  
        }
});
butt33.addEventListener("click",()=>{
        if(bool==true){
                var number=number1.innerHTML;
                number1.innerHTML=number+3;
        }else{
                var number=number2.innerHTML;
                number2.innerHTML=number+3;  
        }
});
butt41.addEventListener("click",()=>{
        if(bool==true){
                var number=number1.innerHTML;
                number1.innerHTML=number+4;
        }else{
                var number=number2.innerHTML;
                number2.innerHTML=number+4;  
        }
});
butt42.addEventListener("click",()=>{
        if(bool==true){
                var number=number1.innerHTML;
                number1.innerHTML=number+5;
        }else{
                var number=number2.innerHTML;
                number2.innerHTML=number+5;  
        }
});
butt43.addEventListener("click",()=>{
        if(bool==true){
                var number=number1.innerHTML;
                number1.innerHTML=number+6;
        }else{
                var number=number2.innerHTML;
                number2.innerHTML=number+6;  
        }
});
butt51.addEventListener("click",()=>{
        if(bool==true){
                var number=number1.innerHTML;
                number1.innerHTML=number+7;
        }else{
                var number=number2.innerHTML;
                number2.innerHTML=number+7;  
        }
});
butt52.addEventListener("click",()=>{
        if(bool==true){
                var number=number1.innerHTML;
                number1.innerHTML=number+8;
        }else{
                var number=number2.innerHTML;
                number2.innerHTML=number+8;  
        }
});
butt53.addEventListener("click",()=>{
        if(bool==true){
                var number=number1.innerHTML;
                number1.innerHTML=number+9;
        }else{
                var number=number2.innerHTML;
                number2.innerHTML=number+9;  
        }
});
butt61.addEventListener("click",()=>{
        if(bool==true){
                var number=number1.innerHTML;
                number1.innerHTML=number+".";
        }else{
                var number=number1.innerHTML;
                number1.innerHTML=number+".";
        }
});
butt62.addEventListener("click",()=>{
        if(bool==true){
                var number=number1.innerHTML;
                number1.innerHTML=number+"0";
        }else{
                var number=number2.innerHTML;
                number1.innerHTML=number+"0";
        }
});
butt21.addEventListener("click",()=>{
        if(bool==true){
                bool=false;
                operation.innerHTML="+";
        }else{
                operation.innerHTML="+";
                bool=true;  
        }
});
butt22.addEventListener("click",()=>{
        if(bool==true){
                bool=false;
                operation.innerHTML="-";
        }else{
                operation.innerHTML="-";
                bool=true;  
        }
});
butt23.addEventListener("click",()=>{
        if(bool==true){
                operation.innerHTML="*";
                bool=false;
        }else{
                operation.innerHTML="*";
                bool=true;  
        }
});
butt12.addEventListener("click",()=>{
        if(bool==true){
                operation.innerHTML="%";
                bool=false;
        }else{
                operation.innerHTML="%";
                bool=true;  
        }
});
butt13.addEventListener("click",()=>{
        if(bool==true){
                operation.innerHTML="/";
                bool=false;
        }else{
                operation.innerHTML="/";
                bool=true;  
        }
});
butt63.addEventListener("click",()=>{
        let number0;
        let number;
        let op;
        try{
        number=parseFloat(String(number1.innerText));
         number0=parseFloat(String(number2.innerText));
         op= String(operation.innerText);;
        //  console.log()
        }catch(err){
             number1.innerHTML="Invalid Input";  
             number2.innerHTML="Invalid Input";  
        }
        if(op=='*'){
        number2.innerText=number*number0;
        // console.log(number," ",number0," = ",number*number0);
}
        else if(op=='+')
        number2.innerText=number0+number;
        else if(op=='-')
        number2.innerText=number-number0;
        else if(op=='/')
        number2.innerText=number/number0;
        else if(op=='%')
        number2.innerText=number%number0;

        number1.innerHTML="";
        operation.innerHTML="";
});
butt11.addEventListener("click",()=>{
        number1.innerHTML="";
        operation.innerHTML="";
        number2.innerHTML="";
        bool=true;
})
