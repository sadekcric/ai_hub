const display = document.getElementById("display");
const hiddenBtn=document.getElementById('hiddenBtn');

const fetchData = async (isShowAll) => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;

  const res = await fetch(url);
  const data = await res.json();
  const allData = data.data.tools;

  singleData(allData,isShowAll);
};

const singleData = (allData, isShowAll) => {
  // console.log(allData);
 
 display.innerHTML=''
  
 

  if(!isShowAll){
    allData=allData.slice(0,6)
  }
   if(allData.length>6){
    hiddenBtn.classList.add('hidden');
  }else{
    hiddenBtn.classList.remove('hidden');
  }

  
  allData.forEach((data) => {
    // console.log(data);
    const div = document.createElement("div");
    div.classList = ``;
    div.innerHTML = `
  <div class="border-2 p-3 rounded-lg">
          <div class="card card-compact">
            <figure><img src="${data.image}" /></figure>
            <div class="card-body">
              <h2 class="card-title">Features</h2>

              <ol class="list-decimal ml-5">
                <li>${data.features[0]}</li>
                <li>${data.features[1]}</li>
                <li>${data.features[2]}</li>
              </ol>

              <div class="border-b-2 border-gray-300"></div>

              <div class="flex items-center justify-between">
                <div>
                  <h3 class="card-title">${data.name}</h3>
                  <div>
                    <i class="bx bxs-calendar-minus text-gray-400">${data.published_in}</i>
                  </div>
                </div>

                <div>
                  <i onclick="details()" class='bx bx-right-arrow-alt text-orange-500 text-xl'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
  `;

    display.appendChild(div);
  });
};




const details=()=>{
  console.log(`clicked`);
}


const showAll=()=>{
  fetchData(true);
  hiddenBtn.classList.add('hidden')
}
fetchData();
