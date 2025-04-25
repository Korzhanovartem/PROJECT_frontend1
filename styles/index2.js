const toMainPage = document.getElementById('ToMainPage');
if (toMainPage) {
  toMainPage.addEventListener('click', () => {
    location.pathname = '/index.html';
  });
}

const events = [
    {
      title: "All Nations - Manhattan Missions Church Bible Study",
      category: "Hobbies and Passions",
      distance: "(5 km)",
      date: "WED, MAR 13, 11:30 PM UTC",
      image: "./second1.png"
    },
    {
      title: "INFJ Personality Type - Coffee Shop Meet & Greet",
      category: "Hobbies and Passions",
      distance: "(25 km)",
      date: "SAT, MAR 23, 3:00 PM UTC",
      image: "./second2.png"
    },
    {
      title: "NYC AI Users, AI Tech Talks, Demo & Social: RAG Search and Customer Expirience",
      category: "Technology",
      distance: "(50 km)",
      date: "WED, MAR 13, 11:30 PM UTC",
      image: "./second3.png"
    },
    {
      title: "Book 40+ Appointments Per Month Using AI and Automation",
      category: "Technology",
      distance: "(10 km)",
      date: "WED, MAR 13, 11:30 PM UTC",
      image: "./second4.png"
    },
    {
        title: "Dump writing group weekly meetup",
        category: "Hobbies and Passions",
        distance: "(20 km)",
        date: "WED, MAR 13, 11:00 PM UTC",
        image: "./second5.png"
    },
    {  
        title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
        category: "Hobbies and Passions",
        distance: "(15 km)",
        date: "WED, MAR 13, 11:30 PM UTC",
        image: "./second6.png"
    }
];

function renderEvents(eventsToRender) {
  const container = document.getElementById("eventCards");
  container.innerHTML = ""; 

  eventsToRender.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
      <img src="${event.image}" alt="${event.title}">
      <div class="event-card-content">
        <h3>${event.title}</h3>
        <p class="event-date">${event.date}</p>
        <p class="event-distance">${event.distance}</p>
        <p class="event-category">${event.category}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

document.getElementById("category-filter").addEventListener("change", function () {
  filterEvents();
});

document.getElementById("distance-filter").addEventListener("change", function () {
  filterEvents();
});

function filterEvents() {
  const selectedCategory = document.getElementById("category-filter").value;
  const selectedDistance = document.getElementById("distance-filter").value;

  let filteredEvents = events;

  if (selectedCategory !== "All") {
    filteredEvents = filteredEvents.filter(event => event.category === selectedCategory);
  }

  if (selectedDistance !== "Any") {
    filteredEvents = filteredEvents.filter(event => {
      const eventDistance = parseInt(event.distance.replace(/\D/g, ''), 10);

      return eventDistance <= parseInt(selectedDistance, 10);
    });
  }

  renderEvents(filteredEvents);
}

document.addEventListener("DOMContentLoaded", () => {
  renderEvents(events);
});
