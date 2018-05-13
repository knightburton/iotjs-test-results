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
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import ProjectButton from '../project-button/project-button.component';
import Menu from '../menu/menu.component';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { devices, projects, match, location } = this.props;
    const currentProject = projects[match.params.project];

    return (
      <header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container">

            <div className="form-inline">
              <div className="btn-group" role="group">
                <ProjectButton select={projects.iotjs} current={currentProject} url={location.pathname} />
                <ProjectButton select={projects.jerryscript} current={currentProject} url={location.pathname} />
              </div>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#device-menu"
              aria-controls="device-menu"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="device-menu">
              <Menu items={devices} homeProject={currentProject.key} />

              <div className="ml-lg-auto">
                <a className="nav-link text-light px-0" target="_blank" href={currentProject.url}>
                  {currentProject.name} <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  devices: PropTypes.array.isRequired,
  projects: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
