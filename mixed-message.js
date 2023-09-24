let data = [
    {
        name: "Sir Qaisar",
        mode: "Instructor",
        message: "JavaScript tu bht asan h . Bs iski mechanics samj lo sb ho jaye ga ",
        studentsReview: "Dill wali emojie"

    },
    {
        name: "Sir Shahid",
        mode: "Co-ordinator",
        message: "All please join the class , Attendence 175 mins ,Marked absent ",
        studentsReview: "sir light nh h . sir gas chali gai h is liye net connect nh hora:)"

    },
    {
        name: "Sir khizar",
        mode: "Co-ordinator",
        message: "Yaar ap log mery sath shugal nh lagaty mein ja ra bs ab nh aon ga apki class mein ",
        studentsReview: "sir tusi jaa ry ho? tusi chaly jao ::))))"

    },
    {
        name: "Awais Ali",
        mode: "Batch mate",
        message: "Sir ap na hoty mein tu pagal hi hojata",
        studentsReview: "chuppppppp oye chupppp ina tu :)))))"

    },

    // and so on...
]
let html = ""

const displayMessage = (arr) => {
    let randomNumber = Math.floor(Math.random() * arr.length)
    for (let i = arr.length - 1; i < arr.length; i++) {
        html += ` <div class="message">
        <p>Name : ${arr[randomNumber].name}</p>
        <p>Designation :${arr[randomNumber].mode} </p>
        <p>Message : ${arr[randomNumber].message}</p>
        <p> Students Reviews: ${arr[randomNumber].studentsReview}</p>
    </div>`
    }
    return html
}
console.log(displayMessage(data));
document.querySelector(".display").innerHTML = html