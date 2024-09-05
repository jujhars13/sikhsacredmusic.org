---
date: 2023-12-18T18:18:04+07:00
draft: false
description: Sikh Sacred Music Exam FAQ
title: FAQ
---

<div class="mx-auto max-w-7xl px-6 lg:px-8">
  <div class="mx-auto max-w-2xl ">
    <p class="mt-6 text-lg leading-8 text-gray-300">
      Answers to frequently asked questions
    </p>
  </div>
  <div id='contentPlaceholder'></div>
</div>


<div class="flex justify-center">
        <iframe src="https://embeds.beehiiv.com/71a74205-7f50-46ba-8f87-fae9c4c998b3?slim=true"
        data-test-id="beehiiv-embed" width="520" height="52" frameborder="0" scrolling="no"
        style="margin: 0; border-radius: 0px !important; background-color: transparent;"></iframe>
</div>

<script type="text/javascript">

  document.addEventListener('DOMContentLoaded', async ()=> {
    const contentElement = document.getElementById('contentPlaceholder');
    contentElement.innerHTML="<div class='loadingGraphic'>Loading ...</div>";

    const content = await getJsonContent('faq');

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
