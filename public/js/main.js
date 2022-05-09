// console.log("This is the weather Page");
//https://api.openweathermap.org/data/2.5/weather?q=Amravati&units=metric&appid=2e23eb81766909db131756510c4526d1




const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const temp = document.getElementById('temp_real');
const city_name = document.getElementById('city_name');

const dataHide = document.querySelector('.data_hide')
const temp_status = document.getElementById('temp_status');

const day = document.getElementById('day');
const today_date = document.getElementById('today_date');


async function getInfo(e) {
    e.preventDefault();

    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = "Please write the name of your City";
        dataHide.classList.add('data_hide');
    }
    
    
    else {
        try {
            
            let url = ` https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=2e23eb81766909db131756510c4526d1`;
            
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            
            
            
            temp.innerHTML = arrData[0].main.temp;
            temp_status.innerHTML = arrData[0].weather[0].main;
            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
            
            const tempMood = arrData[0].weather[0].main;
            
            dataHide.classList.remove('data_hide');
            //Condition to check weather is sunny or cloudy
            if (tempMood == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #ebb316;'></i>";

            }
            else if (tempMood == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #2072a3;'></i>";
            }

            else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }
            else {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }
            cityName.value = " ";
            
        } catch (error) {
            city_name.innerText = "Plz enter City Name properly";
            dataHide.classList.add('data_hide');
        }

    }
};


// Adding Date and Time
function getCurrentDate() {
    let weekDay = new Array(7);
    weekDay[1] = "Sunday";
    weekDay[2] = "Monday";
    weekDay[3] = "Tuesday";
    weekDay[4] = "Wednesday";
    weekDay[5] = "Thursday";
    weekDay[6] = "Friday";
    weekDay[7] = "Saturday";

    let currentTime = new Date();
    let currentDay = weekDay[currentTime.getDay() + 1];
    day.innerHTML = currentDay;
    // console.log(currentDay);

}

function getMonth() {
    let months = [
        "January",
        "Febraury",
        "March",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    let currentMonth = new Date();
    let displayMonth = months[currentMonth.getMonth()];
    let date = currentMonth.getDate();

    console.log(date);
    today_date.innerText = date + " " + displayMonth;

    // console.log(displayMonth);

};


getCurrentDate();
getMonth();


submitBtn.addEventListener('click', getInfo);





