document.addEventListener('DOMContentLoaded', function () {

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileBtn.classList.toggle('active');
        });
    }

    // FAQ Toggle
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('active');
        });
    });

    // Social Proof Notifications
    console.log('Notiflix script loaded');

    var position = "left-bottom";
    var color = "verde";
    var animation = "from-left";
    var product_name = "";
    var phrase = "começou o desafio Leve em 15!";
    var timeout = 4000;
    var type_name = "masc, fem";
    var msg_final = "";
    var min_time = 4;
    var max_time = 20;

    var names_masc = ['Jose', 'Joao', 'Antonio', 'Francisco', 'Carlos', 'Paulo', 'Pedro', 'Lucas', 'Luiz', 'Marcos', 'Luis', 'Gabriel', 'Rafael', 'Daniel', 'Marcelo', 'Bruno', 'Eduardo', 'Felipe', 'Rodrigo', 'Manoel', 'Mateus', 'Andre', 'Fernando', 'Fabio', 'Leonardo', 'Gustavo', 'Guilherme', 'Leandro', 'Tiago', 'Anderson', 'Ricardo', 'Marcio', 'Jorge', 'Alexandre', 'Roberto', 'Edson', 'Diego', 'Vitor', 'Sergio', 'Claudio', 'Matheus', 'Thiago', 'Geraldo', 'Adriano', 'Luciano', 'Julio', 'Renato', 'Alex', 'Vinicius', 'Rogerio', 'Samuel', 'Ronaldo', 'Mario', 'Flavio', 'Douglas', 'Igor', 'Davi', 'Manuel', 'Jeferson', 'Cicero', 'Victor', 'Miguel', 'Robson', 'Mauricio', 'Danilo', 'Henrique', 'Caio', 'Reginaldo', 'Joaquim', 'Benedito', 'Gilberto', 'Marco', 'Alan', 'Nelson', 'Cristiano', 'Elias', 'Wilson', 'Valdir', 'Emerson', 'Luan', 'David', 'Renan', 'Severino', 'Fabricio', 'Mauro', 'Jonas', 'Gilmar', 'Jean', 'Fabiano', 'Wesley', 'Diogo', 'Adilson', 'Jair', 'Alessandro', 'Everton', 'Osvaldo', 'Gilson', 'Willian', 'Joel', 'Silvio', 'Helio', 'Maicon', 'Reinaldo', 'Pablo', 'Artur', 'Vagner', 'Valter', 'Celso', 'Ivan', 'Cleiton', 'Vanderlei', 'Vicente', 'Arthur', 'Milton', 'Domingos', 'Wagner', 'Sandro', 'Moises', 'Edilson', 'Ademir', 'Adao', 'Evandro', 'Cesar', 'Valmir', 'Murilo', 'Juliano', 'Edvaldo', 'Ailton', 'Junior', 'Breno', 'Nicolas', 'Ruan', 'Alberto', 'Rubens', 'Nilton', 'Augusto', 'Cleber', 'Osmar', 'Nilson', 'Hugo', 'Otavio', 'Vinicios', 'Italo', 'Wilian', 'Alisson', 'Aparecido'];
    var names_fem = ['Maria', 'Ana', 'Francisca', 'Antonia', 'Adriana', 'Juliana', 'Marcia', 'Fernanda', 'Patricia', 'Aline', 'Sandra', 'Camila', 'Amanda', 'Bruna', 'Jessica', 'Leticia', 'Julia', 'Luciana', 'Vanessa', 'Mariana', 'Gabriela', 'Vera', 'Vitoria', 'Larissa', 'Claudia', 'Beatriz', 'Rita', 'Luana', 'Sonia', 'Renata', 'Eliane'];

    var option = {
        position: position,
        cssAnimationStyle: animation,
        plainText: false,
        timeout: timeout
    };

    function show_notification() {
        if (typeof Notiflix === 'undefined') return;

        if (type_name == "masc") {
            msg_final = "<strong>" + names_masc[Math.floor(Math.random() * names_masc.length)] + "</strong>";
        } else if (type_name == "fem") {
            msg_final = "<strong>" + names_fem[Math.floor(Math.random() * names_fem.length)] + "</strong>";
        } else {
            var array_aux = ["masc", "fem"];
            if (array_aux[Math.floor(Math.random() * array_aux.length)] == "masc") {
                msg_final = "<strong>" + names_masc[Math.floor(Math.random() * names_masc.length)] + "</strong>";
            } else {
                msg_final = "<strong>" + names_fem[Math.floor(Math.random() * names_fem.length)] + "</strong>";
            }
        }

        msg_final += " " + phrase + " " + product_name;

        if (color == "verde") {
            Notiflix.Notify.Success(msg_final, option);
        }
        if (color == "azul") {
            Notiflix.Notify.Info(msg_final, option);
        }
        if (color == "vermelho") {
            Notiflix.Notify.Failure(msg_final, option);
        }
        if (color == "amarelo") {
            Notiflix.Notify.Warning(msg_final, option);
        }

        var rand = Math.floor(Math.random() * (max_time - min_time + 1) + min_time);
        setTimeout(show_notification, rand * 1000);
    }

    // Start notifications after a short delay
    setTimeout(show_notification, 4000);

    // Carousel Logic
    const track = document.querySelector('.carousel-track');
    // Check if track exists to avoid errors on pages without carousel
    if (track) {
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.next-btn');
        const prevButton = document.querySelector('.prev-btn');

        const slideWidth = slides[0].getBoundingClientRect().width;

        // Arrange the slides next to one another
        const setSlidePosition = (slide, index) => {
            slide.style.left = slideWidth * index + 'px';
        };
        slides.forEach(setSlidePosition);

        const moveToSlide = (track, currentSlide, targetSlide) => {
            track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');
        };

        // When I click left, move slides to the left
        prevButton.addEventListener('click', e => {
            const currentSlide = track.querySelector('.current-slide');
            const prevSlide = currentSlide.previousElementSibling;

            // Loop back to last slide if at the beginning
            if (!prevSlide) {
                const lastSlide = slides[slides.length - 1];
                moveToSlide(track, currentSlide, lastSlide);
            } else {
                moveToSlide(track, currentSlide, prevSlide);
            }
        });

        // When I click right, move slides to the right
        nextButton.addEventListener('click', e => {
            const currentSlide = track.querySelector('.current-slide');
            const nextSlide = currentSlide.nextElementSibling;

            // Loop back to first slide if at the end
            if (!nextSlide) {
                const firstSlide = slides[0];
                moveToSlide(track, currentSlide, firstSlide);
            } else {
                moveToSlide(track, currentSlide, nextSlide);
            }
        });

        // Auto-play functionality (optional but recommended)
        setInterval(() => {
            const currentSlide = track.querySelector('.current-slide');
            const nextSlide = currentSlide.nextElementSibling;

            if (!nextSlide) {
                const firstSlide = slides[0];
                moveToSlide(track, currentSlide, firstSlide);
            } else {
                moveToSlide(track, currentSlide, nextSlide);
            }
        }, 5000); // Change slide every 5 seconds

        // Update slide position on resize
        window.addEventListener('resize', () => {
            const newSlideWidth = slides[0].getBoundingClientRect().width;
            slides.forEach((slide, index) => {
                slide.style.left = newSlideWidth * index + 'px';
            });
            // Re-center current slide
            const currentSlide = track.querySelector('.current-slide');
            track.style.transform = 'translateX(-' + currentSlide.style.left + ')';
        });
    }
    // Urgency Banner Logic
    const bannerDateElement = document.getElementById('banner-date');
    const bannerTimerElement = document.getElementById('banner-timer');

    if (bannerDateElement && bannerTimerElement) {
        // Set current date
        const today = new Date();
        const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
        bannerDateElement.textContent = `(${today.toLocaleDateString('pt-BR', dateOptions)})`;

        // Countdown Timer to Midnight
        function updateBannerTimer() {
            const now = new Date();
            const tomorrow = new Date();
            tomorrow.setHours(24, 0, 0, 0);

            const diff = tomorrow - now;

            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            const formattedHours = hours.toString().padStart(2, '0');
            const formattedMinutes = minutes.toString().padStart(2, '0');
            const formattedSeconds = seconds.toString().padStart(2, '0');

            bannerTimerElement.textContent = `${formattedHours}h ${formattedMinutes}m ${formattedSeconds}s`;
        }

        updateBannerTimer(); // Run immediately
        setInterval(updateBannerTimer, 1000); // Update every second
    }

});
