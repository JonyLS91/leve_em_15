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
});
