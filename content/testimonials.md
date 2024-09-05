---
date: 2024-09-05T18:18:04+07:00
draft: false
description: Sikh Sacred Testimonials
title: Testimonials
---

<div class="mx-auto max-w-7xl px-6 lg:px-8">
  <div class="mx-auto max-w-2xl ">
    <p class="mt-6 text-lg leading-8 text-gray-300">
      Quotes from key figures in the Sikh Music world
    </p>
  </div>
  <div id='contentPlaceholder'></div>
</div>


<script type="text/javascript">

  document.addEventListener('DOMContentLoaded', async ()=> {
    const contentElement = document.getElementById('contentPlaceholder');
    contentElement.innerHTML="<div class='loadingGraphic'>Loading ...</div>";

    const content = await getContent('testimonials');

    const outputHtmlArr = content.map((el)=>{
      return `<div class="mx-auto max-w-2xl">
        <img src="${el.image}"/>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          ${el.content}
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          ${el.name}
        </p>
      </div>`
    });

   contentElement.innerHTML = outputHtmlArr.join("");

  });
  </script>
