---
date: 2024-09-05T18:18:04+07:00
draft: false
description: Testimonials and Media
title: Testimonials and Media
---

<div class="mx-auto max-w-7xl px-6 lg:px-8">
  <div class="mx-auto max-w-2xl ">
    <p class="mt-6 text-lg leading-8 text-gray-300">
      Endorsements, comments and media
    </p>
  </div>
  <div id='testimonialPlaceholder'></div>
</div>

<script type="text/javascript">

  document.addEventListener('DOMContentLoaded', async ()=> {
    const testimonialEl = document.getElementById('testimonialPlaceholder');
    testimonialEl.innerHTML = "<div class='loadingGraphic'>Loading ...</div>";
    testimonialEl.innerHTML = await renderTestimonials();

  });

  async function renderTestimonials(){
    const content = await getJsonContent('testimonials');

    const outputHtmlArr = content.map((el)=>{
      
      let extra=el?.position;
      if (el?.media){
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
                <div style="text-align: center;">
                  <audio controls >
                    <source src="${el.media}" type="audio/mpeg">
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            </figcaption>
          </div>
        </figure>`
      }
      if (el?.link){
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
              <p>
                <a href="${el.link}">Link to site</a>
              </p>
              <div class="text-sky-500 dark:text-sky-400">
                ${el.name}
              </div>
            </figcaption>
          </div>
        </figure>`
      }
     
    });

    return outputHtmlArr.join("");

  }

  </script>
