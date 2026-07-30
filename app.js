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

                document.body.style.opacity = "1";

            },600);

        });

    },600);

});
