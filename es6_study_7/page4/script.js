const call = (callback) => {
  for (var i = 0; i < 100; i++) {
 callback("Ninja Ken", 14);
  }
  callback("Ninja Ken", 14);
};

// Tambahkan sebuah function yang menerima dua argument didalam argument call
call((name,age) => {
  console.log(`${name} berusia ${age} tahun.`);
});
