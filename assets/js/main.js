const PRICE=400_000;
const btn=document.querySelector('#btn');
const amount=document.querySelector('#input-1');
const color=document.querySelector('#input-2');
const result_total=document.querySelector('#total')
const result_amount=document.querySelector('#amount')
const result_color=document.querySelector('#color')

btn.addEventListener('click',()=>{
    result_total.innerHTML=amount.value*PRICE
    result_amount.innerHTML=amount.value
    result_color.style.backgroundColor = color.value
});