var inputvalue=document.querySelector('#cityinput')
var btn=document.querySelector('#add')
var city=document.querySelector('#description')
var descrip=document.querySelector('#temp')
var temp=document.querySelector('#wind')
var wind=document.querySelector('#wind')
apik="2949152298edb12bb3583812be4b3cf0"
function conversion(val)
{
    return(val - 273).toFixed(3)
}

btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
        {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspeed = data['wind']['speed']


            city.innerHTML=`weather of <span> ${nameval}<span>`
            temp.innerHTML=`temperature: <span> ${ conversion(tempature)} C</span>`
            description.innerHTML=`sky Conditions: <span>${descrip}<span>`
            wind.innerHTML=`wind Speed: <span>${wndspeed}km/h<span>`

        })

        .catch (err => alert('you entered wrong city name check it'))
})