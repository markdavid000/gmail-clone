import React from 'react';
import './main.css';
import './query.css';
import Align from '../img/align.png';
import Calendar from '../img/calendar_2020q4_2x.png';
import Clock from '../img/clock.png';
import Contact from '../img/contacts_2022_2x.png';
import Contrast from '../img/contrast-adjustment.png';
import Dots from '../img/dots.png';
import DownArrow from '../img/down-arrow.png';
import DownloadFile from '../img/download-file.png';
import DownwardArrow from '../img/downward-arrow.png';
import Draft from '../img/draft.png';
import Email from '../img/email.png';
// import GmailLogo from '../img/gmail-logo.png';
import Grid from '../img/grid.png';
import Group from '../img/group.png';
import Help from '../img/help.png';
import Img from '../img/IMG20220726114158.jpg';
import Important from '../img/important.png';
import Inbox from '../img/inbox.png';
import Keep from '../img/keep_2020q4v3_2x.png';
import Left from '../img/left.png';
import LogoGmail from '../img/logo_gmail.png';
import Menu from '../img/menu.png';
import Next from '../img/next.png';
import Pencil from '../img/pencil.png';
import Plus from '../img/plus.png';
import RecycleBin from '../img/recycle-bin.png';
import Refresh from '../img/refresh.png';
import Search from '../img/search.png';
import Sent from '../img/sent.png';
import Settings from '../img/settings.png';
import Share from '../img/share.png';
import Square from '../img/square.png';
import Star from '../img/star.png';
import Tag from '../img/tag.png';
import Task from '../img/tasks_2021_2x.png';

const Body = () => {
  return (
    <div>
      <header>
        <nav>
          <div className='navbar'>
            <div className='flex1'>
              <div className='menu_logo'>
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <img id='menu' src={Menu} alt='' className='menu' />
                </button>
                <a href='#!'>
                  <img src={LogoGmail} alt='' />
                </a>
              </div>
              <div className='search_bar'>
                <div className='form'>
                  <button type='submit' className='search_btn'>
                    <img src={Search} alt='' />
                  </button>
                  <input
                    type='text'
                    className='search_bar_input'
                    placeholder='Search mail'
                  />
                  <button type='submit' className='adjust_btn'>
                    <img src={Contrast} alt='' />
                  </button>
                </div>
              </div>
            </div>
            <div className='tools'>
              <a href='#!'>
                <img src={Help} alt='' width='24' />
              </a>
              <a href='#!'>
                <img src={Settings} alt='' width='24' />
              </a>
              <a href='#!'>
                <img src={Grid} alt='' width='24' />
              </a>
              <a href='#!'>
                <img
                  src={Img}
                  alt=''
                  width='35'
                  height='35'
                  style={{ borderRadius: '50px' }}
                />
              </a>
            </div>
          </div>
        </nav>
      </header>
      <section className='body_content'>
        <div id='side_bar'>
          <a href='#!' className='compose'>
            <img src={Pencil} alt='' width='20' />
            <p>Compose</p>
          </a>
          <div className='type'>
            <a href='#!' className='email_cat active'>
              <img src={Inbox} alt='' width='20' />
              <p>Inbox</p>
            </a>
            <a href='#!' className='email_cat'>
              <img src={Star} alt='' width='20' />
              <p>Starred</p>
            </a>
            <a href='#!' className='email_cat'>
              <img src={Clock} alt='' width='20' />
              <p>Snoozed</p>
            </a>
            <a href='#!' className='email_cat'>
              <img src={Sent} alt='' width='20' />
              <p>Sent</p>
            </a>
            <a href='#!' className='email_cat'>
              <img src={Draft} alt='' width='20' />
              <p>Draft</p>
            </a>
            <a href='#!' className='email_cat'>
              <img src={DownArrow} alt='' width='20' />
              <p>More</p>
            </a>
            <div className='label'>
              <h3 style={{ padding: '0.8rem' }}>Labels</h3>
              <a href='#!' className='label_link'>
                <img src={Plus} alt='' width='17' height='17' />
              </a>
            </div>

            <a href='#!' className='email_cat'>
              <img src={DownArrow} alt='' width='20' />
              <p>More</p>
            </a>
          </div>
        </div>
        <div className='email_box'>
          <div className='first_sec'>
            <div className='first_sec_line1'>
              <div>
                <div>
                  <a
                    href='#!'
                    style={{
                      padding: '0.7rem 0.3rem',
                      marginLeft: '-0.5rem',
                      borderRadius: '5px',
                    }}
                  >
                    <img src={Square} alt='' width='18' />
                  </a>
                  <a
                    href='#!'
                    style={{
                      padding: '0.7rem 0.2rem',
                      marginLeft: '-0.5rem',
                      borderRadius: '5px',
                    }}
                  >
                    <img src={DownwardArrow} alt='' width='13' />
                  </a>
                </div>
                <a href='#!'>
                  <img src={Refresh} alt='' width='17' />
                </a>
                <a href='#!'>
                  <img src={Dots} alt='' width='18' />
                </a>
              </div>
              <div style={{ marginRight: '1rem' }}>
                <a
                  href='#!'
                  style={{
                    fontSize: '15px',
                    color: 'rgb(202, 202, 202)',
                    borderRadius: '5px',
                  }}
                >
                  1-50 of 447
                </a>
                <a href='#!' style={{ background: 'none' }}>
                  <img src={Left} alt='' width='17' />
                </a>
                <a href='#!'>
                  <img src={Next} alt='' width='17' />
                </a>
                <div>
                  <a
                    href='#!'
                    style={{
                      padding: '0.7rem 0.3rem',
                      marginLeft: '-0.5rem',
                      borderRadius: '5px',
                    }}
                  >
                    <img src={Align} alt='' width='17' />
                  </a>
                  <a
                    href='#!'
                    style={{
                      padding: '0.7rem 0.2rem',
                      marginLeft: '-0.5rem',
                      borderRadius: '5px',
                    }}
                  >
                    <img src={DownwardArrow} alt='' width='13' />
                  </a>
                </div>
              </div>
            </div>
            <div className='first_sec_line2'>
              <a href='#!' className='msg_type section_selected'>
                <img src={Inbox} alt='' width='20' />
                <p>Primary</p>
              </a>
              <a href='#!' className='msg_type'>
                <img src={Tag} alt='' width='20' />
                <p>Promotions</p>
              </a>
              <a href='#!' className='msg_type'>
                <img src={Group} alt='' width='20' />
                <p>Social</p>
              </a>
            </div>
          </div>
          <div
            className='second_sec'
            style={{ color: '#fff', backgroundColor: '#0000007a' }}
          >
            <a href='#!' className='emailRow'>
              <div className='emailRow_option'>
                <button>
                  <img
                    src={Square}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Star}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Important}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
              <p className='emailRow_title'>Trust Wallet</p>
              <div className='emailRow_message'>
                <p>
                  [Trust Wallet] Confirm your new account{' '}
                  <span className='emailRow_description'>
                    - Welcome to Trust Wallet! Click the following link to
                    confirm and activate your new account
                  </span>
                </p>
              </div>
              <p className='emailRow_time'>15:22</p>
              <div className='emailRow_opt'>
                <button>
                  <img
                    src={DownloadFile}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={RecycleBin}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Email}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src='img/clock.png'
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
            </a>
            <a href='#!' className='emailRow'>
              <div className='emailRow_option'>
                <button>
                  <img
                    src={Square}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Star}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Important}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
              <p className='emailRow_title'>Trust Wallet</p>
              <div className='emailRow_message'>
                <p>
                  [Trust Wallet] Confirm your new account{' '}
                  <span className='emailRow_description'>
                    - Welcome to Trust Wallet! Click the following link to
                    confirm and activate your new account
                  </span>
                </p>
              </div>
              <p className='emailRow_time'>15:22</p>
              <div className='emailRow_opt'>
                <button>
                  <img
                    src={DownloadFile}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={RecycleBin}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Email}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src='img/clock.png'
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
            </a>
            <a href='#!' className='emailRow'>
              <div className='emailRow_option'>
                <button>
                  <img
                    src={Square}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Star}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Important}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
              <p className='emailRow_title'>Trust Wallet</p>
              <div className='emailRow_message'>
                <p>
                  [Trust Wallet] Confirm your new account{' '}
                  <span className='emailRow_description'>
                    - Welcome to Trust Wallet! Click the following link to
                    confirm and activate your new account
                  </span>
                </p>
              </div>
              <p className='emailRow_time'>15:22</p>
              <div className='emailRow_opt'>
                <button>
                  <img
                    src={DownloadFile}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={RecycleBin}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Email}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src='img/clock.png'
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
            </a>
            <a href='#!' className='emailRow'>
              <div className='emailRow_option'>
                <button>
                  <img
                    src={Square}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Star}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Important}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
              <p className='emailRow_title'>Trust Wallet</p>
              <div className='emailRow_message'>
                <p>
                  [Trust Wallet] Confirm your new account{' '}
                  <span className='emailRow_description'>
                    - Welcome to Trust Wallet! Click the following link to
                    confirm and activate your new account
                  </span>
                </p>
              </div>
              <p className='emailRow_time'>15:22</p>
              <div className='emailRow_opt'>
                <button>
                  <img
                    src={DownloadFile}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={RecycleBin}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Email}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src='img/clock.png'
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
            </a>
            <a href='#!' className='emailRow'>
              <div className='emailRow_option'>
                <button>
                  <img
                    src={Square}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Star}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Important}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
              <p className='emailRow_title'>Trust Wallet</p>
              <div className='emailRow_message'>
                <p>
                  [Trust Wallet] Confirm your new account{' '}
                  <span className='emailRow_description'>
                    - Welcome to Trust Wallet! Click the following link to
                    confirm and activate your new account
                  </span>
                </p>
              </div>
              <p className='emailRow_time'>15:22</p>
              <div className='emailRow_opt'>
                <button>
                  <img
                    src={DownloadFile}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={RecycleBin}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Email}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src='img/clock.png'
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
            </a>
            <a href='#!' className='emailRow'>
              <div className='emailRow_option'>
                <button>
                  <img
                    src={Square}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Star}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Important}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
              <p className='emailRow_title'>Trust Wallet</p>
              <div className='emailRow_message'>
                <p>
                  [Trust Wallet] Confirm your new account{' '}
                  <span className='emailRow_description'>
                    - Welcome to Trust Wallet! Click the following link to
                    confirm and activate your new account
                  </span>
                </p>
              </div>
              <p className='emailRow_time'>15:22</p>
              <div className='emailRow_opt'>
                <button>
                  <img
                    src={DownloadFile}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={RecycleBin}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Email}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src='img/clock.png'
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
            </a>
            <a href='#!' className='emailRow'>
              <div className='emailRow_option'>
                <button>
                  <img
                    src={Square}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Star}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Important}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
              <p className='emailRow_title'>Trust Wallet</p>
              <div className='emailRow_message'>
                <p>
                  [Trust Wallet] Confirm your new account{' '}
                  <span className='emailRow_description'>
                    - Welcome to Trust Wallet! Click the following link to
                    confirm and activate your new account
                  </span>
                </p>
              </div>
              <p className='emailRow_time'>15:22</p>
              <div className='emailRow_opt'>
                <button>
                  <img
                    src={DownloadFile}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={RecycleBin}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Email}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src='img/clock.png'
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
            </a>
            <a href='#!' className='emailRow'>
              <div className='emailRow_option'>
                <button>
                  <img
                    src={Square}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Star}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Important}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
              <p className='emailRow_title'>Trust Wallet</p>
              <div className='emailRow_message'>
                <p>
                  [Trust Wallet] Confirm your new account{' '}
                  <span className='emailRow_description'>
                    - Welcome to Trust Wallet! Click the following link to
                    confirm and activate your new account
                  </span>
                </p>
              </div>
              <p className='emailRow_time'>15:22</p>
              <div className='emailRow_opt'>
                <button>
                  <img
                    src={DownloadFile}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={RecycleBin}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Email}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src='img/clock.png'
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
            </a>
            <a href='#!' className='emailRow'>
              <div className='emailRow_option'>
                <button>
                  <img
                    src={Square}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Star}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Important}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
              <p className='emailRow_title'>Trust Wallet</p>
              <div className='emailRow_message'>
                <p>
                  [Trust Wallet] Confirm your new account{' '}
                  <span className='emailRow_description'>
                    - Welcome to Trust Wallet! Click the following link to
                    confirm and activate your new account
                  </span>
                </p>
              </div>
              <p className='emailRow_time'>15:22</p>
              <div className='emailRow_opt'>
                <button>
                  <img
                    src={DownloadFile}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={RecycleBin}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Email}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src='img/clock.png'
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
            </a>
            <a href='#!' className='emailRow'>
              <div className='emailRow_option'>
                <button>
                  <img
                    src={Square}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Star}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Important}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
              <p className='emailRow_title'>Trust Wallet</p>
              <div className='emailRow_message'>
                <p>
                  [Trust Wallet] Confirm your new account{' '}
                  <span className='emailRow_description'>
                    - Welcome to Trust Wallet! Click the following link to
                    confirm and activate your new account
                  </span>
                </p>
              </div>
              <p className='emailRow_time'>15:22</p>
              <div className='emailRow_opt'>
                <button>
                  <img
                    src={DownloadFile}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={RecycleBin}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Email}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src='img/clock.png'
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
            </a>
            <a href='#!' className='emailRow'>
              <div className='emailRow_option'>
                <button>
                  <img
                    src={Square}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Star}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Important}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
              <p className='emailRow_title'>Trust Wallet</p>
              <div className='emailRow_message'>
                <p>
                  [Trust Wallet] Confirm your new account{' '}
                  <span className='emailRow_description'>
                    - Welcome to Trust Wallet! Click the following link to
                    confirm and activate your new account
                  </span>
                </p>
              </div>
              <p className='emailRow_time'>15:22</p>
              <div className='emailRow_opt'>
                <button>
                  <img
                    src={DownloadFile}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={RecycleBin}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Email}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src='img/clock.png'
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
            </a>
            <a href='#!' className='emailRow'>
              <div className='emailRow_option'>
                <button>
                  <img
                    src={Square}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Star}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Important}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
              <p className='emailRow_title'>Trust Wallet</p>
              <div className='emailRow_message'>
                <p>
                  [Trust Wallet] Confirm your new account{' '}
                  <span className='emailRow_description'>
                    - Welcome to Trust Wallet! Click the following link to
                    confirm and activate your new account
                  </span>
                </p>
              </div>
              <p className='emailRow_time'>15:22</p>
              <div className='emailRow_opt'>
                <button>
                  <img
                    src={DownloadFile}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={RecycleBin}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Email}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src='img/clock.png'
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
            </a>
            <a href='#!' className='emailRow'>
              <div className='emailRow_option'>
                <button>
                  <img
                    src={Square}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Star}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Important}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
              <p className='emailRow_title'>Trust Wallet</p>
              <div className='emailRow_message'>
                <p>
                  [Trust Wallet] Confirm your new account{' '}
                  <span className='emailRow_description'>
                    - Welcome to Trust Wallet! Click the following link to
                    confirm and activate your new account
                  </span>
                </p>
              </div>
              <p className='emailRow_time'>15:22</p>
              <div className='emailRow_opt'>
                <button>
                  <img
                    src={DownloadFile}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={RecycleBin}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Email}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src='img/clock.png'
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
            </a>
            <a href='#!' className='emailRow'>
              <div className='emailRow_option'>
                <button>
                  <img
                    src={Square}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Star}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Important}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
              <p className='emailRow_title'>Trust Wallet</p>
              <div className='emailRow_message'>
                <p>
                  [Trust Wallet] Confirm your new account{' '}
                  <span className='emailRow_description'>
                    - Welcome to Trust Wallet! Click the following link to
                    confirm and activate your new account
                  </span>
                </p>
              </div>
              <p className='emailRow_time'>15:22</p>
              <div className='emailRow_opt'>
                <button>
                  <img
                    src={DownloadFile}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={RecycleBin}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Email}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src='img/clock.png'
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
            </a>
            <a href='#!' className='emailRow'>
              <div className='emailRow_option'>
                <button>
                  <img
                    src={Square}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Star}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Important}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
              <p className='emailRow_title'>Trust Wallet</p>
              <div className='emailRow_message'>
                <p>
                  [Trust Wallet] Confirm your new account{' '}
                  <span className='emailRow_description'>
                    - Welcome to Trust Wallet! Click the following link to
                    confirm and activate your new account
                  </span>
                </p>
              </div>
              <p className='emailRow_time'>15:22</p>
              <div className='emailRow_opt'>
                <button>
                  <img
                    src={DownloadFile}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={RecycleBin}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Email}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src='img/clock.png'
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
            </a>
            <a href='#!' className='emailRow'>
              <div className='emailRow_option'>
                <button>
                  <img
                    src={Square}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Star}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Important}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
              <p className='emailRow_title'>Trust Wallet</p>
              <div className='emailRow_message'>
                <p>
                  [Trust Wallet] Confirm your new account{' '}
                  <span className='emailRow_description'>
                    - Welcome to Trust Wallet! Click the following link to
                    confirm and activate your new account
                  </span>
                </p>
              </div>
              <p className='emailRow_time'>15:22</p>
              <div className='emailRow_opt'>
                <button>
                  <img
                    src={DownloadFile}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={RecycleBin}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Email}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src='img/clock.png'
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
            </a>
            <a href='#!' className='emailRow'>
              <div className='emailRow_option'>
                <button>
                  <img
                    src={Square}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Star}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Important}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
              <p className='emailRow_title'>Trust Wallet</p>
              <div className='emailRow_message'>
                <p>
                  [Trust Wallet] Confirm your new account{' '}
                  <span className='emailRow_description'>
                    - Welcome to Trust Wallet! Click the following link to
                    confirm and activate your new account
                  </span>
                </p>
              </div>
              <p className='emailRow_time'>15:22</p>
              <div className='emailRow_opt'>
                <button>
                  <img
                    src={DownloadFile}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={RecycleBin}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Email}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src='img/clock.png'
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
            </a>
            <a href='#!' className='emailRow'>
              <div className='emailRow_option'>
                <button>
                  <img
                    src={Square}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Star}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Important}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
              <p className='emailRow_title'>Trust Wallet</p>
              <div className='emailRow_message'>
                <p>
                  [Trust Wallet] Confirm your new account{' '}
                  <span className='emailRow_description'>
                    - Welcome to Trust Wallet! Click the following link to
                    confirm and activate your new account
                  </span>
                </p>
              </div>
              <p className='emailRow_time'>15:22</p>
              <div className='emailRow_opt'>
                <button>
                  <img
                    src={DownloadFile}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={RecycleBin}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Email}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src='img/clock.png'
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
            </a>
            <a href='#!' className='emailRow'>
              <div className='emailRow_option'>
                <button>
                  <img
                    src={Square}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Star}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Important}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
              <p className='emailRow_title'>Trust Wallet</p>
              <div className='emailRow_message'>
                <p>
                  [Trust Wallet] Confirm your new account{' '}
                  <span className='emailRow_description'>
                    - Welcome to Trust Wallet! Click the following link to
                    confirm and activate your new account
                  </span>
                </p>
              </div>
              <p className='emailRow_time'>15:22</p>
              <div className='emailRow_opt'>
                <button>
                  <img
                    src={DownloadFile}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={RecycleBin}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Email}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src='img/clock.png'
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
            </a>
            <a href='#!' className='emailRow'>
              <div className='emailRow_option'>
                <button>
                  <img
                    src={Square}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Star}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Important}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
              <p className='emailRow_title'>Trust Wallet</p>
              <div className='emailRow_message'>
                <p>
                  [Trust Wallet] Confirm your new account{' '}
                  <span className='emailRow_description'>
                    - Welcome to Trust Wallet! Click the following link to
                    confirm and activate your new account
                  </span>
                </p>
              </div>
              <p className='emailRow_time'>15:22</p>
              <div className='emailRow_opt'>
                <button>
                  <img
                    src={DownloadFile}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={RecycleBin}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src={Email}
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
                <button>
                  <img
                    src='img/clock.png'
                    alt=''
                    width='20'
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
            </a>
            <footer className='footer'>
              <div>
                <a href='#!' style={{ textDecoration: 'none' }}>
                  <div className='storage_bar'>
                    <div className='storage_bar_inner'></div>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        color: 'rgb(219, 219, 219)',
                      }}
                    >
                      0.39 GB of 15 GB used
                      <img src={Share} alt='' />
                    </span>
                  </div>
                </a>
              </div>

              <div>
                <a href='#!' className='footer_link'>
                  Terms
                </a>
                <span style={{ color: 'gray', fontSize: 'larger' }}>.</span>
                <a href='#!' className='footer_link'>
                  Privacy
                </a>
                <span style={{ color: 'gray', fontSize: 'larger' }}>.</span>
                <a href='#!' className='footer_link'>
                  Programme Policies
                </a>
              </div>

              <div>
                <p style={{ textAlign: 'right' }} className='footer_link'>
                  Last account activity: 1 hour ago <br />{' '}
                  <a href='#!' className='footer_link'>
                    Details
                  </a>
                </p>
              </div>
            </footer>
          </div>
        </div>
        <div className='more'>
          <a href='#!'>
            <img src={Calendar} alt='' width='20' />
          </a>
          <a href='#!'>
            <img src={Keep} alt='' width='20' />
          </a>
          <a href='#!'>
            <img src={Task} alt='' width='20' />
          </a>
          <a href='#!'>
            <img src={Contact} alt='' width='20' />
          </a>
          <div className='border'></div>
          <a href='#!'>
            <img src={Plus} alt='' width='20' />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Body;
