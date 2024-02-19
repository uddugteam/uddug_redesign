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
  const submitRef = useRef<HTMLInputElement>(null);

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

  const submitHandler = async () => {
    setEmailError(null);
    setNameError(null);
    if (isFormSent) return;

    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);

    if (!isNameValid || !isEmailValid) {
      return;
    }

    submitRef.current?.click();
    handleSendForm();
    setIsFormSent(true);
    setIsShowPopup(true);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      setIsFormSent(false);
    }, 3000);
  };

  const handleSendForm = () => {
    setEmail('');
    setName('');
    setText('');
    setEmailError(null);
    setNameError(null);
    if (onFormSend) onFormSend();
  };

  useEffect(() => {
    if (onFormSend) {
      window.addEventListener('blur', handleSendForm);
      return () => window.removeEventListener('blur', handleSendForm);
    }
  }, []);

  return (
    <section
      id='mc_embed_signup'
      style={{ width: '100%' }}
      className={className}
    >
      <form
        action='https://uddug.us8.list-manage.com/subscribe/post?u=2f2114fd9a5f814f2cfae040d&amp;id=f835096de2&amp;f_id=00c35de0f0'
        method='post'
        id='mc-embedded-subscribe-form'
        name='mc-embedded-subscribe-form'
        className='validate'
        target='_blank'
        noValidate
        style={{ width: '100%' }}
      >
        <div id='mc_embed_signup_scroll' className={styles.form}>
          <h2 className={styles.hide}>Subscribe</h2>
          <div className={classNames('indicates-required', styles.hide)}>
            <span className='asterisk'>*</span> indicates required
          </div>
          <div
            className={classNames('mc-field-group', styles.fieldWrapper, {
              [styles.errorField]: nameError,
              [styles.invalidField]: nameError === 'invalid',
              [styles.requiredField]: nameError === 'required',
            })}
          >
            <label htmlFor='mce-FNAME' className={styles.hide}>
              First Name{' '}
            </label>
            <input
              type='text'
              value={name}
              onChange={e => setName(e.currentTarget.value)}
              name='FNAME'
              className={classNames(styles.field)}
              id='mce-FNAME'
              required
              placeholder='Name'
            />
            <span id='mce-FNAME-HELPERTEXT' className='helper_text'></span>
          </div>
          <div
            className={classNames('mc-field-group', styles.fieldWrapper, {
              [styles.errorField]: emailError,
              [styles.invalidField]: emailError === 'invalid',
              [styles.requiredField]: emailError === 'required',
            })}
          >
            <label htmlFor='mce-EMAIL' className={styles.hide}>
              Email Address <span className='asterisk'>*</span>
            </label>
            <input
              type='email'
              value={email}
              onChange={e => setEmail(e.currentTarget.value)}
              name='EMAIL'
              className={classNames(styles.field)}
              id='mce-EMAIL'
              required
              placeholder='E-mail'
            />
            <span id='mce-EMAIL-HELPERTEXT' className='helper_text'></span>
          </div>
          <div className={classNames('mc-field-group', styles.fieldWrapper)}>
            <label htmlFor='mce-MMERGE6' className={styles.hide}>
              Message{' '}
            </label>
            <input
              type='text'
              value={text}
              onChange={e => {
                if (e.currentTarget.value.length > 100) return;
                setText(e.currentTarget.value);
              }}
              name='MMERGE6'
              className={styles.field}
              id='mce-MMERGE6'
              placeholder='Your message here'
            />
            <span className={styles.charactersLimit}>{text.length} / 100</span>
            <span id='mce-MMERGE6-HELPERTEXT' className='helper_text'></span>
          </div>
          <div id='mce-responses' className='clear foot'>
            <div
              className='response'
              id='mce-error-response'
              style={{ display: 'none' }}
            ></div>
            <div
              className='response'
              id='mce-success-response'
              style={{ display: 'none' }}
            ></div>
          </div>
          <div style={{ position: 'absolute', left: -5000 }} aria-hidden={true}>
            <input
              type='text'
              name='b_2f2114fd9a5f814f2cfae040d_f835096de2'
              tabIndex={-1}
              defaultValue=''
            />
          </div>
          <div className='optionalParent'>
            <div className='clear foot'>
              <input
                type='submit'
                value='Subscribe'
                name='subscribe'
                id='mc-embedded-subscribe'
                className={classNames('button', styles.hide)}
                ref={submitRef}
              />
              <Button
                className={styles.submitButton}
                onClick={async e => {
                  e.preventDefault();
                  await submitHandler();
                }}
              >
                {isFormSent ? <>Sent</> : 'Send message'}
              </Button>
              <p className={classNames('brandingLogo', styles.hide)}>
                <a
                  href='http://eepurl.com/h-6PAT'
                  title='Mailchimp - email marketing made easy and fun'
                >
                  <img src='https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg' />
                </a>
              </p>
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
