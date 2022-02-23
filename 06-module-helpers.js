///06-module-helpers
export default function sayHello() {
    console.log("Hello");
  }
  export function greeting(name) {
      alert(`Hello, ${name}`)
  }

///modules-authentication
export default function validateLoginData(email, password) {
    const emailRegex = new RegExp(/^\S+@\S+\.\S+$/)
    const passwordRegex = new RegExp(/[A-Za-z\d\!\@\#\$\%\^\&\*]{8,}/)

    if (emailRegex.test(email)) {
        if (passwordRegex.test(password)) {
            return `Welcome to the Jungle`
        } else {
            return `Tolong masukkan password sesuai dengan ketentuan`
        }
    }
    return `Tolong masukkan email yang valid`
}