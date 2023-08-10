class Password {
  constructor() {
    console.log("Class Working")


    this.CapitalChar = (HowMany) => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      function generateChar(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
      }
      let Capital = generateChar(HowMany);
      // console.log("Capital Character is " + Capital);
      return Capital;
    }

    this.SmallChar = (Howmany) => {
      const characters = 'abcdefghijklmnopqrstuvwxyz';

      function generateChar(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
      }
      let Small = generateChar(Howmany);
      // console.log("Small Character is " + Small);
      return Small;
    }
    this.Number = (HowMany) => {
      const characters = '0123456789';

      function generateChar(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
      }
      let Num = generateChar(HowMany);
      // console.log("Random Number is " + Num);
      return Num
    }
    this.Special = (HowMany) => {
      const characters = `~!@#$%^&*()-_+={}[]|:;"'<>,.?`;

      function generateChar(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
      }
      let Spe = generateChar(HowMany);
      // console.log("Spacial Character is " + Spe);
      return Spe;
    }
  }
  generateStrong() {
    //Strong = Abcdef#1
    let first = this.CapitalChar(1);
    let second = this.SmallChar(5);
    let third = this.Special(1);
    let fourth = this.Number(1);
    let StrongPass = [first, second, third, fourth];
    let StrongPassword = StrongPass.join('');
    let final = StrongPassword.split(" ").join("");
    // console.log(final);
    return final;
  }
  generateSuperStrong() {
    //SuperStrong = Abc#1234
    let first = this.CapitalChar(1);
    let second = this.SmallChar(2);
    let third = this.Special(1);
    let fourth = this.Number(4);
    let StrongPass = [first, second, third, fourth];
    let StrongPassword = StrongPass.join('');
    let final = StrongPassword.split(" ").join("");
    // console.log(final);
    return final;
  }
  generateWeak() {
    //Weak = Abcdefgh
    let first = this.CapitalChar(1);
    let second = this.SmallChar(7);
    let StrongPass = [first, second];
    let StrongPassword = StrongPass.join('');
    let final = StrongPassword.split(" ").join("");
    // console.log(final);
    return final;
  }
  generateFunny() {
    //Funny = For e.g:Password
    // program to get a random item from an array

    function getRandomItem(arr) {

      // get random index value
      const randomIndex = Math.floor(Math.random() * arr.length);

      // get random item
      const item = arr[randomIndex];

      return item;
    }

    const array = ["Wifi aint working",
      "Wifi Name Not Found",
      "Careless User",
      "TriedIt3Times",
      "Hahaha",
      "KissMyPassword",
      "ImTooGood4This",
      "I Forgot My Password",
      "Cool Katz",
      "Big Momma's Back",
      "Yellow Ninjas",
      "Star Trek",
      "Slow Turtle",
      "PasswordDown",
      "NothingHere",
      "Enter Captcha",
      "IForgot",
      "User",
      "NewPassword",
      "ChangeMe",
      "NothingAgain",
      "SecretUser",
      "I Need A Password",
      "Password Doctor",
      "ASDF",
      "Right Click",
      "Cantre Member",
      "Master Password",
      "Password Complete",
      "This Is Strong",
      "Love My Kitten",
      "Super Hard Password",
      "Very Strong Password",
      "Best Password Ever",
      "Don't Use My Password",
      "Free Wifi",
      "Wireless Drop",
      "Boring User"
    ];

    const result = getRandomItem(array);
    // console.log(result);
    return result;
  }
}

let Generate_Section = document.getElementById("Generate_Section");
let obj = new Password;
let SP = () => {
  let PASS = obj.generateStrong();
  console.log(PASS);
  Generate_Section.innerHTML = `${PASS}`;
}
let SSP = () => {
  let PASS = obj.generateSuperStrong();
  console.log(PASS);
  Generate_Section.innerHTML = `${PASS}`;
}
let WP = () => {
  let PASS = obj.generateWeak();
  console.log(PASS);
  Generate_Section.innerHTML = `${PASS}`;
}
let FP = () => {
  let PASS = obj.generateFunny();
  console.log(PASS);
  Generate_Section.innerHTML = `${PASS}`;
}

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")

btn1.addEventListener('click', SP)
btn2.addEventListener('click', SSP)
btn3.addEventListener('click', WP)
btn4.addEventListener('click', FP)