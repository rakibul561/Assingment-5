let count = 40;
const allSit = document.getElementsByClassName("set");
for (const sit of allSit) {
    sit.addEventListener("click", function () {
        count = count - 1;
        if (count >= 0) {

            document.getElementById("sit-count").innerText = count;
        }
        else {
            alert('this buses sit fillap');
        }
        // console.log(count)
    });
}

let done = 0;
const sitDone = document.getElementsByClassName("set");
for (const sit of sitDone) {
    sit.addEventListener("click", function (element) {
        done = done + 1;

        // const selectSit=document.getElementById()

        // const clickSit=document.getElementById('click-sit').innerText=sitName;

        setByText("sit-done", done);
    });
}

function setByText(id, value) {
    document.getElementById(id).innerText = value;
}

let sum = 0;
const allBtn = document.getElementsByClassName('set');
for (const btn of allBtn) {

    btn.addEventListener('click', function handler(event) {
        sum += 1;
        const sets = event.target.innerText;
        console.log(sets);

        const item = 'economy';
        const price = 550;
        showClassSeat('newSide', sets, item, price);

        if (sum <= 4) {
            // alert('this sit is not allow');
            event.target.classList.add('bg-green-400');
            calTotal('total-cost', price);

            grandTotal('grand-total', price);
            availableSit('sit-available');
            event.target.setAttribute("disabled", true);
        }
        else {
            if (sum === 5) {
                alert('this sit is not allow');

            }

        }
    })
}




function start() {
    HideElementById('home');
    showElementById('sender');



}