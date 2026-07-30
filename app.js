const button = document.getElementById("enterButton");

button.addEventListener("click", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.innerHTML = `
        <div class="container">

            <h1>💚 Welcome 💚</h1>

            <h2>Xolile & Thembeka</h2>

            <p>Thank you for celebrating our love.</p>

            <p>20–21 March 2027</p>

            <br>

            <button id="storyButton">
                Our Story →
            </button>

        </div>
        `;

        document.body.style.opacity = "1";

        document.getElementById("storyButton").addEventListener("click", () => {

            document.body.style.opacity = "0";

            setTimeout(() => {

                document.body.innerHTML = `
                <div class="container">

                    <h1>Our Story ❤️</h1>

                    <p>
                    Every great love story begins with a single moment.
                    Ours became a journey filled with love, laughter,
                    faith and unforgettable memories.
                    </p>

                    <br>

                    <button id="countdownButton">
                        Continue →
                    </button>

                </div>
                `;

                document.body.style.opacity = "1";document.getElementById("countdownButton").addEventListener("click", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.innerHTML = `
        <div class="container">

            <h1>Countdown 💚</h1>

            <h2 id="countdown"></h2>

        </div>
        `;

        document.body.style.opacity = "1";

        startCountdown();

    },600);

});

            },600);

        });

    },600);

});function startCountdown(){

    const weddingDate = new Date("March 20, 2027 10:00:00").getTime();

    setInterval(() => {

        const now = new Date().getTime();

        const distance = weddingDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
        const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
        const seconds = Math.floor((distance % (1000*60)) / 1000);

        const countdown = document.getElementById("countdown");

        if(countdown){
            countdown.innerHTML =
            days + " Days<br>" +
            hours + " Hours<br>" +
            minutes + " Minutes<br>" +
            seconds + " Seconds";
        }

    },1000);

}
