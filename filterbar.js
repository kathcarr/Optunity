
var jobs = [{"role":"intern", "location":"[NJ,PA,DE]","name":"Bank of America Student Leaders","grade":"[11,12]","app":"https://about.bankofamerica.com/en-us/global-impact/student-leader-eligibility-criteria.html#fbid=EaSqu7HgIT5","key":"[business]","description":"Eight week paid summer internship for current highschool Juniors and Seniors at local companies and non-profits."
},{"role":"sumpro", "location":"[NJ,PA]","name":"GenCyber Camp","description":"Cyber Security camp for rising high school juniors and senior that teaches them about national security", "grade":"[11,12]","app":"https://www.gen-cyber.com/camps/","key":"compsci"},{"role":"opp", "location":"[PA]","name":"MESA: Aquaponics (Engineering Urban Sustainability)","description":"The MESA Saturday Academy in Urban Sustainability, Agriculture and Responsibility (AUSAR) is a pre-college high school program for 9-12th grade students enrolled in CTE agriculture, horticulture, IT, and engineering technology programs.   Students spend 10 weeks conducting research, developing technology skills and exploring undergraduate degrees in engineering and computer science that help sustain our critical infrastructure – access to clean water, nutritious food, viable transportation and renewable energy.", "grade":"[9,10,11,12]","app":"https://pennsylvaniamesa.org/programs/","key":"eng"}]
function test(){
  for (var i = 0; i < jobs.length; i++) {
    if(jobs[i]['role'] == 'intern') {
    console.log(jobs[i]['name']);
  }
  }

}


/*
function test() {
  var file = open('jobs.json','r' );
  var data = json.load(file);
  var request = new XMLHttpRequest();
  request.open('GET','jobs.json', true);
  for(job in data)
   if (job['role'] == "intern")
    console.log(job['name']);
    console.log(job['description']);
    console.log(job['app']);
  }*/
