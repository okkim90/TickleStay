document.addEventListener('DOMContentLoaded', function() {
    //const optionsLists = document.querySelectorAll('.select-box .options');
    const selectBoxes = document.querySelectorAll('.select-box');
    const selectOption = document.querySelectorAll('.select-box .option');
    //const selectOptionMulti = document.querySelectorAll('.select-box .f_chk');
    selectBoxes.forEach(e => {
      e.addEventListener('click', function() {
        
        if(e.classList.contains('on')){
          closeAllOptions();
        }else{
          //e.querySelector('.options').classList.toggle('on');
          closeAllOptions();
          e.classList.toggle('on');
        }
      });
    });
    selectOption.forEach(e=>{
      e.addEventListener('click',(event)=>{
        event.stopPropagation();
        let selectBox = e.closest('.select-box');
        let selectInput = selectBox.querySelector('.select-input');
        selectInput.value = e.textContent;
        closeAllOptions();
      });
    });
    // selectOptionMulti.forEach(e=>{
    //   e.addEventListener('click',(event)=>{
    //     let selectBox = e.closest('.select-box');
    //     let selectInput = selectBox.querySelector('.select-input');
    //     let chked = selectBox.querySelectorAll('.f_chk input[type=checkbox]:checked');
    //     let chkCount = chked.length;
    //     let arr= []
    //     chked.forEach((chk)=>{
    //         arr.push(chk.closest('.f_chk').querySelector('.f_chk_txt').textContent)
    //     })
        
    //     if(chkCount > 0){
    //      // selectInput.value = chkCount + '개 선택' + ' ('+ arr.join(', ') +')'
    //       selectInput.value = arr.join(', ')
    //     }else{
    //       selectInput.value = '';
    //     }
        
    //   });
    // });
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.select-box')) {
        closeAllOptions();
      }
    });
    function closeAllOptions() {
      selectBoxes.forEach(e => {
        e.classList.remove('on');
      });
    }

    selectBoxes.forEach(e=>{
      if(e.querySelector('.f_chk')){
        let selectInput = e.querySelector('.select-input');
        let chked = e.querySelectorAll('.f_chk input[type=checkbox]:checked');
        let chkCount = chked.length;
        let arr= []
        chked.forEach((chk)=>{
            arr.push(chk.closest('.f_chk').querySelector('.f_chk_txt').textContent)
        })
        
        if(chkCount > 0){
          selectInput.value = chkCount + '개 선택' + ' ('+ arr.join(', ') +')' 
        }else{
          selectInput.value = '';
        }
      }
    });


    // const modal_cont = document.querySelectorAll('.modal_cont');
    // modal_cont.forEach(e=>{
    //   e.addEventListener('click',e=>{
    //     e.stopPropagation();
    //   })
    // });



    const nav = document.querySelector('.nav');
    const nav_toggle = nav.querySelector('.nav_toggle');
    const nav_item = document.querySelectorAll('.nav_dep1.has_dep');
    const btn_nav = document.querySelector('.btn_nav');
    const nav_close = document.querySelector('.nav_close');
    nav_item.forEach(e=>{
      let nav_btn = e.querySelector('.nav_btn.dep1');
      nav_btn.addEventListener('click',(event)=>{
        event.preventDefault();
        if(e.classList.contains('on')){
          e.classList.remove('on')
        }else{
          e.classList.add('on')
        }
        
      });
    });


    // nav.addEventListener('click',(event)=>{
    //   if(!event.target.closest('.nav_close')){
    //     nav.classList.add('fixed')
    //   } 
    // });
    nav_toggle.addEventListener('click',()=>{
      if(nav.classList.contains('fixed')){
        nav.classList.remove('fixed');
      }else{
        nav.classList.add('fixed');
      } 
    });
    btn_nav.addEventListener('click',()=>{
      nav.classList.add('on');
    });
    
    nav.addEventListener('mouseenter',(event)=>{
      if(!nav.classList.contains('fixed')){
        event.target.classList.remove('closed')
      }
    });
    nav.addEventListener('mouseleave',(event)=>{
      if(!nav.classList.contains('fixed')){
        event.target.classList.add('closed')
      } 
    });
    nav_close.addEventListener('click',()=>{
      nav.classList.remove('fixed');
      nav.classList.remove('on');
      
    });
    
});




function user_toggle(){
  const user = document.querySelector('.user');
  if(!user.classList.contains('on')){
    user.classList.add('on');
  }
}

document.addEventListener('click', (event)=> {
  const excludedArea = document.querySelectorAll('.ex_close');
  excludedArea.forEach((e)=>{
    if (!event.target.closest('.ex_close')) {
      e.classList.remove('on')
    }
  });

  const srchArea = document.querySelectorAll('.srch');
  srchArea.forEach((e)=>{
    let srchResult = e.querySelector('.srch_result');
    if (!event.target.closest('.srch') && srchResult) {
      srchResult.classList.remove('on')
    }
  });
});


function reset(target){
  let this_form  = target.closest('form');
  this_form.reset();
}

function open_modal(target){
  const modal = document.querySelector('.modal.'+target+'');
  modal.classList.add('on');
}

function close_modal(target){
  const modal = target.closest('.modal');
  modal.classList.remove('on');
}

function close_toast(target){
  const toast = target.closest('.toast');
  toast.classList.remove('on');
}


function upload(e){
                            
  let val = e.value;
  let uploadSet = e.closest('.uploadSet');
  let upload_input = uploadSet.querySelector('.upload_input');
  upload_input.value = val;
}


