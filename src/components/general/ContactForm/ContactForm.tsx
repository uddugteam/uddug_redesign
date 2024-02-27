import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import PopupSuccessSVG from 'public/icons/popup-success.svg';
import Button from 'components/ui/Button';

import styles from './ContactForm.module.css';

interface ContactFormProps {
  className?: string;
  onFormSend?: () => void;
}

interface IPopupProps {
  isOpened: boolean;
  closePopup: () => void;
}

const Popup: React.VFC<IPopupProps> = ({ isOpened, closePopup }) => {
  return (
    <motion.div
      className={classNames(styles.popup, {
        [styles.popupOpened]: isOpened,
      })}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className={styles.popupInner}>
        <div className={styles.image}>
          <PopupSuccessSVG className={styles.icon} />
        </div>
        <h2 className={styles.popupTitle}>Thanks for submitting!</h2>
        <p className={styles.popupText}>
          We will contact you
          <br />
          within 10 minutes
        </p>
        <Button onClick={closePopup}>Сlose window</Button>
      </div>
    </motion.div>
  );
};

const ContactForm: React.VFC<ContactFormProps> = ({
  onFormSend,
  className,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [emailError, setEmailError] = useState<null | 'invalid' | 'required'>(
    null
  );
  const [nameError, setNameError] = useState<null | 'invalid' | 'required'>(
    null
  );
  const [isFormSent, setIsFormSent] = useState(false);
  const [isShowPopup, setIsShowPopup] = useState(false);

  const validateName = (value: string) => {
    if (value.length === 0) {
      setNameError('required');
      return false;
    }

    if (value.length < 2) {
      setNameError('invalid');
      return false;
    }

    return true;
  };

  const validateEmail = (value: string) => {
    if (value.length === 0) {
      setEmailError('required');
      return false;
    }

    if (value.length < 6) {
      setEmailError('invalid');
      return false;
    }

    if (!value.includes('.') && !value.includes('@')) {
      setEmailError('invalid');
      return false;
    }

    return true;
  };

  const handleSendForm = async () => {
    // SENDGRID IMPLEMENTATION
    // const result = await fetch('/api/sendgrid', {
    //   body: JSON.stringify({
    //     name: name,
    //     email: email,
    //     text: text,
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   method: 'POST',
    // });

    // const { error } = await result.json();

    // if (error) {
    //   console.log(error);
    //   return;
    // }
    // if (result.ok && result.status >= 200 && result.status < 300) {
    //   setIsShowPopup(true);
    //   document.body.style.overflow = 'hidden';
    // }

    // const botToken = process.env.NEXT_PUBLIC_TELEGRAM_API;
    // const chatID = process.env.NEXT_PUBLIC_CHAT_ID;
    const botToken = '7126517329:AAENnGqRoQ7Pi-2dRNCGorQCpfgVb7uB5_A';
    const chatID = '-4143978810';
    // const breakTag = '%0A';
    const breakTag = '\n';

    let messageText = `Lead from the website - uddug.com ${breakTag} ${breakTag}`;
    // const parseMode = 'HTML&TEXT';
    const parseMode = 'HTML';

    messageText += `<b>Name:</b> ${name}${breakTag}`;
    messageText += `<b>Email:</b> ${email}${breakTag}`;

    if (text) {
      messageText += `<b>Comment:</b> ${text}`;
    }

    // GET IMPLEMENTATION
    // const result = await fetch(
    //   `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatID}&text=${messageText}&parse_mode=${parseMode}`
    // );

    // if (!result.ok) {
    //   console.log(result);
    //   return;
    // }

    // if (result.ok && result.status >= 200 && result.status < 300) {
    //   setIsShowPopup(true);
    //   document.body.style.overflow = 'hidden';
    // }

    // POST IMPLEMENTATION
    const data = {
      chat_id: chatID,
      text: messageText,
      parse_mode: parseMode,
    };

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send message to Telegram');
      }

      if (response.ok && response.status >= 200 && response.status < 300) {
        setIsShowPopup(true);
        document.body.style.overflow = 'hidden';
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const submitHandler = async () => {
    setEmailError(null);
    setNameError(null);
    if (isFormSent) return;

    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);

    if (!isNameValid || !isEmailValid) {
      return;
    }

    handleSendForm();
    setIsFormSent(true);
    setTimeout(() => {
      setIsFormSent(false);
    }, 3000);
  };

  useEffect(() => {
    if (onFormSend) {
      window.addEventListener('blur', handleSendForm);
      return () => window.removeEventListener('blur', handleSendForm);
    }
  }, []);

  return (
    <section style={{ width: '100%' }} className={className}>
      <form method='post' target='_blank' noValidate style={{ width: '100%' }}>
        <div className={styles.form}>
          <div
            className={classNames(styles.fieldWrapper, {
              [styles.errorField]: nameError,
              [styles.invalidField]: nameError === 'invalid',
              [styles.requiredField]: nameError === 'required',
            })}
          >
            <input
              className={classNames(styles.field)}
              type='text'
              name='name'
              value={name}
              onChange={e => setName(e.currentTarget.value)}
              required
              placeholder='Name'
            />
          </div>
          <div
            className={classNames(styles.fieldWrapper, {
              [styles.errorField]: emailError,
              [styles.invalidField]: emailError === 'invalid',
              [styles.requiredField]: emailError === 'required',
            })}
          >
            <input
              className={classNames(styles.field)}
              type='email'
              name='email'
              value={email}
              onChange={e => setEmail(e.currentTarget.value)}
              required
              placeholder='E-mail'
            />
          </div>
          <div className={classNames(styles.fieldWrapper)}>
            <input
              type='text'
              value={text}
              onChange={e => {
                if (e.currentTarget.value.length > 100) return;
                setText(e.currentTarget.value);
              }}
              className={styles.field}
              placeholder='Your message here'
            />
            <span className={styles.charactersLimit}>{text.length} / 100</span>
          </div>
          <div>
            <div>
              <Button
                className={styles.submitButton}
                type='submit'
                onClick={async e => {
                  e.preventDefault();
                  await submitHandler();
                }}
                isHaveIcon={true}
              >
                Send message
              </Button>
            </div>
          </div>
        </div>
      </form>
      <Popup
        isOpened={isShowPopup}
        closePopup={() => {
          setIsShowPopup(false);
          document.body.style.overflow = 'auto';
        }}
      />
    </section>
  );
};

export default ContactForm;
