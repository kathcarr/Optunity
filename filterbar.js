
var jobs = [{"role":"intern", "location":"['NJ','PA','DE']","name":"Bank of America Student Leaders","grade":"upper","app":"https://about.bankofamerica.com/en-us/global-impact/student-leader-eligibility-criteria.html#fbid=EaSqu7HgIT5","key":"business","description":"Eight week paid summer internship for current highschool Juniors and Seniors at local companies and non-profits."},{"role":"sumpro", "location":"[NJ,PA]","name":"GenCyber Camp","description":"Cyber Security camp for rising high school juniors and senior that teaches them about national security", "grade":"upper","app":"https://www.gen-cyber.com/camps/","key":"compsci"},{"role":"opp", "location":"['PA']","name":"MESA: Aquaponics (Engineering Urban Sustainability)","description":"The MESA Saturday Academy in Urban Sustainability, Agriculture and Responsibility (AUSAR) is a pre-college high school program for 9-12th grade students enrolled in CTE agriculture, horticulture, IT, and engineering technology programs.   Students spend 10 weeks conducting research, developing technology skills and exploring undergraduate degrees in engineering and computer science that help sustain our critical infrastructure – access to clean water, nutritious food, viable transportation and renewable energy.", "grade":"","app":"https://pennsylvaniamesa.org/programs/","key":"engineering"},{"role":"sumpro" ,"location":"[PA]","name":"Short-Term Research Experience for Underrepresented Persons", "description":"Summer experience for highschool students and undergraduates looking to learn about research", "grade": "", "app":"https://www.niddk.nih.gov/research-funding/research-programs/diversity-programs/research-training-opportunities-students/short-term-research-experience-underrepresented-persons-step-up", "key":"med" }, {"role":"intern","location":"['NJ']","name":"Liberty Science Center Partners in Science Program","description":"The program pairs students with mentors in science, health, and technical fields and challenges them to participate in ongoing research and independent projects", "grade":"", "app": "https://lsc.org/education/for-teachers/partners-in-science", "key": "science"}, {"role":"intern", "location":"['NJ']", "name": "Princeton Plasma Physics Lab Summer Internship Program", "description":"Offers students the chance to work on a project with a member of the research or engineering staff","grade":"upper", "app":"https://www.pppl.gov/education/science-education/programs/high-school-semester-long-internship-high-school-summer", "key": "science"},{"role" : "intern", "location": "['PA']", "name": "NBC10 News Intern", "description": "The internships provide a professional learning experience and an opportunity for students to explore careers in the broadcast industry", "grade": "college", "app": "https://sjobs.brassring.com/TGnewUI/Search/home/HomeWithPreLoad?partnerid=25354&siteid=5108&PageType=JobDetails&jobid=457754&codes=AD007#jobDetails=457754_5108", "key": "english" }, {"role" : "intern", "location": "['PA']", "name" : "Fall Editorial Intern, Running Press", "description": "The intern will assist the editorial staff in both the Adult, Kids, and Miniature Editions imprints", "grade": "college", "app": "http://jobs.jobvite.com/careers/hachette-book-group/job/oiuCafwi?__jvst=Job+Board&__jvsd=Indeed", "key": "english"},{ "role":"intern","location":"['PA']","name":"Summer Research Opportunities Program(SROP)", "description":"Giving underprivileged students a chance to work in a laboratory environment developing many skill sets","grade":"college", "app":"http://gradschool.psu.edu/diversity/srop/", "key": "med"},{"role":"intern","location": "['NJ']", "name": "RISE at Rutgers","description":" 8 week research internship opportunity at Rutgers University","grade":"college":  "app": "https://www.rise.rutgers.edu/", "key": "med"}, { "role": "intern", "location": "['DE']", "name": "OSCAR Research Program", "description": " Designed for students with an interest in biomedical research", "grade": "upper", "app": "https://oscar.desu.edu/programs/research-internship/", "key" :"med"}, { "role":"intern","location": "['PA']", "name": "Child Life Internship","description":"A comprehensive child life internship training program, accredited by the Association of Child Life Professionals, is offered three times a year at Children's Hospital of Philadelphia. Interns are involved in the planning and implementation of a developmentally and emotionally supportive programming for infants, children and adolescents.", 'grade':"college", "app": "https://www.chop.edu/pages/child-life-internship", "key": "med"}]
function onInput() {
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
   window.localStorage.setItem('state', value)
   window.location.href = "html/optunity.html";
   /*for (var i = 0; i < listjobs.length; i++){
     if (listjobs[i]['location'].includes(value)){
     jobs.push(listjobs[i])*/
  /* }*/
   //console.log('reaches end of func')
 /*}*/
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
function wipe(){
  listint = []
  listrole = []
  listgrade = []
}

var listmatch = [];
function test() {
  console.log(jobs.length)
var state = window.localStorage.getItem('state')
  //document.getElementById("joblist").innerHTML = "";
  for (var i = 0; i < jobs.length; i++) {
    if((listrole.includes(jobs[i]['role']) || listrole == '') && (listint.includes(jobs[i]['key'])|| listint == '') && (listgrade.includes(jobs[i]['grade'])|| jobs[i]['grade'] =='' || listgrade == '') && jobs[i]['location'].includes(state)) {
      listmatch.push(jobs[i]);
      console.log(jobs[i]);
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
