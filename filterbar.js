function onInput() {
   var jobs = []
    var value = document.getElementById("drop").value;
   if (value== "Pennsylvania"){
     value = "PA"
   }
   if (value== "Delaware"){
     value = "DE"
   }
   if (value== "New Jersey"){
     value = "NJ"
   }
   window.location.href = "html/optunity.html";
   for (var i = 0; i < listjobs.length; i++){
     if (listjobs[i]['location'].includes(value)){
     jobs.push(listjobs[i])
   }
 }
   }



var listint = [];
function listaddkey(subject){
    listint.push(subject);
}
var listrole = []
function listaddrole(job){
  listrole.push(job);
}
var listgrade = []
function listaddgrade(grade){
  listgrade.push(grade);
}

var listjobs = [{"role":"intern", "location":"['NJ','PA','DE']","name":"Bank of America Student Leaders","grade":"upper","app":"https://about.bankofamerica.com/en-us/global-impact/student-leader-eligibility-criteria.html#fbid=EaSqu7HgIT5","key":"business","description":"Eight week paid summer internship for current highschool Juniors and Seniors at local companies and non-profits."
},{"role":"sumpro", "location":"[NJ,PA]","name":"GenCyber Camp","description":"Cyber Security camp for rising high school juniors and senior that teaches them about national security", "grade":"upper","app":"https://www.gen-cyber.com/camps/","key":"compsci"},{"role":"opp", "location":"['PA']","name":"MESA: Aquaponics (Engineering Urban Sustainability)","description":"The MESA Saturday Academy in Urban Sustainability, Agriculture and Responsibility (AUSAR) is a pre-college high school program for 9-12th grade students enrolled in CTE agriculture, horticulture, IT, and engineering technology programs.   Students spend 10 weeks conducting research, developing technology skills and exploring undergraduate degrees in engineering and computer science that help sustain our critical infrastructure – access to clean water, nutritious food, viable transportation and renewable energy.", "grade":"","app":"https://pennsylvaniamesa.org/programs/","key":"engineering"},{"role":"sumpro" ,"location":"[PA]","name":"Short-Term Research Experience for Underrepresented Persons", "description":"Summer experience for highschool students and undergraduates looking to learn about research", "grade": "", "app":"https://www.niddk.nih.gov/research-funding/research-programs/diversity-programs/research-training-opportunities-students/short-term-research-experience-underrepresented-persons-step-up", "key":"med" }]
var listmatch = [];
function test(){
  document.getElementById("joblist").innerHTML = "";
  for (var i = 0; i < jobs.length; i++) {
    if((listrole.includes(jobs[i]['role']) || listrole == '') && (listint.includes(jobs[i]['key'])|| listint == '') && (listgrade.includes(jobs[i]['grade'])|| jobs[i]['grade'] =='' || listgrade == '')) {
      listmatch.push(jobs[i]);
  }
  }
  for (var i = 0; i < listmatch.length; i++ ) {
    var name = listmatch[i]['name'];
    var description = listmatch[i]['description'];
    var app = listmatch[i]["app"];
    var desc = document.createElement("div");
    var aTag = document.createElement("a");
    var title = document.createElement('h2');
    title.innerHTML = name;
    aTag.setAttribute('href', app);
    aTag.innerHTML = "Application";
    desc.innerHTML = description;
    joblist.appendChild(title);
    joblist.appendChild(desc);
    joblist.appendChild(aTag);


  }
}
