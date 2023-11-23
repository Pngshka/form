export default function handler(req, res) {
    if (req.method === 'POST') {
      // Обработка данных формы
      const formData = req.body;
      // Дополнительная логика обработки данных
      // Отправка ответа
      res.status(200).json({ message: 'Форма успешно отправлена' });
    } else {
      res.status(405).json({ message: 'Метод не поддерживается' });
    }
  }