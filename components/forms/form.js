import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    var button = document.getElementById('myButton');
    // Делаем кнопку неактивной
    button.disabled = true;

    validateForm();

    e.preventDefault();
    //    debugger
    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
    }

    button.disabled = false;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" onChange={handleInputChange} id="name" />
      <input type="password" name="password" onChange={handleInputChange} id="password"/>
      <input type="message" name="message" onChange={handleInputChange} id="message"/>

      <button type="submit" id="myButton">Отправить</button>
    </form>
  );
};

export default FormComponent;

function validateForm() {
  var name = document.getElementById('name').value;
  var password = document.getElementById('password').value;
  var message = document.getElementById('message').value;

  var namePattern = /^[а-яА-ЯёЁ]+$/;
  var passwordMinLength = 6;
  var messagePattern = /ananas|AnAnAs/;

  if (!name.match(namePattern)) {
    alert('Имя должно содержать только кириллические символы');
    return false;
  }

  if (password.length < passwordMinLength) {
    alert('Пароль должен быть не менее 6 символов');
    return false;
  }

  if (!message.match(messagePattern)) {
    alert('Сообщение должно содержать текст "ananas" или "AnAnAs"');
    return false;
  }

  return true;
}