//変数
var hello = 'Hello World';
alert(hello);

//四則演算
alert(4+2);
alert(8-5);
alert(6*2);
alert(8/2);

//文字列の結合
alert('Hello' + 'World');

//変数の結合
var str1 = 'He';
var str2 = 'World';
alert(str1 + str2);

//条件分岐
var orange = 100;
var apple = 120;

if(orange < apple){
	alert('みかんの値段がリンゴより安い');
}
else if(orange == apple){
	alert('みかんとリンゴの値段一緒');
}
else{
	alert('みかんの値段がリンゴより高い');
}

//while文 条件式がtrueである限りwhile内は繰り返し処理される
var max = 100;
var num = 1;
var count = 0;

while(num < max){
	num = num * 2;
	count = count + 1;
}
alert('2を掛け続けて'+ max +'を超えるのに必要な回数は'+ count +'回です');

//for文　決められた回収の処理を繰り返す
var i;
var num = 0;

for(i = 1; i < 11; i++){
	num = num + i;
}
alert('1から10まで足し算した結果は' + num + 'です');