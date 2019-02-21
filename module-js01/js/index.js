'use strict'

const adminLogin = 'admin',
      adminPassword = 'm4ngo1zh4ackz0r',
      massageNegativeLogin = 'Доступ запрещен, неверный логин!',
      massageNegativePass = 'Доступ запрещен, неверный пароль!';
const cancelAlert = 'Отменено пользователем';

const massageEnter = 'Добро пожаловать!';

let logInDialog = prompt('Enter login');
if (logInDialog === null) {
        alert(cancelAlert);
    }   else if (logInDialog !== adminLogin) {
            alert(massageNegativeLogin);
    }   else {
        let enterPass = prompt('Enter password');
         if (enterPass === null) {
        alert(cancelAlert);
    }   else if (enterPass !== adminPassword) {
            alert(massageNegativePass);
    }   else {
        alert(massageEnter);
}
}


