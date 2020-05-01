//変数宣言
var alertString;
alertString = addString("WebCamp");

//呼び出し
alert(alertString);

//addStringをstrAに代入。addStrを定義しこれを戻り値
function addString(strA){
	var addStr = "Hello! " + strA;
	return addStr;
}

//prompt関数
var promptStr = prompt('何か好きな文字を入力してください');
alert(promptStr);

//ジャンケンの手を入力してもらうプロンプト欄を生成
var user_hand = prompt('グー、チョキ、パーを選んでください');
//ジャンケンの手をランダムに作成する関数
var js_hand = getJShand();
//ユーザの手とjavaのジャンケンの手を比べる関数を呼び出し、代入
var judge = winLose(user_hand, js_hand);
//結果を表示する
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は'+ js_hand + 'です。\n結果は' + judge + 'です。');

//ランダムでジャンケンの手を作成する関数
function getJShand(){
	var js_hand_num = math.floor( Math.random() * 3) ;

	if(js_hand_num == 0){
		js_hand = "グー";
	}else if(js_hand_num == 1){
		js_hand = "チョキ";
	}else if(js_hand_num == 2){
		js_hand = "パー";
	}
	return js_hand;
}

//ユーザの手とjavaの手を比べる関数
function winLose(user, js){
    var winLoseStr;

    if(user == "グー"){
        if(js == "グー"){
            winLoseStr = "あいこ";
        }else if(js == "チョキ"){
            winLoseStr = "勝ち";
        }else if(js == "パー"){
            winLoseStr = "負け";
        }
    }else if(user == "チョキ"){
        if(js == "グー"){
            winLoseStr = "負け";
        }else if(js == "チョキ"){
            winLoseStr = "あいこ";
        }else if(js == "パー"){
            winLoseStr = "勝ち";
        }
    }else if(user == "パー"){
        if(js == "グー"){
            winLoseStr = "勝ち";
        }else if(js == "チョキ"){
            winLoseStr = "負け";
        }else if(js == "パー"){
            winLoseStr = "あいこ";
        }
    }

    return winLoseStr;
}