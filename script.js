function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function popup() {
  await delay(300000);
  window.alert("✅ Your nitro code: discord.gift/E830T9Ji3qD8Rnb3");
}
var audio = new Audio('ping.mp3');
audio.play();
popup();
