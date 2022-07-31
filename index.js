 const updatels =()=>{
   const teaxtAreadata= document.querySelectorAll("textarea");
   const notes=[];
   teaxtAreadata.forEach((note)=>{
     return notes.push(note.value);

   })
   localStorage.setItem("notes",JSON.stringify(notes));
 }



let addnotes=document.getElementById('addnotes_button');


const add_notes = (text) =>{
 let notes=document.createElement('div');

 notes.classList.add('main');
 
 const htmlData=`
 <i class="fa-solid fa-pen-to-square mx-2"  id="edit"></i>
 <i class="fa-solid fa-trash-can mx-2"id="delete"></i>
   <div class="cont ${text? "":"hidden"}"></div>
   <textarea class= ${text? "hidden":""}></textarea>
 `
 notes.insertAdjacentHTML('afterbegin',htmlData);
document.getElementById('main_container').appendChild(notes);

const editbutton=notes.querySelector('#edit');
const delbutton=notes.querySelector('#delete');
const main_div=notes.querySelector(".cont");
const texta=notes.querySelector("textarea");

delbutton.addEventListener('click', ()=>{
    notes.remove()
    updatels();
    // console.log(notes);
})
// toggle b/w main div to textarea and vice versa -15:55
texta.value=text;
main_div.innerHTML=text;


texta.addEventListener('change',(e)=>{
const value =e.target.value;

main_div.innerHTML=value;
updatels();//function for update the local storage 

})
editbutton.addEventListener('click', ()=>{
  main_div.classList.toggle('hidden');
  texta.classList.toggle("hidden");
 

})
}




addnotes.addEventListener('click',()=>{
  
    add_notes("")
    
      }
    );
    // getting data from local storage

    const notes1=JSON.parse(localStorage.getItem("notes"));
   notes1.forEach((e)=>{
    add_notes(e)
   })