export default function handler(req, res) {
    if (req.method === 'POST') {
      const formData = req.body;

      res.status(200).json({ result: 'Форма успешно отправлена' });
    } 
    else {
      res.status(405).json({ error: 'Метод не поддерживается' });
    }
  }