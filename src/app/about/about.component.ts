import { Component } from '@angular/core';

@Component({
  template: `
    <section>
      <article class="podcast">
        <h1>About the podcast</h1>
      </article>

      <p>
        The Programming Podcast with Minko Gechev is a weekly show that aims to
        make us better software engineers! With each new episode, you'll get
        exposed to a new idea in a brief and accessible way. Listening to the
        show:
      </p>

      <div class="list">
        <ul>
          <li>
            Will help you understand where you can apply the individual concepts
            for more elegant and efficient solutions.
          </li>
          <li>
            Give you an intuition how complex algorithms and patterns work.
          </li>
          <li>
            Help you land your next engineering job by expanding your knowledge.
          </li>
          <li>
            Spark your interest for further reading so you can dig deeper and
            get more detailed understanding
          </li>
        </ul>
      </div>

      <p>
        Having a computer science degree is not a requirement for getting value
        from "The Programming Podcast." If you have one, you'll finally
        understand how you can use all the math you've studied.
      </p>

      <h3>About the host</h3>

      <p>
        <img class="host-photo" src="/assets/minko-gechev.jpg" />
        Minko Gechev is a senior engineer at Google, where he develops tools for
        the framework Angular. Before joining Google, he was a technical
        co-founder and the CTO of the company Rhyme.com, which in 2018 got
        acquired by Coursera.
      </p>

      <p>
        The President of the Republic of Bulgaria awarded Minko for his software
        projects with a high social impact and with a diploma for contributions
        to the areas of computer science and software engineering.
      </p>

      <p>
        In 2019 Forbes Bulgaria included Minko Gechev in their selection "30
        under 30" in category Science and Technology.
      </p>
    </section>
  `,
  styles: [
    `
      p,
      h3,
      div.list {
        font-size: 1.2em;
        width: 60%;
        margin: auto;
        max-width: 1200px;
        min-width: 400px;
      }

      p,
      h3 {
        padding-bottom: 1px;
        margin-top: 20px;
      }

      ul {
        margin-left: 20px;
      }

      article {
        color: #eee;
        background-color: rgba(0, 0, 0, 0.6);
        overflow: hidden;
        position: relative;
        height: 210px;
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
      }

      article.podcast::after {
        content: '';
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        background-repeat: no-repeat;
        background-size: 100%;
        z-index: -1;
      }

      article.podcast::after {
        background-image: url(assets/podcast.jpg);
      }

      h1 {
        font-size: 2.5em;
        font-weight: 300;
      }

      h3 {
        margin-top: 30px;
        font-size: 1.5em;
        font-weight: 300;
      }

      .host-photo {
        width: 150px;
        float: left;
        margin-right: 20px;
      }
    `
  ]
})
export class AboutComponent {}
