const notifications_no = document.getElementById("notifications__no");
const mark_all_as_read = document.getElementById("mark-all-as-read");
const unread = document.querySelectorAll(".unread");
const notifications_red_circle = document.querySelectorAll(".notifications__red-circle");

mark_all_as_read.addEventListener("click", function(){
    for (let i = 0; i < unread.length; i++) {
        unread[i].classList.remove("unread");
        notifications_red_circle[i].style.display = "none";
    }

    notifications_no.style.display = "none";
})
