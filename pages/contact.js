// @flow

import React from 'react';
import { connect } from 'react-redux';
import uniq from 'lodash.uniq';
import { Button } from '../components/button';
import Text from '../components/text';
import styles from './css/contact.scss';
import './css/bugfix.css';

type Props = {};

type State = {
  name: String,
  address: String,
  tel: String,
  budget: String,
  content: String
};

export class Contact extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      tel: '',
      budget: '',
      content: '',
      errors: ['name', 'address', 'tel', 'budget', 'content']
    };
  }

  handleOnBlur = e => {
    const key = e.target.name;
    const val = e.target.value;
    const obj = {};
    obj[key] = val;
    this.setState(obj);
  };

  handleOnSubmit = () => {
    const { name, address, tel, budget, content } = this.state;
    const postData = {
      name,
      address,
      tel,
      budget,
      content
    };
    console.log('post', postData);
  };

  registError = name => {
    this.setState(prevState => {
      const currentError = prevState.errors;
      return {
        errors: uniq([...currentError, name])
      };
    });
  };

  unregistError = name => {
    this.setState(prevState => {
      const currentError = prevState.errors;
      const idx = currentError.findIndex(err => err === name);
      if (idx >= 0) {
        currentError.splice(idx, 1);
        return { errors: currentError };
      }
      return {};
    });
  };

  render() {
    return (
      <div className={styles.contact} ref={this.contactRef}>
        <div>
          <h1 className={styles.mainText}>Please contact us</h1>
          <p className={styles.subText}>
            お問い合わせ頂いてから2 - 3営業日以内に、
            <br />
            弊社担当からご連絡いたします。
          </p>
          <div className={styles.inputSection}>
            <div className={styles.inputWrapper}>
              <Text
                label="お名前"
                id="name"
                name="name"
                onBlur={this.handleOnBlur}
                registError={this.registError}
                unregistError={this.unregistError}
                validations={[
                  {
                    rule: 'required',
                    errorMessage: '必須項目です'
                  }
                ]}
              />
            </div>
            <div className={styles.inputWrapper}>
              <Text
                label="メールアドレス"
                id="address"
                name="address"
                onBlur={this.handleOnBlur}
                registError={this.registError}
                unregistError={this.unregistError}
                validations={[
                  {
                    rule: 'required',
                    errorMessage: '必須項目です'
                  }
                  // {
                  //   rule: 'EMAIL',
                  //   errorMessage: '有効なメールアドレスを入力して下さい'
                  // }
                ]}
              />
            </div>
            <div className={styles.inputWrapper}>
              <Text
                label="電話番号"
                id="tel"
                name="tel"
                onBlur={this.handleOnBlur}
                registError={this.registError}
                unregistError={this.unregistError}
                validations={[
                  {
                    rule: 'required',
                    errorMessage: '必須項目です'
                  }
                ]}
              />
            </div>
            <div className={styles.inputWrapper}>
              <Text
                label="ご予算"
                id="budget"
                name="budget"
                onBlur={this.handleOnBlur}
                registError={this.registError}
                unregistError={this.unregistError}
                validations={[
                  {
                    rule: 'required',
                    errorMessage: '必須項目です'
                  }
                ]}
              />
            </div>
            <div className={styles.inputWrapper}>
              <Text
                label="お問い合わせ内容"
                id="content"
                name="content"
                onBlur={this.handleOnBlur}
                registError={this.registError}
                unregistError={this.unregistError}
                textArea
                validations={[
                  {
                    rule: 'required',
                    errorMessage: '必須項目です'
                  }
                ]}
              />
            </div>
          </div>
          <Button label="送信" disable={this.state.errors.length > 0} onClick={this.handleOnSubmit} />
        </div>
      </div>
    );
  }
}

export function mapDispatchToProps(/* dispatch */) {
  return {};
}

export function mapStateToProps(state: any /*  ownProps: Prop */) {
  return {
    categories: state.categories.data,
    posts: state.posts.data || null,
    postsTotal: state.posts.total
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
