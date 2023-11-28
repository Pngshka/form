export const REQUIRED_MESSAGE = "заполни поле";
export const FORMAT_MESSAGE = "неправильный формат";
const SPACE_MESSAGE = `Поле "Пароль" не может содержать пробел`;
const MIN_LENGTH = "Минимальная длина 6 символов";
const PASSWORD_REPEAT = "Введенные пароли не совпадают";
const PHONE = "Номер телефона введён некорректно";
const MESSAGE = 'Сообщение должно содержать текст "ananas" или "AnAnAs"';
const NAME = "Имя должно содержать только кириллические символы";

/**
 * @param {string|{message}} name
 * @return {{required: *}}
 */
export function required(name) {
  return {
    required: name?.message || REQUIRED_MESSAGE
  }
}

export function checkPhone() {
  return {
    validate(val) {
      if (/[a-zA-Zа-яА-Я]+/.test(val) || val.match(/\d/g)?.join("").length !== 11)
        return PHONE;
      return true
    }
  }
}
export function email(name) {
  return {
    ...required(name),
    pattern: {
      value: /.+@.+\..+/,
      message: FORMAT_MESSAGE
    },
  }
}

export function password(getValue) {
  return {
    validate(val) {
      if (!val) {
        return REQUIRED_MESSAGE
      }
      if (/\s/.test(val)) {
        return SPACE_MESSAGE;
      }
      if (val.length < 6) {
        return MIN_LENGTH;
      }
      if (getValue && getValue() !== val) {
        return PASSWORD_REPEAT;
      }

      return true;
    }
  }
}

export function name() {
  return {
    validate(name) {
      var namePattern = /^[а-яА-ЯёЁ]+$/;

      if (!name.match(namePattern)) {
        return NAME;
      } else return true;
    }
  }
}

export function message() {
  return {
    validate(message) {
      var messagePattern = /ananas|AnAnAs/;

      if (!message.match(messagePattern)) {
        return MESSAGE;
      } else return true;
    }
  }
}