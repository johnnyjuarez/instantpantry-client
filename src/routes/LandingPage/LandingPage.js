import React, { useState } from 'react'
import { Link } from 'react-router-dom'


// components
import LoginForm from '../../components/LoginForm/LoginForm'
import Modal from '../../components/Modal/Modal';
import LandingModal from '../../components/LandingModal/LandingModal'

import './LandingPage.css';

export default function LandingPage() {
  const [isLanding, setIsLanding] = useState(true);

  const landingModalCloseHandler = () => {
    setIsLanding(!isLanding);
    localStorage.setItem('landing', true);
  }

  let landingModal = null;
  if (!localStorage.getItem('landing')) {
    landingModal = (
      <Modal open={isLanding} onClose={landingModalCloseHandler}>
        <LandingModal />
      </Modal>
    )
  }

  return (
    <div>
      <nav>
        <Link className='signup-nav' to='/signup'>Sign Up</Link>
      </nav>
      {landingModal}
      <h1 className='title'>InstantPantry</h1>
      <LoginForm />
    </div>
  )
}
