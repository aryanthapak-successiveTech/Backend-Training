interface ICredential{
    email:string,
    password:string,
    role:"admin"|"user"
}

export const credentialData:ICredential[]=[
    {
        email:"aryanthapak@gmail.com",
        password:"Aryan@@@",
        role:"admin"
    },
    {
        email:"adarshtrivedi@gmail.com",
        password:"Adarsh@@@",
        role:"admin"
    },{
        email:"amanmehra@gmail.com",
        password:"Aman@@@@",
        role:"user"
    }
]