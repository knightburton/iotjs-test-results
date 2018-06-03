/*
 * Copyright 2018 Samsung Electronics Co., Ltd. and other contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faArrowAltCircleRight } from '@fortawesome/fontawesome-free-regular';

export default class Summary extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { tests } = this.props;
    const { pass, fail, skip } = tests.reduce((acc, t) => {
      acc[t.result]++;
      return acc;
    }, {
      pass: 0,
      fail: 0,
      skip: 0,
    });
    const boxStyle = {
      width: '60px',
    };

    return (
      <div className="d-flex justify-content-between text-left">
        <div className="text-success pl-0" style={boxStyle}>
          <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
          <span>
            {pass}
          </span>
        </div>
        <div className="text-danger" style={boxStyle}>
          <FontAwesomeIcon icon={faTimesCircle} className="mr-1" />
          <span>
            {fail}
          </span>
        </div>
        <span className="text-warning" style={boxStyle}>
          <FontAwesomeIcon icon={faArrowAltCircleRight} className="mr-1" />
          <span>
            {skip}
          </span>
        </span>
      </div>
    );
  }
}

Summary.propTypes = {
  tests: PropTypes.array.isRequired,
};
