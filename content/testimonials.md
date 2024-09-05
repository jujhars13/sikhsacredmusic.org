---
date: 2024-09-05T18:18:04+07:00
draft: false
description: Sikh Sacred Testimonials
title: Testimonials
---

<div class="mx-auto max-w-7xl px-6 lg:px-8">
  <div class="mx-auto max-w-2xl ">
    <p class="mt-6 text-lg leading-8 text-gray-300">
      Endorsements from luminaries in the Sikh Music world
    </p>
  </div>
  <div id='contentPlaceholder'></div>
</div>


<script type="text/javascript">

  document.addEventListener('DOMContentLoaded', async ()=> {
    const contentElement = document.getElementById('contentPlaceholder');
    contentElement.innerHTML="<div class='loadingGraphic'>Loading ...</div>";

    const content = await getJsonContent('testimonials');

    const outputHtmlArr = content.map((el)=>{
      return `
      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
          <img class="w-24 h-24 rounded-full mx-auto" src="/data/${el.image}" alt="${el.name}" width="384" height="512">
        <div class="pt-3 space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              ${el.content}
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              ${el.name}
            </div>
            <div class="text-slate-700 dark:text-slate-500">
              ${el.position}
            </div>
          </figcaption>
        </div>
      </figure>`
    });

   contentElement.innerHTML = outputHtmlArr.join("");

  });
  </script>
