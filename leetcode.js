



const swiper1left=document.querySelector("#ssleft");
const swiper1right=document.querySelector("#ssright");
const swiper1=document.querySelector("#swiper");
const style=swiper1.currentStyle||window.getComputedStyle(swiper1);
const swiper1length=swiper1.offsetWidth+parseInt(style.padding);
const swiper2left=document.querySelector("#ssleft2");
const swiper2right=document.querySelector("#ssright2");
const swiper2=document.querySelector("#swiper2");
const style2=swiper2.currentStyle||window.getComputedStyle(swiper2);
const swiper2length=swiper2.offsetWidth+parseInt(style2.padding);
const expand=document.querySelector("#expand");
const collapse=document.querySelector("#collapse");
const topicsextra=document.querySelector("#topicsextra");
const pickone=document.querySelector("#po");
const showmore=document.querySelector("#showmore");
const showless=document.querySelector("#showless");
const featuredlist=document.querySelector("#featuredlist")
const topbarprofile=document.querySelector("#topbarprofile");
const profilecard=document.querySelector("#profilecard");
const interview=document.querySelector("#interview");
const interviewdd=document.querySelector("#interviewdropdown");
const store=document.querySelector("#store");
const storedd=document.querySelector("#storedd");



function swipe(e){
    console.log(e.target.id);
   if(e.target.id=="ssright"){
     swiper1.style.transform=`translateX(-${swiper1length}px)`;
   }
   else if(e.target.id=="ssleft") {
    swiper1.style.transform=`translateX(0px)`;
   }
   else if(e.target.id=="ssright2") {
    swiper2.style.transform=`translateX(-${swiper2length}px)`;
   }
   else if(e.target.id=="ssleft2") {
    swiper2.style.transform=`translateX(0px)`;
   }
}
function topics(e){
    console.log(pickone.style.top);
    if(e.target.id=="expand"){
         topicsextra.style.display="flex";
         expand.style.opacity=0;
         pickone.style.top="770px";
    }
    else{
        topicsextra.style.display="none";
        expand.style.opacity=1;
        pickone.style.top="695px";
    }

}
function changefeaturedlist(e){
    console.log(e.target.id);
    if(e.target.id=="showmore"){
        showmore.style.position="absolute";
        showmore.style.opacity=0;
        featuredlist.style.height="350px";
    }
    else{
        showmore.style.position="static";
        showmore.style.opacity=1;
        featuredlist.style.height="210px";
    }
   
}
function profilecardchange(e){
    console.log(e.target.id);
    if(profilecard.style.opacity==0&&e.target.id=="topbarprofile"){
        profilecard.style.top="55px";
        profilecard.style.opacity=1;
        profilecard.style.display="flex";
    }
    else if(e.target.id!="profilecard"&&e.target.id!="pcimg"&&e.target.id!="pclogo"&&e.target.id!="pc3"&&e.target.id!="pc4"&&e.target.id!="pc5"){
        profilecard.style.top="100px";
        profilecard.style.opacity=0;
        profilecard.style.display="none";
    }
    
}
function interviewshow(){
    if(interviewdd.style.opacity==0)
        { 
        interviewdd.style.opacity=1;
        interviewdd.style.zindex=100;
        }
    else{
            interviewdd.style.opacity=0;
            interviewdd.style.zindex=0;
        }
}
function storeshow(){
    if(storedd.style.opacity==0)
    { 
    storedd.style.opacity=1;
    storedd.style.zindex=100;
    }
    else{
        storedd.style.opacity=0;
        storedd.style.zindex=0;
    }
}


swiper1left.addEventListener("click",swipe);
swiper1right.addEventListener("click",swipe);
swiper2left.addEventListener("click",swipe);
swiper2right.addEventListener("click",swipe);
expand.addEventListener("click",topics);
collapse.addEventListener("click",topics);
showmore.addEventListener("click",changefeaturedlist);
showless.addEventListener("click",changefeaturedlist);
document.addEventListener("click",profilecardchange);
interview.addEventListener("click",interviewshow);
store.addEventListener("click",storeshow);

