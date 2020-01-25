// JavaScript Document$(document).ready(function(){
var progress ;
var jiaki = new Array('小寒','大寒','立春','雨水','驚蟄','春分','清明','穀雨','立夏','小滿','芒種','夏至','小暑','大暑','立秋','處暑','白露','秋分','寒露','霜降','立冬','小雪','大雪','冬至');
$(document).ready(function(){
/*add in current and page overlap*/

var Calendar = new Date();
var month = Calendar.getMonth();    // Returns month (0-11)
var today = Calendar.getDate();
var year = Calendar.getFullYear();
var currentlink;


var links = new Array ('tsiaohan.html','dahan.html','liichuan.html','uushuah.html','jingjeh.html','chuanfen.html','chingming.html','gooyuu.html','liitsia.html','tsiaomann.html','mangjong.html','tsiajeh.html','tsiaoshuu.html','daashuu.html','liichio.html','chushuu.html','bailoo.html','chiofen.html','hanloo.html','shuangjiang.html','liidong.html','tsiaoshueh.html','dashueh.html','dongjeh.html')

$('.year').html(year);
$('.month').html(month+1);
$('.day').html(today);
var sky = new Array ('甲','乙','丙','丁','戊','己','庚','辛','壬','癸')
var ground = new Array ('子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥')

var tradyear = sky[(year-1624)%10] + ground[(year-1624)%12];
jQuery.fn.exists = function(){return jQuery(this).length>0;}
$('.tradyear').html(tradyear);
var jiakinow = jiaki[0];
if (month==0){
	if(today>=5&&today<20){jiakinow = jiaki[1];currentlink = links[1];}
	else if(today>=20){jiakinow = jiaki[2];currentlink = links[2];}
	else{jiakinow = jiaki[0];currentlink = links[0];}
	}
if (month==1){
	if(today>=4&&today<19){jiakinow = jiaki[3];currentlink = links[3];}
	else if(today>=19){jiakinow = jiaki[4];currentlink = links[4];}
	else{jiakinow = jiaki[2];currentlink = links[2];}
	}
if (month==2){
	if(today>=5&&today<20){jiakinow = jiaki[5];currentlink = links[5];}
	else if(today>=20){jiakinow = jiaki[6];currentlink = links[6];}
	else{jiakinow = jiaki[4];currentlink = links[4];}
	}
if (month==3){
	if(today>=4&&today<20){jiakinow = jiaki[7];currentlink = links[7];}
	else if(today>=20){jiakinow = jiaki[8];currentlink = links[8];}
	else{jiakinow = jiaki[6];currentlink = links[9];}
	}
if (month==4){
	if(today>=5&&today<21){jiakinow = jiaki[9];currentlink = links[9];}
	else if(today>=21){jiakinow = jiaki[10];currentlink = links[10];}
	else{jiakinow = jiaki[8];currentlink = links[8];}
	}
if (month==5){
	if(today>=5&&today<21){jiakinow = jiaki[11];currentlink = links[11];}
	else if(today>=21){jiakinow = jiaki[12];currentlink = links[12];}
	else{jiakinow = jiaki[10];currentlink = links[10];}
	}
if (month==6){
	if(today>=7&&today<23){jiakinow = jiaki[13];currentlink = links[13];}
	else if(today>=23){jiakinow = jiaki[14];currentlink = links[14];}
	else{jiakinow = jiaki[12];currentlink = links[12];}
	}
if (month==7){
	if(today>=7&&today<23){jiakinow = jiaki[15];currentlink = links[15];}
	else if(today>=23){jiakinow = jiaki[16];currentlink = links[16];}
	else{jiakinow = jiaki[14];currentlink = links[14];}
	}
if (month==8){
	if(today>=7&&today<23){jiakinow = jiaki[17];currentlink = links[17];}
	else if(today>=23){jiakinow = jiaki[18];currentlink = links[18];}
	else{jiakinow = jiaki[16];currentlink = links[16];}
	}
if (month==9){
	if(today>=8&&today<23){jiakinow = jiaki[19];currentlink = links[19];}
	else if(today>=23){jiakinow = jiaki[20];currentlink = links[20];}
	else{jiakinow = jiaki[18];currentlink = links[18];}
	}
if (month==10){
	if(today>=7&&today<22){jiakinow = jiaki[21];currentlink = links[21];}
	else if(today>=22){jiakinow = jiaki[22];currentlink = links[22];}
	else{jiakinow = jiaki[20];currentlink = links[20];}
	}
if (month==11){
	if(today>=7&&today<21){jiakinow = jiaki[23];currentlink = links[23];}
	else if(today>=21){jiakinow = jiaki[0];currentlink = links[0];}
	else{jiakinow = jiaki[22];currentlink = links[22];}
	}

currentlink=links[links.indexOf(currentlink)-1];

/*---------------------------------------------------------------*/
if ( $('#upcoming').exists() ){
		$('#upcoming').html(jiaki[jiaki.indexOf(jiakinow)-1]);
		if(jiaki.indexOf(jiakinow)-1==thispage){$('#upcoming').addClass("selected");}	
else {document.getElementById("upcoming").href = currentlink;}
}
if ( $('#homeenter').exists() ){
document.getElementById("homeenter").href = currentlink;
}


if(thispage<(jiaki.indexOf(jiakinow)-1)){progress="已過了";}
else if(thispage>(jiaki.indexOf(jiakinow)-1)){progress="";}	
else  {progress="正值";}
if ( $('#progress').exists() ){
$('#progress').html(progress);
}


/*---------------------------------------------------------------*/
})