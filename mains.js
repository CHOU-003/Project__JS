const body = document.querySelector('body');
const topList = document.querySelector('#icon__list');
const iconTour = document.querySelector('.icon__tour');

body.addEventListener('click', function () {
    topList.classList.add('slide-up');
    topList.classList.remove('slide-up2');
    iconTour.style.display = 'block';
});

iconTour.addEventListener('click', function (event) {
    event.stopPropagation();
    topList.classList.add('slide-up2');
    topList.classList.remove('slide-up');
    iconTour.style.display = 'none';
});

// List ICON
const btnQuote = document.querySelector('.btn-quote');
const btnModal = document.querySelector('.btn-modal');
const btnTask = document.querySelector('.btn-task');
const btnAcor = document.querySelector('.btn-acor');
const btnClock = document.querySelector('.btn-clock');
const bodyClock = document.querySelector('.body__clock');
const contentQuote = document.querySelector('.quote__container');
const contentBodyac = document.querySelector('.body__ac');
const contentModal = document.querySelector('.body__modal');
const contentTodo = document.querySelector('.body__list');
const contentClock = document.querySelector('.body__clock');

    
    btnTask.addEventListener('click', function() {
        contentTodo.style.display = 'block'
        contentQuote.style.display = 'none';
        contentBodyac.style.display = 'none';
        contentModal.style.display = 'none';
        contentClock.style.display = 'none';
    });
    
   btnModal.addEventListener('click', function() {
    contentModal.style.display = 'block';
    contentQuote.style.display = 'none';
    contentBodyac.style.display = 'none';
    contentTodo.style.display = 'none';
    contentClock.style.display = 'none';
   });
    
    btnAcor.addEventListener('click', function() {
            contentBodyac.style.display = 'block';
            contentQuote.style.display = 'none';
            contentModal.style.display = 'none';
            contentTodo.style.display = 'none';
            contentClock.style.display = 'none';
    });
    
    btnClock.addEventListener('click', function() {
        contentClock.style.display = 'block'
        contentQuote.style.display = 'none';
        contentBodyac.style.display = 'none';
        contentTodo.style.display = 'none';
        contentModal.style.display = 'none';
    });
    

btnQuote.addEventListener('click', function() {
    contentQuote.style.display = 'block';
    contentTodo.style.display = 'none';
    contentBodyac.style.display = 'none';
    contentModal.style.display = 'none';
    contentClock.style.display = 'none';
});



const startStopBtn = document.querySelector('#startStopBtn')
const resetBtn = document.querySelector('#reset')
const backTime = document.querySelector('#back__time')
const foTime = document.querySelector('#fo__time')


let seconds =0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;


let interVal = null;
let timeStatus = 'stopped';

function stopWatch() {

    seconds++;

    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10){
        leadingSeconds = '0' + seconds.toString();
    }else {
        leadingSeconds = seconds
    }

    if(minutes < 10){
        leadingMinutes = '0' + minutes.toString();
    }else {
        leadingMinutes = minutes
    }

    if(hours < 10){
        leadingHours = '0' + hours.toString();
    }else {
        leadingHours = hours
    }

    let displayTime = document.getElementById('times').innerText =
    leadingHours + ':' + leadingMinutes + ':' + leadingSeconds;
}

// window.setInterval(stopWatch, 1000)

startStopBtn.addEventListener('click', function() {

    if(timeStatus === 'stopped'){
        interVal = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = 
        '<i class="fas fa-pause" id="stop"></i>' ;
        timeStatus = 'started';
    }else {
        window.clearInterval(interVal)
        document.getElementById('startStopBtn').innerHTML = 
        '<i class="fas fa-play" id="play"></i> ';
        timeStatus = 'stopped'
    }

})

resetBtn.addEventListener('click', function() {

    window.clearInterval(interVal);
    seconds =0;
    minutes=0;
    hours=0;

    document.getElementById('times').innerHTML = '00:00:00';

})

backTime.addEventListener('click', function(){
    seconds -= 10; 
    if(minutes > 0){
        if (seconds <= 0) {
            minutes--;
            seconds += 60;
        }
    }
    else {
        seconds = Math.max(seconds, 0)
    }
})


foTime.addEventListener('click', function(){
    seconds += 10;

    if (seconds >= 60) {
      minutes++;
      seconds -= 60;
    }
})


// TO DO LIST

const addTask = document.getElementById('add__task')
const taskContainer = document.getElementById('task__container')
const inputTask = document.getElementById('input__task')

function addTaskName(){

    let task = document.createElement('div');
    task.classList.add('task')


    let li = document.createElement('li')
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="icon-item fas fa-check"></i>';
    checkButton.classList.add('checkTask')
    task.appendChild(checkButton)

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="icon-item fas fa-trash-alt"></i>';
    deleteButton.classList.add('deleteTask')
    task.appendChild(deleteButton)


    if(inputTask.value === ''){
        alert('Please Enter Task !!!')
    }else {
        taskContainer.appendChild(task)
    }

    inputTask.value = "";
    

    checkButton.addEventListener('click', function() {

        checkButton.parentElement.style.textDecoration = 'line-through'

    })


    
    deleteButton.addEventListener('click', function(e) {
    let target = e.target;
        target.parentNode.remove();
    })


}

addTask.addEventListener('click', addTaskName)

// QUOTE

const btn = document.querySelector('#new__quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: '"Ăn mừng thành công cũng tốt, nhưng quan trọng hơn là phải biết chú ý đến những bài học của sự thất bại"',
        person: 'Bill Gates'
    },
    {
        quote: '"Thêm một chút bền bỉ, một chút nỗ lực, và điều tưởng chừng như là thất bại vô vọng có thể biến thành thành công rực rỡ"',
        person: 'Elbert Hubbard'
    },
    {
        quote: '"Cái người đời thường thiếu là ý chí chứ không phải là sức mạnh"',
        person: 'Victor Hugo'
    },
    {
        quote: '"Anh có thể bắt trượt mục tiêu nếu nhắm quá cao hoặc quá thấp"',
        person: 'Thomas Fuller'
    },
    {
        quote: '"Để thành công, hãy chớp lấy cơ hội cũng nhanh như khi vội vã kết luận"',
        person: 'Benjamin Franklin'
    },
    {
        quote: '"Chúng tôi sẽ làm tất cả để thành công. Đơn giản bởi chúng tôi là những người trẻ và chúng tôi không bao giờ biết từ bỏ."',
        person: 'Jack Ma'
    },
    {
        quote: '"Đời là cuộc đấu tranh liên tục; nó luôn được cải biên với những khó khăn mới. Và chúng ta sẽ chiến thắng nhưng bao giờ cũng phải trải giá."',
        person: 'Mirko Gomex'
    },
    {
        quote: '"Ăn mừng thành công cũng tốt, nhưng quan trọng hơn là phải biết chú ý đến những bài học của sự thất bại."',
        person: 'Bill Gates'
    },
    {
        quote: '"Thành công chỉ đến khi bạn làm việc tận tâm và luôn nghĩ đến những điều tốt đẹp."',
        person: 'A schwarzenegger'
    },
];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
})

// Modal
let openBtn = document.getElementById('open__btn')
let modalcontainer = document.getElementById('modal__container')
let closeBtn = document.getElementById('close__btn')

openBtn.addEventListener('click', function(){

    modalcontainer.style.display = 'block';
});

closeBtn.addEventListener('click', function(){

    modalcontainer.style.display = 'none';
});

window.addEventListener('click', function(e){

    if(e.target === modalcontainer){
        modalcontainer.style.display = 'none'
    }
})

// ACOMO
const accdordion = document.getElementsByClassName('content__container');


for(var i=0; i <accdordion.length; i++){

    accdordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}


 
 