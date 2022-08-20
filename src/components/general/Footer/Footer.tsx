import React, { useState } from 'react';
import classNames from 'classnames';
import { Element } from 'react-scroll';

import { useScrollState } from 'contexts/scrollStateContext';
import Icon from 'components/general/Icon';

import styles from './Footer.module.css';

const Footer = () => {
  const {
    refs: { contactUs },
  } = useScrollState();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [emailError, setEmailError] = useState<null | 'invalid' | 'required'>(
    null
  );
  const [nameError, setNameError] = useState<null | 'required'>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormSent, setIsFormSent] = useState(false);

  const submitHandler = async () => {
    setEmailError(null);
    setNameError(null);
    if (isLoading || isFormSent) return;
    if (name.length === 0) return setNameError('required');
    if (email.length === 0) return setEmailError('required');
    setIsLoading(true);
    const result = await fetch('/api/mailchimp', {
      method: 'POST',
      body: JSON.stringify({
        email,
        name,
        text,
      }),
    });
    setIsLoading(false);
    if (!result.ok) return setEmailError('invalid');
    setEmailError(null);
    setNameError(null);
    setIsFormSent(true);
    setTimeout(() => {
      setIsFormSent(false);
    }, 3000);
  };

  return (
    <Element name={'contactUs'}>
      <div className={styles.wrapper}>
        <div ref={contactUs} className={styles.root}>
          <div className={styles.content}>
            <div className={styles.contactInfo}>
              <div className={styles.header}>Contact us</div>
              <div className={styles.description}>
                Write about your idea concept or ask a question via the feedback
                form or in another convenient way
              </div>
              <a
                href='mailto:info@uddug.com'
                className={classNames(styles.link, 'purpleText')}
              >
                info@uddug.com
              </a>
              <a
                href='mailto:hr@uddug.com'
                className={classNames(styles.link, 'orangeText')}
              >
                hr@uddug.com
              </a>
              <div className={styles.socialLinks}>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.linkedin.com/company/uddug'
                >
                  <Icon name={'linkedIn'} className={styles.icon} />
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/uddugteam'
                >
                  <Icon name={'github'} className={styles.icon} />
                </a>
              </div>
            </div>
            <div className={styles.footerInfo}>
              <div className={styles.infoLinks}>
                <a
                  className={styles.infoLink}
                  target='_blank'
                  rel='noreferrer'
                  href='/privacy-policy'
                >
                  Privacy policy
                </a>
              </div>
              <div>Uddug © 2013</div>
            </div>
          </div>
          <form className={styles.form}>
            <div className={styles.formHeader}>Write to us</div>
            <div className={styles.fields}>
              <div
                className={classNames(styles.fieldWrapper, {
                  [styles.errorField]: nameError,
                  [styles.requiredField]: nameError === 'required',
                })}
              >
                <input
                  className={styles.field}
                  placeholder='Name'
                  value={name}
                  onChange={e => setName(e.currentTarget.value)}
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
                  className={styles.field}
                  placeholder='E-mail'
                  value={email}
                  onChange={e => setEmail(e.currentTarget.value)}
                />
              </div>
              <div className={styles.fieldWrapper}>
                <input
                  className={styles.field}
                  placeholder='Your message here'
                  value={text}
                  onChange={e => {
                    if (e.currentTarget.value.length > 100) return;
                    setText(e.currentTarget.value);
                  }}
                />
                <span className={styles.charactersLimit}>
                  {text.length} / 100
                </span>
              </div>
            </div>
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
          </form>
        </div>
        <Icon name='grid' className={styles.grid} />
      </div>
    </Element>
  );
};

export default React.memo(Footer);
