describe('Тестирование сайта https://staya.dog/', function () {

  it('Проверка корректной работы авторизации сайта https://staya.dog/ c невалидным паролем', function () {
     cy.visit('https://staya.dog/');
     cy.get('button.BF2022Modal__closeButton').click();
     cy.get('.header-bottom__right--link').click();
     cy.get('.auth-form > form > [type="email"]').type('aliya848@mail.ru');
     cy.get('.auth-form > form > [type="password"]').type('фbcd256Abcd');
     cy.get('.auth-form__submit > .s-button__content').click();
     cy.contains('Невозможно войти с предоставленными учетными данными')
     })
})