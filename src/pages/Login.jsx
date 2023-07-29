import React from 'react'
import { Button, 
        Input, 
        FormControl,
        FormLabel,
        Link,
        Checkbox } 
    from '@chakra-ui/react'
import PasswordInput from '../components/PeekPassword'
import { Link as LinkRoute} from "react-router-dom";


function Login() {
  return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='max-w-md border-2 rounded-lg p-10 space-y-3 flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-bold text-teal-700'>Login</h1>
                <p className='text-sm text-center text-teal-800'>Silahkan Masukkan Username dan Password Anda untuk Masuk ke Akun</p>


                <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Input placeholder="Masukkan Username" 
                            _placeholder={{fontSize:13}}
                            type="text"
                            colorScheme="teal"
                            color={"teal"}>
                    </Input>
                </FormControl>


                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <PasswordInput placeholder="Masukkan Username" 
                                  _placeholder={{fontSize:13}}>            
                    </PasswordInput>
                </FormControl>

                <Checkbox colorScheme='teal'>
                    <p className='text-sm'>Apakah Anda Setuju dengan Ketentuan yang Berlaku?</p>
                </Checkbox>

                <Button colorScheme='teal' width={"full"}>Login</Button>
                <Link className='text-sm hover:text-red-500 hover:font-bold'>Lupa Kata Sandi</Link>
                <p className='text-sm'>Anda belum memiliki akun? 
                    <LinkRoute to={"/register"}>
                        <Link color='teal'className='hover:font-bold'>Register</Link>
                    </LinkRoute>                
                </p>
             </div>
        </div>
    )
}

export default Login