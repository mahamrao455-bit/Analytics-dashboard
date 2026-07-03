// ================================
// REVENUE CHART
// ================================

const revenueCtx = document.getElementById("revenueChart");

if (revenueCtx) {

new Chart(revenueCtx, {
    type: "line",

    data: {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ],

        datasets: [{
            label: "Revenue",

            data: [
                12000,
                18000,
                15000,
                26000,
                22000,
                30000,
                28000,
                38000,
                42000,
                47000,
                52000,
                61000
            ],

            borderColor: "#7c3aed",

            backgroundColor: "rgba(124,58,237,0.12)",

            fill: true,

            borderWidth: 4,

            tension: 0.45,

            pointRadius: 5,

            pointHoverRadius: 8,

            pointBackgroundColor: "#7c3aed"
        }]
    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {
                display: false
            }

        },

        scales: {

            x: {

                grid: {
                    display: false
                }

            },

            y: {

                beginAtZero: true,

                grid: {
                    color: "#edf2f7"
                }

            }

        }

    }

});

}

// ================================
// TRAFFIC SOURCES CHART
// ================================

const trafficCtx =
document.getElementById("trafficChart");

if (trafficCtx) {

new Chart(trafficCtx, {

    type: "doughnut",

    data: {

        labels: [
            "Organic",
            "Social",
            "Email",
            "Direct"
        ],

        datasets: [{

            data: [
                42,
                28,
                14,
                16
            ],

            backgroundColor: [
                "#7c3aed",
                "#06b6d4",
                "#22c55e",
                "#f59e0b"
            ],

            borderWidth: 0

        }]

    },

    options: {

        responsive: true,

        cutout: "72%",

        plugins: {

            legend: {

                position: "bottom",

                labels: {

                    padding: 20,

                    usePointStyle: true

                }

            }

        }

    }

});

}

// ================================
// CARD ANIMATION
// ================================

const cards =
document.querySelectorAll(".stats-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0) scale(1)";

    });

});

// ================================
// COUNTER ANIMATION
// ================================

const counters =
document.querySelectorAll(".stats-card h2");

counters.forEach(counter => {

    const originalText =
    counter.innerText;

    const target =
    parseInt(
    originalText.replace(/[^\d]/g, "")
    );

    let count = 0;

    const speed = target / 80;

    const updateCount = () => {

        count += speed;

        if (count < target) {

            counter.innerText =
            Math.floor(count)
            .toLocaleString();

            requestAnimationFrame(
            updateCount
            );

        }

        else {

            counter.innerText =
            originalText;

        }

    };

    updateCount();

});

// ================================
// FAKE LIVE NOTIFICATION
// ================================

setTimeout(() => {

console.log(
"New Order Received"
);

}, 5000);