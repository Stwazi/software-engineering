function task1(){
    alert("hello world")
}
function task2() { 
    let x=Math.random() , y=Math.random() , t; 
    t=x+y; 
    alert(x + " + " + y + " = " + t); 
} 
function task3() { 
    const x=5 
    let y=Math.random(), z=Math.random() , t; 
    t=x+y+z; 
    alert(x + " + " + y + " + " + z + " = " + t); 
} 
function task4() { 
    let x=2, y='Привет'; 
    alert(y + " / " + x + " = " + y/x); 
} 
function task5() { 
    let x=',м', y='Привет', t='ир!'; 
    alert(y + " + " + x + " + " + t + " = " + y+x+t); 
} 
function task6() { 
    let x; 
    alert(x); 
} 
function task7() { 
    let x=false,y='10',t; 
    alert(x);x=x+''; 
    alert(x + ' = ' + typeof(x)); 
    x='1000';t=x/y; 
    alert(x + ' / ' + y + " = " + t + typeof(t)); 
    t=333;y='777';x=y+t; 
    alert(y + ' + ' + t + " = " + x + typeof(x)); 
} 
function task8() { 
    let a=1, b=-8, c=12; 
    var d=b*b-4*a*c; 
    var x1,x2; 
    x1=(-b+Math.sqrt(d))/(2*a); 
    x2=(-b-Math.sqrt(d))/(2*a); 
    alert(x1 + ";" + x2); 
} 
function task9() { 
    alert("Диапазон от 1 до 10"); 
    alert("Шаг 1"); 
    for (let x=1; x<11; x++){ 
    y=x*x+x*x*x-3*x; 
    alert ("Значения функции " + y) 
    } 
} 
function task10(){ 
    var arr=[]; 
    for(var i=0; i<5; i++){ 
    arr[i]=Math.random()*(10-1)+1 
    } 
    b=0; 
    for(var i=0; i<5; i++){ 
    b+=arr[i]*arr[i]; 
    alert(b); 
    } 
} 
function task11(){ 
    let a=38; 
    alert(a); 
    alert(a.toString([2])); 
} 
function task12(){ 
    var a=['Абрикос', 'Апельсин', 'Арбуз'], b=0; 
    alert('Абрикос ' + 'Апельсин ' + 'Арбуз'); 
    for (let i=0; i<=2; i++){
        for (let n=0; n<=a[i].length; n++) {
            if (a[i].charAt(n)=='А') b=b+1;
        }
    }
    alert(b);
}
function task13() {
    alert( " Иванов Иван, Петров Пётр, Ульянова Ульяна, " );
    let a=[],s=[" Иванов Иван, Петров Пётр, Ульянова Ульяна, 1"],d
    for (let i=0;;i++) {
        a[i]=s[i].slice(0,s[i].indexOf(','));
        s[i+1]=s[i].slice(s[i].indexOf(',')+1,s[i].indexOf('1')); //копир в другую строку начиная с след слова
        if (s[i+1].length<4)break
        d=i;
    }
    for (let i=0;i<=d+1;i++)
    {alert(a[i]);}
}
function task14() {
    alert( " Привет, мир! " );
    }
function task15() {
    let rt='dfgdf'
    alert( rt );
    dama();
}
function dama(){let rt='235235'
    alert(rt);
}
function dr(d,r){
    return d+r;
}
function task16() {
    alert(dr(2,5));
}