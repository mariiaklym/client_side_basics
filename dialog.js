document.addEventListener('DOMContentLoaded', function() {
    if (document.body.id === 'last-page') {
        setupDraggableImages();
        setupImageBorderOnHover();
    }
});

function setupDraggableImages() {
    var draggedImg = null;
    var shiftX, shiftY;

    var routeImages = document.querySelectorAll('td img');
    routeImages.forEach(function(image) {
        image.addEventListener('mousedown', function(event) {
            draggedImg = event.target;
            shiftX = event.clientX - draggedImg.getBoundingClientRect().left;
            shiftY = event.clientY - draggedImg.getBoundingClientRect().top;
            draggedImg.style.position = 'absolute';
            draggedImg.style.zIndex = '1000';
            document.body.appendChild(draggedImg);
            moveAt(event.pageX, event.pageY);
            event.preventDefault();
        });

        document.addEventListener('mousemove', function(event) {
            if (draggedImg) {
                moveAt(event.pageX, event.pageY);
            }
        });

        document.addEventListener('mouseup', function() {
            if (draggedImg) {
                draggedImg.style.zIndex = '';
                draggedImg = null;
            }
        });

        function moveAt(pageX, pageY) {
            draggedImg.style.left = pageX - shiftX + 'px';
            draggedImg.style.top = pageY - shiftY + 'px';
        }
    });
}

function setupImageBorderOnHover() {
    var targetImage = document.querySelector('img[src="images/Trains.jpg"]');
    if (targetImage) {
        targetImage.addEventListener('mouseover', function(event) {
            event.target.style.border = "3px solid #855E42";
        });

        targetImage.addEventListener('mouseout', function(event) {
            if (!event.relatedTarget || !event.target.contains(event.relatedTarget)) {
                event.target.style.border = "";
            }
        });
    }
}

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

}
document.addEventListener('DOMContentLoaded', function() {
    // Перевіряємо, чи поточна сторінка є індексною сторінкою
    if (document.body.id === 'indexPage') {
        // Додаємо слухач подій до меню
        document.getElementById('menu').addEventListener('click', function(event) {
            var action = event.target.getAttribute('data-action');
            if (action) {
                switch(action) {
                    case 'userDialog':
                        userDialog();
                        break;
                    case 'showDeveloperInfo':
                        // Припустимо, що ім'я та прізвище розробника вже відомі
                        showDeveloperInfo('Клименко', 'Марія');
                        break;
                    case 'compareStrings':
                        compareStrings();
                        break;
                    default:
                        console.log('Невідома дія:', action);
                }
            }
        });
    }
});

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

        // Припустимо, що на вашій сторінці є елемент з ID "demo"
        var elementById = document.getElementById('top');
        console.log(elementById); // Виведе в консоль елемент з ID "demo"

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

function changeTextColor(element) {
        element.style.color = '#855E42';
    }

document.getElementById('mouseOverTextJS').onmouseover = function() {
        this.style.color = '#654321';
    };

document.addEventListener('DOMContentLoaded', function() {
    // Отримуємо доступ до елемента
    var backToTopLink = document.querySelector('.back-to-top');

    // Створюємо об'єкт для обробки подій
    var backToTopHandler = {
        handleEvent: function(event) {
            // Перевіряємо тип події
            switch(event.type) {
                case 'mouseover':
                    // Змінюємо стиль при наведенні курсору
                    event.currentTarget.style.fontWeight = 'bold';
                    event.currentTarget.style.fontSize = '20px';
                    console.log('Миша наведена на:', event.currentTarget);
                    break;
                case 'mouseout':
                    // Повертаємо стиль до початкового стану
                    event.currentTarget.style.fontWeight = '';
                    event.currentTarget.style.fontSize = '';
                    console.log('Миша покинула елемент:', event.currentTarget);
                    break;
            }
        }
    };

    // Призначаємо обробники подій з використанням створеного об'єкта
    backToTopLink.addEventListener('mouseover', backToTopHandler);
    backToTopLink.addEventListener('mouseout', backToTopHandler);

    //backToTopLink.removeEventListener('mouseover', backToTopHandler);
    //backToTopLink.removeEventListener('mouseout', backToTopHandler);
});

document.getElementById('excursionOptions').onclick = function(event) {
    // Ensure the click is on a list item
    if (event.target.tagName === 'LI') {
        // Remove highlight from all items
        let items = this.querySelectorAll('li');
        items.forEach(function(item) {
            item.style.backgroundColor = ''; // Reset background color
        });
        
        // Highlight the clicked item
        event.target.style.backgroundColor = 'white'; // Set a new background color
    }
};


document.addEventListener('DOMContentLoaded', function() {
    var excursionOptions = document.getElementById('excursionOptions');

    excursionOptions.addEventListener('click', function(event) {
        var target = event.target;

        // Перевіряємо, чи клікнуто саме на елемент, що має потрібний data-action
        if (target.getAttribute('data-action') === 'selectExcursion') {
            // Скидаємо підкреслення для всіх елементів
            var items = this.querySelectorAll('li');
            items.forEach(function(item) {
                item.style.textDecoration = ''; // Видалення підкреслення
                item.style.fontWeight = ''; // Повернення до звичайної товщини шрифту
            });

            // Підкреслюємо та робимо текст жирнішим для клікнутого елемента
            target.style.textDecoration = 'underline'; // Додавання підкреслення
            target.style.fontWeight = 'bold'; // Збільшення товщини шрифту
        }
    });
});