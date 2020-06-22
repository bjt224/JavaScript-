var title=new Array();
title[0]="1.静夜思 （李白）";
title[1]="2.床前看月光";
title[2]="3.疑是地上霜";
title[3]="4.抬头望山月";
title[4]="5.低头思故乡";
var nowIndex=1;
var maxPic=5;
var timer; 

window.onload=show;
function show(num)
{
	if(Number(num))
	{
		clearTimeout(timer);
		nowIndex=num;
	}
		
	for(var i=1;i<(maxPic+1);i++)
	{
		if(i==nowIndex)
		{
			document.getElementById("Rotator"+nowIndex).style.display="block";
			document.getElementById("fig_"+nowIndex).innerHTML=title[nowIndex-1];
			document.getElementById("fig_"+nowIndex).className="numberOver";
		}
		else
		{
			document.getElementById("Rotator"+i).style.display="none";
			document.getElementById("fig_"+i).innerHTML=i;
			document.getElementById("fig_"+i).className="number";
		}
	}
	if(nowIndex==maxPic)
	{
		nowIndex=1;
	}
	else
	{
		nowIndex++;
	}
	timer=setTimeout("show()",3000);
}
