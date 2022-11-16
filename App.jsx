import React from 'react';

function App(){
    let currDate=new Date(2022,10,29,20);
currDate=currDate.getHours();
let greeting ='';
const cssStyle={};
if(currDate>=1&&currDate<12){
   greeting='Good Morning';
   cssStyle.color='green';
}else if(currDate>=12 && currDate<19){
   greeting='Good Afternoon';
   cssStyle.color='Orange';
}else{
  greeting ='Good Night';
  cssStyle.color='Black';
}
return (
    <>
    <div>
    <h1>Hello sir,<span style={cssStyle}>{greeting}</span></h1>
    </div>
    </>
)
}
export default App;