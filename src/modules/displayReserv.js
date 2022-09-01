const foodContaier = document.querySelector('.card-container');
import {getSc,postScore} from './getPostReserv.js';

export const displayReserv =(reset,index)=>{
   const gets=getSc(index);
   // console.log(gets);
   foodContaier.innerHTML+=`<div class="displayReserv"><h1>Reservations</h1> <p>${gets.date_start}- ${gets.date_end} by ${gets.username}</p> </div>`

}

export const addReserv =(ids) =>{
   foodContaier.innerHTML+=`<h2> Add Reservation</h2><form class="theform" action="">
  <label for="fname">Your name</label><br>
  <input type="text" id="fname" class="fname" -name="fname" value=""><br>

  <label for="sdate">Start date</label><br>
  <input type="text" id="sdate" class="sdate" name="lname" value=""><br><br>

  <label for="edate">end date:</label><br>
  <input type="text" id="edate" class="edate" name="lname" value=""><br><br>

  <input type="submit" value="Reserve">
</form> `

   const form=document.querySelector('.theform');
   const name=document.querySelector(".fname");
    const startdate=document.querySelector(".sdate");
     const enddate=document.querySelector(".edate");
   form.addEventListener('submit',(e)=>{
      e.preventDefault()
      postScore(ids,name,sdate,edate);
   })
}
