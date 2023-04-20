//FORM js
const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
	
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

var form = document.getElementById('form')

form.addEventListener('submit', function(event){
	event.preventDefault() //prevents the form from autosubmitting

	var name = document.getElementById('name').value
	console.log(name)
	
	var gender = document.getElementById('gender').value
	console.log(gender)
	
	var age = document.getElementById('age').value
	console.log(age)
	
	var weight = document.getElementById('weight').value
	console.log(weight)
	
	var highBP = document.getElementById('highBP').value
	console.log(highBP)
	
	var highChol = document.getElementById('highChol').value
	console.log(highChol)
	
	var smoker = document.getElementById('smoker').value
	console.log(smoker)
	
	var stroke = document.getElementById('stroke').value
	console.log(stroke)
	
	var HeartDiseaseorAttack = document.getElementById('HeartDiseaseorAttack').value
	console.log(HeartDiseaseorAttack)
	
	var PhysActivity = document.getElementById('PhysActivity').value
	console.log(PhysActivity)
	
	var Diffwalk = document.getElementById('DiffwalkVeggies').value
	console.log(Diffwalk)
	
	var Veggies = document.getElementById('VeggiesFruits').value
	console.log(Veggies)
	
	var Fruits = document.getElementById('Fruits').value
	console.log(Fruits)
	
	var HeavyAlcoholConsumption = document.getElementById('HeavyAlcoholConsumption').value
	console.log(HeavyAlcoholConsumption)
	
  
})

