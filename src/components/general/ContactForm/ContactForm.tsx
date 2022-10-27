import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import Icon from 'components/general/Icon';
import styles from 'components/general/Footer/Footer.module.css';

interface ContactFormProps {
  className?: string;
  onFormSend?: () => void;
}

const ContactForm: React.VFC<ContactFormProps> = ({
  onFormSend,
  className,
}) => {
  const submitRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [emailError, setEmailError] = useState<null | 'invalid' | 'required'>(
    null
  );
  const [nameError, setNameError] = useState<null | 'required'>(null);
  const [isFormSent, setIsFormSent] = useState(false);

  const submitHandler = async () => {
    setEmailError(null);
    setNameError(null);
    if (isFormSent) return;
    if (email.length === 0) return setEmailError('required');
    if (name.length === 0) return setNameError('required');
    submitRef.current?.click();
    handleSendForm();
    setIsFormSent(true);
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
    <div id='mc_embed_signup' style={{ width: '100%' }} className={className}>
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
          <div className={styles.formHeader}>Write to us</div>
          <div className={classNames('indicates-required', styles.hide)}>
            <span className='asterisk'>*</span> indicates required
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
              className={classNames('required email', styles.field)}
              id='mce-EMAIL'
              required
              placeholder='E-mail'
            />
            <span id='mce-EMAIL-HELPERTEXT' className='helper_text'></span>
          </div>
          <div
            className={classNames('mc-field-group', styles.fieldWrapper, {
              [styles.errorField]: nameError,
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
              placeholder='Name'
            />
            <span id='mce-FNAME-HELPERTEXT' className='helper_text'></span>
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
              <button
                className={classNames(styles.button, {
                  [styles.sent]: isFormSent,
                  [styles.submitButton]: !isFormSent,
                })}
                onClick={async e => {
                  e.preventDefault();
                  await submitHandler();
                }}
              >
                {isFormSent ? (
                  <>
                    <Icon name='check' width={24} height={24} />
                    Sent
                  </>
                ) : (
                  'Send message'
                )}
              </button>
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
    </div>
  );
};

export default ContactForm;
