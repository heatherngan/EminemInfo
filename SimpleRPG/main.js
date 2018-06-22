var mapArray, ctx, currentImgMainx, currentImgMainY;
var imgMain, imgEnemy;
$(document).ready(function(){
  mapArray= [0,1,0,0,0,0,3,0,5];
    ctx=$("#myCanvas")[0].getContext("2d");
  imgMain=new Image();
  imgMain.src="SimpleRPG/images/spriteSheet.png";
  currentImgMainx=0;
  currentImgMainY=0;
    imgMain.onload=function()
    {
        ctx.drawImage(imgMain,0,0,80,130,currentImgMainx,currentImgMainY,200,200)
    };
    
    imgEnemy=new Image();
    imgEnemy.src="SimpleRPG/images/social-media-logos.png";
        imgEnemy.onload=function(){
            for(var x in mapArray){
                if(mapArray[x]==1) {   ctx.drawImage(imgEnemy,35,29,128,129,x%3*200,Math.floor(x/3)*200,200,200);
                }else if(mapArray[x]==3)
                    {
                        ctx.drawImage(imgEnemy,236,29,127,128,x%3*200,Math.floor(x/3)*200,200,200);
                    }else if(mapArray[x]==5){
                        ctx.drawImage(imgEnemy,36,236,128,92,x%3*200,Math.floor(x/3)*200,200,200);
                    }
            }
        };
        
});

$(document).keydown(function(event){
    var targetImgMainx, targetImgMainY, targetBlock, cutImagePositionX;
    event.preventDefault();
    //alert(event.which);
    switch(event.which){
        case 37:
            targetImgMainx=currentImgMainx-200;
            targetImgMainY=currentImgMainY;
            cutImagePositionX=175;
            break;
         case 38:
            targetImgMainx=currentImgMainx;
            targetImgMainY=currentImgMainY-200;
            cutImagePositionX=355;
            break;
         case 39:
            targetImgMainx=currentImgMainx+200;
            targetImgMainY=currentImgMainY;
            cutImagePositionX=540;
            break;
         case 40:
            targetImgMainx=currentImgMainx;
            targetImgMainY=currentImgMainY+200;
            cutImagePositionX=0;
            break;
        default:
            return;
    }
    if(targetImgMainx<=400 && targetImgMainx>=0 && targetImgMainY<=400 && targetImgMainY>=0)
    {
        targetBlock=targetImgMainx/200+targetImgMainY/200*3;
    }else
        {
            targetBlock=-1;
        }
    ctx.clearRect(currentImgMainx,currentImgMainY,200,200);
    if(targetBlock==-1||mapArray[targetBlock]==1||mapArray[targetBlock]==3||mapArray[targetBlock]==5)
    {
        
    }
    else
        {
         $("#talkBox").text("");
            currentImgMainx=targetImgMainx;
            currentImgMainY=targetImgMainY;
        }
    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMainx,currentImgMainY,200,200);
    switch(mapArray[targetBlock])
        {
            case undefined:
                $("#talkBox").text("woo hoo~");
            break;
            case 1:
                $("#talkBox").text("IG: eminem");
            break;
            case 3:
                $("#talkBox").text("FB: Eminem");
            break;
            case 5:
                $("#talkBox").text("YOUTUBE: EmineMusic");
            break;
        }   
});