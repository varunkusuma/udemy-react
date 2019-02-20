let goToShowroom = function(brand) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      if (new Date().getDay()) {
        resolve(`${brand} Showroom is open`);
      } else {
        reject(new Error(`${brand} Showroom is closed`));
      }
    }, 1000);
  });
};

let purchaseBike = function() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      if (Math.floor(Math.random() * 10 + 1) % 2 === 1) {
        resolve("Purchase bike");
      } else {
        reject(new Error("Won't purchase bike"));
      }
    }, 1000);
  });
};

let driveToTemple = function() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      if (Math.floor(Math.random() * 10 + 1) % 2 === 1) {
        resolve("Get pooja done for the bike");
      } else {
        reject(new Error("Temple is closed"));
      }
    }, 1000);
  });
};

goToShowroom("KTM")
  .then(
    function(result) {
      console.log(result);
      return purchaseBike();
    },
    function(error) {
      console.log(error.message);
    }
  )
  .then(
    function(result) {
      console.log(result);
      return driveToTemple();
    },
    function(error) {
      console.log(error.message);
    }
  )
  .then(
    function(result) {
      console.log(result);
    },
    function(error) {
      console.log(error.message);
    }
  );

console.log("Received a phone call;");
