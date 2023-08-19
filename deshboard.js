
let upload=document.getElementById("upload");
let send=document.getElementById("send");
let heading=document.getElementById("heading");
let description=document.getElementById("description");

upload.addEventListener("click", async()=>{
    console.log(heading)
    console.log(description)
    // console.log(heading.value)
    console.log(description.value)
    // console.log(send)
    send.innerHTML+=`<div class="card card1 mt-4">
    <div class="fullInfo">
        <div class="image">

            <img src="image/elonmusk.jpeg" alt="">
        </div>
        <div class="info ">
            <h4 class="heading">
                ${heading.value}
            </h4>
            <div class="nameDate mt-1">

                <p>
                    Mustafa Faisal - August 16th,2023
                </p>
            </div>
        </div>
    </div>
    <div class="description">
        ${description.value}
    </div>
    <div class="deleteEdit">

        <a href="" >Delete</a>
        <a href="">Edit</a>

    </div>
</div>
    `
    heading.value="";
    description.value="";



})



