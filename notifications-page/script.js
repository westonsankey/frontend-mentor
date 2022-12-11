const notificationCount = document.getElementById("notification-count");

const toggleReadButton = document.getElementById("toggle-read");
const notifications = document.getElementsByClassName("notification");
const activeNotifications = document.getElementsByClassName(
  "notification-active"
);

notificationCount.innerHTML = activeNotifications.length;

toggleReadButton.addEventListener("click", () => {
  const indicators = document.getElementsByClassName("unread-indicator");

  Array.from(indicators).forEach((el) => {
    if (el.style.display === "none") {
      el.style.display = "inline-block";
      toggleReadButton.innerHTML = "Mark all as read";
      notificationCount.innerHTML = notifications.length;
    } else {
      el.style.display = "none";
      toggleReadButton.innerHTML = "Mark all as unread";
      notificationCount.innerHTML = 0;
    }
  });

  Array.from(notifications).forEach((el) => {
    el.classList.toggle("notification-active");
  });
});
