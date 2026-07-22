<template>
  <div class="about-page">
    <div class="container">
      <header class="page-header">
        <h1 class="page-header__title">关于前端手记</h1>
      </header>

      <div class="about-content">
        <section class="about-section">
          <h2>关于这个站点</h2>
          <p>
            「前端手记」是我的个人项目展示站，记录从 2019 年入行以来经历过的项目、
            用过的技术栈、以及在每个阶段的成长和思考。
          </p>
          <p>
            从后台管理系统到小程序，从写页面到独立搭建项目——
            这里是我以 Vue 为主线的完整前端成长轨迹。
          </p>
        </section>

        <section class="about-section">
          <h2>关于我</h2>
          <div class="host-card">
            <div class="host-card__avatar">👩‍💻</div>
            <div class="host-card__info">
              <h3>徐肖洁</h3>
              <p class="host-card__role">前端工程师 / 华北电力大学 · 计算机科学与技术</p>
              <p class="host-card__bio">
                7 年前端开发经验，主要技术栈为 Vue（Vuex、Vue-Router、自定义指令、Uniapp），
                也有 React（Hooks、Umi）项目经验。
                熟悉 Element-UI、Vant、Antd 等主流组件库，有丰富的二次封装经验。
                擅长中后台管理系统开发、数据可视化（ECharts/Canvas）、多端适配。
                有独立开发经验，能独立完成从 0 到 1 的项目搭建。
              </p>
            </div>
          </div>
        </section>

        <section class="about-section">
          <h2>工作经历</h2>
          <ul class="timeline">
            <li class="timeline__item timeline__item--current">
              <span class="timeline__date">2023 - 2026</span>
              <span class="timeline__company">教师研修网</span>
              <span class="timeline__desc">负责京学通（App/小程序/Web）、少年宫、13中、小学综素等项目开发，担任小学综素前端主Owner</span>
            </li>
            <li class="timeline__item">
              <span class="timeline__date">2021 - 2023</span>
              <span class="timeline__company">美术宝</span>
              <span class="timeline__desc">负责投诉中心、音乐宝1v1、ART SHOW小程序等项目开发</span>
            </li>
            <li class="timeline__item">
              <span class="timeline__date">2019 - 2021</span>
              <span class="timeline__company">你好现在（北京）科技股份有限公司</span>
              <span class="timeline__desc">负责账户宝、梵星网、缓流科技官网、跨境商户等项目开发</span>
            </li>
          </ul>
        </section>

        <section class="about-section">
          <h2>专业技能</h2>
          <div class="skills">
            <span class="skill-tag">Vue</span>
            <span class="skill-tag">React</span>
            <span class="skill-tag">TypeScript</span>
            <span class="skill-tag">Uniapp</span>
            <span class="skill-tag">Element-UI</span>
            <span class="skill-tag">Antd</span>
            <span class="skill-tag">ECharts</span>
            <span class="skill-tag">Webpack</span>
            <span class="skill-tag">Git</span>
            <span class="skill-tag">CI/CD</span>
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">CSS3</span>
          </div>
        </section>

        <section class="about-section">
          <h2>联系方式</h2>
          <ul class="contact-list">
            <li>掘金：juejin.cn/user/3069492197867197/posts</li>
            <li>CSDN：blog.csdn.net/weixin_46605745</li>
            <li>邮箱：xu15201130897@163.com</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  padding: 40px 0;
}

.page-header {
  margin-bottom: 40px;
}

.page-header__title {
  font-size: 32px;
  font-weight: 800;
}

.about-content {
  max-width: 700px;
}

.about-section {
  margin-bottom: 40px;
}

.about-section h2 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--color-text);
}

.about-section p {
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: 12px;
}

.host-card {
  display: flex;
  gap: 20px;
  padding: 24px;
  background: var(--color-bg-secondary);
  border-radius: var(--radius-md);
}

.host-card__avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--color-primary-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  flex-shrink: 0;
}

.host-card__info h3 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
}

.host-card__role {
  font-size: 13px;
  color: var(--color-primary) !important;
  margin-bottom: 8px !important;
}

.host-card__bio {
  font-size: 14px !important;
}

.contact-list {
  list-style: none;
  padding: 0;
}

.contact-list li {
  font-size: 14px;
  color: var(--color-text-secondary);
  padding: 8px 0;
  border-bottom: 1px solid var(--color-border-light);
}

.timeline {
  list-style: none;
  padding: 0;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: var(--color-border-light);
}

.timeline__item {
  position: relative;
  padding-left: 28px;
  padding-bottom: 24px;
}

.timeline__item::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 6px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-text-secondary);
  border: 2px solid var(--color-bg);
}

.timeline__item--current::before {
  background: var(--color-primary);
  box-shadow: 0 0 0 4px var(--color-primary-bg);
}

.timeline__date {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 4px;
}

.timeline__company {
  display: block;
  font-size: 15px;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 4px;
}

.timeline__desc {
  display: block;
  font-size: 13px;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-tag {
  display: inline-block;
  padding: 6px 16px;
  background: var(--color-primary-bg);
  color: var(--color-primary);
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
}

@media (max-width: 640px) {
  .host-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
