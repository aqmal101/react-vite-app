import React from "react";
import { faker } from '@faker-js/faker';


const randomName = faker.person.fullName(); 
const randomEmail = faker.internet.email(); 

function Latihan() {
  return (
    <div>
        <div>
            <h1>{randomName}</h1>
            <h1>{randomEmail}</h1>
        </div>
    </div>
  )
}

export default Latihan