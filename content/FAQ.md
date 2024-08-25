---
date: 2023-12-18T18:18:04+07:00
draft: false
description: Sikh Sacred Music Exam FAQ

---

<div class="mx-auto max-w-7xl px-6 lg:px-8">
  <div class="mx-auto max-w-2xl ">
    <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Frequently Asked Questions</h2>
    <p class="mt-6 text-lg leading-8 text-gray-300">
      Answers to frequently asked questions
    </p>
  </div>
  <div id='contentPlaceholder'></div>
</div>

<script type="text/javascript">

  function getContent(pageName='faq'){
    const url=`https://script.google.com/macros/s/AKfycbzUYSHhmuejPw-cGlUTGQp89ihsGH9fX9u6ji4WdEhFXNBsOjm16aiZYMhYiwcSs25H/exec?page=${pageName}`
      return fetch(url)
      .then(response => response.json())
      .then(out => out.data)
      .catch(error => console.error('Error:', error));
  }

  document.addEventListener('DOMContentLoaded', async ()=> {
    const contentElement = document.getElementById('contentPlaceholder');
    contentElement.innerHTML="<div class='loadingGraphic'>Loading ...</div>";

    const content = await getContent('faq');

    const outputHtmlArr = content.map((el)=>{
      return `<div class="mx-auto max-w-2xl">
        <h2 class="text-xl font-bold tracking-tight text-white sm:text-xl">${el.question}</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          ${el.answer}
        </p>
      </div>`
    });

   contentElement.innerHTML = outputHtmlArr.join("");

  });
  </script>
