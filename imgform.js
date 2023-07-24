let email=document.getElementById('email')
let passward=document.getElementById('password')
let check=document.getElementById('check')
let btn=document.getElementById('btn')
btn.addEventListener('click',()=>{
    if(email.value =='s@gmail.com' && passward.value=='12345')
    {
        alert('login successfully!')
    }
    else
    {
        alert('invalid credentials!')
    }
})















// let email=document.getElementById('email')
// let passward=document.getElementById('passward')
//  let btn=document.getElementById('btn')
//  let image=document.getElementById('image')
//  btn.addEventListener('click',(e)=>{
//       e.preventDefault()
//       if(email.value == 's@gmail.com' && passward.value == '12345')
//       {
//              alert('login successfully')
//              image.src ='tesla logo 1.jpg' 
//       }
//       else
//       {
//         image.src ='ipl logo.png'   //for changing the image
//         alert('invalid credentials')
//       }
//  })