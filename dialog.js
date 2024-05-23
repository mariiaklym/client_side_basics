if (document.body.id === 'indexPage') {
    function userDialog() {
        // Оскільки ім'я користувача вже запитано, продовжимо діалог
        var userWantsToKnowMore = confirm("Бажаєте дізнатися більше про Київ?");
        
        while(userWantsToKnowMore) {
            var topic = prompt("Про що ви хотіли б дізнатися? Варіанти: 'історія', 'визначні місця', 'культура'.");

            switch(topic) {
                case "історія":
                    alert("Київ - столиця України, заснована в 5 столітті.");
                    break;
                case "визначні місця":
                    alert("Відомі визначні місця Києва: Києво-Печерська лавра, Софійський собор, Майдан Незалежності.");
                    break;
                case "культура":
                    alert("Київ відомий своїми культурними заходами, музеями та театрами.");
                    break;
                default:
                    alert("Вибачте, ми не маємо інформації про це. Спробуйте щось інше.");
            }

            userWantsToKnowMore = confirm("Бажаєте дізнатися щось ще?");
        }

        alert("Дякуємо за ваш інтерес до Києва!");
    }

    // Функція виводу інформації про розробника
    function showDeveloperInfo(lastName, firstName, position = "Веб-розробник") {
        alert("Розробник: " + lastName + " " + firstName + "\nПосада: " + position);
    }

    // Функція порівняння двох рядків
    function compareStrings() {
        var string1 = prompt("Введіть перший рядок:");
        var string2 = prompt("Введіть другий рядок:");
        if (string1.length > string2.length) {
            alert("Більший рядок: " + string1);
        } else if (string1.length < string2.length) {
            alert("Більший рядок: " + string2);
        } else {
            alert("Рядки рівні за довжиною.");
        }
    }

    // Виклик функції "Діалог з користувачем" при завантаженні сторінки
    window.onload = function() {
        userDialog();
        showDeveloperInfo("Клименко", "Марія");
        compareStrings();
    };
}

document.addEventListener('DOMContentLoaded', function() {
    // Перевірка наявності ID сторінки
    if (document.body.id === 'hotelsPage') {
        // Збереження поточного кольору фону
        var originalBackgroundColor = document.body.style.backgroundColor;

        // Зміна кольору фону
        document.body.style.backgroundColor = 'white'; 

        // Повернення до оригінального кольору фону через 30 секунд
        setTimeout(function() {
            document.body.style.backgroundColor = originalBackgroundColor;
        }, 30000); // 30000 мілісекунд = 30 секунд

        //location.href = 'https://uk.wikipedia.org/wiki/Київ';

        
        var elementById = document.getElementById('top');
        console.log(elementById); 

        var allLinks = document.querySelectorAll('a');
        console.log(allLinks); // Виведе NodeList всіх елементів <a> на сторінці

        document.getElementById("description").innerHTML = "Вибір житла відіграє важливу роль у будь-якій поїздці, забезпечуючи не тільки відпочинок, але й впливаючи на враження від місця. Різноманітність готелів, хостелів та апартаментів дозволяє знайти ідеальний варіант як у центрі, так і на околицях міста.";

        document.getElementById("backToTopLink").outerHTML = "<a href='#top' class='back-to-top' style='font-weight: bold;'>Вгору</a>";
        
        var link = document.getElementById("places");
        link.firstChild.nodeValue = "Забронюйте готель у Києві тут";

        document.getElementById("top").textContent = "Найкращі готелі Києва";

        //document.write('<h2>Новий заголовок доданий через document.write</h2>');

        // Створення нового параграфа
        var newParagraph = document.createElement('p');
        var paragraphText = document.createTextNode('Кожен куточок Києва має свою унікальну історію та атмосферу');
        newParagraph.appendChild(paragraphText);
        newParagraph.style.textAlign = 'center';
        // Знаходження елемента з ідентифікатором 'description'
        var descriptionElement = document.getElementById('description');
        // Додавання параграфа після елемента 'description'
        descriptionElement.after(newParagraph);

        // Додавання тексту на початок опису готелів
        var newIntroText = 'Ваш пошук ідеального місця для відпочинку починається тут!  ';
        document.getElementById('description').prepend(newIntroText);

        var endText = ' Правильний вибір житла – це перший крок до незабутнього досвіду.';
        document.getElementById('description').append(endText);

        //var outdatedSection = document.querySelector(".back-to-top");
        //if (outdatedSection) {
        //    outdatedSection.remove();
        //}

        //var newFooterContent = document.createElement('div');
        //newFooterContent.innerHTML = `<p>Автор: Клименко Марія</p>`;
        //var oldFooterContent = document.querySelector('footer .bottom-bar');
        //oldFooterContent.replaceWith(newFooterContent);
    }
});
