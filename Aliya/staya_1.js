describe('Тестирование сайта https://staya.dog/', function () {

  it('Проверка корректной работы авторизации сайта https://staya.dog/ c валидным паролем', function () {
     cy.visit('https://staya.dog/');
     cy.get('button.BF2022Modal__closeButton').click();
     cy.get('.header-bottom__right--link').click();
     cy.get('.auth-form > form > [type="email"]').type('aliya848@mail.ru');
     cy.get('.auth-form > form > [type="password"]').type('Abcd256Abcd');
     cy.get('.auth-form__submit > .s-button__content').click();
     cy.contains('Мои заказы');
     cy.get('button.profile__nav-link').click();
     cy.get('button.s-button_theme-dark').click();
     })
})

