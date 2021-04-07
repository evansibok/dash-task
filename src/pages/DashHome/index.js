import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi'
import './home.css';

import MiroLogo from '../../assets/miro.png'
import Layout from '../../components/Layout';

// const cardColors = ['#F3F3F8', '#A8C9F5', '#CD81CB', '#5DD9FA', '#FF5C88', '#1C1C1C', '#FFD02F', '#FFC8E1'];

// const getColors = (colorList) => (colorList[Math.floor(Math.random() * colorList.length)])


const DashHome = () => {
  return (
    <Layout>
      <div className='home-con'>
        <div className='top-home'>
          <div className='top-left'>
            <h3>Insights</h3>
            <p>Get your insights now!</p>
          </div>
          <button>
            Add your Insight
            <IoMdAdd />
          </button>
        </div>

        <div className='bottom-home'>
          <div className='card one'>
            <div className='c-h'>
              <div className='card-head'>
                <div className='img-div'>
                  <img src={MiroLogo} alt='miro' />
                </div>
                <h4>User Journey Flow Chart</h4>
              </div>
              <div className='card-content'>
                <p>Optional description. Hide or delete this layer if it’s not needed.</p>
              </div>
            </div>

            <div className='card-footer'>
              <FiThumbsDown />
              <FiThumbsUp />
            </div>
          </div>

          <div className='card two'>
            <div className='c-h'>
              <div className='card-head'>
                <div className='img-div'>
                  <img src={MiroLogo} alt='miro' />
                </div>
                <h4>User Journey Flow Chart</h4>
              </div>
              <div className='card-content'>
                <p>Optional description. Hide or delete this layer if it’s not needed.</p>
              </div>
            </div>

            <div className='card-footer'>
              <FiThumbsDown />
              <FiThumbsUp />
            </div>
          </div>

          <div className='card three'>
            <div className='c-h'>
              <div className='card-head'>
                <div className='img-div'>
                  <img src={MiroLogo} alt='miro' />
                </div>
                <h4>User Journey Flow Chart</h4>
              </div>
              <div className='card-content'>
                <p>Optional description. Hide or delete this layer if it’s not needed.</p>
              </div>
            </div>

            <div className='card-footer'>
              <FiThumbsDown />
              <FiThumbsUp />
            </div>
          </div>

          <div className='card four'>
            <div className='c-h'>
              <div className='card-head'>
                <div className='img-div'>
                  <img src={MiroLogo} alt='miro' />
                </div>
                <h4>User Journey Flow Chart</h4>
              </div>
              <div className='card-content'>
                <p>Optional description. Hide or delete this layer if it’s not needed.</p>
              </div>
            </div>

            <div className='card-footer'>
              <FiThumbsDown />
              <FiThumbsUp />
            </div>
          </div>

          <div className='card five'>
            <div className='c-h'>
              <div className='card-head'>
                <div className='img-div'>
                  <img src={MiroLogo} alt='miro' />
                </div>
                <h4>User Journey Flow Chart</h4>
              </div>
              <div className='card-content'>
                <p>Optional description. Hide or delete this layer if it’s not needed.</p>
              </div>
            </div>

            <div className='card-footer'>
              <FiThumbsDown />
              <FiThumbsUp />
            </div>
          </div>

          <div className='card six'>
            <div className='c-h'>
              <div className='card-head'>
                <div className='img-div'>
                  <img src={MiroLogo} alt='miro' />
                </div>
                <h4>User Journey Flow Chart</h4>
              </div>
              <div className='card-content'>
                <p>Optional description. Hide or delete this layer if it’s not needed.</p>
              </div>
            </div>

            <div className='card-footer'>
              <FiThumbsDown />
              <FiThumbsUp />
            </div>
          </div>

          <div className='card seven'>
            <div className='c-h'>
              <div className='card-head'>
                <div className='img-div'>
                  <img src={MiroLogo} alt='miro' />
                </div>
                <h4>User Journey Flow Chart</h4>
              </div>
              <div className='card-content'>
                <p>Optional description. Hide or delete this layer if it’s not needed.</p>
              </div>
            </div>

            <div className='card-footer'>
              <FiThumbsDown />
              <FiThumbsUp />
            </div>
          </div>

          <div className='card eight'>
            <div className='c-h'>
              <div className='card-head'>
                <div className='img-div'>
                  <img src={MiroLogo} alt='miro' />
                </div>
                <h4>User Journey Flow Chart</h4>
              </div>
              <div className='card-content'>
                <p>Optional description. Hide or delete this layer if it’s not needed.</p>
              </div>
            </div>

            <div className='card-footer'>
              <FiThumbsDown />
              <FiThumbsUp />
            </div>
          </div>




        </div>
      </div>
    </Layout>
  )
}

export default DashHome;
