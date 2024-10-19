let input=document.getElementsByTagName('input')[0];
let search=document.getElementsByTagName('button')[0];
let cityTag=document.querySelector('.city');
let tempTag=document.querySelector('.temp');
let descTag=document.querySelector('.desc');
let windTag=document.querySelector('.wind');
let humTag=document.querySelector('.hum');
let img=document.getElementsByTagName('img')[0];

search.addEventListener('click', ()=>{
    let cityA = input.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityA}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
        response => response.json(),
    ).then(
        data =>{
            let city =data.name;
            let temp =data.main.temp;
            let humi =data.main.humidity;
            let weather =data.weather[0].description;
            let main = data.weather[0].main;
            let wind =data.wind.speed;
            cityTag.innerText=city;
            tempTag.innerText=Math.floor(temp)+"C";
            descTag.innerText=weather;
            windTag.innerText=wind+"km/h";
            humTag.innerText=humi+"%";
            if( main == "Clouds"){
                img.src="https://cdn-icons-png.flaticon.com/512/4834/4834559.png"
            }else if(main == "Clear"){
                img.src="https://cdn-icons-png.flaticon.com/512/3222/3222800.png"
            }else if(main == "Snow"){
                img.src="https://static.vecteezy.com/system/resources/previews/007/488/951/original/light-snow-color-icon-winter-snowy-weather-cloud-and-snowflake-weather-forecast-isolated-illustration-vector.jpg"
            }else if(main == "Rain"){
                img.src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-512.png"
            }else if(main == "storm"){
                img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREigFVnX5-Yc3-64ldK27vMS5YTN7kLSZRig&s"
            }
        }
    );
});

// api ->  tusgailan beldsen baigaa datag awahin tuld holboh heregsel
// frtch('url');-> api-ruu req ywuulh
// .then() -> huseltiin hariu, (promise) gej bas helj bolno
// 200 -> approved; 404, 505, 600 -> denied
// .json()-> zambraagui datag object bolgon gargaj irdeg
fetch('https://fakestoreapi.com/products').then(
    response => response.json()
).then(
    product => {
        console.log(product);
        console.log(product[0].title);
        console.log(product[product.length-1].rating.rate);
        let title = product.map(product=>product.title);
        console.log(title);
    }
);
// .map()-> array-> odoo bga array buyu massive iig shine aaray-ruu hurvuulne
let number =[2, 4, 7, 6];
let double =number.map(number=> number*2);
console.log(double);
fetch('https://fakestoreapi.com/users').then(
    response => response.json()
).then(
    product =>{
        console.log(product);
        let name = product.map(product=>product.name.firstname);
        console.log(name);
    }
);

