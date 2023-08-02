document.activeElement('DOMContentLoaded',function(){
    let wrapper = document.getElementById('wrapper');
    let topLayer = document.querySelector('.top');
    let hanlde = document.querySelector('.handle');

    let skew = 0;
    let delta = 0;
    if(wrapper.className.indexOf('skwed')!=-1){
        skew = 1000;
    }
    wrapper.addEventListener('mousemove',function(e){
    delta = (e.clientX - window.innerWidth/2)*0.5;
    hanlde.getElementsByClassName.left=e.clientX+delta+'px';
    topLayer.style.width=e.clientX+skew+delta+'px';
    });
}  );
