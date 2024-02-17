<template>
  <footer class="footer">
    <div class="footer-line"></div>
    <div class="footer-sitemap">
      <section>
        <a href="https://zeoowl.com/" class="footer-category">ZeoOwl</a><br>
        <a href="https://zeoowl.com/about" class="footer-item">About</a><br>
        <a href="/sitemap.xml" target="_blank" class="footer-item">Sitemap</a><br>
      </section>
      <section>
        <a href="https://app.zeoowl.com/" class="footer-category">Apps</a><br>
        <a href="https://app.zeoowl.com/live-wallpaper/aquarium" class="footer-item">Aquarium LWP</a><br>
        <a href="https://app.zeoowl.com/chess-clock" class="footer-item">Chess Clock</a><br>
        <a href="https://app.zeoowl.com/sudoku" class="footer-item">Sudoku</a><br>
        <a href="https://app.zeoowl.com/live-wallpaper/haelwic-village" class="footer-item">Haelwic Village LWP</a><br>
      </section>
      <section>
        <a href="https://policies.zeoowl.com/" class="footer-category">Privacy & Terms</a><br>
        <a href="https://policies.zeoowl.com/privacy" class="footer-item">Privacy Policy</a><br>
        <a href="https://policies.zeoowl.com/terms" class="footer-item">Terms of Service</a><br>
        <a href="https://policies.zeoowl.com/technologies" class="footer-item">Technologies</a><br>
        <a href="https://policies.zeoowl.com/faq" class="footer-item">FAQ</a><br>
      </section>
    </div>
    <div class="footer-bottom">
      <p>&copy; <span id="copyright-year">2024</span> ZeoOwl. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  mounted() {
    const copyrightYear = document.getElementById('copyright-year');
    const currentYear = new Date().getFullYear();
    copyrightYear.textContent = currentYear;
  },
};
</script>

<style scoped>
.footer-line {
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
  text-rendering: optimizeLegibility;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  color: inherit;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
  margin: 0 0 36px;
  padding: 36px 0 0;
  width: 100%;
  border: 0 #E8EAEDFF;
  border-bottom: 1px solid #E8EAEDFF;
}

.footer {
  color: #333;
  bottom: 0;
  margin-left: 24px;
  margin-right: 24px;
  padding-bottom: 16px;
}

@media screen and (min-width: 600px) {
  .footer {
    margin-left: 48px;
    margin-right: 48px;
  }
}

@media screen and (min-width: 840px) {
  .footer {
    padding-bottom: 16px;
  }
}

.footer a, a:visited {
  text-decoration: none;
}

.footer p {
  fill: rgb(95,99,104);
  stop-color: rgb(95,99,104);
  color: rgb(95,99,104);
  font-size: .75rem;
  line-height: 48px;
  margin-block-start: 0;
  margin-block-end: 0;
}

.footer-sitemap {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 24px;
  border: 0;
  color: inherit;
  font: inherit;
  font-size: 100%;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  box-sizing: border-box;
}

@media screen and (min-width: 840px) {
  .footer-sitemap {
    column-gap: 16px;
    grid-template-columns: 244px auto;
  }
}

.footer-sitemap section {
  display: block;
  border: 0;
  color: inherit;
  font: inherit;
  font-size: 100%;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}

.footer-category {
  color: rgb(95, 99, 104);
  line-height: 32px;
  font-size: .875rem;
  letter-spacing: .0178571429em;
  font-weight: 500;
  stop-color: rgb(95, 99, 104);
}

.footer-item {
  color: rgb(95, 99, 104);
  line-height: 32px;
  font-size: .875rem;
  letter-spacing: .0178571429em;
  font-weight: 400;
  fill: rgb(95, 99, 104);
  stop-color: rgb(95, 99, 104);
}

.footer-bottom {
  text-align: center;
}
</style>