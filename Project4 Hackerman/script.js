async function main1() {
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      let div = document.getElementsByTagName("div")[0];
      div.innerHTML = 'Initilaizing Hack Program (⁠・⁠_⁠・⁠;⁠)';
      resolve(0);
    }, 2000)
  })

  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      let user = prompt("Enter Your User Name (⁠*⁠_⁠*⁠)");
      while (user == null) {
        user = prompt("You don't have choice enter your username 乁⁠(⁠ ⁠•⁠_⁠•⁠ ⁠)⁠ㄏ");
      }

      let div = document.getElementsByTagName("div")[1];
      div.innerHTML = 'Fetching Data of' + ' ' + user + '......';
      resolve(0);
    }, 4000)
  })



  let pro1 = await p1;
  let pro2 = await p2;

  p2.then(() => {
    let p3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        let div = document.getElementsByTagName("div")[2];
        div.innerHTML = 'Connecting to Instagram.....';
      }, 6000)
      resolve(0);
    })
  }).then(() => {
    let p4 = new Promise((resolve, reject) => {
      setTimeout(() => {
        let div1 = document.getElementsByTagName("div")[3];
        div1.innerHTML = 'DONE(⁠;⁠;⁠;⁠・⁠_⁠・⁠)';

        let div = document.getElementsByTagName("div")[4];
        div.innerHTML = '<button class="bg-black-500 hover:bg-Black-700 text-Red font-bold py-2 px-4 rounded" onclick="location.reload()" >Reset</button>';

      }, 16000)
      resolve(0);
    })
  })
  //   .then(() => {
  //   let p5 = ((resolve, reject) => {
  //     setTimeout(() => {
  //     }, 10000)
  //     resolve(0);
  //   })
  // })





  console.log(pro1);
  console.log(pro2);

  return [pro1, pro2];
}

main1();
