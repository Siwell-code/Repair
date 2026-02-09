import React, { useState } from 'react';
import '../styles/ContactForm.css';

interface ContactFormProps {
  buttonText?: string;
  formTitle?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  buttonText = "Оставить заявку", 
  formTitle = "Оставьте заявку" 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxWJmTXIykaJjOa3BraPM5paCo40ilNOHERGwQ3jWQyeEqT8Twr6Ba5V47TQfRtQrv_pQ/exec';
      
      // Подготовка данных для отправки
      const payload = {
        ...formData,
        date: new Date().toLocaleString('ru-RU'),
        source: 'website_contact_form'
      };

      // Отправляем данные в Google Apps Script
    await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Важно для Google Script!
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      
      console.log('✅ Данные отправлены в Google Script:', payload);
      
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      
      // Сброс успешного сообщения через 5 секунд
      setTimeout(() => setIsSuccess(false), 5000);
      
    } catch (err) {
      console.error('❌ Ошибка отправки:', err);
      setError('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз или позвоните нам.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Если форма успешно отправлена, показываем сообщение
  if (isSuccess) {
    return (
      <div className="form-success">
        <div className="success-icon">✓</div>
        <h3>Спасибо за заявку!</h3>
        <p>Мы свяжемся с вами в ближайшее время.</p>
        <button 
          className="success-button"
          onClick={() => setIsSuccess(false)}
        >
          Отправить еще одну заявку
        </button>
      </div>
    );
  }

  return (
    <div className="contact-form-container">
      <h3 className="form-title">{formTitle}</h3>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ваше имя *"
            required
            className="form-input"
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Телефон *"
            required
            className="form-input"
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="form-input"
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Опишите вашу задачу..."
            rows={4}
            className="form-textarea"
            disabled={isSubmitting}
          />
        </div>

        {error && <div className="form-error">{error}</div>}

        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner"></span>
              Отправка...
            </>
          ) : (
            buttonText
          )}
        </button>

        <p className="form-note">
          Нажимая кнопку, вы соглашаетесь с 
          <a href="#privacy"> политикой конфиденциальности</a>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;