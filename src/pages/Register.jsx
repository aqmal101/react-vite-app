import React from 'react'
import { Button, 
    Input, 
    FormControl,
    FormLabel,
    Link,
    Checkbox} 
from '@chakra-ui/react'
import PasswordInput from '../components/PeekPassword'
import RegisterToast from '../components/RegisterToast'
import { Link as LinkRoute} from "react-router-dom";


function Register() {
  return (
    <div className='w-full h-auto flex justify-center items-center'>
            <div className='max-w-lg border-2 rounded-lg  my-7 p-10 space-y-3 flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-bold text-teal-700'>Register</h1>
                <p className='text-sm text-center text-teal-800'>Silahkan Masukkan Username, Nama Lengkap, Email dan Password Anda untuk Membuat Akun Baru</p>

                <div className='flex flex-row gap-x-2'>
                    <FormControl>
                        <FormLabel>Nama Depan</FormLabel>
                        <Input placeholder="Masukkan Nama Depan" 
                                 _placeholder={{fontSize: 13}}
                                type="text"
                                colorScheme="teal"
                                focusBorderColor='teal.500'>
                        </Input>    
                    </FormControl>

                    <FormControl>
                        <FormLabel>Nama belakang</FormLabel>
                        <Input placeholder="Masukkan Nama Belakang"
                                 _placeholder={{fontSize: 13}}
                                type="text"
                                colorScheme="teal"
                                focusBorderColor='teal.500'>
                        </Input>
                    </FormControl>
                </div>
                
                <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input placeholder="Masukkan Username" 
                            type="text"
                            colorScheme="teal"
                            focusBorderColor='teal.500'
                            _placeholder={{fontSize: 13}}>
                        </Input>
                    </FormControl>

                <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input placeholder="Masukkan Email"
                                _placeholder={{fontSize: 13}} 
                                type="email"
                                colorScheme="teal"
                                focusBorderColor='teal.500'>
                        </Input>
                    </FormControl>

                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <PasswordInput focusBorderColor="teal.500"
                                    placeholder="Masukkan Password"
                                    _placeholder={{fontSize: 13}} 
                    ></PasswordInput>
                </FormControl>

                <FormControl>
                    <FormLabel>Confirm Password</FormLabel>
                    <PasswordInput focusBorderColor="teal.500"
                                    placeholder="Masukkan Konfirmasi Password"
                                    _placeholder={{fontSize: 13}}
                    ></PasswordInput>
                </FormControl>
                
                <Checkbox colorScheme='teal'>
                    <p className='text-sm'>Saya setuju dengan <Link color='teal' textDecoration='underline'>Syarat dan Ketentuan</Link></p>
                </Checkbox>

                <RegisterToast title='Daftar' 
                                width='full'
                                backgroundColor= 'teal.500'
                                color='white'
                                _hover='none'>
                </RegisterToast>

                <p className='text-sm'>Anda sudah memiliki akun?
                    <LinkRoute to={"/login"}>
                        <Link color='teal' textDecoration='Highlight'> Login</Link>
                    </LinkRoute>
                </p>
             </div>
        </div>
  )
}


export default Register
