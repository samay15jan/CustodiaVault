import React from 'react'
import useColorScheme from '../utils/useColorScheme'

const Auth = () => {
  const colorScheme = useColorScheme()
  const [email, setEmail] = React.useState('')
  const [emailComponent, showEmailComponent] = React.useState(true)
  return (
    <div className='w-screen h-screen flex items-center justify-center overflow-hidden select-none'>
      <div
        className='w-80 h-80 opacity-90 rounded-xl drop-shadow-lg showdow-md'
        style={
          colorScheme === 'dark'
            ? { backgroundColor: 'white', color: 'black' }
            : { backgroundColor: 'black', color: 'white' }
        }
      >
        <div
          className='flex gap-2 justify-center text-3xl font-extrabold p-4 rounded-t-xl rounded-b-[50px]'
          style={
            colorScheme === 'dark'
              ? { backgroundColor: '#999999', color: 'black' }
              : { backgroundColor: '#111111', color: 'white' }
          }
        >
          <img
            src={
              colorScheme === 'dark'
                ? '/custodiaVault_light.svg'
                : '/custodiaVault_dark.svg'
            }
            width='40px'
            alt='CustodiaVault LOGO'
            className='select-none'
          />
          <h1>CustodiaVault</h1>
        </div>
        <div className='relative h-full text-center'>
          <h1 className='mt-5 text-xl font-bold'>
            {emailComponent ? "Let's get started" : 'Verification Code'}
          </h1>
          <h1 className='text-sm font-semibold opacity-50'>
            {emailComponent
              ? 'Make your passwords secure!'
              : `We have sent the verification code to ${email}`}
          </h1>
          <div className='mt-5 border-2 flex h-12 rounded-lg border-[#555555] mx-5'>
            <img
              src={
                colorScheme === 'dark' ? '/mail_dark.svg' : '/mail_light.svg'
              }
              className='w-10 p-1 opacity-80'
              alt='mail'
            />
            {emailComponent ? (
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                className='border-l-2 border-[#555555] h-auto focus:outline-none'
              />
            ) : (
              <div></div>
            )}
          </div>
          <button
            onClick={() => showEmailComponent(!emailComponent)}
            className='mt-10 w-44 mx-2'
          >
            {emailComponent ? 'Continue' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Auth
