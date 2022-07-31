//template_4hf3vbl
//service_07rekzy
//DpxkNVl4whdCwF9rf
// emailjs
//.sendForm(
   // 'service_07rekzy',
   // 'template_4hf3vbl',
  //   event.target,
  //  'user_DpxkNVl4whdCwF9rf'
  // ).then(() => {
 //      console.log('this worked')
//   })

function contact(event){
    event.preventDefault();
   
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " .modal__overlay--visible"
    setTimeout(() => {
        console.log('it worked')
    }, 500);
   
}
