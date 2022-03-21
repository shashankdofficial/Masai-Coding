// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit", getData);

function getData(){
    event.preventDefault();
    var stdImage = document.querySelector("#image").value;
    var stdName = document.querySelector("#name").value;
    var stdBatch = document.querySelector("#batch").value;
    var stdDsa = document.querySelector("#dsa").value;
    var stdSkill = document.querySelector("#cs").value;
    var stdCode = document.querySelector("#coding").value;

    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    var image = document.createElement("img");
    image.src = stdImage;
    td1.append(image);

    var td2 = document.createElement("td");
    td2.innerHTML = stdName;

    var td3 = document.createElement("td");
    td3.innerText = stdBatch;

    var td4 = document.createElement("td");
    td4.innerText = stdDsa;

    var td5 = document.createElement("td");
    td5.innerText = stdSkill;

    var td6 = document.createElement("td");
    td6.innerText = stdCode;

    var sum = eval(Number(stdDsa)+Number(stdSkill)+Number(stdCode));
    var divide = sum/30;
    var percentage = divide*100;

    var td7 = document.createElement("td");
    td7.innerText = percentage;

    var td8 = document.createElement("td");
    if(percentage>=50){
        td8.innerText = "Regular";
        td8.style.backgroundColor = "green"
    }
    else{
        td8.innerText = "Async";
        td8.style.backgroundColor = "red";
    }
    

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8,);
    document.querySelector("tbody").append(tr);
}