document.getElementById("schemeForm").addEventListener("submit",function(e){

e.preventDefault();

const gender = document.getElementById("gender").value;
const age = parseInt(document.getElementById("age").value);
const occupation = document.getElementById("occupation").value;
const bpl = document.getElementById("bpl").value;

const resultsDiv = document.getElementById("results");

resultsDiv.innerHTML="";

schemes.forEach(function(scheme){

let eligible=true;

if(scheme.gender && scheme.gender!==gender){
eligible=false;
}

if(scheme.minAge && age<scheme.minAge){
eligible=false;
}

if(scheme.maxAge && age>scheme.maxAge){
eligible=false;
}

if(scheme.occupation && scheme.occupation!==occupation){
eligible=false;
}

if(scheme.bpl && scheme.bpl!==bpl){
eligible=false;
}

if(eligible){

const schemeDiv=document.createElement("div");

schemeDiv.className="scheme";

schemeDiv.innerHTML=`
<strong>${scheme.name}</strong>
<div class="documents">
<h4>Required Documents:</h4>
<ul>
${scheme.documents.map(doc=>`<li>${doc}</li>`).join("")}
</ul>
</div>
`;

schemeDiv.addEventListener("click",function(){

const docs=this.querySelector(".documents");

docs.style.display=
docs.style.display==="block" ? "none":"block";

});

resultsDiv.appendChild(schemeDiv);

}

});

});
